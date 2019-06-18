import React from "react";
import * as S from "./Form.style";
import { Button, Submit } from "../Buttons/Button.js";

const Form = props => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [question1, Setquestion1] = React.useState("");
  const [question2, Setquestion2] = React.useState("");
  const [question3, Setquestion3] = React.useState("");
  const [question4, Setquestion4] = React.useState("");
  const [question5, Setquestion5] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("we are in handlesubmit", name, email);
    fetch("http://localhost:3000/send", {
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
      .then(json => console.log("handleSubmit: ", json));
  };

  return (
    <S.Wrapper>
      <h2>
        Create an Action Plan & Email it to yourself
      </h2>
      <h3>
        All action starts with a plan - and we’re here to help you make yours!
        Take the first step and complete this short form
      </h3>

      <S.FormEmail onSubmit={handleSubmit}>
        <label>
          name
          <S.Input
            name="ReceiverName"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          email
          <S.Input
            name="ReceiverEmail"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label>
          What do you want to change?
          <S.Input
            name="whatChange"
            type="text"
            value={question1}
            onChange={e => Setquestion1(e.target.value)}
          />
        </label>

        <label>
          Why do you want to change it?
          <S.Input
            name="whyChange"
            type="text"
            value={question2}
            onChange={e => Setquestion2(e.target.value)}
          />
        </label>

        <label>
          Who's behaviour do you want to change?
          <textarea
            name="whoChange"
            type="text"
            placeholder="Put yourself in their shoes &#13;&#10;
                         Why do people behave this way &#13;&#10;
                         What would make them change?"
            value={question3}
            onChange={e => Setquestion3(e.target.value)}
          />
        </label>

        <label>
          What barriers do you foresee?
          <S.Input
            name="whatBarriers"
            type="text"
            value={question4}
            onChange={e => Setquestion4(e.target.value)}
          />
        </label>

        <label>
          How will you communicate your message?
          <S.Input
            name="howChange"
            type="text"
            value={question5}
            onChange={e => Setquestion5(e.target.value)}
          />
        </label>

        <Submit type="submit" value="Submit">
          {" "}
          Submit
        </Submit>
        <Button link="/#signpost">Back</Button>
      </S.FormEmail>
    </S.Wrapper>
  );
};

export default Form;
