export const log = (message?: any, ...optionalParams: any[]): void => {
  if (!!process.env.DEBUG) {
    console.log(message, ...optionalParams)
  }
}
