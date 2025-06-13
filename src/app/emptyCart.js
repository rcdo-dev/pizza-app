import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppButton from '../components/appButton';

import AppStyles from '../styles/appStyles';
import AppColors from '../styles/appColors';
import AppText from '../styles/appText';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const EmptyCart = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <View
        style={[AppStyles.contentContainerColumn, { marginTop: 50, gap: 90 }]}>
        <View>
          <Image
            style={AppStyles.happyFace}
            source={require('../images/angry_face.png')}
          />
        </View>
        <View>
          <Text style={[AppText.textBodyBlack, {textAlign: 'center', marginHorizontal: 10}]}>
            Continue comprando para encher o seu carrinho.
          </Text>
        </View>
        <View>
          <Text
            style={[
              AppText.textBodyRed,
              { fontSize: 20, paddingHorizontal: 25, textAlign: 'center' },
            ]}>
            Sabemos que você gosta de pizza e que a sua fome é grande!
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
      </View>
    </SafeAreaView>
  );
};

export default EmptyCart;
