import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { classMemories, ClassMemoriesData } from '../data/StaticData';
import CustomCarousel from './CustomCarousel';
import { fontFamily } from '@/utilities/fontsUtility';
import { shadowStyle } from '@/utilities/globalStyle';

const ClassMemories = () => {
    const renderItem = ({ item, index }: { item: ClassMemoriesData, index: number }) => (
        <View style={{ ...styles.container, marginLeft: index === 0 ? 16 : 10 }}>

            <View style={styles.rowContainer}>
                <Image source={item.imageUrl}
                    style={styles.image} />

                <View style={styles.rightContainer}>
                    <Text style={styles.titleStyle}>{item.title}</Text>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => item.buttonAction()}>
                        <Text style={styles.buttonLabel}>{item.buttonLabel}</Text>
                        <Image source={require('../assets/images/HomeBuddy/right-arrow.png')}
                            style={{ width: 10, height: 10, marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View>
            <Text style={styles.headerStyle}>Class Memories</Text>
            <CustomCarousel
                _data={classMemories}
                _renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily: fontFamily.PlaypenSansBold,
        marginLeft: 17,
        marginVertical: 8,
    },
    container: {
        width: 192,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 24,
        marginBottom: 6,
        alignItems: 'center',
        justifyContent: 'center',
        ...shadowStyle

    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 64 / 2,
        marginLeft: 9,
    },
    titleStyle: {
        fontSize: 12,
        color: 'black',
        fontFamily: fontFamily.PlaypenSansMedium,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 10,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#FF5620',
        fontSize: 12,
        fontFamily: fontFamily.PlaypenSansBold,
    },
    rightContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 12,
    }
});
export default ClassMemories;