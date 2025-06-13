import { ScrollView, Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppLogo from '../components/appLogo';
import AppButton from '../components/appButton';
import AppTextInput from '../components/appTextInput';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

import { EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER } from '../js/loginService';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const Login = ({ navigation }) => {
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
            <Image
              style={AppStyles.pizzaCut}
              source={require('../images/pizza_cut.png')}
            />
          </View>
          <AppLogo />
          <View>
            <Text style={AppText.textBodyWhite}>Seu primeiro pedido?</Text>
          </View>
          <AppButton
            buttonColor={AppColors.buttonBlueColor}
            iconName="person-outline"
            iconSize={28}
            iconColor={AppColors.white}
            textStyle={AppText.textBodyWhite}
            buttonText="Cadastre-se"
            onPress={() => navigation.navigate('Register')}
          />
          <View>
            <Text style={AppText.textBodyWhite}>Já é cadastrado?</Text>
          </View>
          <AppTextInput
            placeholder={EMAIL_PLACEHOLDER}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppTextInput
            placeholder={PASSWORD_PLACEHOLDER}
            isPasswordField={true}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppButton
            buttonColor={AppColors.buttonYellowColor}
            iconName="check-circle-outline"
            iconSize={28}
            iconColor={AppColors.black}
            textStyle={AppText.textBodyBlack}
            buttonText="Entrar"
            onPress={() => navigation.navigate('DrawerMenu')}
          />
          <View>
            <Text style={AppText.smallUnderlinedBodyText}>
              Esqueceu a senha?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
