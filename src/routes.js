import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import FavoriteDetail from './pages/FavoriteDetail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      FavoriteDetail,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false, // faz com que no IOS aparece apenas o botão de navegação de voltar sem o nome da pagina anterior no android não precisa
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3C64AD',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
