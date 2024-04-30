import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        width: (width) / 2.0,
        height: 200,
        resizeMode: 'cover',
    }
})

export default styles;