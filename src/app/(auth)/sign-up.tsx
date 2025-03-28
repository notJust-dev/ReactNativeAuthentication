import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';

import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo';
import SignInWith from '@/components/SignInWith';

const signUpSchema = z.object({
  email: z.string({ message: 'Email is required' }).email('Invalid email'),
  password: z
    .string({ message: 'Password is required' })
    .min(8, 'Password should be at least 8 characters long'),
});

type SignUpFields = z.infer<typeof signUpSchema>;

const mapClerkErrorToFormField = (error: any) => {
  switch (error.meta?.paramName) {
    case 'email_address':
      return 'email';
    case 'password':
      return 'password';
    default:
      return 'root';
  }
};

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
  });

  const { signUp, isLoaded } = useSignUp();

  const onSignUp = async (data: SignUpFields) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareVerification({ strategy: 'email_code' });

      router.push('/verify');
    } catch (err) {
      console.log('Sign up error: ', err);
      if (isClerkAPIResponseError(err)) {
        err.errors.forEach((error) => {
          console.log('Error: ', JSON.stringify(error, null, 2));
          const fieldName = mapClerkErrorToFormField(error);
          console.log('Field name: ', fieldName);
          setError(fieldName, {
            message: error.longMessage,
          });
        });
      } else {
        setError('root', { message: 'Unknown error' });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.form}>
        <CustomInput
          control={control}
          name='email'
          placeholder='Email'
          autoFocus
          autoCapitalize='none'
          keyboardType='email-address'
          autoComplete='email'
        />

        <CustomInput
          control={control}
          name='password'
          placeholder='Password'
          secureTextEntry
        />
        {errors.root && (
          <Text style={{ color: 'crimson' }}>{errors.root.message}</Text>
        )}
      </View>

      <CustomButton text='Sign up' onPress={handleSubmit(onSignUp)} />
      <Link href='/sign-in' style={styles.link}>
        Already have an account? Sign in
      </Link>

      <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 'auto' }}>
        <SignInWith strategy='oauth_google' />
        <SignInWith strategy='oauth_facebook' />
        <SignInWith strategy='oauth_apple' />
      </View>
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
  form: {
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  link: {
    color: '#4353FD',
    fontWeight: '600',
  },
});
