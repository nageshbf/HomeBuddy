import React from 'react';
import { FlatList, Platform, View } from 'react-native';

const CustomCarousel = (props: any) => {
    const { _data, _renderItem, _TestID } = props;

    return (
        <FlatList
            testID={`flatlist-${_TestID}`}
            data={_data}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={Platform.OS == "web"}
            contentContainerStyle={{ flexGrow: 1 }}
            ListFooterComponent={<View style={{ width: 20 }} />}
        />
    );
};

export default CustomCarousel;