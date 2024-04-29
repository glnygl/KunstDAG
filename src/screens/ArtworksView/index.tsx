import React from 'react'
import { Text, View } from 'react-native'
import { Painter } from '../../models/PainterModel'
import { useRoute } from '@react-navigation/native';

export default function ArtworksView() {
    const route = useRoute();
    const { painter } = route.params as { painter: Painter };

    return (
        <View style={{ height: 300, backgroundColor: 'red' }}>
            <Text style={{ color: '#fff' }}>{painter?.name}</Text>
        </View>
    )
}