import { View } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AppColors from '../styles/appColors';
import AppText from '../styles/appText';

const AppDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: AppColors.white,
          marginVertical: 10,
        }}
      />

      <View style={{ marginBottom: 20 }}>
        <DrawerItem
          label="Sobre"
          labelStyle={AppText.textBodyWhite}
          icon={() => (
            <Icon
              name="bookmark"
              size={24}
              style={{ color: AppColors.white }}
            />
          )}
          onPress={() => props.navigation.navigate('Menu')}
        />
        <DrawerItem
          label="Configurações"
          labelStyle={AppText.textBodyWhite}
          icon={() => (
            <Icon
              name="settings"
              size={24}
              style={{ color: AppColors.white }}
            />
          )}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
          label="Sair"
          labelStyle={AppText.textBodyWhite}
          icon={() => (
            <Icon
              name="exit-to-app"
              size={24}
              style={{ color: AppColors.white }}
            />
          )}
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default AppDrawerContent;
