import React, { useState } from 'react'
import { View, SafeAreaView, FlatList, Dimensions } from 'react-native'
import Painters from '../../PaintersData'
import { Painter } from '../../models/PainterModel'
import BannerView from '../../components/BannerView'


export default function ArtistsView() {

    const [painters, setPainters] = useState<Painter[]>(Painters)
    const { width, height } = Dimensions.get('window')

    return (
         <SafeAreaView>
               <View style = {{backgroundColor: 'white'}}>
                <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}
                    data={painters}
                    renderItem={({ item }) =>
                        <BannerView item={item}></BannerView>}
                />
            </View>
         </SafeAreaView>
    )
}