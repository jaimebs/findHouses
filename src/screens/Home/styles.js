import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const TopContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(36)}px;
`;

export const TitleContainer = styled.View`
  width: 60%;
`;
