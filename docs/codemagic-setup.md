# Codemagic Setup

Use Codemagic to build and upload the Hat Rack Photographer iOS wrapper without installing Xcode locally.

## App

- App Store Connect app: `Hat Rack Photographer`
- App Store Connect App ID: `6785075230`
- Bundle ID: `com.hatfella.hatrack.photographer`
- Apple Team ID: `259AGPVFL5`

## Required Codemagic Setup

1. Add this project to Codemagic.
2. Add an App Store Connect integration named exactly:

   `hatrack_app_store_connect`

3. Upload/select the App Store Connect API key you created in Apple:

   - Issuer ID
   - Key ID
   - `.p8` private key file

4. Create an environment variable group named:

   `app_store_connect`

Codemagic may create this automatically when the integration is added. Do not paste the `.p8` key into chat or commit it to the repo.

## Build

Run the workflow:

`Hat Rack Photographer - TestFlight`

Expected result:

- Codemagic installs dependencies.
- Codemagic installs iOS pods.
- Codemagic creates/fetches Apple signing files for `com.hatfella.hatrack.photographer`.
- Codemagic builds an `.ipa`.
- Codemagic uploads the build to TestFlight.

## If Signing Fails

Check that the App Store Connect API key has enough access to manage certificates/profiles and upload builds. App Manager or Admin access is usually needed.
