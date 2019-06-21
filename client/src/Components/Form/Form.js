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
  const [question6, Setquestion6] = React.useState(true);

  const red = {
    color: "red"
  };

  const handleCheckBox = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    Setquestion6(value);
  };

  const handleSubmit = e => {
    const Button = document.querySelector("Button");
    Button.textContent = "Loading...";
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
          q5: `${question5}`,
          q6: `${question6}`
        }
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);

        if (res.accepted.length !== 1) {
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
        Button.textContent = "Submit";
      });
  };

  return (
    <S.Wrapper>
      <h2>Create an Action Plan & Email it to yourself</h2>
      <S.FormDetails>
        All action starts with a plan - and we’re here to help you make yours!
        Take the first step and complete this short form
      </S.FormDetails>
      <S.FormDetails>
        Have a think about the specific air pollution problem that you would
        like to address and this tool should help you think about the best ways
        to go about it. If you aren’t sure about how to respond to a question,
        have another look at the resources on this app and come back to the
        action plan once you have more of an idea.
      </S.FormDetails>
      <S.FormEmail onSubmit={handleSubmit}>
        <label>
          What is your name?
          <S.Input
            name="ReceiverName"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <S.Label>
          What is your email?<sup style={red}>*</sup>
          <S.Input
            name="ReceiverEmail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </S.Label>

        <S.Label>
          What is the problem you would like to address?<S.SmallerText>e.g. idling vehicles
          outside my school</S.SmallerText> 
          <S.Input
            name="whatChange"
            type="text"
            value={question1}
            onChange={e => Setquestion1(e.target.value)}
          />
        </S.Label>

        <S.Label>
          Why have you chosen this problem?<S.SmallerText>e.g. because lots of parents wait
          for pupils with their engines running</S.SmallerText> 
          <S.Textarea
            name="whyChange"
            type="text"
            value={question2}
            onChange={e => Setquestion2(e.target.value)}
          />
        </S.Label>

        <S.Label>
          Who would you need to work with or engage to solve this problem? <S.SmallerText>e.g.
          parents at school, teachers, local council</S.SmallerText>
          <S.Input
            name="whoChange"
            type="text"
            value={question3}
            onChange={e => Setquestion3(e.target.value)}
          />
        </S.Label>

        <S.Label>
          What will you need to do to achieve this? <S.SmallerText>e.g. run an anti-idling
          campaign outside school to talk to parents</S.SmallerText>
          <S.Input
            name="whatBarriers"
            type="text"
            value={question4}
            onChange={e => Setquestion4(e.target.value)}
          />
        </S.Label>

        <S.Label>
          How will you communicate your message?<S.SmallerText>e.g. social media, posters,
          assemblies, meetings with policy-makers</S.SmallerText> 
          <S.Input
            name="howChange"
            type="text"
            value={question5}
            onChange={e => Setquestion5(e.target.value)}
          />
        </S.Label>
        <S.Label>
          By ticking the box you are agreeing to be signed up to our quarterly
          Air Quality Bulletin to receive updates on our air pollution work.
          <S.Checkedinput
            name="isGoing"
            type="checkbox"
            checked={question6}
            onChange={e => handleCheckBox(e)}
          />
        </S.Label>
        <S.SmallerText> You can unsubscribe at any time</S.SmallerText>
        <Submit type="submit">Submit</Submit>
        <Button link="/#signpost">Back</Button>

        <S.DisclamerText>
          Thank you for completing this form, your personal data will be kept in
          accordance with the requirements of the Data Protection Act (1998) and
          will only be used for the purpose of monitoring this project unless
          specified. The information that you have provided will not be shared
          with any other third-party organisations.{" "}
        </S.DisclamerText>
      </S.FormEmail>
    </S.Wrapper>
  );
};

export default Form;
