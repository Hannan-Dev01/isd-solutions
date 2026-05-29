import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { useScrollAnimation } from "../lib/scroll-animations";
import emailjs from '@emailjs/browser';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Book a Free Consultation | ISD Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact ISD Solutions for ERP implementation, AI solutions, custom software, FBR digital invoicing, reporting dashboards, and digital transformation. Request a consultation today."
      );
    }
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const slideInLeft = "opacity-0 -translate-x-8 transition-all duration-700";
  const slideInLeftVisible = "opacity-100 translate-x-0";

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || "Contact Form Submission",
        message: data.message,
        to_email: "info@isdsolutions.com"
      };

      // Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log("Email sent successfully:", result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will reach back to you on your email soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: ["1st Floor Potohar Plaza - Blue Area", "Lahore, Pakistan"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: ["+92 300 807 8456"]
    },
    {
      icon: Mail,
      title: "Email Address",
      content: ["info@isdsolutions.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef as any}
            className={`text-center mb-16 ${fadeInUp} ${headerVisible ? fadeInUpVisible : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Your Next <span className="text-gradient-red">Digital Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need ERP implementation, AI solutions, custom software,
              reporting systems, compliance automation, or digital transformation
              services, our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div 
              ref={formRef as any}
              className={`${slideInLeft} ${formVisible ? slideInLeftVisible : ''}`}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input
                          id="name"
                          {...form.register("name")}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input
                        id="subject"
                        {...form.register("subject")}
                        className="mt-1"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full btn-primary"
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div 
              ref={infoRef as any}
              className={`${fadeInUp} ${infoVisible ? fadeInUpVisible : ''}`}
            >
              <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="text-primary-red text-xl mt-1">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary-red transition-colors duration-300"
                      data-testid={`link-${social.label.toLowerCase()}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
