const helppoTietoButton = document.getElementById("helppo_tieto")
const helppoHistoriaButton = document.getElementById("helppo_historia")
const helppoMaantietoButton = document.getElementById("helppo_maantieto")
const helppoTiedeButton = document.getElementById("helppo_tiede")
const helppoKulttuuriButton = document.getElementById("helppo_kulttuuri")
const tietoButton = document.getElementById("tieto")
const historiaButton = document.getElementById("historia")
const maantietoButton = document.getElementById("maantieto")
const tiedeButton = document.getElementById("tiede")
const kulttuuriButton = document.getElementById("kulttuuri")
const vaikeaTietoButton = document.getElementById("vaikea_tieto")
const helppoYleistietoButton = document.getElementById("helppo_yleistieto")
const yleistietoButton = document.getElementById("yleistieto")
const vaikeaYleistietoButton = document.getElementById("vaikea_yleistieto")
const vaikeaHistoriaButton = document.getElementById("vaikea_historia")
const vaikeaMaantietoButton = document.getElementById("vaikea_maantieto")
const visojenButtons = [helppoTietoButton, helppoHistoriaButton, helppoMaantietoButton, tietoButton, historiaButton, maantietoButton, vaikeaTietoButton, helppoYleistietoButton, yleistietoButton, vaikeaYleistietoButton, vaikeaHistoriaButton, vaikeaMaantietoButton, helppoTiedeButton, helppoKulttuuriButton, tiedeButton, kulttuuriButton]
const vaihtobuttondivs = document.querySelectorAll(".vaihtobuttondiv")
const alaVaihtoOsa = document.getElementsByClassName("vaihto-osao")[2]
const vasenAlavaihtodiv = document.getElementsByClassName("alavaihtodiv")[4]
const oikeaAlavaihtodiv = document.getElementsByClassName("alavaihtodiv")[5]

const kysymysTeksti = document.getElementById("kysymys")
const tulosTeksti = document.getElementById("tulos")
const oikeinElement = document.getElementById("oikein")
const vaarinElement = document.getElementById("vaarin")
const vaihtoehdot = document.getElementById("vaihtoehdot")
const btnA = document.getElementById("btnA")
const btnB = document.getElementById("btnB")
const btnC = document.getElementById("btnC")
const btnD = document.getElementById("btnD")
const btnE = document.getElementById("btnE")
const btnF = document.getElementById("btnF")
const lopetaButton = document.getElementById("lopeta")
const seuraavaButton = document.getElementById("seuraava")
const vaihtoehtoButtons = [btnA, btnB, btnC, btnD, btnE, btnF]

let visa = undefined
let odottaako = false
let tulleetKysymykset = []
let valittuKysymysLista = undefined
let oikeinVastuttu = 0
let vaarinVastattu = 0
oikeinElement.textContent = oikeinVastuttu
vaarinElement.textContent = vaarinVastattu
kysymysTeksti.textContent = "Valitse visa"

lopetaButton.addEventListener("click", () => {
    kysymysTeksti.textContent = "Valitse visa"
    tulosTeksti.textContent = "​"
    visa = undefined
    visojenButtons.forEach((button) => {
        button.removeAttribute("disabled")
    })
    lopetaButton.style.display = "none" 
    seuraavaButton.style.display = "none"
    vaihtoehtoButtons.forEach((button) => {
        button.style.display = "none"
    })
})
seuraavaButton.addEventListener("click", () => {
    document.getElementById("btn" + tulleetKysymykset[tulleetKysymykset.length - 1][tulleetKysymykset[tulleetKysymykset.length - 1].length - 2].toUpperCase()).style.backgroundColor = "white"
    JatkaVisaa()
})

helppoTietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoTieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset
        HelppoVisa()
    }
})
helppoHistoriaButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoHistoria"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset.filter((kysymys) => {
            console.log(kysymys[0])
            return kysymys[kysymys.length - 1].includes("historia");
        })
        HelppoVisa()
    }
})
helppoMaantietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoMaantieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("maantieto");
        })
        HelppoVisa()
    }
})
helppoYleistietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoYleistieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("yleistieto");
        })
        HelppoVisa()
    }
})
helppoTiedeButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoTiede"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("tiede");
        })
        HelppoVisa()
    }
})
helppoKulttuuriButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "helppoKulttuuri"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(4)
        valittuKysymysLista = helpotKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("kulttuuri");
        })
        HelppoVisa()
    }
})

tietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        //vasenAlavaihtodiv.style.width = "0px"
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "tieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset
        KeskitasoVisa()
    }
})
historiaButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "historia"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("historia");
        })
        KeskitasoVisa()
    }
})
maantietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "maantieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("maantieto");
        })
        KeskitasoVisa()
    }
})
yleistietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "yleistieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("yleistieto");
        })
        KeskitasoVisa()
    }
})
tiedeButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "tiede"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("tiede");
        })
        KeskitasoVisa()
    }
})
kulttuuriButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "kulttuuri"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(5)
        valittuKysymysLista = kysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("kulttuuri");
        })
        KeskitasoVisa()
    }
})

vaikeaTietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "vaikeaTieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(6)
        valittuKysymysLista = vaikeatKysymykset
        VaikeaVisa()
    }
})
vaikeaYleistietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "vaikeaYleistieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(6)
        valittuKysymysLista = vaikeatKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("yleistieto");
        })
        VaikeaVisa()
    }
})
vaikeaHistoriaButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "vaikeaHistoria"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(6)
        valittuKysymysLista = vaikeatKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("historia");
        })
        VaikeaVisa()
    }
})
vaikeaMaantietoButton.addEventListener("click", () => {
    if (visa == undefined) {
        vaarinElement.style.display = "block"
        oikeinElement.style.display = "block"
        visa = "vaikeaMaantieto"
        visojenButtons.forEach((button) => {
            button.setAttribute("disabled", "true")
        })
        BtnToBlock(6)
        valittuKysymysLista = vaikeatKysymykset.filter((kysymys) => {
            return kysymys[kysymys.length - 1].includes("maantieto");
        })
        VaikeaVisa()
    }
})


function HaeKysymys() {
    let item;
    do {
        const randomIndex = Math.floor(Math.random() * valittuKysymysLista.length);
        item = valittuKysymysLista[randomIndex];
    } while (tulleetKysymykset.includes(item))
    let oikeaVastaus;
    switch (item[item.length - 2]) {
        case "a":
            oikeaVastaus = item[1];
            break;
        case "b":
            oikeaVastaus = item[2];
            break;
        case "c":
            oikeaVastaus = item[3];
            break;
        case "d":
            oikeaVastaus = item[4];
            break;
        case "e":
            oikeaVastaus = item[5];
            break;
        case "f":
            oikeaVastaus = item[6];
            break;
        default:
            console.log(item[0], "Ei oikeaa vaihtoehtoa")
    }
    item = shuffleKysymys(item)
    switch (oikeaVastaus) {
        case item[1]:
            item[item.length - 2] = "a"
            break;
        case item[2]:
            item[item.length - 2] = "b"
            break;
        case item[3]:
            item[item.length - 2] = "c"
            break;
        case item[4]:
            item[item.length - 2] = "d"
            break;
        case item[5]:
            item[item.length - 2] = "e"
            break;
        case item[6]:
            item[item.length - 2] = "f"
            break;
        /*default:
            console.log("Algorytmi rikki?????")
            break;*/
    }
    tulleetKysymykset[tulleetKysymykset.length] = item
    return item;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function shuffleKysymys(array) { //Fisher-Yatesis muunnelma
    console.log(array)
    for (let i = array.length - 3; i > 1; i--) {
        const j = Math.floor(Math.random() * (i)) + 1;
        [array[i], array[j]] = [array[j], array[i]]; // Swap
        //console.log("sekoitus", j, i)
    }
    //console.log(array)
    return array;
}
function BtnToBlock(count) {
    if (count == 5) {
        oikeaAlavaihtodiv.style.display = "none"
    }
    else {
        oikeaAlavaihtodiv.style.display = "flex"
    }
    lopetaButton.style.display = "block" 
    seuraavaButton.style.display = "block"
    for (let i = 0; i < count ; i++) {
        vaihtoehtoButtons[i].style.display = "block"
    }
}

vaihtoehtoButtons.forEach((button) => button.addEventListener("click", () => {
    if (!odottaako) {
        document.getElementById("btn" + tulleetKysymykset[tulleetKysymykset.length - 1][tulleetKysymykset[tulleetKysymykset.length - 1].length - 2].toUpperCase()).style.backgroundColor = "lightgreen";
        if (tulleetKysymykset[tulleetKysymykset.length - 1][tulleetKysymykset[tulleetKysymykset.length - 1].length - 2] == button.dataset.vaihtoehto) {
            Oikein();
            return;
        } else {
            Vaarin();
            return;
        }
    }
}
))
function HelppoVisa() {
    let kysymys = HaeKysymys();
    kysymysTeksti.textContent = kysymys[0]
    btnA.textContent = kysymys[1]
    btnB.textContent = kysymys[2]
    btnC.textContent = kysymys[3]
    btnD.textContent = kysymys[4]
    odottaako = false
    equaliseDivHeights(vaihtoehtoButtons);
}
function KeskitasoVisa() {
    let kysymys = HaeKysymys();
    kysymysTeksti.textContent = kysymys[0]
    btnA.textContent = kysymys[1]
    btnB.textContent = kysymys[2]
    btnC.textContent = kysymys[3]
    btnD.textContent = kysymys[4]
    btnE.textContent = kysymys[5]
    odottaako = false
    equaliseDivHeights(vaihtoehtoButtons);
}
function VaikeaVisa() {
    let kysymys = HaeKysymys();
    kysymysTeksti.textContent = kysymys[0]
    btnA.textContent = kysymys[1]
    btnB.textContent = kysymys[2]
    btnC.textContent = kysymys[3]
    btnD.textContent = kysymys[4]
    btnE.textContent = kysymys[5]
    btnF.textContent = kysymys[6]
    odottaako = false
    equaliseDivHeights(vaihtoehtoButtons);
}

async function Oikein() {
    odottaako = true
    oikeinVastuttu++
    oikeinElement.textContent = oikeinVastuttu
    tulosTeksti.style.color = "green"
    tulosTeksti.textContent = "Oikein"
    await sleep(2000);
    document.getElementById("btn" + tulleetKysymykset[tulleetKysymykset.length - 1][tulleetKysymykset[tulleetKysymykset.length - 1].length - 2].toUpperCase()).style.backgroundColor = "white"
    JatkaVisaa()
}
async function Vaarin() {
    odottaako = true
    vaarinVastattu++
    vaarinElement.textContent = vaarinVastattu
    tulosTeksti.style.color = "red"
    tulosTeksti.textContent = "Väärin"
    await sleep(2000);
    document.getElementById("btn" + tulleetKysymykset[tulleetKysymykset.length - 1][tulleetKysymykset[tulleetKysymykset.length - 1].length - 2].toUpperCase()).style.backgroundColor = "white"
    JatkaVisaa()
}
function JatkaVisaa() {
    if(odottaako) {
    if (valittuKysymysLista.length > tulleetKysymykset.length) {
        tulosTeksti.textContent = "​";
        switch (visa) {
            case "tieto":
            case "maantieto":
            case "historia":
            case "yleistieto":
            case "tiede":
            case "kulttuuri":
                KeskitasoVisa()
                return;
            case "helppoYleistieto":
            case "helppoHistoria":
            case "helppoMaantieto":
            case "helppoTieto":
            case "helppoTiede":
            case "helppoKulttuuri":
                HelppoVisa()
                return;
            case "vaikeaMaantieto":
            case "vaikeaHistoria":
            case "vaikeaYleistieto":
            case "vaikeaTieto":
                VaikeaVisa()
                return;
            default:
                console.log("Höhöhöähäö")
                return
        }
    } else {
        console.log("Loppu kysymykset")
        kysymysTeksti.textContent = "Kysymykset loppuivat"
        tulosTeksti.textContent = "​"
        visa = undefined
        visojenButtons.forEach((button) => {
            button.removeAttribute("disabled")
        })
        lopetaButton.style.display = "none" 
        seuraavaButton.style.display = "none"
        vaihtoehtoButtons.forEach((button) => {
            button.style.display = "none"
        })
        return;
    }
}
}
function equaliseDivHeights(Elements) {
    Elements.forEach(element => {
        element.style.height = 'auto';
    })
    let HeigtOfELements = []
    Elements.forEach(element => {
        HeigtOfELements[HeigtOfELements.length] = element.clientHeight
    })
    const maxHeight = Math.max(...HeigtOfELements)
    Elements.forEach(element => {
        element.style.height = maxHeight + 'px';
    })
}
window.addEventListener('resize', () => {
    equaliseDivHeights(vaihtoehtoButtons);
});