export function timer(func) {
  console.time("timeTaken");
  func();
  console.timeEnd("timeTaken");
}
