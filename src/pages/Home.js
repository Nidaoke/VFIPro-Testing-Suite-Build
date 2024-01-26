import { BasicPage } from "../components/BasicPage";
import { PicturePage } from "../components/PicturePage";
import { CallBackend } from "../components/CallBackend";
import { FirstName } from "../components/FirstName/FirstName";
import { useState } from "react";
import axios from 'axios';
import Home from "@mui/icons-material/Home";

export const HomePage = () => {
  //const [firstName, setFirstName] = useState('');
  //const [aiResponse, setAiResponse] = useState('');

  //const [askQuestion, setAskQuestion] = useState('');
  //const [replyQuestion, setReplyQuestion] = useState('');

  /*const handleSubmit = function(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    callAPI("Extract the name from the following: " + formJson.myInput);
  }

  const handleAsk = function(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    callOpen("" + formJson.myInput);
  }

  async function callAPI(prompt){
    try{
      let response = await axios.post(`https://nutty-pajamas-dog.cyclic.app/ask`, {
        prompt,
      });
      console.log(response);
      if(response.data.success){
        console.log("success");
        console.log(response.data.message);
        setAiResponse(response.data.message);
      }else{
        console.log("Failed");
      }
    } catch(error){
      console.error(error);
    }
  }

  async function callOpen(prompt){
    try{
      let response = await axios.post(`https://nutty-pajamas-dog.cyclic.app/ask`, {
        prompt,
      });
      console.log(response);
      if(response.data.success){
        console.log("success");
        console.log(response.data.message);
        setReplyQuestion(response.data.message);
      }else{
        console.log("Failed");
      }
    } catch(error){
      console.error(error);
    }
  }*/

  /*
  <form onSubmit={handleAsk}>
        <label>
          Ask/Tell me anything:
          <input
            name="myInput"
            value={askQuestion}
            onChange={e => setAskQuestion(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {askQuestion !== '' &&
        <p>You entered {askQuestion}.</p>
      }

      {replyQuestion !== '' &&
        <p>AI Response with open input: {replyQuestion}</p>
      }

      <br></br>

      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input 
            name="myInput"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {firstName !== '' && 
        <p>You entered {firstName}.</p>
      }

      {aiResponse !== '' &&
        <p>AI Response with prompt: 'Extract the name from the following INPUT': {aiResponse}</p>
      }
      */

  return (
    <div>
      <PicturePage title="Home Page" icon={<Home />} />


    </div>
  );
};
