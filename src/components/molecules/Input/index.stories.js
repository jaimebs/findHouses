import React from 'react';
import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Input } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Input', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const placeholder = text('Placeholder', 'Digite aqui sua localização');
  const label = text('Label', 'Localização');
  return <Input label={label} placeholder={placeholder} />;
});
