import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  width: 320px;
  border: 1px solid red;
  padding: 12px 12px 0 12px;
  background-color: #ffe4c3;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23397d9f' fill-opacity='0.09' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.5em;
`;

const FormEmail = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
`;

export { Wrapper, Input, FormEmail };
