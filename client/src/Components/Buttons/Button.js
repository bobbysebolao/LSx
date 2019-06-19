import React from "react";
import * as S from './Button.style';

const Button = props => {
  return (
    <a href={props.link}>
      <S.Button type={props.type ? props.type : "button"}> {props.children} 
      </S.Button>
    </a>
  );
};

const Submit = props => {
  return (
    <a href={props.link}>
      <S.Submit type={props.type ? props.type : "button"}> {props.children} 
      </S.Submit>
    </a>
  );
};

export { Button, Submit } ;
