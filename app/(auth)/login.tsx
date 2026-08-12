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
import { router } from 'expo-router';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing details', 'Please enter both your email and password.');
      return;
    }

    router.replace('/(tabs)');
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
          <Text style={styles.eyebrow}>Welcome back</Text>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>Use your credentials to access your account.</Text>

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
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Enter your password"
              placeholderTextColor="#8A8A8E"
              style={[styles.input, { borderColor: theme.tabIconDefault, color: theme.text }]}
            />
          </View>

          <View style={styles.rowBetween}>
            <Pressable
              onPress={() => setRememberMe((current) => !current)}
              style={styles.rememberRow}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: rememberMe }}
            >
              <View
                style={[
                  styles.checkbox,
                  { borderColor: theme.tint },
                  rememberMe && { backgroundColor: theme.tint },
                ]}
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </Pressable>

            <Pressable onPress={()=>router.replace('/(auth)/forget')}>
              <Text style={[styles.linkText, { color: theme.tint }]}>Forgot password?</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.primaryButton,
              { backgroundColor: theme.tint, opacity: pressed ? 0.9 : 1 },
            ]}
          >
            <Text style={styles.primaryButtonText}>Sign in</Text>
          </Pressable>

          <View style={styles.dividerRow}>
            <View style={[styles.divider, { backgroundColor: theme.tabIconDefault }]} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={[styles.divider, { backgroundColor: theme.tabIconDefault }]} />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              {
                borderColor: theme.tabIconDefault,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={styles.secondaryButtonText}>Use a magic link</Text>
          </Pressable>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Need an account?</Text>
            <Pressable>
              <Text style={[styles.linkText, { color: theme.tint }]}>Create one</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.75,
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 18,
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
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 20,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1.5,
    marginRight: 8,
  },
  rememberText: {
    fontSize: 14,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    textTransform: 'uppercase',
    opacity: 0.75,
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
});