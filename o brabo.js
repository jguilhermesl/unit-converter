if (selectVolume === "metro quadrado (m²)" && selectParaVolume === "centímetro quadrado (cm²)") {
    textoVolume.innerHTML = valorVolume / 1000000
} 

if (selectVolume === "milímetro (mm)" && selectParaVolume === "hectômetro (hm)") {
    texto.innerHTML = valorVolume / 100000
} 

if (selectVolume === "milímetro (mm)" && selectParaVolume === "decâmetro (dam)") {
    texto.innerHTML = valorVolume / 10000
} 

if (selectVolume === "milímetro (mm)" && selectParaVolume === "decímetro (dm)") {
    texto.innerHTML = valorVolume / 100
} 

if (selectVolume === "milímetro (mm)" && selectParaVolume === "centímetro (cm)") {
    texto.innerHTML = valorVolume / 10
} 

if (selectVolume === "milímetro (mm)" && selectParaVolume === "metro (m)") {
    texto.innerHTML = valorVolume / 1000
} 

function ativarVolume() {
    
    let valorVolume = document.querySelector('#inputVolume').value
    let textoVolume = document.querySelector('#textoVolume')
    let selectVolume = document.querySelector('#selectVolume').value
    let selectParaComparimento = document.querySelector('#selectParaVolume').value 
}