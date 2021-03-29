import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(56)}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.metrics.px(14)}px;
`;
