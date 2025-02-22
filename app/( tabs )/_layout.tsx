import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fontFamily } from '@/utilities/fontsUtility';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Custom Tab Button for the Center Icon
import { GestureResponderEvent } from 'react-native';

const CustomTabButton = ({ children, onPress, accessibilityState }: { children: React.ReactNode, onPress?: (event: GestureResponderEvent) => void, accessibilityState?: { selected?: boolean } }) => (
  <TouchableOpacity style={accessibilityState?.selected ? styles.activeButton : styles.customButton}
    onPress={onPress} accessibilityState={accessibilityState} >
    <View style={styles.customButtonInner}>{children}</View>
  </TouchableOpacity >
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
          // tabBarIcon: ({ color, focused }) => (
          //   <Ionicons name={'home-sharp'} color={color} size={24} />
          // ),
          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                <Ionicons name={'home-sharp'} color={"#FFFFFF"} size={24} />
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
        name="About"
        options={{
          title: 'About',

          // tabBarIcon: ({ color, focused }) => (
          //   <FontAwesome5 name={"th-list"} color={"#ffffff"} size={24} />
          // ),
          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                <FontAwesome5 name={"th-list"} color={"#ffffff"} size={24} />
                {
                  props.accessibilityState?.selected ?
                    CustomButtonLabel('About') : null
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
          // tabBarIcon: ({ color, focused }) => (
          //   <Ionicons name={'settings'} color={color} size={24} />
          // ),
          tabBarButton: (props) => {
            return (
              <CustomTabButton {...props}>
                <Ionicons name={'settings'} color={"#FFFFFF"} size={24} />
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
          // tabBarIcon: ({ color, focused }) => (
          //   <FontAwesome5 name={"user-circle"} color={"#ffffff"} size={24} />
          // ),
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
  customButtonInner: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})