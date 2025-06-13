import { SafeAreaView } from 'react-native-safe-area-context';

import AppItemDetails from '../components/appItemDetails';

import AppColors from '../styles/appColors';
import AppStyles from '../styles/appStyles';

import { useFonts, Genos_600SemiBold } from '@expo-google-fonts/genos';
import { useRoute } from '@react-navigation/native';

const PizzaDetails = () => {
  const route = useRoute();
  const { id, path, flavor, price, description } = route.params;

  let [fontsLoaded] = useFonts({
    Genos_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={[
        AppStyles.safeAreaView,
        { backgroundColor: AppColors.grayBackgroundColorTextInput },
      ]}>
      <AppItemDetails
        id={id}
        path={path}
        flavor={flavor}
        price={price}
        description={description}
      />
    </SafeAreaView>
  );
};

export default PizzaDetails;
