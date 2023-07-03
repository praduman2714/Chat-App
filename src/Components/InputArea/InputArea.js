// Using Dependencies form the react
import { useRef, useState } from 'react';
// Importing the components
import MessagesArea from '../MessagesArea/MessagesArea';
import style from './InputArea.module.css';

// Function for Input Area
function InputArea() {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  // Using message ref for the typing in the input sectino
  const messageRef = useRef();

  // Using state variable for messages
  const [message, setMessage] = useState([]);

  // function for removing from the messages ref
  function handleRemove() {
    messageRef.current.value = "";
  }
  // function for handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    const messageText = messageRef.current.value;
    const sender = user_list[Math.floor(Math.random() * user_list.length)];

    if (messageText.trim() !== "") {
      const newChat = {
        username: sender,
        message: messageText
      };

      setMessage(prevMessage => [...prevMessage, newChat]);
    }
    handleRemove();
  }
  // Returning the UI
  return (
    <>
      <MessagesArea messages={message} />
      <form onSubmit={handleSubmit} className={style.inputArea}>
        <input type='text' className={style.input} placeholder='Enter the text...' ref={messageRef} />
        <button>Send</button>
      </form>
    </>
  )
}

export default InputArea;
