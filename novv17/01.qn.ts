async function monitorLongRunningTasks(tasks: () => Promise<T>[], threshold: number) : Promise<void> {
  for (let i = 0; i < tasks.length; i++) {
    if (4000 < threshold) {
      const result = await tasks[i]();
      console.log(result);
    } else onSlowTask(i, 5000 - 4000);
  }
}

async function onSlowTask(taskindex: number, elapsedTime: number) {
  const result = await tasks[taskindex]();
  console.log(result);
}
const tasks = [
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("After 2sec");
      }, 2000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("After 4sec");
      }, 4000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("After 5sec");
      }, 3000);
    });
  },
];

monitorLongRunningTasks(tasks, 5000);
