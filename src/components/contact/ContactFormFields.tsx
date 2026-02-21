import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SERVICES_OPTIONS, CONTACT_INFO } from "@/lib/constants";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  service: z
    .string()
    .min(1, { message: "Please select a service" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactFormFields = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
  
    const form = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      },
    });
  
    const onSubmit = (data: ContactFormData) => {
      setIsSubmitting(true);
      
      const subject = encodeURIComponent(`Inquiry: ${data.service} - ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "Not provided"}\nService Interest: ${data.service}\n\nMessage:\n${data.message}`
      );
      
      // Use the email from constants
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Email client opened!",
          description: "Please send the email from your email application.",
        });
        form.reset();
      }, 1000);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Full Name" {...field} />
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
                        <Input type="email" placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Service Interested In</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {SERVICES_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>

            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Tell us more</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Tell us more about your project"
                        className="min-h-[120px]"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
            >
                {isSubmitting ? (
                "Sending..."
                ) : (
                <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                </>
                )}
            </Button>
            </form>
        </Form>
    );
};