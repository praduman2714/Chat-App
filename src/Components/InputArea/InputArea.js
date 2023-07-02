import { useRef, useState } from 'react';
import MessagesArea from '../MessagesArea/MessagesArea';
import style from './InputArea.module.css';

function InputArea() {
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

    const messageRef = useRef();

    const [message, setMessage] = useState(null);

    function handleRemove(){
        messageRef.current.value = "";
    }

    function handleSubmit(e){
        e.preventDefault();
        const message = messageRef.current.value;
        const sender = user_list[Math.floor(Math.random() * user_list.length)];

        if(message.trim() !== ""){
            const newChat = {
                user : sender,
                message
            };

            setMessage([...message, newChat]);
        }
        handleRemove();
    }

    return (
        <>
            <MessagesArea message = {message} />
            <form onSubmit={handleSubmit} className={style.inputArea}>
                <input type='text' className={style.input} ref={messageRef}  />
                <button>Send</button>
            </form>
        </>
    )
}

export default InputArea;