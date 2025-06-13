import { Appbar } from 'react-native-paper';

import AppColors from '../styles/appColors';

const AppBar = ({onPressMenu, onPressCart}) => {
  return (
    <Appbar.Header style={{ backgroundColor: AppColors.primaryColor }}>
      <Appbar.Action icon="menu" onPress={onPressMenu} />
      <Appbar.Content />
      <Appbar.Action icon="cart-outline" onPress={onPressCart} />
    </Appbar.Header>
  );
};

export default AppBar;
