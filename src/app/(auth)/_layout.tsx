import { useAuth } from '@/providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
  console.log('Auth layout');
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
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
