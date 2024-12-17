import './App.css';
import gptLogo from '../src/assest/chatgpt.svg';
import addBtn from '../src/assest/add-30.png';
import msgIcon from '../src/assest/message.svg';
import home from '../src/assest/home.svg';
import saved from '../src/assest/bookmark.svg';
import rocket from '../src/assest/rocket.svg';
import sendBtn from '../src/assest/send.svg';
import userIcon from '../src/assest/user-icon.png';
import gptImgLogo from '../src/assest/chatgptLogo.svg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// Function to send message to Gemini API
const sendMsgToGemini = async (message) => {
  const API_KEY =  process.env.REACT_APP_API_URL; // Add your Gemini API key here
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }]
      }
    );
    return response.data.candidates[0]?.content.parts[0]?.text || "No response";
  } catch (error) {
    console.error("Error fetching Gemini API response:", error);
    return "Error fetching response.";
  }
};

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);

  
  useEffect(() => {
    // Scroll to the bottom whenever the messages change
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    console.log(messages)
  }, [messages]);
  const handleSend = async () => {
    if (input.trim() === "") return; // Don't send empty messages

    // Add the user's message to the chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    // Clear the input field
    setInput("");
    // Get the response from the Gemini API
    const botResponse = await sendMsgToGemini(input);
    const botMessage = { text: botResponse, sender: "bot" };

    // Add the bot's response to the chat after a slight delay
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    
  };

  // Handle "Enter" key press to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" /> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> How to Use API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" /> Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, index) => (
            <div
              className={`chat ${message.sender === "user" ? "user" : "bot"}`}
              key={index}
            >
              {message.sender === "user" ? (
                <>  
                <img src={userIcon} className="userImg" alt="User" />

                  <p className="txt">{message.text}</p>
                </>
              ) : (
                <>
                  <img src={gptImgLogo} className="chatImg" alt="Bot" />
                  <p className="txt">{message.text}</p>
                </>
              )}
            </div>
          ))}
                  </div>


         <div ref={msgEnd} />

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className={`send ${input ? "active" : ""}`}
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p> ChatGPT can make mistakes. <a href="https://digitalamitchoudhary.com">Check important info.</a> </p>
          <p> <a href="https://zaap.bio/digitalamitchoudhary"> Made with <span style={{ color: 'red' }}>❤</span> by Digitalamitchoudhary
  </a>
</p>

        </div>
      </div>
    </div>
  );
}

export default App;
