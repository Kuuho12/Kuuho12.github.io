
const tile_Statuses = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked',
}

/*export*/ function teelauta(LaudanKoko, MiinojenMaara) {
    const board = []
    for (let x = 0; x < LaudanKoko; x++) {
        const row = [];

        for (let y = 0; y < LaudanKoko; y++) {
            const element = document.createElement("div")
            element.className = "laudanosa"
            element.dataset.status = tile_Statuses.HIDDEN
            const tile = {
                element,
                x,
                y,
                mine: false, //minePositions.some(Position_Match.bind(null, {x, y})),
                AdjecentMines: 0,
                vari: 187,
                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                }
            }

            row.push(tile);
        }
        board.push(row);
    }

    return board
}


//import { teelauta } from "index.js"

let jooh = document.createElement('script')
jooh.id = "easteregg"
jooh.innerText = '$(".laudanosa").click(function() { $(this).fadeOut() });'

let BOARD_SIZE = 12
let NUMBER_OF_MINES = Math.floor(BOARD_SIZE*BOARD_SIZE/5)
let board = teelauta(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector('.board')
const minesLeftText = document.querySelector('[data-mine-count]')
var markedMines = 0;
let hiddenTiles = BOARD_SIZE*BOARD_SIZE;
let GeneratingMines = 0;
let game = false;


function MakeBoard () {
boardElement.style.setProperty("--size", BOARD_SIZE)
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener("click", () => {
            if (tile.element.dataset.status ==  "marked") {
                return;
            }
            if (tile.mine == true && game) {
                LOSE()
                return;
            }
            NumberOfMinesTouchingTile(tile.x, tile.y, tile)
        })
        tile.element.addEventListener("contextmenu", e => {
            if (game) {
                //e.preventDefault()
            if (tile.element.dataset.status == "hidden") {
                tile.element.dataset.status = "marked";
                tile.element.style = "background-color: rgb(235, 235, 0);"
                markedMines++;
                minesLeftText.textContent = NUMBER_OF_MINES  - markedMines
                return;
            }
            if (tile.element.dataset.status == "marked") {
                tile.element.dataset.status = "hidden";
                tile.element.style = "background-color: rgb(207, 207, 207);"
                markedMines--;
                minesLeftText.textContent = NUMBER_OF_MINES  - markedMines
                return;
            }
            if (tile.element.dataset.status == "number") {
                if (isDashingPossible(tile.AdjecentMines, tile.x, tile.y)) {
                    Dashing(tile.x, tile.y)
                    return;
                }
            }
            }
        })
        tile.element.addEventListener("pointerover", () => {
            if (game) {
                if (tile.element.dataset.status == "number") {
                    tile.element.style = "background-color: rgb(137, 137, 137);"
                    return;
                } 
                if (tile.element.dataset.status == "marked") {
                    tile.element.style = "background-color: rgb(235, 235, 0);"
                    return;
                }
                if (tile.element.dataset.status == "mine") {
                    tile.element.style = "background-color: rgb(235, 0, 0)"
                    return;
                }
                tile.element.style = "background-color: rgb(207, 207, 207);"
            }
        })
        tile.element.addEventListener("pointerout", () => {
            if (game) {
                if (tile.element.dataset.status == "number") {
                    tile.element.style = "background-color: rgb(repeat(" + 117 + "));"
                    return;
                } 
                if (tile.element.dataset.status == "marked") {
                    tile.element.style = "background-color: rgb(255, 255, 0);"
                    return;
                }
                if (tile.element.dataset.status == "mine") {
                    tile.element.style = "background-color: rgb(255, 0, 0)"
                    return;
                }
                tile.element.style = "background-color: rgb(repeat(" + 187 + ");"
            }
            })
    })
})
minesLeftText.textContent = NUMBER_OF_MINES  - markedMines;
console.log(board[1][0])

document.querySelector('.board').addEventListener("contextmenu", e => {
    e.preventDefault()
})
//EasterEgg(false)
}
MakeBoard();

let kertaa2 = 0;

function getMinePositions(LaudanKoko, MiinojenMaara, TileX, TileY) {
    console.log(TileX, TileY, "hfd")
    const positions = []
    while (positions.length < MiinojenMaara) {
        let XXYY = randomNumber(LaudanKoko, TileX, TileY, [true, true], positions)
        const position = {
            x: XXYY[0],
            y: XXYY[1]
        /*x: randomNumber(LaudanKoko, TileX, TileY, "x", XXYY),
        y: randomNumber(LaudanKoko, TileX, TileY, "y", XXYY),*/
        }

        if (!positions.some(p => Position_Match(p, position))) {
            positions.push(position)
        }
    }
    console.log(positions)
    return positions
}

function Position_Match(a, b) {
    return a.x === b.x && a.y === b.y
}
function Position_Match2(a, b) {
    return a.x == b[0] && a.y == b[1]
}

let kolmesti = 0;
let kertaa = 0;
function randomNumber(size, TileX, TileY, XXjaYY, positionsT) {
    kertaa++
    var XX = XXjaYY[0]
    var YY = XXjaYY[1]
    //if (Kumpi == "kumpikin") {
        XX = Math.floor(Math.random() * size)
        YY = Math.floor(Math.random() * size)
        while((YY == TileY - 1 || YY == TileY || YY == TileY + 1) && (XX == TileX - 1 || XX == TileX || XX == TileX + 1)) {
            XX = Math.floor(Math.random() * size)
            YY = Math.floor(Math.random() * size)
        }/*
        if((YY < TileY + 2 && YY > TileY - 2) && (XX < TileX + 2 && XX > TileX - 2) && kolmesti < 3) {
            while((YY == TileY - 2 || YY == TileY || YY == TileY + 2) && (XX == TileX - 2 || XX == TileX || XX == TileX + 2)) {
                XX = Math.floor(Math.random() * size)
                YY = Math.floor(Math.random() * size)
            }
            kolmesti++;
        }*/
        let loputPaikat = [...positionsT]
        if((positionsT.length > 110) && (kolmesti == 3)) {
            for(let x = 0; x < 5; x++) {
                for(let y = 0; y < 5; y++) {
                    let position = {
                        x: TileX-2+x,
                        y: TileY-2+y
                    }
                    //console.log(position, "T")
                    loputPaikat.push(position)
                }
            }
            for(let x = 0; x < BOARD_SIZE; x++) {
                for (let y = 0; y < BOARD_SIZE; y++) {
                    if(!loputPaikat.some(p => Position_Match2(p, [x, y]))) {
                        console.log(kertaa, "k", [x, y])
                        return [x, y];
                    }
                }
            }
            console.log(positionsT)
            var x = 0
            var y = 0
            board.forEach(row => {
            row.forEach(tile => {
            x = tile.x
            y = tile.y
            tile.mine = positionsT.some(Position_Match.bind(null, {x, y}))
            console.log()
            })
            })
            LOSE();
            console.log(board)
            return
        }
        if((YY > TileY - 3 && YY < TileY + 3) && (XX > TileX - 3 && XX < TileX + 3)) {
            if(kolmesti < 3 && !(positionsT.some(p => Position_Match2(p, [XX, YY])))) {
                console.log(kolmesti, "kolmesti", XX, YY)
                kolmesti++;
                return [XX, YY];
            }
            else
            while((YY > TileY - 3 && YY < TileY + 3) && (XX > TileX - 3 && XX < TileX + 3)) {
                XX = Math.floor(Math.random() * size)
                YY = Math.floor(Math.random() * size)
            }
            console.log(kertaa, "q")
            return [XX, YY];
        }
        return [XX, YY];
    /*}
    if (Kumpi == "x") { // Jos miina on samalla rivillä, niin varmista, ettei miina päädy samalle sarakkeelle.
        if (YY == TileY - 1 || YY == TileY || YY == TileY + 1){
            while (XX == TileX - 1 || XX == TileX || XX == TileX + 1) {
                XX = Math.floor(Math.random() * size)
                console.log("HÄLYTYS")
            }
            XXYY[0] = XX
            return XX;
        }
        return XX;
    }
    if (Kumpi == "y") {  // Jos miina on samalla sarakkeella, niin varmista, ettei miina päädy samalle riville.
        if (XX == TileX - 1 || XX == TileX || XX == TileX + 1) {
            while (YY == TileY - 1 || YY == TileY || YY == TileY + 1) {
                YY = Math.floor(Math.random() * size)
                console.log("-- SOS --")
            }
            return YY;
        }
        return YY;
    }*/
}

function GenerateMines(TileX, TileY) {
    let minePositions = getMinePositions(BOARD_SIZE, NUMBER_OF_MINES, TileX, TileY)
    console.log(minePositions)
    var x = 0
    var y = 0
    board.forEach(row => {
        row.forEach(tile => {
            x = tile.x
            y = tile.y
            tile.mine = minePositions.some(Position_Match.bind(null, {x, y}))
            console.log()
        })
    })
    ShowAdjecentTiles(TileX, TileY);
}

function ShowAllMines() {
    board.forEach(row => {
        row.forEach(tile => {
            if (tile.mine == true) {
                tile.element.dataset.status = "mine"
                tile.element.style = "background-color: rgb(255, 0, 0)"
            }
        })
    })
}


function NumberOfMinesTouchingTile(TileX, TileY, tile) {
    let MinesTouching = 0
    if (game !== true) {
        if (GeneratingMines == 0) {
            game = true
            tile.element.dataset.status = "number";
            console.log(hiddenTiles)
            hiddenTiles--;
            GeneratingMines = 1;
            GenerateMines(TileX, TileY)
            tile.element.innerHTML = "<p>" + MinesTouching + "</p>";
            return;
        }
        return;
    }
    if (tile.mine == true) {
        LOSE()
        return;
    }
    if (tile.element.dataset.status !== "number") {
    tile.element.dataset.status = "number";
    tile.element.style = "background-color: rgb(repeat(" + 117 + "));"
    hiddenTiles--;
    //console.log(hiddenTiles)
    if (hiddenTiles == NUMBER_OF_MINES) {
        WIN()
    }
    }
    for (let y = TileY - 1; y <= TileY + 1; y++) {
        for (let x = TileX - 1; x <= TileX + 1; x++) {
            if (y > -1 && x > -1 && y < BOARD_SIZE && x < BOARD_SIZE) {
                if (board[x][y].mine) {
                    MinesTouching++;
                }
            }
        }
    }
    tile.AdjecentMines = MinesTouching;
    tile.element.innerHTML = "<p>" + MinesTouching + "</p>"
    if (MinesTouching == 0) {
        ShowAdjecentTiles(TileX, TileY);
    }
}

function ShowAdjecentTiles(TileX, TileY) {
    for (let y = TileY - 1; y <= TileY + 1; y++) {
        for (let x = TileX - 1; x <= TileX + 1; x++) {
            if (y > -1 && x > -1 && y < BOARD_SIZE && x < BOARD_SIZE) {
                if (x == TileX && y == TileY || board[x][y].element.dataset.status == "number") {
                } else NumberOfMinesTouchingTile(x, y, board[x][y]) 
            }
        }
    }
}

function isDashingPossible(AdjecentMines, TileX, TileY) {
    let MarkedTouching = 0;
    for (let y = TileY - 1; y <= TileY + 1; y++) {
        for (let x = TileX - 1; x <= TileX + 1; x++) {
            if (y > -1 && x > -1 && y < BOARD_SIZE && x < BOARD_SIZE) {
                if (board[x][y].element.dataset.status == "marked") {
                    MarkedTouching++;
                }
            }
        }
    }
    console.log(MarkedTouching, AdjecentMines)
    if (MarkedTouching == AdjecentMines) {
        return true
    } else return false
}

function Dashing(TileX, TileY) {
    for (let y = TileY - 1; y <= TileY + 1; y++) {
        for (let x = TileX - 1; x <= TileX + 1; x++) {
            if (y > -1 && x > -1 && y < BOARD_SIZE && x < BOARD_SIZE) {
                if (x == TileX && y == TileY || board[x][y].element.dataset.status == "number" || board[x][y].element.dataset.status == "marked") {
                } else NumberOfMinesTouchingTile(x, y, board[x][y]) 
            }
        }
    }
}

function WIN() {
    game = false
    topKoko = "" + 20*BOARD_SIZE + "px"
    fontKoko = 100 - BOARD_SIZE*BOARD_SIZE/9*4
    document.getElementById("wintext").innerText = "Voitit"
    document.getElementById("wintext").style = "color: rgb(0, 155, 255); font-size: " + topKoko + "; top: " + fontKoko + "px;"
}

function LOSE() {
    game = false
    ShowAllMines()
    topKoko = "" + 20*BOARD_SIZE + "px"
    fontKoko = 100 - BOARD_SIZE*BOARD_SIZE/9*4
    console.log(fontKoko)
    document.getElementById("wintext").innerText = "Hävisit"
    document.getElementById("wintext").style = "color: rgb(255, 0, 155); font-size: " + topKoko + "; top: " + fontKoko + "px;"
}

function EasterEgg(jooko) {
    if (jooko == false) {
        if (document.getElementById("easteregg" !== null)) {
            document.getElementById("easteregg").remove()
        }
        console.log("EI")
        return;
    }
    console.log("JOO")
    document.body.appendChild(jooh)
}

console.log(document.getElementById("sd"))
var fontKoko = 0
let topKoko = 399 - fontKoko - fontKoko/2 - fontKoko/10
document.getElementById("wintext").style.setProperty("--font-koko", ""+ fontKoko +"px")


document.getElementById("NormaaliNappula").style = "background-color: rgb(187, 187, 187);"

let Nappulat = document.querySelectorAll(".Nappulat")
Nappulat.forEach(element => {
    element.addEventListener("click", () => {
        if (game !== true) {
            Nappulat.forEach(element => {
                element.style = "background-color: rgb(157, 157, 157);"
                document.getElementById("wintext").style = "font-size: 0px;"
                GeneratingMines = 0
            })
            element.style = "background-color: rgb(187, 187, 187);"
            for (var i = 0; i < BOARD_SIZE*BOARD_SIZE; i++) {
                let LaudanOsa = document.querySelector(".laudanosa")
                LaudanOsa.remove()
            }
            kolmesti = 0;
            BOARD_SIZE = element.dataset.koko
            hiddenTiles = BOARD_SIZE*BOARD_SIZE;
            NUMBER_OF_MINES = Math.floor(BOARD_SIZE*BOARD_SIZE/5)
            board = teelauta(BOARD_SIZE, NUMBER_OF_MINES)
            markedMines = 0;
            MakeBoard()
        }
    })
    element.addEventListener("pointerover", () => {

    })
});
document.getElementById("wintext").addEventListener("click", function() {
    EasterEgg(true)
})