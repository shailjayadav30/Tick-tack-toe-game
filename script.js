let currentplayer = "X";
const button = document.querySelector(".reset-button");
let arr = Array(9).fill(null);

function checkwinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8])
  ) {
    document.querySelector(".won").style.display = "block";
    document.querySelector(".text").innerText = ` yeaaa! ${currentplayer} won`;
    return;
  }
  if (!arr.some((e) => e === null)) {
    document.querySelector(".draw").style.display = "block";
    document.querySelector(".drawtext").innerText = `Game Draw`;

    return;
  }
}

function handleclick(el) {
  const id = Number(el.id);
  if (arr[id] != null) return;

  arr[id] = currentplayer;
  el.innerText = currentplayer;
  checkwinner();
  currentplayer = currentplayer === "X" ? "0" : "X";
}
function resetGame() {
  currentplayer = "X";
  arr = Array(9).fill(null);
  document.querySelectorAll(".col").forEach((cell) => {
    cell.innerText = "";
    cell.onclick = function () {
      handleclick(this);
    };
  });
  document.querySelector(".won").style.display = "none";
}
