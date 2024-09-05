export default async function globalTeardown() {
  console.log('stopping mongodb')
  await global.__MONGOINSTANCE.stop()
}
