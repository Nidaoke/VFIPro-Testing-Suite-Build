import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import classes from "./FirstName/FirstName.module.css"
import axios from 'axios'

import OpenAI from "openai";

export const Dictaphone = () => {
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [recognizedName, setRecognizedName] = useState('');
  const [spokenTextSent, setSpokenTextSent] = useState('');

  const [helperCalled, setHelperCalled] = useState(false);
  const [asyncCalled, setAsyncCalled] = useState(false);
  const [finishedAwait, setFinishedAwait] = useState(false);

  const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY});

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const callAsync = function(){
    setHelperCalled(true);
    SpeechRecognition.stopListening();
    handleSpokenText(transcript);
  }

  async function handleSpokenText(spokenText){
    try {
      setAsyncCalled(true);
      //SpeechRecognition.stopListening();
      // Send the spoken text to GPT-3 to extract the name
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Extract the name from the sentence: "${spokenText}"`,
        max_tokens: 7,
        temperature: .1,
      });
      /*const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: `Extract the name from the sentence: "${spokenText}"`,
        max_tokens: 100,
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
      });*/

      setFinishedAwait(true);

      setSpokenTextSent(spokenText);

      console.log(response);

      // Extract the recognized name from the GPT-3 response
      const recognizedName1 = response.choices[0].text.trim();
      
      // Update the component's state with the recognized name
      setRecognizedName(recognizedName1);
      //this.setState({ recognizedName });
    } catch (error) {
      console.error('Error extracting name from GPT-3:', error);
    }
  }

  return (
    <div>
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
    </div>
  );
};