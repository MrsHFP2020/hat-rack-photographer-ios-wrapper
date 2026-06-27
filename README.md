# Hat Rack Photographer iOS Wrapper

This is a separate Capacitor wrapper for the TestFlight pilot. It points to the published Hat Rack app at `https://hatrack.hatfella.com` and uses the Apple bundle ID `com.hatfella.hatrack.photographer`.

It does not modify the Lovable project, the published Hat Rack site, or the existing Hat Fella Productions iOS app.

## Next Steps

1. Install dependencies: `npm install`
2. Add the iOS project: `npm run cap:add:ios`
3. Sync Capacitor: `npm run cap:sync`
4. Open in Xcode: `npm run cap:open:ios`
5. In Xcode, select team `Hat Fella Productions LLC`, bundle ID `com.hatfella.hatrack.photographer`, then archive and upload to App Store Connect.

## Required Xcode Permission Text

Add these to the iOS app target `Info.plist` before the production tracking pilot:

- `NSLocationWhenInUseUsageDescription`: Hat Rack uses your location during assigned shoot windows to confirm arrival and help operations manage ETAs.
- `NSLocationAlwaysAndWhenInUseUsageDescription`: Hat Rack uses background location only during assigned shoot windows so operations can confirm arrival and send accurate ETA updates.
- `NSUserNotificationUsageDescription`: Hat Rack sends job and ETA updates for assigned shoots.

Background modes for location will be added when the native background geolocation plugin is selected and wired.
