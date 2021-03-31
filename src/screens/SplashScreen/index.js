import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage } from './styles';
import { useNavigation } from '@react-navigation/native';
import SpashLogo from '../../assets/img/FindHouses.png';

export const SplashScreen = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };

  useEffect(() => {
    goToHomeScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SpashLogo} resizeMode="contain" />
    </SectionView>
  );
};
