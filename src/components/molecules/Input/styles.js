import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  padding-left: ${({ theme }) => theme.metrics.px(12)}px;
  color: white;
  font-family: 'Montserrat-Regular';
`;
