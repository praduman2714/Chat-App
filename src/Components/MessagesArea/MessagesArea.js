// Importing componensts
import style from './MessagesArea.module.css';
// Importing some dependencies from the react.
import React, {useRef, useState , useEffect } from 'react';

// Function for MessagesArea
function MessagesArea({ messages }) {
    // Using hook for state variable
    const [likes, setLikes] = useState({});
    const chatAreaRef = useRef (null);
    // Using effect, so that smooth scrolling should happen
    useEffect(() => {
        if (chatAreaRef.current) {
          chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [messages]);
    // Function for handling likes..
    const handleLike = (index) => {
        setLikes((prevLikes) => ({
        ...prevLikes,
        [index]: prevLikes[index] ? prevLikes[index] + 1 : 1,
        }));
    };

//   REtruing the UI
  return (
    <div className={style.messageArea} ref= {chatAreaRef} >
      {messages && messages.map((message, index) => {

        return (
          <div className={style.container} key={index}>
            <span className={style.username}>{message.username}: </span>
            <div className={`${style.message}`} >
              <div className={style.messageContent}>{message.message}</div>
            </div>
            <div className={style.likes}>
                {likes[index]===undefined ? 
                    <img src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png" alt='heart'
                      onClick={() => handleLike(index)} />
                  : <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" alt = 'empty head'
                    onClick={() => handleLike(index)}/>
                }
                <span>{likes[index] || 0}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesArea;
