import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: "Valid email required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Insert email into waitlist table
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ email });

    if (dbError) {
      console.error("Database error:", dbError);
      
      // Handle duplicate email case
      if (dbError.code === '23505') {
        return new Response(JSON.stringify({ error: "Email already registered" }), {
          status: 409,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      throw dbError;
    }

    // Send notification email to hello@flipperlabs.app
    const emailResponse = await resend.emails.send({
      from: "Waitlist <hello@message.flipperlabs.app>",
      to: ["hello@flipperlabs.app"],
      subject: "New Waitlist Signup - Virtual Product Team",
      html: `
        <h2>New Waitlist Signup</h2>
        <p>Someone just joined the waitlist for your Virtual Product Team app!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully joined waitlist" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);