import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  ProfileName,
  ProfileDescription,
  Info,
  Stars,
  OwnerAvatar,
  Star,
  Title,
  Name,
  Content,
  Loading,
  LoadingContainer,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
    reloading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data, loading: false });
  }

  async getMoreStars(pageNumber) {
    const { stars } = this.state;

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const page = pageNumber + 1;

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      stars: [...stars, ...response.data],
      page,
    });
  }

  handleViewDetail = item => {
    const { navigation } = this.props;
    if (item) {
      navigation.navigate('FavoriteDetail', { item });
    }
  };

  async resetList(user) {
    const response = await api.get(`/users/${user}/starred`);
    this.setState({ stars: response.data, reloading: false });
  }

  render() {
    const { stars, loading, page, reloading } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Info>
            <ProfileName>{user.name}</ProfileName>
            <ProfileDescription>{user.bio}</ProfileDescription>
          </Info>
        </Header>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <Stars
            data={stars}
            onEndReachedThreshold={0.2}
            onEndReached={() => this.getMoreStars(page)}
            keyExtractor={item => String(item.id)}
            onRefresh={() => this.resetList(user.login)}
            refreshing={reloading}
            renderItem={({ item }) => {
              return (
                <Content onPress={() => this.handleViewDetail(item)}>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Star>
                    <Title>{item.name}</Title>
                    <Name>{item.owner.login}</Name>
                  </Star>
                </Content>
              );
            }}
          />
        )}
      </Container>
    );
  }
}
