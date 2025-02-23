import { colors, textColors } from '@/utilities/utility';
import { fontFamily } from '@/utilities/utility';
import { Text, View, StyleSheet } from 'react-native';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: textColors.primary,
    fontFamily: fontFamily.PlaypenSansBold,
    fontSize: 24,
  },
});
