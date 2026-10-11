const fs = require('fs');
const f = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(f, 'utf8');
const perms = ['ACCESS_FINE_LOCATION','ACCESS_COARSE_LOCATION','ACCESS_BACKGROUND_LOCATION',
  'FOREGROUND_SERVICE','FOREGROUND_SERVICE_LOCATION','POST_NOTIFICATIONS','VIBRATE','WAKE_LOCK','USE_FULL_SCREEN_INTENT'];
let add = '';
perms.forEach(p => { if (!x.includes('android.permission.' + p)) add += '    <uses-permission android:name="android.permission.' + p + '" />\n'; });
x = x.replace('<application', add + '    <application');
fs.writeFileSync(f, x);
console.log('Manifest patched');
