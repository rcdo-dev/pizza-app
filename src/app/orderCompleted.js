import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Applogo from '../components/appLogo';
import AppButton from '../components/appButton';

import AppStyles from '../styles/appStyles';
import AppColors from '../styles/appColors';
import AppText from '../styles/appText';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

import { useCart } from '../hooks/cartContext';

const OrderCompleted = ({ navigation }) => {
  const { clearCart } = useCart();

  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <View
        style={[AppStyles.contentContainerColumn, { marginTop: 50, gap: 48 }]}>
        <Applogo />
        <View>
          <Image
            style={AppStyles.happyFace}
            source={require('../images/happy_face.png')}
          />
        </View>
        <View>
          <Text style={AppText.textBodyBlackBigger}>Pedido realizado</Text>
        </View>
        <View>
          <Text
            style={[
              AppText.textBodyPrimaryColor,
              { fontSize: 24, paddingHorizontal: 25, textAlign: 'center' },
            ]}>
            Sabemos que a sua fome é grande, por isso vamos buscar o máximo de
            eficiência para te atender o mais breve possível.
          </Text>
        </View>
        <View>
          <Text style={AppText.textBodyBlack}>
            Obrigado por comprar com a gente!
          </Text>
        </View>
        <AppButton
          iconName="arrow-back"
          iconColor={AppColors.white}
          iconSize={30}
          buttonText="Voltar para o cardápio"
          textStyle={AppText.textBodyWhite}
          buttonColor={AppColors.primaryColor}
          onPress={() => {
            navigation.navigate('DrawerMenu');
            clearCart();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
