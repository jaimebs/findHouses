import styled from 'styled-components/native';

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: white;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: white;
  font-weight: bold;
`;

export const DetailTitle = styled(Title)`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const DetailSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: white;
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: white;
`;

export const DetailSectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: white;
  font-weight: bold;
`;

export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: white;
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: white;
`;

export const CardHighlightText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  font-weight: 600;
`;
