import React, { useEffect, useState } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import { Title, IconButton, Input, HousesList } from '../../components';
import { getHousesCall } from '../../services/calls';
import { Loader } from '../../components';

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

          {loading && <Loader texto="Carregado Lista de imóveis..." />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
