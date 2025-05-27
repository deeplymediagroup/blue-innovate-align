
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  businessType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Received contact form submission:", formData);

    // Create email subject with organization and business type
    const emailSubject = `${formData.company || "New Contact"} - ${formData.businessType || "Contact Form"}`;

    // Create email content with all form information
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      
      <p><strong>Full Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
      <p><strong>Your Role:</strong> ${formData.role || "Not provided"}</p>
      <p><strong>Business Type:</strong> ${formData.businessType || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This email was sent from the MindsetDRM contact form.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "MindsetDRM Contact <onboarding@resend.dev>",
      to: ["licensing@mindsetdrm.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
