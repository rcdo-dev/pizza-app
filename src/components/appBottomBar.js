import { View } from 'react-native';

import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';

const BOTTOM_APPBAR_HEIGHT = 55;

const AppBottomBar = () => {
  const { bottom } = useSafeAreaInsets(); // valor do espaço reservado para barra de gestos do sistema.

  return (
    <Appbar
      style={[
        AppStyles.appBottomBar,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom, // ajusta a altura da barra inferior + o valor do espaço reservado.
          backgroundColor: AppColors.primaryColor,
        },
      ]}
      safeAreaInsets={{ bottom }}>
      <View style={AppStyles.appBottomBarIcon}>
        <Appbar.Action
          icon="phone"
          onPress={() => {}}
          color={AppColors.white}
        />
        <Appbar.Action icon="home" onPress={() => {}} color={AppColors.white} />
        <Appbar.Action
          icon="account"
          onPress={() => {}}
          color={AppColors.white}
        />
      </View>
    </Appbar>
  );
};

export default AppBottomBar;
