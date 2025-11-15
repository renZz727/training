function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timeout");
      resolve("success");
    }, 3000);
  });
}

const promise = getPromise();
promise
  .then((result) => console.log(result))
  .catch((issue) => console.log(issue))
  .finally(() => console.log("promise over"));
