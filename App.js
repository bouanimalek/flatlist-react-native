import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import HomeStackScreen from "./routes/HomeStackNav";
import PortfolioStackScreen from "./routes/PortfolioStackNav";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "grey",
          width: "100%",
        }}
        drawerContentOptions={{
          activeTintColor: "white",
          inactiveTintColor: "yellow",
          itemStyle: {
            marginVertical: 30,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Accueil",
            drawerIcon: () => (
              <MaterialIcons name="home" size={18} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="Portfolio"
          component={PortfolioStackScreen}
          options={{ title: "Ma page" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
