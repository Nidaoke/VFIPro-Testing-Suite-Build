import React, { useState } from 'react';
import axios from 'axios'

export const CallBackend = () => {

  const callAsync = function(){
    callAPI();
  }

  async function callAPI(){
    try{
      let response = await axios.post(`https://nutty-pajamas-dog.cyclic.app/ask`, {
        prompt: "Extract the name from the sentence: My name is David."
      });
      console.log(response);
      if(response.data.success){
        console.log("success");
        console.log(response.data.message);
      }else{
        console.log("Failed");
      }
    } catch(error){
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={callAsync}>Test Async</button>
    </div>
    /*<div>
      <div className={classes.component223}>
        <div className={classes.rectangle}></div>
        <div className={classes.damola}>{recognizedName}</div>
      </div>
      <div className={classes.firstName}>First Name</div>

      <br></br>
      <br></br>
      <p>Transcript: {transcript}</p>
      <p>Text sent to OpenAI: {spokenTextSent}</p>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p>Helper Called: {helperCalled ? 'yes' : 'no'}</p>
      <p>Async Called: {asyncCalled ? 'yes' : 'no'}</p>
      <p>Finished Await: {finishedAwait ? 'yes' : 'no'}</p>
      <div style={{position: 'absolute', right: 1420, top: 305}}>
        <button
          onTouchStart={SpeechRecognition.startListening}
          onMouseDown={SpeechRecognition.startListening}
          onTouchEnd={callAsync}
          onMouseUp={callAsync}
        >Hold to talk</button>
      </div>
    </div>*/
  );
};