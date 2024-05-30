import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function Starter() {
    return (
        <View style={styles.container}>
            <Text>starter template</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});