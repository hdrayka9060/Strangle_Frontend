import './Video.css';
import Navbar from './Navbar';
import ChatBox from './ChatBox';
import VideoBox from './VideoBox';
import React, {useState} from 'react'


function Video(props) {

  const userImgUrl="https://cdn-icons-png.flaticon.com/512/3177/3177440.png";

  const [chatChangeBtnNo,setChatChangeBtnNo]=useState(false);

  function changeChatBtnClick(){
    if(chatChangeBtnNo){
        setChatChangeBtnNo(false);
    }
    else {
        setChatChangeBtnNo(true)
    }
}

  return (
    <div className='container'>
      <Navbar  />

      <div className="chatCont">
        <ChatBox username={'Stranger'} userImg={userImgUrl} chatChangeBtnNo={chatChangeBtnNo} changeChatBtnClick={changeChatBtnClick}/>
        <VideoBox username={'Stranger'} userImg={userImgUrl} chatChangeBtnNo={chatChangeBtnNo} />
      </div>

    </div>
  );
}

export default Video;