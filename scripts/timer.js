export function timer(func) {
  console.time("timeTaken");
  func();
  console.timeEnd("timeTaken");
}

export const timerForHundred = (func) => {
  console.time("timeTaken");
  for (let i = 0; i < 100; i++) {
    func();
  }
  console.timeEnd("timeTaken");
};

export const timerForThousand = (func) => {
  console.time("timeTaken");
  for (let i = 0; i < 1000; i++) {
    func();
  }
  console.timeEnd("timeTaken");
};
