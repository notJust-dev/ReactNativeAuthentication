import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';

type CustomButtonProps = {
  text: string;
} & PressableProps;

export default function CustomButton({ text, ...props }: CustomButtonProps) {
  return (
    <Pressable {...props} style={[styles.button]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
