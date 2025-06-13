import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBackButton from '../components/appBackButton';
import AppTextInput from '../components/appTextInput';
import AppButton from '../components/appButton';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const MyAccount = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={AppStyles.safeAreaView}>
      <AppBackButton />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={AppText.textBodyBlackBigger}>Minha conta</Text>
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <AppTextInput
            title={'Nome'}
            titleStyle={AppText.textBodyBlack}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppTextInput
            title={'Email'}
            titleStyle={AppText.textBodyBlack}
            backgroundColor={AppColors.white}
            width="380"
          />
          <AppTextInput
            title={'Senha'}
            titleStyle={AppText.textBodyBlack}
            backgroundColor={AppColors.white}
            width="380"
          />
        </View>

        <AppButton
          buttonText="Salvar alterações"
          textStyle={AppText.textBodyBlack}
          buttonColor={AppColors.buttonYellowColor}
          onPress={() => {
            console.log('Alterações salvas com sucesso.');
            navigation.goBack();
          }}
        />
        <AppButton
          buttonText="Excluir conta"
          textStyle={AppText.textBodyWhite}
          buttonColor={AppColors.primaryColor}
          onPress={() => {
            console.log('Conta excluída');
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;
