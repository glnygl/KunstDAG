import { View, Image, TouchableOpacity } from "react-native";
import ArtTitle from '../ArtTitle'
import styles from './style'
import { ArtObject } from "../../models/ArtworksModel";
import { ArtObjectDetail } from "../../models/ArtworkDetailModel";

export type ArtCoverProps = {
    artwork: ArtObject;
    artworkDetail?: ArtObjectDetail;
}

export default function ArtCover({artwork, artworkDetail}: ArtCoverProps) {

    function goToZoom() {
        return (
            console.log(artwork)
        );
    }

    return (
        <View>
            <TouchableOpacity onPress={goToZoom} activeOpacity={1}>
                <Image source={{ uri: artwork.webImage?.url}} style={styles.mainImage}></Image>
                <ArtTitle artwork={artwork} artworkDetail={artworkDetail}></ArtTitle>
            </TouchableOpacity >
        </View>
    );
}