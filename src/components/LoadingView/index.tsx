import { ActivityIndicator} from 'react-native';
import styles from './style';

export default function LoadingView() {
    return (
          <ActivityIndicator size={'large'} color={'red'} style={styles.loading}></ActivityIndicator>
    );
}