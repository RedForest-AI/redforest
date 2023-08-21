import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Route() {
  const result = useLocalSearchParams();
  console.log(result);

  return (
    <View style={styles.container}>
        <Text>Logged IN!</Text>
        <Text>Session State: { result.session_state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});