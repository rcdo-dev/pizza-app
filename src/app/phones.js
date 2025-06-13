import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBackButton from '../components/appBackButton';
import AppLogo from '../components/appLogo';

import AppText from '../styles/appText';
import AppStyles from '../styles/appStyles';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Phones = () => {
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
          justifyContent: 'space-around',
        }}>
        <AppLogo />
        <Text
          style={[
            AppText.textBodyBlackBigger,
            { marginHorizontal: 35, textAlign: 'center' },
          ]}>
          Entre em contato com a gente e vamos juntos realizar o seu pedido.
        </Text>
        <View style={{ flexDirection: 'Column', gap: 30 }}>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="phone" size={24} />
            <Text style={AppText.textBodyBlack}>11 4644-1234</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="phone" size={24} />
            <Text style={AppText.textBodyBlack}>11 4644-4321</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 25 }}>
            <Icon name="phone-android" size={24} />
            <Text style={AppText.textBodyBlack}>11 4644-3412</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Phones;
