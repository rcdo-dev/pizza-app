import { View, Pressable, Text } from 'react-native';

import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

const AppMenuButton = ({ buttonText, buttonColor }) => {
  return (
    <View>
      <Pressable style={AppStyles.appMenuButton} backgroundColor={buttonColor}>
        <Text style={[AppText.textBodyBlack, { paddingHorizontal: 18 }]}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppMenuButton;
