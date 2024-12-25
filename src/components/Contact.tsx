import { useState } from "react";
import { Mail, Phone, Linkedin, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#60A5FA]">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#60A5FA]">Get in Touch</h3>
          <p className="text-gray-300">
            I'm always interested in hearing about new opportunities and projects.
            Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <Mail className="mr-3" size={20} />
              <span>syogeshnk@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="mr-3" size={20} />
              <span>+91 9969316079</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/yogeshkotkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-[#60A5FA]"
            >
              <Linkedin className="mr-3" size={20} />
              <span>linkedin.com/in/yogeshkotkar</span>
            </a>
            <a 
              href="https://www.youtube.com/@itverse1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-[#60A5FA]"
            >
              <Youtube className="mr-3" size={20} />
              <span>youtube.com/@itverse1</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#60A5FA] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#60A5FA] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#60A5FA] focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#60A5FA] focus:outline-none h-32"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full p-3 rounded-lg bg-[#60A5FA] text-[#0A192F] font-semibold hover:bg-[#60A5FA]/90 transition-colors disabled:opacity-50"
          >
            <Send className="mr-2" size={20} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
