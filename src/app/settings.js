import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBackButton from '../components/appBackButton';
import AppLogo from '../components/appLogo';

import AppStyles from '../styles/appStyles';
import AppText from '../styles/appText';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

const Settings = () => {
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
          justifyContent: 'space-around',
          marginLeft: 25,
        }}>
        <AppLogo />
        <View style={{ flexDirection: 'Column', gap: 30 }}>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="text-format" size={35} />
            <Text style={AppText.textBodyBlack}>
              Fontes e tamanhos do texto
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="monitor" size={35} />
            <Text style={AppText.textBodyBlack}>Aparência e temas</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="notifications-none" size={35} />
            <Text style={AppText.textBodyBlack}>Notificações</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Icon name="copyright" size={20} />
            <Text style={AppText.textBodyBlackSmall}>PizzApp 2025.</Text>
          </View>
          <Text style={AppText.textBodyBlackSmall}>
            Todos os direitos reservados.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
