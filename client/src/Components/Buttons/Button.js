import React from "react";
import * as S from './Button.style';

const Button = props => {
  return (
    <S.ButtonLink href={props.link}>
      <S.Button type={props.type ? props.type : "button"}> {props.children} 
      </S.Button>
    </S.ButtonLink>
  );
};

const Submit = props => {
  return (
    <S.ButtonLink href={props.link}>
      <S.Submit type={props.type ? props.type : "button"}> {props.children} 
      </S.Submit>
    </S.ButtonLink>
  );
};

export { Button, Submit } ;
