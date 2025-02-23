import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ClassMemoriesData } from '../data/StaticData';
import CustomCarousel from './Carousel';
import { fontFamily } from '@/utilities/utility';
import { shadowStyle } from '@/utilities/utility';

type Grid = ClassMemoriesData[]
const ClassMemories = (props: { _GridData: Grid, _SectionName?: string, _TestID: string, _OnPress: (item: ClassMemoriesData) => void }) => {
    const { _GridData, _SectionName, _TestID, _OnPress } = props;

    const renderItem = ({ item, index }: { item: ClassMemoriesData, index: number }) => (
        <View testID={`list-item-${_TestID}`}
            style={{ ...styles.container, marginLeft: index === 0 ? 16 : 10 }}>

            <View style={styles.rowContainer}>
                <Image source={item.imageUrl}
                    style={styles.image} />

                <View style={styles.rightContainer}>
                    <Text style={styles.titleStyle}>{item.title}</Text>

                    <TouchableOpacity
                        testID={`button-${_TestID}`}
                        style={styles.buttonStyle}
                        onPress={() => _OnPress && _OnPress(item)}>
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
            <Text style={styles.headerStyle}>{_SectionName}</Text>
            <CustomCarousel
                _TestID={_TestID}
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