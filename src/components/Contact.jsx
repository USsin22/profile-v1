import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log("Form submitted:", formState);
    alert("Message sent (Demo Mode)!");
    setFormState({ email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Info Section */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-6">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            I'm currently looking for internship opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Me</p>
                <a href="mailto:contact@yassin.dev" className="text-white font-medium hover:text-primary transition-colors">contact@yassin.dev</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Morocco</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
               <Github size={24} />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary border border-primary flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
               <Linkedin size={24} />
             </a>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="glass p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                placeholder="name@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-violet-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
