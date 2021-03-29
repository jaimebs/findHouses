import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage } from './styles';
import SpashLogo from '../../assets/img/FindHouses.png';

export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SpashLogo} resizeMode="contain" />
    </SectionView>
  );
};
