import { useState, useEffect } from 'react';

import { View, Image, Text, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../hooks/cartContext';

import AppButton from './appButton';
import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

const AppItemDetails = ({
  id,
  path,
  flavor,
  price,
  description,
}) => {
  const [quantity, setQuantity] = useState(1);

  const { cartItems, addToCart } = useCart();
  const handleAdd = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    console.log('Carrinho atualizado:', cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (quantity === 0) {
      setQuantity(quantity + 1);
    }
  }, [quantity]);

  const navigation = useNavigation();

  return (
    <View style={AppStyles.appItemDetailsContainerContent}>
      <Image style={AppStyles.pizzaItemDetails} source={path} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 28,
        }}>
        <Pressable
          style={AppStyles.appCalculationButton}
          onPress={() => setQuantity(quantity - 1)}>
          <Text style={[AppText.textBodyWhite, { fontSize: 28 }]}>-</Text>
        </Pressable>
        <Text style={AppText.textTitle}>{quantity}</Text>
        <Pressable
          style={AppStyles.appCalculationButton}
          onPress={() => setQuantity(quantity + 1)}>
          <Text style={[AppText.textBodyWhite, { fontSize: 28 }]}>+</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 190,
        }}>
        <Text style={AppText.textBodyBlack}>{flavor}</Text>
        <Text style={AppText.textBodyRedMedium}>R${price.toFixed(2)}</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text style={AppText.textBodyBlack}>{description}</Text>
      </View>
      <AppButton
        iconName="check"
        iconColor={AppColors.black}
        iconSize={30}
        buttonText="Adicionar ao carrinho"
        textStyle={AppText.textBodyBlack}
        buttonColor={AppColors.buttonYellowColor}
        onPress={() => {
          handleAdd({
            id: id,
            name: flavor,
            price: price,
            quantity: quantity,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AppItemDetails;
