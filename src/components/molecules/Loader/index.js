import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DetailText } from '../../atoms';
import { LoaderContainer } from './styles';

export const Loader = ({ texto = 'Carregando...' }) => {
  return (
    <LoaderContainer>
      <ActivityIndicator size="large" color="#FFF" />
      <DetailText>{texto}</DetailText>
    </LoaderContainer>
  );
};
