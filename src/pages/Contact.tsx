
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userType: z.string().min(1, { message: "Please select who you are" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  fullName: z.string().min(1, { message: "Please enter your name" }),
  channelLink: z.string().optional(),
  message: z.string().optional(),
});

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "",
      subject: "",
      email: "",
      fullName: "",
      channelLink: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll be in touch with you shortly.",
    });
    form.reset();
    setStep(1);
  };

  const handleUserTypeChange = (value: string) => {
    form.setValue("userType", value);
    if (value) {
      setStep(2);
    }
  };

  const handleSubjectChange = (value: string) => {
    form.setValue("subject", value);
    if (value) {
      setStep(3);
    }
  };

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Send a message</h1>
              <p className="text-xl text-foreground/70 mb-6">Received a claim? Have a question or a comment?</p>
              <p className="text-xl text-foreground/70">
                Interested in working with MindsetDRM? 
              </p>
              <p className="text-xl text-foreground/70 mt-6">
                Complete the form below, and we'll be in touch!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">Who Are You?</FormLabel>
                          <Select
                            onValueChange={handleUserTypeChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select who you are" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="creator">Creator</SelectItem>
                              <SelectItem value="podcast">Podcast</SelectItem>
                              <SelectItem value="media">Media Company</SelectItem>
                              <SelectItem value="agency">Agency</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {step >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Subject</FormLabel>
                              <Select
                                onValueChange={handleSubjectChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="work">Work With Us</SelectItem>
                                  <SelectItem value="claim">Received a Claim</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {step >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Email Address*</FormLabel>
                              <FormControl>
                                <Input placeholder="Email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Full Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="channelLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Channel Link</FormLabel>
                              <FormControl>
                                <Input placeholder="Link to Your Channel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we assist?" 
                                  className="min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-between items-center pt-4">
                          <p className="text-sm text-gray-500">Note: Only items marked with * are required</p>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            Submit
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
