HOW TO BUILD THE APK (free, no Android Studio)

1. Create a free account at github.com and make a NEW repository (e.g. "wake-up-alarm").
2. Upload ALL files from this folder, keeping the folders:
   www/, scripts/, .github/workflows/, package.json, capacitor.config.json
   (Easiest on a computer: unzip, then in the repo tap "Add file > Upload files" and drag everything in.
    Make sure the hidden ".github" folder is included.)
3. Open the repo's "Actions" tab. The "Build APK" job starts by itself (about 5-8 min).
   If not, tap "Build APK" > "Run workflow".
4. When it shows a green tick, open the run and download the artifact "wake-up-alarm-apk" (a zip containing app-debug.apk).
5. UNINSTALL the old Wake-Up Travel Alarm app, then install the new APK.

ON YOUR PHONE AFTER INSTALLING
- Allow location, then choose "Allow all the time" when asked (or App info > Permissions > Location).
- Allow notifications.
- Battery: set the app to "Unrestricted" / "Don't optimise" so Android doesn't stop it.
