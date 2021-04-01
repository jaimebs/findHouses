import React, { useEffect, useState } from 'react';
import { formatCurrencyUSD } from '../../shared/formatCurrency';
import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import {
  IconButton,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  Loader,
  HouseFeatureCard,
} from '../../components';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = ({ navigation }) => {
  // Recuperando o item selecionado com o Zustand
  const { selectedHouse } = useHousesStore();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const goBackHome = () => {
    navigation.goBack();
  };

  const callHouseDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    const [details] = result.properties;
    setLoading(false);
    setDetail(details);
  };

  useEffect(() => {
    callHouseDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={() => goBackHome()}
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>

      {loading ? (
        <BottomScreenContainer>
          <Loader texto="Carregando detalhes" />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{detail?.address?.line}</DetailTitle>
          <DetailSubTitle>
            {formatCurrencyUSD(detail?.community.price_max)}
          </DetailSubTitle>
          <DetailText>{`${detail?.address?.neighborhood_name} - ${detail?.address?.state}`}</DetailText>
          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>
          <FeaturesContainer>
            <HouseFeatureCard
              iconName="arrow-collapse-all"
              featureText={`${detail?.lot_size.size} ${detail?.lot_size.units}`}
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText={`${detail?.community.beds_min} - ${detail?.community.beds_max} Beds`}
            />
            <HouseFeatureCard
              iconName="shower"
              featureText={`${detail?.community.baths_min} - ${detail?.community.baths_max} Baths`}
            />
          </FeaturesContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do imóvel
          </DetailSectionTitle>

          {detail?.features[1].text.map(text => (
            <DetailText mb={2} key={text}>
              - {text}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
