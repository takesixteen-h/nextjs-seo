/**
 * this is a simple function that returns a promise that resolves after a given number of milliseconds
 * @param ms - number of milliseconds to wait
 */
export async function delay(ms: number) {

  return new Promise((resolve) => setTimeout(resolve, ms));
}
