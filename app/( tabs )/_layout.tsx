import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fontFamily } from '@/utilities/fontsUtility';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({

        tabBarLabel: ({ focused, children }) => (focused ?
          <Text style={{
            fontFamily: fontFamily.PlaypenSansBold,
            fontSize: 12,
            color: '#FFF',
            textAlign: 'center',
          }}>{children}</Text> : null),
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#9A15D8',
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
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'home-sharp'} color={color} size={24} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',

          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={"th-list"} color={"#ffffff"} size={24} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'settings'} color={color} size={24} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',

          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={"user-circle"} color={"#ffffff"} size={24} />
          ),
          headerShown: false,
        }}
      />

    </Tabs>
  );
}
