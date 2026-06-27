import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.hatfella.hatrack.photographer",
  appName: "Hat Rack Photographer",
  webDir: "www",
  server: {
    url: "https://hatrack.hatfella.com",
    cleartext: false
  },
  ios: {
    contentInset: "automatic"
  }
};

export default config;
