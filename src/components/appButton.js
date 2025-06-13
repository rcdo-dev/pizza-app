import { View, Pressable, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AppStyles from '../styles/appStyles';

const AppButton = ({
  iconName,
  iconSize,
  iconColor,
  buttonText,
  buttonColor,
  textStyle,
  onPress,
}) => {
  return (
    <View>
      <Pressable
        style={AppStyles.appButton}
        backgroundColor={buttonColor}
        onPress={onPress}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text style={textStyle}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AppButton;
