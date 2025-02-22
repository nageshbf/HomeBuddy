import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MainCarouselData } from '../data/StaticData';
import CustomCarousel from './Carousel';
import { fontFamily } from '@/utilities/utility';
import { shadowStyle } from '@/utilities/utility';

type Grid = MainCarouselData[]
const VerticalGrid = (props: { _GridData: Grid, _SectionName?: string }) => {
    const { _GridData, _SectionName } = props;

    const renderItem = ({ item, index }: { item: MainCarouselData, index: number }) => (
        <View style={{ ...styles.container, marginLeft: index === 0 ? 16 : 10, marginTop: _SectionName ? 0 : 14 }}>

            {/* Main Banner */}
            <View style={{
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Image source={item.tag}
                    style={{...styles.tagStyle, width: _SectionName ? 95 : 129}} />
                <Image source={item.imageUrl}
                    style={styles.image} />
            </View>

            {/* Title and Button Container*/}
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
        <View>
            {_SectionName ? <Text style={styles.headerStyle}>{_SectionName}</Text> : null}
            <CustomCarousel
                _data={_GridData}
                _renderItem={(renderItem)} />
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
        // marginTop: 10,
    },
    container: {
        width: 320,
        height: 192,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 24,
        marginBottom: 6,
        ...shadowStyle
    },
    image: {
        width: 303,
        height: 134,
        borderRadius: 20,
    },
    tagStyle: {
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

export default VerticalGrid;