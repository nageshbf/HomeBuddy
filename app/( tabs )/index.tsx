import { StyleSheet, ScrollView } from 'react-native';
import { colors, TEST_IDS } from '@/utilities/utility';
import HomeHeader from '@/components/HomeHeader';
import VerticalRoundGrid from '@/components/VerticalRoundGrid';
import VerticalRectGrid from '@/components/VerticalRectGrid';
import { SafeAreaView } from 'react-native-safe-area-context';
import Progress from '@/components/Progress';
import VerticalGrid from '@/components/VerticalGrid';
import { classMemories, ClassMemoriesData, contentData, data, exploreData, MainCarouselData } from '@/data/StaticData';

const PROGRESS_BAR_PERCENTAGE = 0.6;

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header Component */}
        <HomeHeader />

        {/* Main Carousel */}
        <VerticalGrid
          _TestID={TEST_IDS.MAIN_CAROUSEL}
          _GridData={data}
          _OnPress={(item: MainCarouselData) => {
            console.log(`${item.buttonLabel} Press`)
          }}
        />

        {/* Progress Bar */}
        <Progress percentage={PROGRESS_BAR_PERCENTAGE} />

        {/* Class Memories */}
        <VerticalRoundGrid
          _TestID={TEST_IDS.CLASS_MEMORIES_CAROUSEL}
          _GridData={classMemories}
          _SectionName='Class Memories'
          _OnPress={(item: ClassMemoriesData) => {
            console.log(`${item.buttonLabel} Press`)
          }}
        />

        {/* Explore */}
        <VerticalRectGrid
          _TestID={TEST_IDS.EXPLORE_CAROUSEL}
          _GridData={exploreData}
          _SectionName='Explore'
        />

        {/* Content */}
        <VerticalGrid
          _TestID={TEST_IDS.CONTENT_CAROUSEL}
          _GridData={contentData}
          _SectionName='Content'
          _OnPress={(item: MainCarouselData) => {
            console.log(`${item.buttonLabel} Press`)
          }}
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
