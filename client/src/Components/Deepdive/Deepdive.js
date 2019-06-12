import React from 'react';
import * as S from './Deepdive.style';
import { ReactComponent as ParkDetail } from '../../content/park-foreground.svg';

const Deepdive = props => {

    return (
        <S.Main>
        <h2>Dive deeper into the data</h2>
        <S.Container>
            <p>This is where the introduction text will be. Talking about how data is interpreted.</p>
        </S.Container>
        <ParkDetail />
        </S.Main>
    )
}

export default Deepdive;