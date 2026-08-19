"use client";

import {
  useState,
  useRef,
  useLayoutEffect,
} from "react";

import {
  X,
  Send,
} from "lucide-react";

import tcongsLogo from "../assets/tcongs-logo.png";

import "./ChatAssistant.css";


function ChatAssistant({
  chatOpen,
  setChatOpen,
}) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Contact flow
  const [contactMode, setContactMode] = useState(false);
  const [contactStep, setContactStep] = useState(null);

  // Contact data
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Message container
  const messagesRef = useRef(null);

  // Store current scroll position
  const scrollPositionRef = useRef(0);


  /* =====================================================
     INITIAL MESSAGES
  ===================================================== */

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hi! Welcome to Tcongs Infotech. 👋 How can I help you today?",
    },
    {
      sender: "bot",
      text:
        "You can ask me about our services, websites, custom software, AI solutions, cloud solutions, or contacting our team.",
    },
  ]);


  /* =====================================================
     REMEMBER CURRENT SCROLL
  ===================================================== */

  const rememberScrollPosition = () => {

    if (!messagesRef.current) {
      return;
    }

    scrollPositionRef.current =
      messagesRef.current.scrollTop;
  };


  /* =====================================================
     RESTORE SCROLL POSITION
  ===================================================== */

  useLayoutEffect(() => {

    if (!messagesRef.current) {
      return;
    }

    messagesRef.current.scrollTop =
      scrollPositionRef.current;

  }, [messages, loading]);


  /* =====================================================
     ADD BOT MESSAGE
  ===================================================== */

  const addBotMessage = (text) => {

    rememberScrollPosition();

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text,
      },
    ]);
  };


  /* =====================================================
     CONTACT API
  ===================================================== */

  const sendContactDetails = async (data) => {

    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
          }),
        }
      );


      const result = await response.json();


      if (!response.ok) {
        throw new Error(
          result.error ||
          "Failed to send enquiry."
        );
      }


      addBotMessage(
        "Thank you! Your details have been sent successfully to our team. We will contact you soon."
      );


      setContactMode(false);
      setContactStep(null);


      setContactData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error(
        "Contact API Error:",
        error
      );


      addBotMessage(
        "Sorry, we couldn't send your details right now. Please try again later or contact our team directly."
      );

    } finally {

      setLoading(false);

    }
  };


  /* =====================================================
     START CONTACT FLOW
  ===================================================== */

  const startContactFlow = () => {

    setContactMode(true);

    setContactStep("name");

    addBotMessage(
      "Sure! I can help you get in touch with our team. Please enter your name."
    );
  };


  /* =====================================================
     CONTACT FLOW
  ===================================================== */

  const handleContactMessage = async (
    userMessage
  ) => {

    /* NAME */

    if (contactStep === "name") {

      setContactData((prev) => ({
        ...prev,
        name: userMessage,
      }));

      setContactStep("email");

      addBotMessage(
        "Thanks! Now please enter your email address."
      );

      return;
    }


    /* EMAIL */

    if (contactStep === "email") {

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailRegex.test(userMessage)) {

        addBotMessage(
          "Please enter a valid email address, for example: example@gmail.com."
        );

        return;
      }


      setContactData((prev) => ({
        ...prev,
        email: userMessage,
      }));


      setContactStep("message");


      addBotMessage(
        "Great! Finally, please tell us about your project or how our team can help you."
      );

      return;
    }


    /* MESSAGE */

    if (contactStep === "message") {

      const updatedData = {
        ...contactData,
        message: userMessage,
      };


      setContactData(updatedData);

      setLoading(true);


      addBotMessage(
        "Thank you. I'm sending your details to our team..."
      );


      await sendContactDetails(
        updatedData
      );
    }
  };


  /* =====================================================
     NORMAL CHAT
  ===================================================== */

  const handleNormalMessage = (
    userMessage
  ) => {

    const lowerMessage =
      userMessage
        .toLowerCase()
        .trim();


    /* =================================================
       ANGRY / FRUSTRATED MESSAGE
    ================================================= */

    const frustrationWords = [
      "annoyed",
      "angry",
      "frustrated",
      "frustrating",
      "irritated",
      "irritating",
      "upset",
      "useless",
      "stupid",
      "bad",
      "worst",
      "hate",
      "waste",
      "confused",
      "confusing",
      "problem",
      "issue",
      "not working",
      "doesn't work",
      "dont work",
      "don't work",
      "wrong",
    ];


    const isFrustrated =
      frustrationWords.some(
        (word) =>
          lowerMessage.includes(word)
      );


    if (isFrustrated) {

      addBotMessage(
        "I'm sorry this has been frustrating. I want to help you properly. Please tell me what went wrong or what you are trying to achieve, and I'll guide you step by step."
      );

      return;
    }


    /* =================================================
       CONTACT
    ================================================= */

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("talk to someone") ||
      lowerMessage.includes("call me") ||
      lowerMessage.includes("enquiry") ||
      lowerMessage.includes("enquire") ||
      lowerMessage.includes("reach someone")
    ) {

      startContactFlow();

      return;
    }


    /* =================================================
       SERVICES
    ================================================= */

    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("services") ||
      lowerMessage.includes("what do you do") ||
      lowerMessage.includes("what can you do") ||
      lowerMessage.includes("solutions")
    ) {

      addBotMessage(
        "Tcongs Infotech provides Web Development, Mobile App Development, Custom Software Development, AI & Machine Learning, Cloud & DevOps, Digital Marketing, and other digital technology solutions."
      );

      return;
    }


    /* =================================================
       WEB DEVELOPMENT
    ================================================= */

    if (
      lowerMessage.includes("website") ||
      lowerMessage.includes("web development") ||
      lowerMessage.includes("web design")
    ) {

      addBotMessage(
        "We build responsive websites and web applications designed around your business goals, including corporate websites, business platforms, and custom web solutions."
      );

      return;
    }


    /* =================================================
       MOBILE APP
    ================================================= */

    if (
      lowerMessage.includes("mobile app") ||
      lowerMessage.includes("android") ||
      lowerMessage.includes("ios") ||
      lowerMessage.includes("application")
    ) {

      addBotMessage(
        "We develop mobile applications for businesses, focusing on clean user experiences, reliable performance, and solutions tailored to your requirements."
      );

      return;
    }


    /* =================================================
       AI
    ================================================= */

    if (
      lowerMessage.includes(" ai") ||
      lowerMessage.startsWith("ai") ||
      lowerMessage.includes("artificial intelligence") ||
      lowerMessage.includes("machine learning")
    ) {

      addBotMessage(
        "Our AI and Machine Learning solutions can help businesses automate processes, analyze information, improve decision-making, and build intelligent digital products."
      );

      return;
    }


    /* =================================================
       SOFTWARE
    ================================================= */

    if (
      lowerMessage.includes("software") ||
      lowerMessage.includes("custom software")
    ) {

      addBotMessage(
        "We develop custom software tailored to your business workflow and requirements, helping reduce manual work, improve productivity, and support business growth."
      );

      return;
    }


    /* =================================================
       CLOUD
    ================================================= */

    if (
      lowerMessage.includes("cloud") ||
      lowerMessage.includes("devops")
    ) {

      addBotMessage(
        "We provide Cloud & DevOps solutions focused on reliable deployments, scalable infrastructure, and efficient application operations."
      );

      return;
    }


    /* =================================================
       DIGITAL MARKETING
    ================================================= */

    if (
      lowerMessage.includes("marketing") ||
      lowerMessage.includes("digital marketing")
    ) {

      addBotMessage(
        "Our digital solutions can help businesses strengthen their online presence and reach customers through effective digital strategies."
      );

      return;
    }


    /* =================================================
       ABOUT TCONGS
    ================================================= */

    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("company") ||
      lowerMessage.includes("tcongs") ||
      lowerMessage.includes("who are you")
    ) {

      addBotMessage(
        "Tcongs Infotech is a technology company focused on building reliable digital solutions, custom software, websites, AI solutions, and technology platforms for growing businesses."
      );

      return;
    }


    /* =================================================
       GREETING
    ================================================= */

    if (
      lowerMessage === "hi" ||
      lowerMessage === "hello" ||
      lowerMessage === "hey" ||
      lowerMessage === "hii" ||
      lowerMessage === "good morning" ||
      lowerMessage === "good afternoon" ||
      lowerMessage === "good evening"
    ) {

      addBotMessage(
        "Hello! 👋 Welcome to Tcongs Infotech. I can help you learn about our services, technology solutions, or connect you with our team."
      );

      return;
    }


    /* =================================================
       THANK YOU
    ================================================= */

    if (
      lowerMessage.includes("thank you") ||
      lowerMessage === "thanks" ||
      lowerMessage === "thank"
    ) {

      addBotMessage(
        "You're welcome! 😊 If you need anything else, I'm here to help."
      );

      return;
    }


    /* =================================================
       UNKNOWN MESSAGE
    ================================================= */

    addBotMessage(
      "I want to make sure I give you a useful answer. You can ask me about our services, Web Development, Mobile Apps, Custom Software, AI & Machine Learning, Cloud & DevOps, Digital Marketing, or contacting the Tcongs Infotech team."
    );
  };


  /* =====================================================
     SEND MESSAGE
  ===================================================== */

  const sendMessage = async () => {

    if (
      !message.trim() ||
      loading
    ) {
      return;
    }


    const userMessage =
      message.trim();


    // Remember exactly where the user was
    rememberScrollPosition();


    // Add user message
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

      await handleContactMessage(
        userMessage
      );

      return;
    }


    // Normal chatbot
    handleNormalMessage(
      userMessage
    );
  };


  /* =====================================================
     ENTER KEY
  ===================================================== */

  const handleKeyDown = (e) => {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault();

      sendMessage();
    }
  };


  /* =====================================================
     OPEN CHAT
  ===================================================== */

  const openChat = () => {
    setChatOpen(true);
  };


  /* =====================================================
     CLOSE CHAT
  ===================================================== */

  const closeChat = () => {
    setChatOpen(false);
  };


  /* =====================================================
     FLOATING BUTTON
  ===================================================== */

  if (!chatOpen) {

    return (

      <button
        type="button"
        className="chat-floating-button"
        onClick={openChat}
        aria-label="Open Tcongs Assistant"
      >

        <div className="chat-floating-logo">

          <img
            src={tcongsLogo.src}
            alt="Tcongs Assistant"
          />

        </div>


        <div className="chat-floating-content">

          <span className="chat-floating-title">
            Assistant
          </span>


          <span className="chat-floating-status">

            <span className="floating-status-dot"></span>

          </span>

        </div>

      </button>

    );
  }


  /* =====================================================
     CHAT WINDOW
  ===================================================== */

  return (

    <div className="chat-window">

      {/* HEADER */}

      <div className="chat-header">

        <div className="chat-brand">

          <img
            src={tcongsLogo.src}
            alt="Tcongs Infotech"
            className="chat-logo"
          />


          <div>

            <h3>
              Tcongs Assistant
            </h3>


            <div className="online-status">

              <span></span>

              Online

            </div>

          </div>

        </div>


        <button
          type="button"
          className="chat-close"
          onClick={closeChat}
          aria-label="Close chat"
        >

          <X size={20} />

        </button>

      </div>


      {/* MESSAGES */}

      <div
        ref={messagesRef}
        className="chat-messages"
        onScroll={(e) => {
          scrollPositionRef.current =
            e.currentTarget.scrollTop;
        }}
      >

        {messages.map(
          (msg, index) => (

            <div
              key={index}
              className={`message-row ${msg.sender}`}
            >

              <div className="message-bubble">

                {msg.text}

              </div>

            </div>

          )
        )}


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
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
        />


        <button
          type="button"
          className="send-button"
          onClick={sendMessage}
          disabled={
            loading ||
            !message.trim()
          }
          aria-label="Send message"
        >

          <Send size={18} />

        </button>

      </div>

    </div>
  );
}


export default ChatAssistant;