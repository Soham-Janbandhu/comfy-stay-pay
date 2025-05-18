
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Contact } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <MainLayout>
      <div className="hotel-container section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you might have about our accommodations, services, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Booking Inquiry" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how we can help you..." 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-hotel-primary hover:bg-hotel-primary/90">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          <div className="bg-slate-50 rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <Contact className="h-6 w-6" />
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Luxury Avenue<br />
                    Paradise City, PC 12345
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@comfystay.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Front Desk: 24/7<br />
                    Restaurant: 6:30 AM - 10:30 PM<br />
                    Spa: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343015!2d-74.00425872722822!3d40.74076407138458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1717273668977!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ComfyStay Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are your check-in and check-out times?",
                answer: "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, we offer airport transfers for an additional fee. Please contact our concierge team at least 24 hours in advance to arrange this service."
              },
              {
                question: "Is breakfast included in the room rate?",
                answer: "Breakfast is included in select room packages. Please check your reservation details or contact us to confirm if your booking includes breakfast."
              },
              {
                question: "Do you have parking facilities?",
                answer: "Yes, we offer both self-parking and valet parking options for guests. Valet parking is available at an additional charge per day."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
