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
    },
    containerView: {
        width: 20,
        height: 20,
        position: 'absolute', 
        alignSelf: "flex-end",
        borderRadius: 10,
        backgroundColor: 'gray',
        top:20,
        right: 20,
    },
    infoImage: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
    }
})

export default styles;