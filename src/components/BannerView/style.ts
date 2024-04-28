import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
         width: width,
          height: 200,
           resizeMode: 'cover',
    },
    title: {
        color: 'white',
        bottom: 20, 
        left: 12,
        position: 'absolute',
        fontSize: 20,
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 2
   }
})

export default styles;