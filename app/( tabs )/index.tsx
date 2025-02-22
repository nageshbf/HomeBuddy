import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { colors, textColors } from '../../utilities/colors';
import HomeHeader from '@/components/HomeHeader';
import MainCarousel from '../../components/MainCrousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ClassMemories from '@/components/ClassMemories';
import Explore from '@/components/Explore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '@/utilities/fontsUtility';
import Content from '@/components/Content';
import Progress from '@/components/Progress';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Component */}
        <HomeHeader />

        {/* Main Carousel */}
        <MainCarousel />

        <Progress />

        {/* Class Memories */}
        <ClassMemories />

        {/* Explore */}
        <Explore />

        {/* Content */}
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  }
});
