import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ExploreData } from '../data/StaticData';
import CustomCarousel from './Carousel';
import { fontFamily } from '@/utilities/utility';
import { shadowStyle } from '@/utilities/utility';

type Grid = ExploreData[]
const VerticalRectGrid = (props: { _GridData: Grid, _SectionName?: string }) => {
    const { _GridData, _SectionName } = props;

    const renderItem = ({ item, index }: { item: ExploreData, index: number }) => (
        <View style={{...styles.container, marginLeft: index === 0 ? 16 : 10}}>

            <Image source={item.imageUrl}
                style={styles.image} />

            <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
    );
    return (
        <View>
            {_SectionName ? <Text style={styles.headerStyle}>{_SectionName}</Text> : null} 
            <CustomCarousel
                _data={_GridData}
                _renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily: fontFamily.PlaypenSansBold,
        marginLeft: 16,
        marginVertical: 10,
    },
    container: {
        width: 148,
        height: 112,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 6,
        paddingHorizontal: 8,
        paddingTop: 8,
       ...shadowStyle

    },
    image: {
        width: 132,
        height: 74,
        borderRadius: 8,
    },
    titleStyle: {
        fontSize: 12,
        color: 'black',
        marginTop: 6,
        marginLeft:6,
        fontFamily: fontFamily.PlaypenSansMedium,
    }
});
export default VerticalRectGrid;