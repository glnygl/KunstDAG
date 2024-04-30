
import { Image, TouchableOpacity } from 'react-native'
import { ArtObject } from '../../models/ArtworksModel';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type ArtworkViewProps = {
    artwork: ArtObject;
}

function ArtworkView({ artwork }: ArtworkViewProps) {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateArtworkDetail = () => {
        navigation.navigate('ArtworkDetailView', { artwork });
    }

    return (
        <TouchableOpacity onPress={navigateArtworkDetail} activeOpacity={1}>
            <Image source={{ uri: artwork.webImage?.url}} style={styles.image}></Image>
        </TouchableOpacity>
    )
}

export default ArtworkView