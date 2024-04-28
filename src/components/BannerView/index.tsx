import { Image, Text, TouchableOpacity } from 'react-native'
import {Painter} from '../../models/PainterModel'
import styles from './style';

type painterProps = {
    item: Painter
}

function index({item}:painterProps) {
  return (
    <TouchableOpacity onPress={navigateArtworks} activeOpacity={1}>
      <Image source={{uri: item.src}} style= {styles.image}></Image>
      <Text style= {styles.title}>{item.name}</Text>
    </TouchableOpacity>
  )
}

function navigateArtworks () {
    return (
        console.log('navigate artworks')
    );
}


export default index