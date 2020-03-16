import React from 'react';
import './Messages.css';

function Messages() {
  return (
    <section className="messageContainer">
      <form>
        <fieldset className="field">
          <div>
            <legend>Chat Room</legend>
          </div>

          <div className="chatContainer">
            <div className="chatRoom">
              <p>chat dialog goes here</p>
            </div>
            <div className="chatIm">
              <p>screen name</p>
            </div>
          </div>
          <div className="chatInput">
            <p>user text/chat input goes here</p>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default Messages;
