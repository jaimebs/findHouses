import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
  LoaderContainer,
} from './styles';
import {
  Title,
  IconButton,
  Input,
  HousesList,
  DetailText,
} from '../../components';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setLoading(false);
    setHousesListData(result.properties || []);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesListData} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encotre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />

          {loading && (
            <LoaderContainer>
              <ActivityIndicator size="large" color="#FFF" />
              <DetailText>Carregando...</DetailText>
            </LoaderContainer>
          )}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
