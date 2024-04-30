import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, SafeAreaView, FlatList } from 'react-native'
import { Painter } from '../../models/PainterModel'
import { useRoute } from '@react-navigation/native';
import { ArtworksModel } from '../../models/ArtworksModel';
import ArtworkView from '../../components/ArtworkView';
import styles from './style';


export default function ArtworksView() {
    const [artworks, setArtworks] = useState<ArtworksModel>();;
    const route = useRoute();
    const { painter } = route.params as { painter: Painter };

    useEffect(() => {
        fetch(`https://www.rijksmuseum.nl/api/en/collection?key=0fiuZFh4&involvedMaker=${painter.involvedMaker}`)
            .then(response => response.json())
            .then((data: ArtworksModel) => setArtworks(data))
    }, [artworks]);

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white' }}>
                {/* <ActivityIndicator size={'large'} color={'red'} style= {styles.loading}></ActivityIndicator> */}
                <FlatList numColumns={2} showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}
                    data={artworks?.artObjects}
                    renderItem={({ item }) =>
                        <ArtworkView artwork={item}></ArtworkView>
                    }
                />
            </View>
        </SafeAreaView>
    )
}