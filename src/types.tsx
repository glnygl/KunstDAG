import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Painter } from './models/PainterModel';

export type RootStackParamList = {
    ArtistsView: undefined;
    ArtworksView: {painter: Painter};
    ArtworkDetailView: undefined;
  };

export type ArtistsViewProps = NativeStackScreenProps<RootStackParamList, 'ArtistsView'>;
export type ArtworksViewProps = NativeStackScreenProps<RootStackParamList, 'ArtworksView'>;
export type ArtworkDetailViewProps = NativeStackScreenProps<RootStackParamList, 'ArtworkDetailView'>;