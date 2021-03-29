import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {
  InputLabel,
  Title,
  CardTitle,
  CardDescription,
  CardHighlightText,
  DetailTitle,
  DetailSubTitle,
  DetailText,
  DetailSectionTitle,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Exemplo de InputLabel');
  return <InputLabel>{value}</InputLabel>;
});

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de Title');
  return <Title>{value}</Title>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de DetailTitle');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Exemplo de DetailSubTitle');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo de DetailText');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de DetailSectionTitle');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('CardTitle', () => {
  const value = text('Title', 'Exemplo de Title');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('Title', 'Exemplo de Description');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHighlightText', () => {
  const value = text('Title', 'U$ 222.22');
  return <CardHighlightText>{value}</CardHighlightText>;
});
