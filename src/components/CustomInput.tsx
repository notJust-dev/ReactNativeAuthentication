import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type CustomInputProps = {
  // custom fields
} & TextInputProps;

export default function CustomInput(props: CustomInputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});
