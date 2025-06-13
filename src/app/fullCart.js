import { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import AppPizzaListItem from '../components/appPizzaListItem';
import AppButton from '../components/appButton';

import AppColors from '../styles/appColors';
import AppText from '../styles/appText';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

import { useCart } from '../hooks/cartContext';

const FullCart = ({ navigation }) => {
  const { cartItems, removeFromCart, getTotal } = useCart();
  const [totalOrder, setTotalOrder] = useState(0);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  useEffect(() => {
    setTotalOrder(getTotal());
  }, [cartItems, getTotal]);

  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'Column',
          alignItems: 'center',
          gap: 40,
        }}>
        <View style={{ height: 500 }}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppPizzaListItem
                quantity={item.quantity}
                flavor={item.name}
                price={item.price}
                onPress={() => handleRemove({ id: item.id })}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingVertical: 12,
            borderColor: AppColors.black,
          }}>
          <Text style={AppText.textBodyBlackBigger}>
            Total do pedido: R${totalOrder.toFixed(2)}
          </Text>
        </View>
        <AppButton
          iconName="arrow-back"
          iconColor={AppColors.black}
          iconSize={30}
          buttonText="Continuar comprando"
          textStyle={AppText.textBodyBlack}
          buttonColor={AppColors.buttonYellowColor}
          onPress={() => navigation.navigate('DrawerMenu')}
        />
        <AppButton
          iconName="check"
          iconColor={AppColors.white}
          iconSize={30}
          buttonText="Finalizar pedido"
          textStyle={AppText.textBodyWhite}
          buttonColor={AppColors.buttonBlueColor}
          onPress={() =>
            navigation.navigate('FinalizeOrder', { total: totalOrder })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FullCart;
