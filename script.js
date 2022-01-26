let valorVelocidade = document.querySelector('#inputVelocidade')
let valorComprimento = document.querySelector('#inputComprimento')
let valorArea = document.querySelector('#inputArea')
let valorVolume = document.querySelector('#inputVolume')

function ativarVelocidade() {

    let valorVelocidade = document.querySelector('#inputVelocidade').value
    let texto = document.querySelector('#textoVelocidade')
    let selectVelocidade = document.querySelector('#selectVelocidade').value
    let selectParaVelocidade = document.querySelector('#selectParaVelocidade').value

    if (selectVelocidade === 'km/h' || selectParaVelocidade === "km/h") {
        texto.innerHTML = valorVelocidade / 3.6

    }

    if (selectVelocidade === "m/s" || selectParaVelocidade === "km/h") {
        texto.innerHTML = valorVelocidade * 3.6

    }

    if (selectVelocidade === selectParaVelocidade) {
        texto.innerHTML = valorVelocidade
    }

    console.log(valorVelocidade)

}

function ativarComprimento() {

    let valorComprimento = document.querySelector('#inputComprimento').value
    let texto = document.querySelector('#textoComprimento')
    let selectComprimento = document.querySelector('#selectComprimento').value
    let selectParaComprimento = document.querySelector('#selectParaComprimento').value

    // KILOMETRO

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento * 1000
    }

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento * 10000
    }

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento * 100000
    }

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento * 100
    }

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 1000000
    }

    if (selectComprimento === "kilômetro (km)" && selectParaComprimento === "hectômetro (hm)") {
        texto.innerHTML = valorComprimento * 10
    }

    // METRO  

    if (selectComprimento === "metro (m)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 1000
    }

    if (selectComprimento === "metro (m)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento * 10
    }

    if (selectComprimento === "metro (m)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento * 100
    }

    if (selectComprimento === "metro (m)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento / 10
    }

    if (selectComprimento === "metro (m)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 1000
    }

    if (selectComprimento === "metro (m)" && selectParaComprimento === "hectômetro (hm)") {
        texto.innerHTML = valorComprimento / 100
    }

    // HECTOMETRO
    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 10
    }

    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento * 1000
    }

    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento * 10000
    }

    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento * 10
    }

    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 100000
    }

    if (selectComprimento === "hectômetro (hm)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento * 100
    }

    // DECIMETRO

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 10000
    }

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "hectômetro (dm)") {
        texto.innerHTML = valorComprimento * 1000
    }

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento * 10
    }

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento / 100
    }

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 100
    }

    if (selectComprimento === "decímetro (dm)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento / 10
    }

    // DECAMETRO

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 100
    }

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "hectômetro (hm)") {
        texto.innerHTML = valorComprimento / 10
    }

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento * 1000
    }

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento * 100
    }

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 10000
    }

    if (selectComprimento === "decâmetro (dam)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento * 10
    }

    // MILIMETRO

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 1000000
    }

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "hectômetro (hm)") {
        texto.innerHTML = valorComprimento / 100000
    }

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento / 10000
    }

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento / 100
    }

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "centímetro (cm)") {
        texto.innerHTML = valorComprimento / 10
    }

    if (selectComprimento === "milímetro (mm)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento / 1000
    }

    // CENTRIMETRO 

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "kilômetro (km)") {
        texto.innerHTML = valorComprimento / 100000
    }

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "hectômetro (hm)") {
        texto.innerHTML = valorComprimento / 10000
    }

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "decâmetro (dam)") {
        texto.innerHTML = valorComprimento / 1000
    }

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "decímetro (dm)") {
        texto.innerHTML = valorComprimento / 10
    }

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "milímetro (mm)") {
        texto.innerHTML = valorComprimento * 10
    }

    if (selectComprimento === "centímetro (cm)" && selectParaComprimento === "metro (m)") {
        texto.innerHTML = valorComprimento / 100
    }


    if (selectComprimento === selectParaComprimento) {
        texto.innerHTML = valorComprimento
    }

    console.log(valorComprimento)
}


function ativarVolume() {

    let valorVolume = document.querySelector('#inputVolume').value
    let textoVolume = document.querySelector('#textoVolume')
    let selectVolume = document.querySelector('#selectVolume').value
    let selectParaVolume = document.querySelector('#selectParaVolume').value

    if (selectVolume === "metro cúbico (m³)" && selectParaVolume === "litro (l)") {
        textoVolume.innerHTML = valorVolume * 1000 }
    

    if (selectVolume === "metro cúbico (m³)" && selectParaVolume === "mililitro (ml)") {
        textoVolume.innerHTML = valorVolume * 1000000
    }
    if (selectVolume === "centímetro cúbico (cm³)" && selectParaVolume === "mililitro (ml)") {
        textoVolume.innerHTML = valorVolume
    }
    if (selectVolume === "centímetro cúbico (cm³)" && selectParaVolume === "litro (l)") {
        textoVolume.innerHTML = valorVolume / 1000
    }

}

function ativarArea() {

    let valorArea = document.querySelector('#inputArea').value
    let textoArea = document.querySelector('#textoArea')
    let selectArea = document.querySelector('#selectArea').value
    let selectParaArea = document.querySelector('#selectParaArea').value

    if (selectArea === "metro quadrado (m²)" && selectParaArea === "centímetro quadrado (cm²)") {
        textoArea.innerHTML = valorArea * 100000
    }

    if (selectArea === "centímetro quadrado (cm²)" && selectParaArea === "metro quadrado (m²)") {
        textoArea.innerHTML = valorArea / 100000
    }
    if (selectArea === selectParaArea) {
        textoArea.innerHTML = valorArea
    }

}


inputVelocidade.addEventListener("change", ativarVelocidade)
inputComprimento.addEventListener("change", ativarComprimento)
inputVolume.addEventListener("change", ativarVolume)
inputArea.addEventListener("change", ativarArea)





