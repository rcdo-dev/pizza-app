import { View, Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AppColors from '../styles/appColors';

const AppBackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 5, marginLeft: 8}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={45} color={AppColors.black} />
      </Pressable>
    </View>
  );
};

export default AppBackButton;
