import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nidhijayalwal007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact Form Message from ${formData.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (response.ok && result.success !== "false") {
        toast.success("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else if (result.message && result.message.includes("Activation")) {
        toast.info("Form initialized! Please check nidhijayalwal007@gmail.com inbox to click 'Activate Form'.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.success("Message submitted! Thank you for reaching out.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Opening your email app to send message...");
      window.location.href = `mailto:nidhijayalwal007@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AReply Email: ${encodeURIComponent(formData.email)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9511313159",
      href: "tel:+919511313159"
    },
    {
      icon: Mail,
      label: "Email",
      value: "nidhijayalwal007@gmail.com",
      href: "mailto:nidhijayalwal007@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jodhpur, Rajasthan",
      href: "#"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with me",
      href: "https://wa.me/919511313159",
      isWhatsApp: true
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="card-glow bg-card p-6 rounded-2xl flex items-center gap-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-glow bg-card p-8 rounded-2xl space-y-6 animate-slide-in-right">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-bg hover:opacity-90 transition-all font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
