import React from 'react';
import { StatusBar } from 'react-native';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input } from '../../components';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <TopContainer>
        <TitleContainer>
          <Title>Encotre aqui seu imóvel</Title>
        </TitleContainer>

        <IconButton iconName="filter" />
      </TopContainer>

      <Input label="Localização" placeholder="Digite o endereço" />
    </ScreenContainer>
  );
};
