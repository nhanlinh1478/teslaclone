import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';
const CarItem = (props) => {
 const {name,tagline,image,taglineCTA} = props.car;
    return (
     <View style = {styles.carContainer}>

        <ImageBackground source = {image}
         style ={styles.image}>
         </ImageBackground>

        <View style = {styles.titles}>
          <Text style = {styles.title}>{name}</Text>
          <Text style = {styles.subtitle}>{tagline}
          <Text style = {styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
          
        </View>
      
      <View style = {styles.buttonContainer}>
          <StyleButton 
          type = "primary"
          content = {"Custom Order"}
          onPress = {()=> {console.warn("Custom Order on press")}}
        />
          <StyleButton 
          type = "secondary"
          content = {"Existing inventory"}
          onPress = {()=> {console.warn("Existing inventory on press")}}
        />
      </View>
    </View>
    
    );
}

export default CarItem;