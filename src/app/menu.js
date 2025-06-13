import { useEffect } from 'react';

import { FlatList, View, ScrollView } from 'react-native';

import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';
import { DrawerActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useCart } from '../hooks/cartContext';

import AppBar from '../components/appBar';
import AppTextInput from '../components/appTextInput';
import AppBottomBar from '../components/appBottomBar';
import AppMenuButton from '../components/appMenuButton';
import AppItemMenu from '../components/appItemMenu';

import { SEARCH } from '../js/loginService';
import { pizzas } from '../data/pizzas';

import AppStyles from '../styles/appStyles';
import AppColors from '../styles/appColors';

const Menu = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const { cartItems } = useCart();

  useEffect(() => {
    console.log('Carrinho atualizado:', cartItems);
  }, [cartItems]);

  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={[AppStyles.safeAreaView, { backgroundColor: AppColors.white }]}>
      <AppBar
        onPressMenu={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressCart={() => {
          cartItems.length === 0
            ? navigation.navigate('EmptyCart')
            : navigation.navigate('FullCart');
        }}
      />
      <View
        style={[
          AppStyles.contentContainerColumn,
          { marginTop: 20, marginLeft: 10, alignItems: 'start' },
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="search" size={24} style={{ marginHorizontal: 8 }} />
          <AppTextInput
            placeholder={SEARCH}
            backgroundColor={AppColors.grayBackgroundColorTextInput}
            width="330"
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            AppStyles.contentContainerRow,
            { paddingRight: 20 },
          ]}>
          <AppMenuButton
            buttonText="Tudo"
            buttonColor={AppColors.grayBackgroundColorTextInput}
          />
          <AppMenuButton
            buttonText="Salgadas"
            buttonColor={AppColors.grayBackgroundColorTextInput}
          />
          <AppMenuButton
            buttonText="Doces"
            buttonColor={AppColors.grayBackgroundColorTextInput}
          />
          <AppMenuButton
            buttonText="Bebidas"
            buttonColor={AppColors.grayBackgroundColorTextInput}
          />
        </ScrollView>

        <FlatList
          data={pizzas}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <AppItemMenu
              path={item.path}
              flavor={item.flavor}
              price={item.price}
              onPress={() => {
                navigation.navigate('PizzaDetails', {
                  id: item.id,
                  path: item.path,
                  flavor: item.flavor,
                  price: item.price,
                  description: item.description,
                });
              }}
            />
          )}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: bottom + 60,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        />
      </View>
      <AppBottomBar />
    </SafeAreaView>
  );
};

export default Menu;
