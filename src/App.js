import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  return (
    <div className="app-window">

      <div className='sidebar'>
        <header>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" className='header-avatar' />
          <div className='header-buttons'>
            <div className="header-btn">
              <DonutLargeIcon style={{color: "#919191"}}/>
            </div>
            <div className="header-btn">
              <ChatIcon style={{color: "#919191"}} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{color: "#919191"}} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search-input'>
            <SearchIcon fontSize='small' style={{color: '#919191'}}/>
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className='chat-list'>
          <ChatListItem />
        </div>
      </div>

      <div class="content-area">
        ...
      </div>

    </div>
  );
}

