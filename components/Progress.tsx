import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bar } from 'react-native-progress';
import { fontFamily } from '@/utilities/fontsUtility';

const width = Dimensions.get('window').width - 40;

export default function Progress() {
  const [progress, setProgress] = useState(0.6);

  return (
    <View style={styles.container}>
      {/* Progress Bar Container */}
      <View style={styles.progressBarContainer}>
        {/* Base Progress Bar */}
        <Bar
          progress={progress}
          width={width}
          height={10}
          color="transparent"
          unfilledColor="lightgray"
          borderWidth={0} />

        {/* Gradient Overlay */}
        <LinearGradient
          // colors={['#9A15D8', 'rgba(255, 232, 224, 0)']}
          // start={{ x: 1, y: 0 }} // Equivalent to 270deg
          // end={{ x: 0, y: 0 }}
          // locations={[0.227, 1]}

          colors={['#E8EAFF', '#9A15D8']} // Adjust gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradientOverlay, { width: `${progress * 100}%` }]} // Dynamic width
        />
      </View>

      <Text style={styles.textStyles}>Do Today 30%</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 10,
    marginHorizontal: 16
  },
  progressBarContainer: {
    width: width,
    height: 10,
    position: 'relative',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradientOverlay: {
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 5,
  },
  textStyles: {
    fontSize: 12,
    color: '#9A15D8',
    fontFamily: fontFamily.PlaypenSansBold,
    marginTop: 5,
  },
});

