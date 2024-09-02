export default function showLoadingAnimation(duration){
  const spinner = ["|", "/", "-", "\\"];
  let index = 0;

  const intervalId = setInterval(() => {
    process.stdout.write(`\r${spinner[index]}  Gerando CRUD...`);
    index = (index + 1) % spinner.length;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    process.stdout.write("\rDone! CRUD gerado com sucesso!\n");
  }, duration);
};
