import React from "react";
import { Easing } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";

const Stack = createStackNavigator();
const openConfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 35,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 900,
    easing: Easing.ease,
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "slateblue" },
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
          headerTintColor: "white",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          // transitionSpec: {
          //   open: openConfig,
          //   close: closeConfig,
          // },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: { backgroundColor: route.params.color },
          })}
          // options={{
          //   headerStyle: { backgroundColor: "slateblue" },
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     textTransform: "uppercase",
          //   },
          //   headerTintColor: "white",
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
