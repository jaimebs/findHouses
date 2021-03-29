import styled from 'styled-components/native';

export const SectionView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  align-items: center;
  justify-content: center;
`;

export const SectionImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const SectionText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  font-weight: bold;
`;
