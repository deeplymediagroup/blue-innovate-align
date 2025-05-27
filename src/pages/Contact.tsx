
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Send, MessageSquare, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    businessType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting form with data:", formData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log("Email sent successfully:", data);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        businessType: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookDemo = () => {
    window.open('https://calendly.com/brandon-mindsetdrm/30min', '_blank');
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Ready to protect and monetize your content? Let's discuss how MindsetDRM can help your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          type="text"
                          value={formData.role}
                          onChange={(e) => handleInputChange("role", e.target.value)}
                          className="mt-1"
                          placeholder="CEO, Content Manager, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual-creator">Individual Creator</SelectItem>
                          <SelectItem value="media-company">Media Company</SelectItem>
                          <SelectItem value="publisher">Publisher</SelectItem>
                          <SelectItem value="educational">Educational Institution</SelectItem>
                          <SelectItem value="entertainment">Entertainment Company</SelectItem>
                          <SelectItem value="podcast-network">Podcast Network</SelectItem>
                          <SelectItem value="music-label">Music Label</SelectItem>
                          <SelectItem value="animation-studio">Animation Studio</SelectItem>
                          <SelectItem value="sports-league">Sports League</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your content protection needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isSubmitting || submitted}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : submitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Email</p>
                        <p className="text-foreground/70">licensing@mindsetdrm.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Response Time</p>
                        <p className="text-foreground/70">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose MindsetDRM?</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Industry-leading content protection technology</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated account management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Real-time analytics and reporting</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom solutions for your needs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-bold mb-2 text-blue-800">Schedule a Demo</h3>
                  <p className="text-blue-700 text-sm mb-4">
                    See MindsetDRM in action with a personalized demonstration of our platform.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-200"
                    onClick={handleBookDemo}
                  >
                    Book Demo Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
