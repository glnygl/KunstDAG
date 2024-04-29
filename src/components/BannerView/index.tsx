import { Image, Text, TouchableOpacity } from 'react-native'
import { Painter } from '../../models/PainterModel'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type BannerViewProps = {
  painter: Painter;
}

function BannerView({painter}:BannerViewProps) {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const navigateArtworks = () => {
    navigation.navigate('ArtworksView', { painter });
  }

  return (
    <TouchableOpacity onPress={navigateArtworks} activeOpacity={1}>
      <Image source={{ uri: painter.src }} style={styles.image}></Image>
      <Text style={styles.title}>{painter.name}</Text>
    </TouchableOpacity>
  )
}

export default BannerView

