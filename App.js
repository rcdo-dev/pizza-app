import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { CartProvider } from './src/hooks/cartContext';

import Login from './src/app/login';
import Register from './src/app/register';
import Menu from './src/app/menu';
import Phones from './src/app/phones';
import MyAccount from './src/app/myAccount';
import Settings from './src/app/settings';
import EmptyCart from './src/app/emptyCart';
import FullCart from './src/app/fullCart';
import PizzaDetails from './src/app/pizzaDetails';
import FinalizeOrder from './src/app/finalizeOrder';
import OrderCompleted from './src/app/orderCompleted';

import AppDrawerContent from './src/components/appDrawerContent';

import AppColors from './src/styles/appColors';
import AppText from './src/styles/appText';

const Drawer = createDrawerNavigator();
function DrawerNavigator() {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: AppColors.primaryColor, width: 280 },
        drawerLabelStyle: AppText.textBodyWhite,
      }}>
      <Drawer.Screen
        name="Cardápio"
        component={Menu}
        options={{
          drawerIcon: (_) => (
            <Icon
              name="restaurant-menu"
              size={24}
              style={{ color: AppColors.white }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Meu Carrrinho"
        component={Menu}
        options={{
          drawerIcon: (_) => (
            <Icon
              name="shopping-cart"
              size={24}
              style={{ color: AppColors.white }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Telefone"
        component={Phones}
        options={{
          drawerIcon: (_) => (
            <Icon name="phone" size={24} style={{ color: AppColors.white }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Minha Conta"
        component={MyAccount}
        options={{
          drawerIcon: (_) => (
            <Icon name="person" size={24} style={{ color: AppColors.white }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DrawerMenu" component={DrawerNavigator} />
      <Stack.Screen name="Phones" component={Phones} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EmptyCart" component={EmptyCart} />
      <Stack.Screen name="FullCart" component={FullCart} />
      <Stack.Screen name="PizzaDetails" component={PizzaDetails} />
      <Stack.Screen name="FinalizeOrder" component={FinalizeOrder} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
}
