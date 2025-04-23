export const wait = (): Promise<void> => {
  const waitTime = Math.floor(Math.random() * 4000) + 1000 // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime)
  })
}
