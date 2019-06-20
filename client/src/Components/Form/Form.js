import React from "react";
import * as S from "./Form.style";
import Swal from "sweetalert2";
import { Button, Submit } from "../Buttons/Button.js";

const Form = props => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [question1, Setquestion1] = React.useState("");
  const [question2, Setquestion2] = React.useState("");
  const [question3, Setquestion3] = React.useState("");
  const [question4, Setquestion4] = React.useState("");
  const [question5, Setquestion5] = React.useState("");

  const red = {
    color: "red"
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/send", {
      method: "post",
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        answers: {
          q1: `${question1}`,
          q2: `${question2}`,
          q3: `${question3}`,
          q4: `${question4}`,
          q5: `${question5}`
        }
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res !== 200) {
          Swal.fire(
            "Send Failure!",
            "Please check your email is valid and <br/> internet connection is live",
            "error"
          );
        } else {
          Swal.fire(
            "Submitted!",
            "Check your email for your action plan",
            "success"
          );
        }
      });
  };

  return (
    <S.Wrapper>
      <h2>Create an Action Plan & Email it to yourself</h2>
      <S.FormDetails>
        All action starts with a plan - and we’re here to help you make yours!
        Take the first step and complete this short form
      </S.FormDetails>

      <S.FormEmail onSubmit={handleSubmit}>
        <label>
          What is your name?
          <S.Input
            name='ReceiverName'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <S.Label>
          What is your email?<sup style={red}>*</sup>
          <S.Input
            name='ReceiverEmail'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </S.Label>

        <S.Label>
          What do you want to change?
          <S.Input
            name='whatChange'
            type='text'
            value={question1}
            onChange={e => Setquestion1(e.target.value)}
          />
        </S.Label>

        <S.Label>
          Why do you want to change it?
          <S.Input
            name='whyChange'
            type='text'
            value={question2}
            onChange={e => Setquestion2(e.target.value)}
          />
        </S.Label>

        <S.Label>
          Who's behaviour do you want to change?
          <S.Textarea
            name='whoChange'
            type='text'
            placeholder='Put yourself in their shoes.                 
                         Why do people behave this way?
                         What would make them change?'
            value={question3}
            onChange={e => Setquestion3(e.target.value)}
          />
        </S.Label>

        <S.Label>
          What barriers do you foresee?
          <S.Input
            name='whatBarriers'
            type='text'
            value={question4}
            onChange={e => Setquestion4(e.target.value)}
          />
        </S.Label>

        <S.Label>
          How will you communicate your message?
          <S.Input
            name='howChange'
            type='text'
            value={question5}
            onChange={e => Setquestion5(e.target.value)}
          />
        </S.Label>

        <Submit type='submit'>Submit</Submit>
        <Button link='/#signpost'>Back</Button>
      </S.FormEmail>
    </S.Wrapper>
  );
};

export default Form;
