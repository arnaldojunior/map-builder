var tile;
var mapa = document.querySelector('.mapa');
var tiles = document.querySelectorAll('.tiles img');
var blocos;

createMapBlocks();
// Captura as divs que são filhas diretas do elemento com a classe especificada.
blocos = document.querySelectorAll('.mapa > div');
tiles.forEach(addEventListenerToTiles);
blocos.forEach(addEventListenerToBlocks);

// Cria os blocos do mapa dinamicamente.
function createMapBlocks() {
    for (let i = 0; i < 16; i++) {
        let block = document.createElement('div');
        block.classList.add('tile');
        let innerBlock = document.createElement('div');
        innerBlock.classList.add('tile');
        block.appendChild(innerBlock);
        mapa.appendChild(block);
    }
}

function addEventListenerToTiles(value, i, array) {
    value.addEventListener("click", function(e) {
        tile = e.target;
        array.forEach(img => {
            img.classList.remove('tile-selected');
        });
        e.target.classList.add('tile-selected');
    });
}

function addEventListenerToBlocks(value) {
	value.addEventListener("click", function(event) {
        if (tile) { // Apenas se alguma imagem foi selecionada.
            let mapBlock = event.currentTarget;
            let url = extractSrc(tile.src);
            if (tile.classList.contains("tile--layer-one")) {
                mapBlock.style.background = "url(".concat(url, ")");
            } else {
                mapBlock.firstChild.style.background = "url(".concat(url, ")");
            }
        }
    });
}

function extractSrc(path) {
    return path.substring(path.indexOf('sprites'));
}


aplicarEstilo();

function aplicarEstilo() {
    var nodes = document.querySelectorAll(".layer-one img");
    
    for (let x=0, s=nodes.length; x<s; x++) {
        nodes[x].style.border = "2px solid purple";
    }
}












