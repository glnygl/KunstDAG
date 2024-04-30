import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Painter } from './models/PainterModel';
import { ArtObject } from './models/ArtworksModel';

export type RootStackParamList = {
    ArtistsView: undefined;
    ArtworksView: {painter: Painter};
    ArtworkDetailView: {artwork: ArtObject};
  };

export type ArtistsViewProps = NativeStackScreenProps<RootStackParamList, 'ArtistsView'>;
export type ArtworksViewProps = NativeStackScreenProps<RootStackParamList, 'ArtworksView'>;
export type ArtworkDetailViewProps = NativeStackScreenProps<RootStackParamList, 'ArtworkDetailView'>;