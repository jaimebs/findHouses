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
import { useHousesStore } from '../../services/stores';

export const HomeScreen = () => {
  // Usando zustand para gerenciar o estado global.
  const { housesList, setHousesList } = useHousesStore();
  const [loading, setLoading] = useState(true);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setLoading(false);
    setHousesList(result.properties || []);
  };

  useEffect(() => {
    callGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesList} loading={loading}>
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
