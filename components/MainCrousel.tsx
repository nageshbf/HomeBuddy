import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { data, MainCarouselData } from '../data/StaticData';
import CustomCarousel from './CustomCarousel';
import { fontFamily } from '@/utilities/fontsUtility';
import { shadowStyle } from '@/utilities/globalStyle';

const MainCarousel = () => {
    const renderItem = ({ item, index }: { item: MainCarouselData, index: number }) => (
        <View style={{ ...styles.container, marginLeft: index === 0 ? 16 : 10 }}>

            {/* Main Banner */}
            <View style={{
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Image source={item.tag}
                    style={styles.tagStyle} />
                <Image source={item.imageUrl}
                    style={styles.image} />
            </View>

            {/* Title and Play Button */}
            <View style={styles.rowContainer}>
                <Text style={styles.titleStyle}>{item.title}</Text>

                {/* Banner Button */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => item.buttonAction()}>
                    <Text style={styles.buttonLabel}>{item.buttonLabel}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <CustomCarousel
            _data={data}
            _renderItem={renderItem} />
    );
};

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 192,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 24,
        marginBottom: 6,
        marginTop: 10,
        ...shadowStyle

    },
    image: {
        width: 303,
        height: 134,
        borderRadius: 20,
    },
    tagStyle: {
        width: 129,
        height: 26,
        position: 'absolute',
        zIndex: 1,
        top: 6,
        left: 6,
    },
    titleStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily: fontFamily.PlaypenSansBold,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 10,
    },
    buttonStyle: {
        backgroundColor: '#FF5620',
        borderRadius: 14.5,
        width: 55,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 12,
        fontFamily: fontFamily.PlaypenSansBold,
    }
});

export default MainCarousel;