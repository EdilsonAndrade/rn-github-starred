import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  background: #eee;
  height: 40px;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-color: ${props => (props.userNotFound ? '#FF6E60' : '#fff')};
  border-width: ${props => (props.userNotFound ? '1px' : '0')};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #3c64ad;
  margin-left: 10px;
  padding: 0 12px;
  color: #eee;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  margin-top: 5px;
  color: #999;
  text-align: center;
`;

export const ButtonsArea = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProfileButton = styled(RectButton)`
  margin: 12px 0;
  height: 40px;
  border-radius: 4px;
  flex: 1;
  background: #3c64ad;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ExcludeButton = styled(RectButton)`
  margin: 12px 0;
  height: 40px;
  border-radius: 4px;
  flex: 1;
  background: #5e7ce2;
  align-items: center;
  justify-content: center;
`;

export const ExcludeButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
