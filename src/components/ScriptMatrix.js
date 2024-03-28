// ScriptMatrix.js
import { ref, onMounted, onUnmounted } from "vue";

const characters = ["&nbsp;", "&#9617;", "&#9618;", "&#9619;", "&#9608;"]; // Caractères ASCII pour l'effet Matrix
const matrixSpeed = 30; // Vitesse de chute des caractères en millisecondes
const matrixDensity = 5; // Densité des caractères

const matrix = ref([]);
let matrixInterval;

function generateMatrix() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const matrixColumns = Math.floor(windowWidth / matrixDensity);

  const matrixArray = [];

  for (let i = 0; i < matrixColumns; i++) {
    const column = [];
    const columnLength = Math.floor(Math.random() * 10) + 5; // Longueur de chaque colonne de caractères

    for (let j = 0; j < columnLength; j++) {
      const character =
        characters[Math.floor(Math.random() * characters.length)];
      const delay = Math.random() * (windowHeight + 200);
      column.push({ character, delay });
    }

    matrixArray.push(column);
  }

  matrix.value = matrixArray;
}

export function startMatrixEffect() {
  generateMatrix();
  matrixInterval = setInterval(generateMatrix, matrixSpeed);
}

export function stopMatrixEffect() {
  clearInterval(matrixInterval);
}
