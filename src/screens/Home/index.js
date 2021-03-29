import React from 'react';
import { StatusBar } from 'react-native';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { Title, IconButton, Input, HouseCards } from '../../components';

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

      <HouseCards imgSource="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
    </ScreenContainer>
  );
};
