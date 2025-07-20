let container = document.getElementById("puzzle-container");

function createTiles() {
  container.innerHTML = '';
  for (let i = 1; i <= 15; i++) {
    let tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = i;
    container.appendChild(tile);
  }

  let emptyTile = document.createElement("div");
  emptyTile.className = "tile empty";
  container.appendChild(emptyTile);
}

function shuffleTiles() {
  let tiles = Array.from(container.children);
  for (let i = tiles.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    container.appendChild(tiles[j]);
  }
}

createTiles();

