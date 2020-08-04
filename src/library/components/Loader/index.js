import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Loader = ({isLoaderVisible}) => {

    if(!isLoaderVisible) return null

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )}

export default Loader