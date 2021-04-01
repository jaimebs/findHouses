import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailText } from '../../atoms';
import { FeatureCardContainer } from './styles';

export const HouseFeatureCard = ({ iconName, featureText }) => {
  return (
    <FeatureCardContainer>
      <Icon name={iconName} color="white" size={40} />
      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
