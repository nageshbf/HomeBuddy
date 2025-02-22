import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Card: React.FC = () => {
    return (
        <View style={styles.card}>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});

export default Card;