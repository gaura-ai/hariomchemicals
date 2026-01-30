import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
}

// Rule-based NLP logic
const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // Keyword matching logic
  if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote") || lowerInput.includes("buy")) {
    return "For pricing and bulk orders, please contact our sales team directly at +91 9412145106 or use the 'Get Quote' button on our website. We offer competitive rates for wholesale inquiries.";
  }

  if (lowerInput.includes("essential oil") || lowerInput.includes("lavender") || lowerInput.includes("rose") || lowerInput.includes("products")) {
    return "We offer a wide range of premium essential oils including Lavender, Rose, Peppermint, and more. All our oils are 100% natural and therapeutic grade. You can view our full catalog in the 'Products' section.";
  }

  if (lowerInput.includes("menthol") || lowerInput.includes("crystal") || lowerInput.includes("flake") || lowerInput.includes("mint")) {
    return "Our Menthol products are a specialty! We supply high-purity Menthol Crystals (Bold, Medium), Menthol Flakes, and Peppermint Oil. These are ISO 9001:2015 and GMP certified.";
  }

  if (lowerInput.includes("location") || lowerInput.includes("address") || lowerInput.includes("where")) {
    return "We are located at Hapurwala Bagh, Sambhal Gate, Chandausi, Uttar Pradesh - 244412, India. Visit us or contact us for directions.";
  }

  if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email")) {
    return "You can reach us at:\nPhone: +91 9412145106\nEmail: hariomchemicalschd@gmail.com\nOr via WhatsApp using the link on our site.";
  }

  if (lowerInput.includes("certif") || lowerInput.includes("iso") || lowerInput.includes("gmp") || lowerInput.includes("quality")) {
    return "Quality is our priority. Hariom Chemicals is ISO 9001:2015 and GMP Certified, ensuring consistent product excellence and purity.";
  }

  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return "Hello! Welcome to Hariom Chemicals. I can help you with product information, contact details, or general inquiries. What are you looking for today?";
  }

  return "Thank you for your inquiry. To best assist you with this specific request, please contact our support team directly via WhatsApp or the contact form below. I can help with general product and company information here.";
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content: "Hello! Welcome to Hariom Chemicals. I'm your virtual assistant. Ask me about our essential oils, menthol products, or how to contact us!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate network delay for natural feel
    setTimeout(() => {
      const responseText = generateResponse(newMessage.content);

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "model", content: responseText },
      ]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden border border-green-100"
            style={{
              position: "fixed",
              bottom: "6rem",
              right: "1.5rem",
              zIndex: 9999
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <Bot size={24} className="text-green-100" />
                <div>
                  <h3 className="font-semibold text-lg">Hariom Assistant</h3>
                  <p className="text-xs text-green-100 opacity-90">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4 bg-gray-50">
              <div className="space-y-4 pr-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.role === "user"
                          ? "bg-green-100 text-green-600"
                          : "bg-green-600 text-white"
                        }`}
                    >
                      {message.role === "user" ? <Sparkles size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm leading-relaxed ${message.role === "user"
                          ? "bg-white text-gray-800 border border-green-100 rounded-tr-none"
                          : "bg-green-50 text-gray-800 border border-green-100 rounded-tl-none"
                        }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs ml-10">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                      <span
                        className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      ></span>
                    </div>
                    <span>Thinking...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about oils, prices, location..."
                  className="flex-1 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-full"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-600/20 rounded-full w-10 h-10 p-0 flex items-center justify-center"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-600 to-green-500 rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center text-white z-[9999] hover:shadow-xl transition-shadow`}
        style={{ zIndex: 9999 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
        )}
      </motion.button>
    </>
  );
}
