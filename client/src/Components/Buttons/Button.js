import React from "react";
import * as S from './Button.style';

const Button = props => {
  return (
    <a href={props.link}>
      <S.Button type='button'> {props.children} 
      </S.Button>
    </a>
  );
};

export default Button;
