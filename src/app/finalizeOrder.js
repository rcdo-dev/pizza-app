import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

import AppBackButton from '../components/appBackButton';
import AppButton from '../components/appButton';

import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';
import AppColors from '../styles/appColors';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';
import { useRoute } from '@react-navigation/native';

const FinalizeOrder = ({ navigation }) => {
  const [value, setValue] = React.useState('Cartão de crédito');
  const route = useRoute();
  const { total } = route.params;

  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={[AppStyles.contentContainerColumn, { gap: 40, marginTop: 20 }]}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'start',
          gap: 25,
          width: 390,
        }}>
        <AppBackButton />
        <Text style={[AppText.textBodyBlackBigger, { marginLeft: 8 }]}>
          Formas de pagamento
        </Text>
      </View>
      <View
        style={{
          width: 382,
          height: 205,
          borderWidth: 1,
          borderColor: AppColors.black,
          borderRadius: 8,
          paddingTop: 20,
          paddingLeft: 20,
        }}>
        <RadioButton.Group onValueChange={setValue} value={value}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              value="cartao_credito"
              color={AppColors.primaryColor}
            />
            <Text style={AppText.textBodyBlack}>Cartão de crédito</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="cartao_debito" color={AppColors.primaryColor} />
            <Text style={AppText.textBodyBlack}>Cartão de débito</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="pix" color={AppColors.primaryColor} />
            <Text style={AppText.textBodyBlack}>PIX</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="dinheiro" color={AppColors.primaryColor} />
            <Text style={AppText.textBodyBlack}>Dinheiro</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <Text
          style={[
            AppText.textBodyBlackBigger,
            {
              borderBottomWidth: 1,
              borderTopWidth: 1,
              paddingHorizontal: 33,
              paddingVertical: 12,
            },
          ]}>
          Total do pedido: R${total.toFixed(2)}
        </Text>
      </View>
      <AppButton
        iconName="attach-money"
        iconSize={28}
        iconColor={AppColors.white}
        buttonText={'Pagar agora'}
        textStyle={AppText.textBodyWhite}
        buttonColor={AppColors.primaryColor}
        onPress={() => navigation.navigate('OrderCompleted')}
      />
    </SafeAreaView>
  );
};

export default FinalizeOrder;
