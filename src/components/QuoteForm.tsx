import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "pergola",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("quotes").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Quote Request Received",
        description: "We'll get back to you with a quote soon!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "pergola",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting quote:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-estate-100" id="quote">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display text-estate-800 mb-6 text-center">
          Get a Free Quote
        </h2>
        <p className="text-estate-500 mb-8 text-center">
          Fill out the form below and we'll get back to you with a customized quote.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-2">
              Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-estate-700 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-estate-700 mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              required
            >
              <option value="pergola">Pergola Installation</option>
              <option value="winter-closure">Winter Balcony Closure</option>
              <option value="both">Both Services</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-2">
              Project Details
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Please describe your project (size, location, specific requirements, etc.)"
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;