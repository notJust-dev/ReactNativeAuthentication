import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
  View,
} from 'react-native';
import { Controller } from 'react-hook-form';

type CustomInputProps = {
  control: any; // custom fields
  name: string;
} & TextInputProps;

export default function CustomInput({
  control,
  name,
  ...props
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[styles.input, props.style]}
          />
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  error: {
    color: 'crimson',
  },
});
