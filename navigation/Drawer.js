import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Tabs from "./Tabs";
import styled from "styled-components";

const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ProfileName = styled.Text`
  font-size: 19px;
  margin-left: 8px;
  font-weight: normal;
  width: 100%;
`;
const ProfileNameBold = styled.Text`
  font-weight: bold;
`;
const ProfileImg = styled.Image`
  width: 76px;
  height: 76px;
`;

const DrawerNav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label=""
        onPress={() => alert("Link to help")}
        icon={({}) => (
          <ProfileContainer>
            <ProfileImg source={require("../img/profile-img.png")} />
            <ProfileName>
              Hello, <ProfileNameBold>Mike!</ProfileNameBold>
            </ProfileName>
            {/* <MaterialIcons
              name="face"
              size={60}
              color="#999"
              style={{ borderColor: "blue" }}
            /> */}
          </ProfileContainer>
        )}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Profile"
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <DrawerNav.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerLabel: "My Routine",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "#efefef",
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
