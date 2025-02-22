import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const CustomCarousel = (props: any) => {
    const { _data, _renderItem } = props;

    return (
        <FlatList
            data={_data}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            //pagingEnabled
            showsHorizontalScrollIndicator={true}
          //  style={styles.carousel}
            contentContainerStyle={{ flexGrow: 1 }}
            ListFooterComponent={<View style={{ width: 20 }} />}
        />
    );
};

const styles = StyleSheet.create({
    // carousel: {
    //     flexGrow: 0,
    // }
});

export default CustomCarousel;