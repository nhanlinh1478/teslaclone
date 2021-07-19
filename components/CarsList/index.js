import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles'   
import CarItem from '../CarItem';
import Cars from './Cars';
const  CarsList = (props) => {
    return (
       <View style = {styles.container}>
            <FlatList data={Cars} 
                renderItem = {({item}) => < CarItem car ={item} /> }
        />
       </View>
    );
}

export default CarsList;