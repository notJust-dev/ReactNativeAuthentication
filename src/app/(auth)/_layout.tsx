import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function AuthLayout() {
  console.log('Auth layout');
  const { isSignedIn } = useAuth();

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
