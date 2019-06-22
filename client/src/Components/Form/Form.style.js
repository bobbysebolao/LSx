import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  width: 320px;
  border: 1px solid black;
  padding: 12px 12px 0 12px;
  background-color: #ebe7db;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23397d9f' fill-opacity='0.09' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const Input = styled.input`
  margin: 5px;
  font-size: 1em;
  padding: 0.5em;
  border-radius: 5px;
`;

const Checkedinput = styled.input`
  margin: 5px;
  height: 16px;
  width: 16px;
  border-radius: 5px;
`;

const Label = styled.label`
  padding: 5px;
  padding-bottom: 0.7em;
`;

const FormEmail = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
`;

const FormDetails = styled.h3`
  margin-top: 10px;
`;
const Textarea = styled.textarea`
  margin: 5px;
  width: 222px;
  height: 100px;
  resize: none;
  font-family: "Lato";
  padding: 0.5em;
  border-width: 2px;
  border-style: inset;
  border-radius: 5px;
  border-color: initial;
  border-image: initial;
`;

const DisclamerText = styled.p`
  font-size: 1em;
`;
const SmallerText = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

export {
  Wrapper,
  Input,
  FormEmail,
  Textarea,
  Label,
  FormDetails,
  SmallerText,
  DisclamerText,
  Checkedinput
};
