import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Drawer from "./routes/DrawerNav";
import HomeStackScreen from "./routes/HomeStackNav";
import PortfolioStackScreen from "./routes/PortfolioStackNav";
import CustomDrawerContent from "./components/CustomDrawerContent";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
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
        {/* <Drawer.Screen
          name="Portfolio"
          component={PortfolioStackScreen}
          options={{ title: "Ma page" }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
