import { colors, textColors } from '@/utilities/colors';
import { fontFamily } from '@/utilities/fontsUtility';
import { Text, View, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
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
