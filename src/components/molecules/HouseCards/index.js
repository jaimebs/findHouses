import React from 'react';
import { CardTitle, CardHighlightText, CardDescription } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCards = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>Casa à venda</CardTitle>
          <CardDescription>Rua Teste, 2105</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighlightText> U$ 200.00</CardHighlightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
