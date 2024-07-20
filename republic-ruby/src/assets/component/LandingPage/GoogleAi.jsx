import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const GoogleAI = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window size

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return;

    try {
      const prompt = `You are a Health Assistant. Provide helpful responses to health-related questions. User asked: "${messageText}"`;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: messageText },
        { type: "bot", message: text },
      ]);
      setUserInput("");
      setIsLoading(true);
      console.log(text);
    } catch (e) {
      console.log("Error occurred while fetching", e);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "#ff4f00",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={toggleChat}
      >
        {isOpen ? "−" : "✉️"}
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            height: "500px",
            width: "300px",
            border: "1px solid black",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1000,
            backgroundColor: "white",
          }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {chatHistory.map((message, i) => (
                  <Message
                    key={i}
                    model={{
                      message:
                        message.type === "bot"
                          ? message.message
                          : message.message,
                      sentTime: "just now",
                      sender: message.type,
                      direction:
                        message.type === "user" ? "outgoing" : "incoming",
                      position: "single",
                    }}
                    style={{
                      textAlign: message.type === "user" ? "right" : "left",
                    }}
                  />
                ))}
                {isLoading && <TypingIndicator content="Loading..." />}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                value={userInput}
                onChange={(value) => handleUserInput(value)}
                onSend={sendMessage}
                sendButton={true}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
};
