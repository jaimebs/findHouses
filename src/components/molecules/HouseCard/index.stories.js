import React from 'react';
import styled from 'styled-components/native';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { HouseCard } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('HouseCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const image = text(
    'Imagem',
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
  );
  const title = text('Title', 'Rua das alamedas, 555');
  const description = text('Description', 'Fortaleza - Ce');
  const price = number('Preço', 1569);
  return (
    <HouseCard
      imgSource={image}
      title={title}
      description={description}
      price={price}
    />
  );
});
