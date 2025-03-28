import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { ActivityIndicator, View } from 'react-native';

export default function AuthLayout() {
  console.log('Auth layout');
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href={'/'} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name='sign-in'
        options={{ headerShown: false, title: 'Sign in' }}
      />
      <Stack.Screen name='sign-up' options={{ title: 'Sign up' }} />
    </Stack>
  );
}
