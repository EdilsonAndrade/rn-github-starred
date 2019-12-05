import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#715',
  size: 50,
})``;
export const Header = styled.View`
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 770px;
  background: #eee;
`;
export const Info = styled.View`
  align-items: center;
  padding: 0 10px;
`;
export const ProfileName = styled.Text`
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
`;
export const ProfileDescription = styled.Text`
  text-align: center;
  font-size: 14px;
  padding-bottom: 10px;
  color: #999;
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Content = styled(RectButton)`
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin: 5px 10px;
  background: #eee;
`;
export const Star = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 14px;
`;
export const Name = styled.Text`
  font-size: 13px;
`;
