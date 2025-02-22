import { StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/utilities/utility';
import HomeHeader from '@/components/HomeHeader';
import VerticalRoundGrid from '@/components/VerticalRoundGrid';
import VerticalRectGrid from '@/components/VerticalRectGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import Progress from '@/components/Progress';
import VerticalGrid from '@/components/VerticalGrid';
import { classMemories, contentData, data, exploreData } from '@/data/StaticData';

const PROGRESS_BAR_PERCENTAGE = 0.6;

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Component */}
        <HomeHeader />

        {/* Main Carousel */}
        <VerticalGrid
          _GridData={data}
        />

        {/* Progress Bar */}
        <Progress percentage={PROGRESS_BAR_PERCENTAGE} />

        {/* Class Memories */}
        <VerticalRoundGrid
          _GridData={classMemories}
          _SectionName='Class Memories'
        />

        {/* Explore */}
        <VerticalRectGrid
          _GridData={exploreData}
          _SectionName='Explore'
        />

        {/* Content */}
        <VerticalGrid
          _GridData={contentData}
          _SectionName='Content'
        />

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
