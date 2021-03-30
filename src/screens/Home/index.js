import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import { Title, IconButton, Input, HousesList } from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setHousesListData(result.properties || []);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesListData}>
        <ContentContainer>
          <StatusBar translucent backgroundColor="transparent" />
          <TopContainer>
            <TitleContainer>
              <Title>Encotre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
