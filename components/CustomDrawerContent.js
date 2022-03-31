import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContentContainer}>
          <View style={styles.userInfoContainer}>
            <View style={styles.userInfoDetails}>
              <Avatar.Image
                source={{
                  uri: "https://www.wantaghlibrary.org/wp-content/uploads/2016/04/cropped-dog.jpg",
                }}
                size={90}
              />
            </View>
            <View style={styles.name}>
              <Title style={styles.title}>Malek Malzako</Title>
              <Caption style={styles.caption}>@MalekMalzako</Caption>
            </View>
            <View style={styles.followers}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>
                  24
                </Paragraph>
                <Caption style={styles.caption}>Abonnements</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>
                  48
                </Paragraph>
                <Caption style={styles.caption}>Abonnées</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Profil"
              icon={({ color, size }) => (
                <MaterialIcons name="face" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Profil")}
            />
            <DrawerItem
              label="Listes"
              icon={({ color, size }) => (
                <MaterialIcons name="list-alt" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Listes")}
            />
            <DrawerItem
              label="Sujets"
              icon={({ color, size }) => (
                <MaterialIcons name="comment" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Sujets")}
            />
            <DrawerItem
              label="Signets"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="bookmark-border"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => props.navigation.navigate("Signets")}
            />
            <DrawerItem
              label="Moments"
              icon={({ color, size }) => (
                <MaterialIcons name="flash-on" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Moments")}
            />
          </Drawer.Section>
          <Drawer.Section title="Réglages">
            <DrawerItem
              label="Paramètres de confidentialité"
              icon={({ color, size }) => (
                <MaterialIcons name="settings" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Settings")}
            />
            <TouchableRipple onPress={toggleDarkTheme}>
              <View style={styles.settings}>
                <Text>Mode sombre</Text>
                <View pointerEvents="none">
                  <Switch value={isDark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.logoutSection}>
        <DrawerItem
          label="Déconnexion"
          icon={({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          )}
          onPress={() => alert("Déconnecté")}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContentContainer: {
    flex: 1,
  },
  userInfoContainer: {
    paddingLeft: 20,
  },
  userInfoDetails: {
    marginTop: 15,
  },
  name: {
    marginTop: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 19,
    marginTop: 5,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 15,
  },
  followers: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 9,
  },
  paragraph: {
    fontWeight: "bold",
  },
  drawerSection: {
    marginTop: 19,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  logoutSection: {
    marginBottom: 19,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
});
export default CustomDrawerContent;
