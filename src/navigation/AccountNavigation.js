import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screen/Account";
const Stack = createNativeStackNavigator();
const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mi cuenta" component={Account} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
