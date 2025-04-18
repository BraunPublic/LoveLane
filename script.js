const memories = [
  { photo: "photos/1.jpg", caption: "Our first strike together — that epic arcade night 💘" },
  { photo: "photos/2.jpg", caption: "When you bowled a turkey and I fell for you (again). 🦃💓" },
  { photo: "photos/3.jpg", caption: "That goofy selfie with matching bowling shoes 👟😂" },
];

let currentMemory = 0;

const rollButton = document.getElementById('roll-button');
const memoryDiv = document.getElementById('memory');

rollButton.addEventListener('click', () => {
  if (currentMemory < memories.length) {
    memoryDiv.innerHTML = `
      <img src="${memories[currentMemory].photo}" alt="Memory">
      <p>${memories[currentMemory].caption}</p>
    `;
    currentMemory++;
  } else {
    memoryDiv.innerHTML = "<h2>You've rolled through all the frames 💕</h2>";
    rollButton.disabled = true;
  }
});
