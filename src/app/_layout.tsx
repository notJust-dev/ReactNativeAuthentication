import { Slot } from 'expo-router';
import { AuthProvider } from '@/providers/AuthProvider';

export default function RootLayout() {
  console.log('Root layout');

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
