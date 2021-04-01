import React from 'react';
import { CardTitle, CardHighlightText, CardDescription } from '../../atoms';
import { formatCurrencyUSD } from '../../../shared/formatCurrency';
import { useNavigation } from '@react-navigation/native';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('Detail', { selectedHouse: item })}>
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
