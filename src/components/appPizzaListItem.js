import { View, Text, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AppColors from '../styles/appColors';
import AppText from '../styles/appText';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const AppPizzaListItem = ({ quantity, flavor, price, onPress }) => {
  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        width: 360,
        height: 100,
        backgroundColor: AppColors.yellowCardColor,
        marginHorizontal: 25,
        marginTop: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex: 1,
      }}>
      <Pressable onPress={onPress}>
        <Icon
          name="delete"
          size={40}
          style={{ color: AppColors.primaryColor }}
        />
      </Pressable>
      <View
        style={{
          flexDirection: 'Column',
          justifyContent: 'space-between',
          marginLeft: 16,
          flex: 1,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={AppText.textBodyBlack}>Pizza</Text>
          <Text style={AppText.textBodyBlack}>{quantity}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 40,
          }}>
          <Text style={AppText.textBodyBlack}>{flavor}</Text>
          <Text style={AppText.textBodyBlack}>R${price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppPizzaListItem;
