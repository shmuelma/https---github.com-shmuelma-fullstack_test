// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUserScreen from './screens/AddUserScreen';
import UserScreen from './screens/UserScreen';
import UpdateUser from './screens/UpdateUser';
import signup from './components/signup';
import login from './components/login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}

    >
      <Stack.Screen
        name="signup"
        component={signup}
        options={{ title: 'signup' }}
      />

      <Stack.Screen
        name="login"
        component={login}
        options={{ title: 'login' }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ title: 'Users List' }}
      />
      <Stack.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{ title: 'Add User' }}
      />
      <Stack.Screen
        name="UpdateUser"
        component={UpdateUser}
        options={{ title: 'Update User' }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}