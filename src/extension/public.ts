const sleep = async (ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, ms);
  });
export { sleep };
