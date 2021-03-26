it("sem testes ainda...", () => {});

const getAlgo = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(13);
    }, 1000);
  });
};

const sistema = async () => {
  console.log("iniciando...");
  const some = await getAlgo();
  console.log(`Algo é ${some}`);
  console.log("fim");
};

sistema();
