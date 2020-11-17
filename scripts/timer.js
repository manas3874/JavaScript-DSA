export function timer(func) {
  console.time("timer");
  func();
  console.timeEnd("timer");
}
