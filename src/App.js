import './App.css';
import gptLogo from '../src/assest/chatgpt.svg';
import addBtn from '../src/assest/add-30.png';
import msgIcon from '../src/assest/message.svg';
import home from '../src/assest/home.svg';
import saved from '../src/assest/bookmark.svg';
import rocket from '../src/assest/rocket.svg';
import sendBtn from '../src/assest/send.svg'
import userIcon from '../src/assest/user-icon.png'
import gptImgLogo from '../src/assest/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';





function App() {
const [input, setInput] = useState("");
  const handleSend = async()=>{
    const res =  await sendMsgToOpenAI(input)
    console.log(res);
    
  }
  return (
    <div className="App">

      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className='logo' /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"> <img src={addBtn} alt="New Chat" className="addBtn" /> New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programing ?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to Use API ?</button>

          </div>
        </div>
        <div className="lowerSide">

          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>


        </div>

      </div>
      <div className="main">

        <div className="chats">
          <div className="chat">
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in quas! Quaerat rerum soluta similique recusandae explicabo, nemo dignissimos laudantium?</p><img src={userIcon} className='userImg' alt="" />
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} className='chatImg ' alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium vitae, architecto cupiditate numquam qui et nobis adipisci magni deserunt sit iste eius optio, labore perspiciatis ipsam dolorum voluptas cum accusantium libero distinctio quod quisquam quaerat. Ratione, velit sit aperiam maxime eaque pariatur iste ex dolorum inventore, possimus atque recusandae similique eum ut! Voluptates hic, atque eum optio molestias esse inventore doloribus autem suscipit magni modi saepe odio ea laudantium dolores id aspernatur est veritatis provident tempore facere? Dolorem fugit velit quas. Laborum autem quisquam molestias alias temporibus quae tempora, expedita maiores, accusamus molestiae voluptatibus, accusantium minima libero doloremque! Vel!</p>
          </div>
          
         

        </div>
        <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
              <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
            <p> ChatGPT can make mistakes. Check important info.
            </p>
          </div>
      </div>



    </div>
  );
}

export default App;
