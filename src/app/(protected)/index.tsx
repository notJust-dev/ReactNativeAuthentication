import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home screen</Text>
      <Text style={{ fontSize: 18 }}>Only logged in users can see this</Text>
    </View>
  );
}
