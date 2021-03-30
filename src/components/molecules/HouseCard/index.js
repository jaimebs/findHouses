import React from 'react';
import { CardTitle, CardHighlightText, CardDescription } from '../../atoms';
import { formatCurrencyUSD } from '../../../shared/formatCurrency';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighlightText>{formatCurrencyUSD(price)}</CardHighlightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
