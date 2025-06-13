import { View, Text } from 'react-native';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

const AppLogo = () => {
  return (
    <View style={AppStyles.containerLogo}>
      <View>
        <Text style={AppText.textTitle}>
          <Text>Pi</Text>
          <Text style={{ color: AppColors.greenTextColor }}>z</Text>
          <Text style={{ color: AppColors.redTextColor }}>z</Text>
          <Text>App</Text>
        </Text>
      </View>
    </View>
  );
};

export default AppLogo;
