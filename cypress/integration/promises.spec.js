it("sem testes ainda...", () => {});

const getAlgo = (callback) => {
	return new Promise()
  setTimeout(() => {
    callback(11);
  }, 1000);
};

const sistema = async () => {
  console.log("iniciando...");
  getAlgo((some) => console.log(`Algo é ${some}`));
  console.log("fim");
};

sistema();
