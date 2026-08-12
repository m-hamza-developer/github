import { Link } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
} from 'react-native';

import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function ForgotPasswordScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      Alert.alert('Email required', 'Please enter your email address to reset your password.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={24}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Password recovery</Text>
          <Text style={styles.title}>Forgot password?</Text>
          <Text style={styles.subtitle}>
            {submitted
              ? 'A reset link has been sent to your email.'
              : 'No worries — enter your email and we will send a reset link.'}
          </Text>

          {!submitted ? (
            <View style={styles.formGroup}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="name@example.com"
                placeholderTextColor="#8A8A8E"
                style={[styles.input, { borderColor: theme.tabIconDefault, color: theme.text }]}
              />

              <Pressable
                onPress={handleSubmit}
                style={({ pressed }) => [
                  styles.primaryButton,
                  { backgroundColor: theme.tint, opacity: pressed ? 0.9 : 1 },
                ]}
              >
                <Text style={styles.primaryButtonText}>Send reset link</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.successBox}>
              <Text style={styles.successTitle}>Check your inbox</Text>
              <Text style={styles.successText}>We sent a password reset link to {email}.</Text>
              <Link href="/(auth)/login" asChild>
                <Pressable
                  style={({ pressed }) => [
                    styles.secondaryButton,
                    {
                      borderColor: theme.tabIconDefault,
                      opacity: pressed ? 0.8 : 1,
                    },
                  ]}
                >
                  <Text style={styles.secondaryButtonText}>Back to sign in</Text>
                </Pressable>
              </Link>
            </View>
          )}

          {!submitted && (
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Remember your password?</Text>
              <Link href="/(auth)/login" asChild>
                <Pressable>
                  <Text style={[styles.linkText, { color: theme.tint }]}>Sign in</Text>
                </Pressable>
              </Link>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '600',
    opacity: 0.75,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.8,
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  primaryButton: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  successBox: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2f95dc',
    marginTop: 6,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  successText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  secondaryButton: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    gap: 6,
  },
  footerText: {
    fontSize: 14,
    opacity: 0.75,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
