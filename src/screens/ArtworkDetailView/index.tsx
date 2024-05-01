import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from './style';
import ArtCover from '../../components/ArtCover'
import { ArtObject } from '../../models/ArtworksModel';
import { ArtworkDetailModel } from '../../models/ArtworkDetailModel';

export default function ArtworkDetailView() {

    const route = useRoute();
    const { artwork } = route.params as { artwork: ArtObject };
    const [artworkDetail, setArtworkDetail] = useState<ArtworkDetailModel>();;

    useEffect(() => {
        fetch(`https://www.rijksmuseum.nl/api/en/collection/${artwork.objectNumber}?key=0fiuZFh4`)
            .then(response => response.json())
            .then((data: ArtworkDetailModel) => setArtworkDetail(data))
    }, [artworkDetail]);

    return (
        <SafeAreaView>
            <View style={{backgroundColor: 'white'}}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <ArtCover artwork={artwork} artworkDetail={artworkDetail?.artObject}></ArtCover>
                <Text style={{ padding: 12 }} >{artworkDetail?.artObject.plaqueDescriptionEnglish ?? artworkDetail?.artObject.description}</Text>
            </ScrollView>
            </View>
        </SafeAreaView>
    );
}
