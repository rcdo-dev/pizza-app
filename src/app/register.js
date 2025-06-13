import { ScrollView, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppLogo from '../components/appLogo';
import AppButton from '../components/appButton';
import AppTextInput from '../components/appTextInput';
import AppBackButton from '../components/appBackButton';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

import {
  ENTER_YOUR_NAME,
  ENTER_YOUR_PASSWORD,
  EMAIL_PLACEHOLDER,
} from '../js/loginService';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const Register = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <ScrollView style={AppStyles.scrollView}>
        <View style={AppStyles.contentContainerColumn}>
          <View>
            <ImageBackground
              style={AppStyles.pizzaCut}
              source={require('../images/pizza_cut.png')}>
              <AppBackButton />
            </ImageBackground>
          </View>
          <AppLogo />
          <AppTextInput
            title={'Nome'}
            titleStyle={AppText.textBodyWhite}
            placeholder={ENTER_YOUR_NAME}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppTextInput
            title={'Email'}
            titleStyle={AppText.textBodyWhite}
            placeholder={EMAIL_PLACEHOLDER}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppTextInput
            title={'Senha'}
            titleStyle={AppText.textBodyWhite}
            placeholder={ENTER_YOUR_PASSWORD}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppButton
            buttonColor={AppColors.buttonYellowColor}
            iconName="check-circle-outline"
            iconSize={28}
            iconColor={AppColors.black}
            textStyle={AppText.textBodyBlack}
            buttonText="Cadastrar"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
