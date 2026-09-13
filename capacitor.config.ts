import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.alkhidham.travel',
  appName: 'Al Khidham Travel',
  webDir: '.output/public',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#101419',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#101419',
    },
  },
}

export default config
