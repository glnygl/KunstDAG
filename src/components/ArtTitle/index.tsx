import { View, Text } from 'react-native';
import styles from './style';
import { ArtCoverProps } from '../ArtCover';

export default function ArtTitle({artwork, artworkDetail}:ArtCoverProps) {
    return (
        <View> 
           <Text style={styles.paintName}> {artwork.title} </Text> 
           <Text style={styles.artistName}> {artwork.principalOrFirstMaker} | {artworkDetail?.dating.presentingDate}</Text>  
        </View>
    );
}