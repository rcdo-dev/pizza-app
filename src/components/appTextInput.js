import { View, TextInput, Text } from 'react-native';

import AppStyles from '../styles/appStyles';
import AppColors from '../styles/appColors';

const AppTextInput = ({ title, placeholder, titleStyle, backgroundColor, width, isPasswordField}) => {
  return (
    <View style={AppStyles.appTextInputContainer}>
      {title && (<Text style={[titleStyle, {marginLeft: 20}]}>{title}</Text>)}
      <TextInput
        style={[AppStyles.appTextInput, {backgroundColor: backgroundColor}, {width: width}]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.grayTextColor}
        secureTextEntry={isPasswordField}
      />
    </View>
  );
};

export default AppTextInput;
