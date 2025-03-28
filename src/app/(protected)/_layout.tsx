import { useAuth } from '@/providers/AuthProvider';
import { Slot, Redirect } from 'expo-router';

export default function ProtectedLayout() {
  console.log('Protected layout');

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href='/sign-in' />;
  }

  return <Slot />;
}
