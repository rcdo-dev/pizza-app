import { View, Image, Text, Pressable } from 'react-native';

import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

const AppItemMenu = ({ path, flavor, price, onPress }) => {
  return (
    <View style={AppStyles.appItemContainerContent}>
      <Image style={AppStyles.pizzaItemMenu} source={path} />
      <View>
        <Text style={AppText.textBodyBlack}>{flavor}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 40,
        }}>
        <Text style={AppText.textBodyRed}>R${price.toFixed(2)}</Text>
        <Pressable
          style={AppStyles.appCalculationButton}
          onPress={onPress}>
          <Text style={[AppText.textBodyWhite, { fontSize: 26 }]}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AppItemMenu;
