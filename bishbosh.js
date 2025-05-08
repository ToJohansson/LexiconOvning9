const form = document.getElementById("game-form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const rounds = parseInt(document.getElementById("rounds").value);
  const bish = parseInt(document.getElementById("bish").value);
  const bosh = parseInt(document.getElementById("bosh").value);

  let result = "";

  for (let i = 1; i <= rounds; i++) {
    if (i % bish === 0 && i % bosh === 0) {
      result += "Bish Bosh\n";
    } else if (i % bish === 0) {
      result += "Bish\n";
    } else if (i % bosh === 0) {
      result += "Bosh\n";
    } else {
      result += i + "\n";
    }
  }

  output.textContent = result;
  e.target.reset();
});
