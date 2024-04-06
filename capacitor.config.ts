import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kevinandre.dev',
  appName: 'ai-cool',
  webDir: 'dist/ai-cool',
  server: {
    androidScheme: 'https'
  }
};

export default config;
