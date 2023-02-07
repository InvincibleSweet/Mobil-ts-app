import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-ionicons';
// screens
import Home from '../screens/Home';
import Discover from '../screens/Discover';
import Bookmark from '../screens/Bookmark';

//screen names
const home = 'Home';
const discoverItem = 'Discover';
const bookMark = 'Bookmark';

//react native reanimated, react native screens, react native safe area context react native community/ masked view

// tab
const Tab: any = createBottomTabNavigator();

// theme

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const ContainerScreen = () => {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //       tabBarShowLabel: false,
    //       tabBarOptions: {{style={
    //         bakcgroundColor: 'green'
    //       }}},
    //     }}
    //   >
    //     <Tab.Screen name="home" component={Home} />
    //     <Tab.Screen name="discover" component={Discover} />
    //     <Tab.Screen name="bookmark" component={Bookmark} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName={home}
        barStyle={{ backgroundColor: 'tomato' }}
        screenOption={({ route }: { route: any }) => ({
          tabBarIcon: ({ focused, color, size }: { focused: any; color: any; size: any }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === discoverItem) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === bookMark) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={home} component={Home} options={{ headerShown: false }} />
        <Tab.Screen name={discoverItem} component={Discover} options={{ headerShown: false }} />
        <Tab.Screen name={bookMark} component={Bookmark} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});
export default ContainerScreen;
