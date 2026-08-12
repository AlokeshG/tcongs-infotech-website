import { useState } from "react";
import { X, Send } from "lucide-react";
import tcongsLogo from "../assets/tcongs-logo.png";
import "./ChatAssistant.css";

function ChatAssistant({ isOpen, setIsOpen }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Contact form state
  const [contactMode, setContactMode] = useState(false);
  const [contactStep, setContactStep] = useState(null);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to Tcongs Infotech. How can we help you today?",
    },
    {
      sender: "bot",
      text: "You can ask about our services, or type 'Contact Details' if you would like our team to contact you.",
    },
  ]);

  // --------------------------------------------------
  // ADD BOT MESSAGE
  // --------------------------------------------------

  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text,
      },
    ]);
  };

  // --------------------------------------------------
  // SEND CONTACT DETAILS TO API
  // --------------------------------------------------

  const sendContactDetails = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry.");
      }

      addBotMessage(
        "Thank you! Your details have been sent successfully to our team. We will contact you soon."
      );

      // Reset contact form
      setContactMode(false);
      setContactStep(null);

      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact API Error:", error);

      addBotMessage(
        "Sorry, we couldn't send your details right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // START CONTACT FLOW
  // --------------------------------------------------

  const startContactFlow = () => {
    setContactMode(true);
    setContactStep("name");

    addBotMessage("Sure! Please enter your name.");
  };

  // --------------------------------------------------
  // HANDLE CONTACT FLOW
  // --------------------------------------------------

  const handleContactMessage = async (userMessage) => {
    // STEP 1 - NAME
    if (contactStep === "name") {
      setContactData((prev) => ({
        ...prev,
        name: userMessage,
      }));

      setContactStep("email");

      addBotMessage("Thanks! Now please enter your email address.");

      return;
    }

    // STEP 2 - EMAIL
    if (contactStep === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(userMessage)) {
        addBotMessage(
          "Please enter a valid email address, for example: example@gmail.com"
        );
        return;
      }

      setContactData((prev) => ({
        ...prev,
        email: userMessage,
      }));

      setContactStep("message");

      addBotMessage(
        "Great! Finally, please tell us how we can help you."
      );

      return;
    }

    // STEP 3 - MESSAGE
    if (contactStep === "message") {
      const updatedData = {
        ...contactData,
        message: userMessage,
      };

      setContactData(updatedData);
      setLoading(true);

      addBotMessage("Thank you. Sending your details to our team...");

      await sendContactDetails(updatedData);
    }
  };

  // --------------------------------------------------
  // NORMAL CHAT
  // --------------------------------------------------

  const handleNormalMessage = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Contact request
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("contact details") ||
      lowerMessage.includes("talk to someone") ||
      lowerMessage.includes("call me") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("enquiry")
    ) {
      startContactFlow();
      return;
    }

    // Services
    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("services") ||
      lowerMessage.includes("what do you do")
    ) {
      addBotMessage(
        "Tcongs Infotech provides custom software development, AI solutions, web development, cloud solutions and technology services."
      );
      return;
    }

    // About
    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("company") ||
      lowerMessage.includes("tcongs")
    ) {
      addBotMessage(
        "Tcongs Infotech is a technology company focused on building software and digital solutions that fit business needs."
      );
      return;
    }

    // Greeting
    if (
      lowerMessage === "hi" ||
      lowerMessage === "hello" ||
      lowerMessage === "hey"
    ) {
      addBotMessage(
        "Hello! 👋 How can I help you? You can ask about our services or type 'Contact Details' to get in touch with our team."
      );
      return;
    }

    // Default response
    addBotMessage(
      "Thanks for your message! I can help with information about Tcongs Infotech and our services. If you would like our team to contact you, type 'Contact Details'."
    );
  };

  // --------------------------------------------------
  // SEND MESSAGE
  // --------------------------------------------------

  const sendMessage = async () => {
    if (!message.trim() || loading) {
      return;
    }

    const userMessage = message.trim();

    // Display user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    // Clear input
    setMessage("");

    // Contact flow
    if (contactMode) {
      await handleContactMessage(userMessage);
      return;
    }

    // Normal chatbot flow
    handleNormalMessage(userMessage);
  };

  // --------------------------------------------------
  // ENTER KEY
  // --------------------------------------------------

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Don't show when closed
  if (!isOpen) {
    return null;
  }

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <div className="chat-window">

      {/* HEADER */}
      <div className="chat-header">

        <div className="chat-brand">

          <img
            src={tcongsLogo}
            alt="Tcongs Infotech"
            className="chat-logo"
          />

          <div>
            <h3>Tcongs Assistant</h3>

            <div className="online-status">
              <span></span>
              Online
            </div>
          </div>

        </div>

        <button
          type="button"
          className="chat-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
        >
          <X size={20} />
        </button>

      </div>

      {/* MESSAGES */}
      <div className="chat-messages">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-row ${msg.sender}`}
          >
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="message-row bot">
            <div className="message-bubble typing">
              Sending...
            </div>
          </div>
        )}

      </div>

      {/* INPUT */}
      <div className="chat-input-area">

        <input
          type="text"
          placeholder={
            contactStep === "name"
              ? "Enter your name..."
              : contactStep === "email"
              ? "Enter your email..."
              : contactStep === "message"
              ? "Tell us how we can help..."
              : "Ask anything..."
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button
          type="button"
          className="send-button"
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}

export default ChatAssistant;