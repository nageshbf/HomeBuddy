import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fontFamily } from '@/utilities/utility';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Custom Tab Button for the Center Icon
import { GestureResponderEvent } from 'react-native';

const CustomTabButton = ({ children, onPress, accessibilityState }: { children: React.ReactNode, onPress?: (event: GestureResponderEvent) => void, accessibilityState?: { selected?: boolean } }) => (
  <>


    <TouchableOpacity style={accessibilityState?.selected ? { ...styles.customButton, top: -28 } : styles.customButton}
      onPress={onPress} accessibilityState={accessibilityState} >
      {
        accessibilityState?.selected ?
          <View style={styles.halfCircle} /> : null
      }
      <View style={styles.customButtonInner}>{children}</View>
    </TouchableOpacity >
  </>
);

const CustomButtonLabel = (Label: string) => {
  return <Text style={{
    fontFamily: fontFamily.PlaypenSansBold,
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
  }}>{Label}</Text>
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={({ route }) => ({

        // tabBarLabel: ({ focused, children }) => (focused ?
        //   <Text style={{
        //     fontFamily: fontFamily.PlaypenSansBold,
        //     fontSize: 12,
        //     color: '#FFF',
        //     textAlign: 'center',
        //   }}>{children}</Text> : null),
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#9A15D8',
          height: 60,
        },
      })}

    // screenOptions={{
    //   tabBarActiveTintColor: '#FFF',
    //   headerStyle: {
    //     backgroundColor: '#9A15D8',
    //   },
    //   headerShadowVisible: false,
    //   headerTintColor: '#fff',
    //   tabBarStyle: {
    //     backgroundColor: '#9A15D8',
    //   },
    // }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                {/* <Ionicons name={'home-sharp'} color={"#FFFFFF"} size={24} /> */}
                <Image source={require('../../assets/images/HomeBuddy/Home-tab.png')}
                  style={props.accessibilityState?.selected ? styles.activeTabLogo : styles.inactiveTabLogo}
                  resizeMode="contain"
                />
                {
                  props.accessibilityState?.selected ?
                    CustomButtonLabel('Home') : null
                }
              </CustomTabButton>
            )
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          title: 'Activity',

          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                {/* <FontAwesome5 name={"th-list"} color={"#ffffff"} size={24} /> */}
                <Image source={require('../../assets/images/HomeBuddy/activity-tab.png')}
                  style={props.accessibilityState?.selected ? styles.activeTabLogo : styles.inactiveTabLogo}
                  resizeMode="contain"
                />
                {
                  props.accessibilityState?.selected ?
                    CustomButtonLabel('Activity') : null
                }
              </CustomTabButton>
            )
          },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',

          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                {/* <Ionicons name={'settings'} color={"#FFFFFF"} size={24} /> */}
                <Image source={require('../../assets/images/HomeBuddy/setting-tab.png')}
                  style={props.accessibilityState?.selected ? styles.activeTabLogo : styles.inactiveTabLogo}
                  resizeMode="contain"
                />
                {
                  props.accessibilityState?.selected ?
                    CustomButtonLabel('Settings') : null
                }
              </CustomTabButton>
            )
          },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',

          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                <FontAwesome5 name={"user-circle"} color={"#ffffff"} size={24} />
                {
                  props.accessibilityState?.selected ?
                    CustomButtonLabel('Profile') : null
                }
              </CustomTabButton>
            )
          },
          headerShown: false,
        }}
      />

    </Tabs>
  );
}


const styles = StyleSheet.create({
  customButton: {
    // top: -20, // Move button up
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    top: -10, // Move button up
    backgroundColor: '#9A15D8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfCircle: {
    width: 62,
    height: 31, // Half of width
    borderTopLeftRadius: 31, // Half of width
    borderTopRightRadius: 31, // Half of width
    bottom: -20,
    zIndex: -1,
    backgroundColor: '#9A15D8',
  },
  customButtonInner: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabLogo: {
    width: 27,
    height: 27
  },
  inactiveTabLogo: {
    width: 24,
    height: 24
  }
})