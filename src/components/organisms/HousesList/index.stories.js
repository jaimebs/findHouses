import React from 'react';
import styled from 'styled-components/native';
import { array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { HouseCard, HousesList } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('HouseList', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const mockArray = array('Lista de Imóveis', [
    {
      property_id: 1,
      address: {
        line: 'Rua das alamedas, 555',
        neighborhood_name: 'Fortaleza',
        state: 'Ce',
      },
      community: {
        price_max: 158,
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      ],
    },
    {
      property_id: 2,
      address: {
        line: 'Rua das acácias, 555',
        neighborhood_name: 'Fortaleza',
        state: 'Ce',
      },
      community: {
        price_max: 6699,
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1457794355224-e92bb76cec4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=798&q=80',
        },
      ],
    },
    {
      property_id: 3,
      address: {
        line: 'Rua das flores, 7788',
        neighborhood_name: 'Fortaleza',
        state: 'Ce',
      },
      community: {
        price_max: 8745,
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1511168886388-9b16cea34909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      ],
    },
  ]);
  return <HousesList data={mockArray} />;
});
