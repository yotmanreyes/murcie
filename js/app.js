import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({ apiKey: '5nKicF3HAZhVDhtAprDx' })

// Get the visitor identifier when you need it.
fpPromise
  .then(fp => fp.get())
  .then(result => console.log(result.visitorId))