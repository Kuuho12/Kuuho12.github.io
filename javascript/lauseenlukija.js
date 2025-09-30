//jaavalainen script​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

const IsotAakkoset = [["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0], ["G", 0], ["H", 0], ["I", 0], ["J", 0], ["K", 0], ["L", 0], ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0], ["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0], ["Å", 0], ["Ä", 0], ["Ö", 0]]
const PienetAakkoset = [["a", 0], ["b", 0], ["c", 0], ["d", 0], ["e", 0], ["f", 0], ["g", 0], ["h", 0], ["i", 0], ["j", 0], ["k", 0], ["l", 0], ["m", 0], ["n", 0], ["o", 0], ["p", 0], ["q", 0], ["r", 0], ["s", 0], ["t", 0], ["u", 0], ["v", 0], ["w", 0], ["x", 0], ["y", 0], ["z", 0], ["å", 0], ["ä", 0], ["ö", 0]]
const Numerot = [["0", 0], ["1", 0], ["2", 0], ["3", 0], ["4", 0], ["5", 0], ["6", 0], ["7", 0], ["8", 0], ["9", 0]]
document.getElementById("tulosalue").style = "padding: 0px; background: white;"
const Merkit = [[]]
const Toiminto1 = document.getElementById("Toiminto1");
const Toiminto2 = document.getElementById("Toiminto2");
const nappula1 = document.getElementById("nappula1");
const nappula2 = document.getElementById("nappula2");
const rajasi = document.getElementById("tulosalue");
let something = "aaa";
var Listasi = IsotAakkoset;
var testilista = [];
//eka nappula
nappula1.addEventListener("click", function() {
    if (Toiminto1.value == "") {
        document.getElementById("tulosalue").style = "padding: 0px; background: white;"
        document.getElementById("kokopituus").innerText = "";
        document.getElementById("pituus1").innerText = "";
        document.getElementById("vastaus1").innerText = "";
        document.getElementById("isotpituus").innerText = "";
        document.getElementById("isotkirjaimet").innerText = "";
        document.getElementById("pienetpituus").innerText = "";
        document.getElementById("pienetkirjaimet").innerText = "";
        document.getElementById("pituus2").innerText = "";
        document.getElementById("vastaus2").innerText = "";
        document.getElementById("pituus3").innerText = "";
        document.getElementById("vastaus3").innerText = "";
        document.getElementById("sanamaara").innerText = "";
        document.getElementById("erisanat").innerText = "";
        document.getElementById("sanasi").innerText = "";
        return null;
    }
    document.getElementById("vastaus").innerText = Toiminto1.value;
    if ( Toiminto1.value.match(/[ ]/) !== null) {
    var Valilyonnit = Toiminto1.value.match(/[ ]/g).length;
    } else Valilyonnit = 0
    let KokoPituus = Toiminto1.value.match(/./g).length - Valilyonnit;
    let LauseIsot = Toiminto1.value;
    LauseIsot = LauseIsot.match(/[A-Z]|[À-Ö]|[Ø-Þ]|[Ѐ-Я]/g);
    let LausePienet = Toiminto1.value;
    LausePienet = LausePienet.match(/[a-z]|[à-ö]|[ø-ÿ]|[а-џ]/g);
    let KaikkiKirjaimet = Toiminto1.value.match(/[A-Za-zÀ-ſЀ-џ]/g);
    let Pituus = 0;
    let PienetPituus = 0;
    let IsotPituus = 0;
    var Listasi = [["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0], ["G", 0], ["H", 0], ["I", 0], ["J", 0], ["K", 0], ["L", 0], ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0], ["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0], ["Å", 0], ["Ä", 0], ["Ö", 0]];
    var PienetListasi = [["a", 0], ["b", 0], ["c", 0], ["d", 0], ["e", 0], ["f", 0], ["g", 0], ["h", 0], ["i", 0], ["j", 0], ["k", 0], ["l", 0], ["m", 0], ["n", 0], ["o", 0], ["p", 0], ["q", 0], ["r", 0], ["s", 0], ["t", 0], ["u", 0], ["v", 0], ["w", 0], ["x", 0], ["y", 0], ["z", 0], ["å", 0], ["ä", 0], ["ö", 0]];
    var IsotListasi = [["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0], ["G", 0], ["H", 0], ["I", 0], ["J", 0], ["K", 0], ["L", 0], ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0], ["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0], ["Å", 0], ["Ä", 0], ["Ö", 0]];
    var vapaamuuttuja = 0
    console.log("")
    if (KaikkiKirjaimet !== null) {
    Pituus = KaikkiKirjaimet.length;
    if (LausePienet !== null) {
        PienetPituus = LausePienet.length;
    }
    if (LauseIsot !== null) {
        IsotPituus = LauseIsot.length;
    }
    for (var i = 0; i < KaikkiKirjaimet.length; i++) {
        for (var j = 0; j < Listasi.length; j++) {
            if (LauseIsot !== null) {
            if (LauseIsot[i] === IsotListasi[j][0]) {
                Listasi[j][1]++;
                IsotListasi[j][1]++;
                LauseIsot[i] = "*";
            }
            }
            if (LausePienet !== null) {
            if (LausePienet[i] === PienetListasi[j][0]) {
                Listasi[j][1]++;
                PienetListasi[j][1]++;
                LausePienet[i] = "*";
            }
            }
            if (LausePienet !== null) { 
            if (j == Listasi.length - 1 && LausePienet[i] !== "*" && LausePienet[i] !== undefined) {
                Listasi[Listasi.length] = [String(LausePienet[i]), 0]
                PienetListasi[PienetListasi.length] = [String(LausePienet[i]), 0]
                console.log(LausePienet[i], "Pieni");
                IsotListasi[IsotListasi.length] = [String(LausePienet[i]).toUpperCase(), 0]
            }
            }
            if (LauseIsot !== null) { 
            if (j == Listasi.length - 1 && LauseIsot[i] !== "*" && LauseIsot[i] !== undefined) {
                Listasi[Listasi.length] = [String(LauseIsot[i]), 0]
                IsotListasi[IsotListasi.length] = [String(LauseIsot[i]), 0]
                console.log(LauseIsot[i], "Iso");
                PienetListasi[PienetListasi.length] = [String(LauseIsot[i]).toLowerCase(), 0]
            }
            }
        }
    }
    Listasi.sort(Sorting);
    Listasi.reverse();  
    IsotListasi.sort(Sorting);
    IsotListasi.reverse();  
    PienetListasi.sort(Sorting);
    PienetListasi.reverse();  
    }
    document.getElementById("kokopituus").innerText = "Yhteensä " + KokoPituus + " merkkiä ja " + Valilyonnit + " välilyöntiä";
    document.getElementById("pituus1").innerText = "Yhteensä " + Pituus + " kirjainta";
    if (Pituus !== 0) {
        document.getElementById("vastaus1").innerText = "Kirjaimet:" + LastSort(Listasi);
        document.getElementById("isotpituus").innerText = "Yhteensä " + IsotPituus + " isoakirjainta"
        if (IsotPituus !== 0) {
        document.getElementById("isotkirjaimet").innerText = "Isot kirjaimet:" + LastSort(IsotListasi)
        } else document.getElementById("isotkirjaimet").innerText = ""
        document.getElementById("pienetpituus").innerText = "Yhteensä " + PienetPituus + " pientäkirjainta"
        if (PienetPituus !== 0) {
        document.getElementById("pienetkirjaimet").innerText = "Pienet kirjaimet:" + LastSort(PienetListasi)
        } else document.getElementById("pienetkirjaimet").innerText = "";
    } else if (Pituus == 0) {
    document.getElementById("vastaus1").innerText = "" 
    document.getElementById("pienetkirjaimet").innerText = "";
    document.getElementById("isotkirjaimet").innerText = "";
    document.getElementById("isotpituus").innerText = "";
    document.getElementById("pienetpituus").innerText = "";
    }
    let Lause2 = Toiminto1.value.match(/\d/g);
    let Pituus2 = 0;
    var NumeroLista = [["0", 0], ["1", 0], ["2", 0], ["3", 0], ["4", 0], ["5", 0], ["6", 0], ["7", 0], ["8", 0], ["9", 0]];
    if (Lause2 !== null) {
        Pituus2 = Lause2.length
        for (var e = 0; e < Lause2.length; e++) {
            for (var r = 0; r < Numerot.length; r++) {
                if (Lause2[e] === NumeroLista[r][0]) {
                NumeroLista[r][1]++;
                }
            }
        }
    NumeroLista.sort(Sorting);
    NumeroLista.reverse(); 
    }
    document.getElementById("pituus2").innerText = "Yhteensä " + Pituus2 + " numeroa"
    if (Pituus2 !== 0) {
    document.getElementById("vastaus2").innerText = "Numerot:" + LastSort(NumeroLista)
    } else document.getElementById("vastaus2").innerText = ""
    let Lause3 = Toiminto1.value.match(/\W|[_]/g);
    let Pituus3 = 0;
    var Tarkastus = 0;
    var array1 = [[" ", 0]];
    if (Lause3 !== null) {
        Pituus3 = Lause3.length;
        for (var q = 0; q < Pituus3; q++) {
            if (/[À-ſЀ-џ]|[ ]/.test(Lause3[q])) {
                Tarkastus++;
                continue;
            }
            for (var qq = 0; qq < array1.length; qq++) {
                if (Lause3[q] === array1[qq][0]) {
                    array1[qq][1]++;
                    qq = array1.length;
                }
                if (qq == array1.length - 1 && Lause3[q] !== array1[qq][0]) {
                    array1[array1.length] = [Lause3[q], 0];
                }
            }
        }
        Pituus3 = Pituus3 - Tarkastus;
        array1.sort(Sorting);
        array1.reverse();
        console.log(array1, Lause3)
    }
    document.getElementById("pituus3").innerText = "Yhteensä " + Pituus3 + " muuta merkkiä";
    if (Pituus3 !== 0) {
    document.getElementById("vastaus3").innerText = "Muut merkit:" + LastSort(array1);
    } else document.getElementById("vastaus3").innerText = "";
    let TrueSanat = Toiminto1.value.match(/[A-Za-zÀ-ſЀ-џ]{2,}/g);
    console.log(TrueSanat, "Sanat")
    let EriSanat = 0;
    let SanaMaara = 0;
    if (TrueSanat !== null) {
        SanaMaara = TrueSanat.length;
        var SanaLista = [[" ", 0]];
        for (var l = 0; l < SanaMaara; l++) {
            for (var ll = 0; ll < SanaLista.length; ll++) {
                if (TrueSanat[l].toLocaleLowerCase() === SanaLista[ll][0]) {
                    SanaLista[ll][1]++;
                    ll = SanaLista.length;
                } else if (ll == SanaLista.length - 1 && TrueSanat[l] !== SanaLista[ll][0]) {
                    SanaLista[SanaLista.length] = [TrueSanat[l].toLocaleLowerCase(), 0];
                }
            }
        
        }
        SanaLista.sort(Sorting);
        SanaLista.reverse();
        EriSanat = SanaLista.length - 1;
    }
    document.getElementById("sanamaara").innerText = "Yhteensä " + SanaMaara + " sanaa";
    if (SanaMaara !== 0) {        
    document.getElementById("erisanat").innerText = "Yhteensä " + EriSanat + " erinlaista sanaa";
    document.getElementById("sanasi").innerText = "Sanat:" + LastSort(SanaLista);
    } else if (SanaMaara == 0) {
    document.getElementById("sanasi").innerText = "";
    document.getElementById("erisanat").innerText = "";
    }
    document.getElementById("tulosalue").style = "padding: 20px; background: silver; margin-bottom: 120px;"
    document.getElementById("kirjainsysteeminappula").style = "width: min-content; height: min-content; border-color: black; font-size: 14px;"
    document.querySelector(".rivi1").style = "";
})


var array = []
function Sorting(a, b) {
    if (a[1] === b[1]) {
    array = [a, b]; 
    array.sort(); 
    return array[0] === a ? 1 : -1;
    } else return a[1] - b[1];
}

function LastSort(urray) {
if (urray === null) {
    return null;
}
let FinalLista = "";
for (var u = 0; u < urray.length; u++) {
    if (urray[u][1] >= 1) {
        FinalLista = FinalLista + " " + urray[u][1] + " [" + urray[u][0] + "], ";
    }
}
return FinalLista;
}

nappula1.addEventListener("pointerover", function() {
    document.getElementById("nappula1").style = "background-color: rgb(0, 235, 0);"
})
nappula1.addEventListener("pointerout", function() {
    if (PointerEvent.pointerout = "nappula1") {
        document.getElementById("nappula1").style = "background-color: rgb(30, 195, 30)"
    }
})

var KirjaimetSysteemi = 0
Kirjaimet = document.getElementById("pituus1");
KIrjaimetNappula = document.getElementById("kirjainsysteeminappula");
KIrjaimetNappula.addEventListener("click", function() {
    console.log("yee")
    if (KirjaimetSysteemi == 0) {
    document.getElementsByClassName("kirjaimet", "div").style = "position: relative;"
    document.getElementById("vastaus1").style = "font-size: 14px; position: relative"
    document.getElementById("isotpituus").style = "font-size: 14px; position: relative;"
    document.getElementById("isotkirjaimet").style = "font-size: 14px; position: relative;"
    document.getElementById("pienetpituus").style = "font-size: 14px; position: relative;"
    document.getElementById("pienetkirjaimet").style = "font-size: 14px; position: relative;"
    document.getElementById("kirjainsysteeminappula").innerText = "⮝";
    KirjaimetSysteemi = 1;
    return;
    }
    document.getElementsByClassName("kirjaimet", "div").style = "position: absolute;"
    document.getElementById("vastaus1").style = "font-size: 0px; position: absolute"
    document.getElementById("isotpituus").style = "font-size: 0px; position: absolute;"
    document.getElementById("isotkirjaimet").style = "font-size: 0x; position: absolute;"
    document.getElementById("pienetpituus").style = "font-size: 0px; position: absolute;"
    document.getElementById("pienetkirjaimet").style = "font-size: 0px; position: absolute;"
    document.getElementById("kirjainsysteeminappula").innerText = "⮟";
    KirjaimetSysteemi = 0;
})