import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/utilities/colors';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    'PlaypenSansThin': require('./../assets/fonts/PlaypenSans-Thin.ttf'),
    'PlaypenSansRegular': require('./../assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSansBold': require('./../assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSansLight': require('./../assets/fonts/PlaypenSans-Light.ttf'),
    'PlaypenSansMedium': require('./../assets/fonts/PlaypenSans-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded ) {
    return <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ActivityIndicator size="large" />
    </View>
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="( tabs )" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" backgroundColor={colors.primary} />

    </>
  );
}
