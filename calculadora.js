var mes  = document.querySelector("#mes");
var horas= document.querySelector("#horas");
var dias = document.querySelector("#dias"); 
var resp = document.querySelector("#resposta");

function calculaHora(){
    var valorHora = (mes.valueAsNumber/dias.valueAsNumber)/horas.valueAsNumber
    resp.textContent = valorHora;
}