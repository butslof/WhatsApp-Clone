import React, {useState, useEffect} from 'react';
import './ChatListItem.css';

export default () => {

    const [chatList, setChatList] = useState([[], [], [], []]);

    return(
        
        chatList.map((item, key) =>(
            <div className='chatlist-item' key={key}> 
                <img src="https://www.w3schools.com/howto/img_avatar2.png" className='chatlist-item-avatar' />
                <div className='chatlist-item-lines'>
                    <div className='chatlist-item-line'>
                        <div className='chatlist-item-name'>
                            Felipe Butslof
                        </div>
                        <div className='chatlist-item-date'>
                            19:00
                        </div>
                    </div>
                    <div className='chatlist-item-line'>
                        <div className='chatlist-item-lastmsg'>
                            <p>
                                opa, tudo bem ?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))
        
       
    );
}