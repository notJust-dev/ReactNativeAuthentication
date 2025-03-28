import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Sign in</Text>

      <CustomInput
        placeholder='Email'
        autoFocus
        autoCapitalize='none'
        keyboardType='email-address'
        autoComplete='email'
      />

      <CustomInput placeholder='Password' secureTextEntry />

      <Pressable
        onPress={() => {
          console.log('pressed');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>

      <StatusBar style='auto' />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#4353FD',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
