import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Sujets from "../screens/Sujets";
import Listes from "../screens/Listes";
import Signets from "../screens/Signets";
import Moments from "../screens/Moments";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Accueil",
        }}
      />
      <HomeStack.Screen
        name="Profil"
        component={Portfolio}
        options={{
          title: "Profil",
        }}
      />
      <HomeStack.Screen name="Listes" component={Listes} />
      <HomeStack.Screen name="Sujets" component={Sujets} />
      <HomeStack.Screen name="Signets" component={Signets} />
      <HomeStack.Screen name="Moments" component={Moments} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
