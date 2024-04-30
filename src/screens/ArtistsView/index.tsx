import React, { useState } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import Painters from '../../PaintersData'
import { Painter } from '../../models/PainterModel'
import BannerView from '../../components/BannerView'


export default function ArtistsView() {

    const [painters, setPainters] = useState<Painter[]>(Painters);

    return (
         <SafeAreaView>
               <View style = {{backgroundColor: 'white'}}>
                <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}
                    data={painters}
                    renderItem={({ item }) =>
                        <BannerView painter={item}></BannerView>}
                />
            </View>
         </SafeAreaView>
    )
}