import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create ({
    mainImage: {
        width: width - 40,
        alignContent: 'center',
        borderRadius: 40,
        resizeMode: 'cover',
        backgroundColor: '#e3e3e3',
        height: 400,
        zIndex: 0
    }
})

export default styles;