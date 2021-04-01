import React from 'react';
import { CardTitle, CardHighlightText, CardDescription } from '../../atoms';
import { formatCurrencyUSD } from '../../../shared/formatCurrency';
import { useNavigation } from '@react-navigation/native';
import { useHousesStore } from '../../../services/stores';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  function goToHouseDetail() {
    // Sem estado global
    // navigation.navigate('Detail', { selectedHouse: item });

    // Com estado global
    setSelectedHouse(item);
    navigation.navigate('Detail');
  }

  return (
    <CardContainer onPress={() => goToHouseDetail()}>
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
