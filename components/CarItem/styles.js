import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    carContainer:{
    width:'100%',
    height:'100%'
  },
  titles:{
    marginTop:'30%',
    width:'100%',
    alignItems:'center'

  },
  title:{
    fontSize:50,
    fontWeight:'500'
   
  },
  subtitle:{
    fontSize:16,
    color:"#5c5e62"
  },
  subtitleCTA:{
    textDecorationLine:'underline'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    position:"absolute"
  }, 
  buttonContainer:{
    width:'100%',
    bottom:50,
    position:'absolute'
  }
})
export default styles;