import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, SafeAreaView, FlatList } from 'react-native'
import { Painter } from '../../models/PainterModel'
import { useRoute } from '@react-navigation/native';
import { ArtworksModel } from '../../models/ArtworksModel';
import ArtworkView from '../../components/ArtworkView';
import LoadingView from '../../components/LoadingView';


export default function ArtworksView() {
    const [artworks, setArtworks] = useState<ArtworksModel>();;
    const route = useRoute();
    const { painter } = route.params as { painter: Painter };
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://www.rijksmuseum.nl/api/en/collection?key=0fiuZFh4&involvedMaker=${painter.involvedMaker}`)
            .then(response => response.json())
            .then((data: ArtworksModel) => {
                setArtworks(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <LoadingView></LoadingView>
        )
    } else {
        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View>
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
}