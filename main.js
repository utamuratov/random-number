startRandom();

function startRandom() {
  let i = 0;
  const intervalId = setInterval(() => {
    i++;
    const min = +document.getElementById("min").value;
    const max = +document.getElementById("max").value;
    const random =
      (Math.floor(Math.random() * (max - min)) % (max - min + 1)) + min;
    document.getElementById("random").innerHTML = random;

    if (i == 10) {
      i = 0;
      clearInterval(intervalId);
    }
  }, 100);
}
