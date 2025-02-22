import { View, StyleSheet, Image, Pressable } from 'react-native';

export default function HomeHeader() {
    return (
        <View style={styles.rowContainer}>
            {/* Brand Logo */}
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../assets/images/HomeBuddy/HomeBuddyLogo.png')}
                    style={styles.logoStyle} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Pressable
                    onPress={() => alert('Mic Pressed')}
                    style={styles.backgrouldCircle}>
                    <Image source={require('../assets/images/HomeBuddy/Mic.png')}
                        style={styles.actionIcon}
                    />
                </Pressable>

                <Pressable
                    onPress={() => alert('Notification Pressed')}
                    style={styles.backgrouldCircle}>
                    <Image source={require('../assets/images/HomeBuddy/notification.png')}
                        style={styles.actionIcon}
                    />
                </Pressable>

                <Pressable
                    onPress={() => alert('Chat Pressed')}
                    style={styles.backgrouldCircle}>
                    <Image source={require('../assets/images/HomeBuddy/chat.png')}
                        style={styles.actionIcon}
                    />
                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 10,
    },
    logoStyle: {
        width: 63,
        height: 43
    },
    actionIcon: {
        width: 24,
        height: 24
    },
    backgrouldCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#E8EAFF",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    }
});