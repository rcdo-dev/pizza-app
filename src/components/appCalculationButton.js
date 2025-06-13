import { View, Pressable, Text } from 'react-native';

import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

const AppCalculationButton = ({ calculusSign, onPress }) => {
  return (
    <View style={AppStyles.appCalculationButton}>
      <Pressable onPress={onPress}>
        <Text style={[AppText.textBodyWhite, { fontSize: 26 }]}>
          {calculusSign}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppCalculationButton;
