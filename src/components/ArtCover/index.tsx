import { View, Image, TouchableOpacity } from "react-native";
import ArtTitle from '../ArtTitle'
import styles from './style'
import { ArtObject } from "../../models/ArtworksModel";
import { ArtObjectDetail } from "../../models/ArtworkDetailModel";
import * as Helper from '../../Helper'

export type ArtCoverProps = {
    artwork: ArtObject;
    artworkDetail?: ArtObjectDetail;
}

export default function ArtCover({ artwork, artworkDetail }: ArtCoverProps) {

    return (
        <View>
            <Image source={{ uri: artwork.webImage?.url }} style={styles.mainImage}></Image>
            <TouchableOpacity onPress={() => Helper.openUrl(artwork.links.web)} style={styles.containerView}>
                <Image source={require('./../../../src/info.png')} style={styles.infoImage} />
            </TouchableOpacity>
            <ArtTitle artwork={artwork} artworkDetail={artworkDetail}></ArtTitle>
        </View>
    );
}