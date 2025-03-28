import { View, Text, Image, Button } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';

export default function HomeScreen() {
  const { user } = useUser();

  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
      }}
    >
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ height: 100, aspectRatio: 1, borderRadius: 100 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Welcome, {user?.firstName}
      </Text>

      <Text style={{ fontSize: 18 }}>Only logged in users can see this</Text>

      <Button title='Sign out' onPress={() => signOut()} />
    </View>
  );
}
