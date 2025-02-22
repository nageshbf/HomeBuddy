import React from 'react';
import { FlatList, View } from 'react-native';

const CustomCarousel = (props: any) => {
    const { _data, _renderItem } = props;

    return (
        <FlatList
            data={_data}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{ flexGrow: 1 }}
            ListFooterComponent={<View style={{ width: 20 }} />}
        />
    );
};

export default CustomCarousel;