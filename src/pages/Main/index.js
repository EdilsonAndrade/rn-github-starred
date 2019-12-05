import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsynctStorage from '@react-native-community/async-storage';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  ButtonsArea,
  ExcludeButton,
  ExcludeButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
    userNotFound: false,
    inputUserPlaceHolder: 'Adicionar usuário',
  };

  async componentDidMount() {
    const users = await AsynctStorage.getItem('users');
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  // the signal _ means that I wont compare properties only prevState
  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsynctStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleSubmit = async () => {
    const { users, newUser } = this.state;
    this.setState({ loading: true });
    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });
    } catch (error) {
      this.setState({
        newUser: '',
        loading: false,
        userNotFound: true,
        inputUserPlaceHolder: 'Usuário não existe',
      });
    }

    Keyboard.dismiss();
  };

  handleExclude = item => {
    const { users } = this.state;
    this.setState({
      users: users.filter(y => y.login !== item.login),
    });
  };

  handleOnFocusUserInput = () => {
    this.setState({
      userNotFound: false,
      inputUserPlaceHolder: 'Adicionar usuário',
    });
  };

  // por ser uma classe , pode-se colocar conforme abaixo, ao inves de fora do componente se fosse um functional componente
  static navigationOptions = {
    title: 'Usuarios',
  };

  handleSeeProfile(user) {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  }

  render() {
    const {
      newUser,
      users,
      loading,
      userNotFound,
      inputUserPlaceHolder,
    } = this.state;
    return (
      <Container>
        <Form>
          <Input
            placeholder={inputUserPlaceHolder}
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
            userNotFound={userNotFound}
            onFocus={this.handleOnFocusUserInput}
          />
          <SubmitButton loading={loading} onPress={this.handleSubmit}>
            {loading ? <ActivityIndicator color="#EEE" /> : <Icon name="add" />}
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ButtonsArea>
                <ProfileButton onPress={() => this.handleSeeProfile(item)}>
                  <ProfileButtonText>Ver Perfil</ProfileButtonText>
                </ProfileButton>
                <ExcludeButton onPress={() => this.handleExclude(item)}>
                  <ExcludeButtonText>Remover</ExcludeButtonText>
                </ExcludeButton>
              </ButtonsArea>
            </User>
          )}
        />
      </Container>
    );
  }
}
