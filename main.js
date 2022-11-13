
let data = [];

let respuestas = [];

let contador = 0 ;

function getQuestion(contador)
{
    respuestas = [];

    question = data[contador];

    makeQuestion(question);

}

function getExam(set)
{
    switch (set) {
        case "1": data = set1

            break;
        
        case "2": data = set2
            
            break;

        case "3": data = set3
            
             break;

        case "random":{

            alert('aun no ');
            //se deben cambiar los id de las preguntas
        }
    
            break;
        default:
            break;
    }

    data = reOrdenar(data);
    getNext();
    timer(1800);
}
function getNext()
{    
    respuestas = [];
    if(contador == data.length)
    {
        alert('Estas es la ultima pregunta');
        return;
    }
    contador++;

    getQuestion(contador);

}

function getBack()
{
    respuestas = [];
    if(contador == 1)
    {
        alert('Estas es la primera pregunta');
        return;
    }
    contador--;
    getQuestion(contador);
}

function comprobar()
{
    question = data[contador];
    validateQuestion(question.respuestasCorrectas);
}

function validateQuestion(respuestasCorrectas)
{

    if (sameMembers(respuestas,respuestasCorrectas) == true)
    {
        alert('Correcto');
    }
    else
    {
        alert('Incorrecto');
    }

}

function sameMembers(arr1, arr2) 
{
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return arr1.every(item => set2.has(item)) &&
        arr2.every(item => set1.has(item))
}

function setvalue(event)
{
    var checkbox = document.getElementById(event.toString());
 
    if (checkbox.checked != true)
    {
            respuestas = respuestas.filter(function(item) {
            return item !== event.toString();
        })
    }
    else
    {
        respuestas.push(event.toString());
    }
}

function makeQuestion(question)
{
    console.log(question.id,question.pregunta,question.respuestas);

    let bloque = '<div>';
        bloque+= '<h3>' + question.pregunta +'</h3><span>('+question.tipo+')</span><input type="hidden" id="preguntaId" value="'+question.id+'"/>';
        bloque+= '<br><br>';
        bloque+= '<ul class="list-group mb-4">';
        
        question.respuestas.forEach(function(value)
        {
            bloque+= '<li class="list-group-item">';
            bloque+= '<input class="form-check-input me-1" type="checkbox" onclick="setvalue('+value.id+')" value="'+value.id+'"  id="'+value.id+'"  aria-label="...">';
            bloque+= value.titulo;
            bloque+='</li>';
        });
        bloque+= '</ul>';
        bloque+='<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">';
        bloque+='<button  class="btn btn-warning btn-lg px-4 gap-3" onclick="getBack()">Anterior</button>';
        bloque+='<button  class="btn btn-success btn-lg px-4 gap-3" onclick="comprobar()">Comprobar</button>';
        bloque+='<button  class="btn btn-primary btn-lg px-4 gap-3" onclick="getNext()">Siguiente</button>';
        bloque+='</div>';
        bloque += '</div>'

    $('#questionSection').empty().append(bloque);


}

function timer(duration) {
    let timer = duration, minutes, seconds;
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        text = "<p>Tiempo restante: " +  minutes + ":" + seconds+"</p>";
        $('#contador').removeClass('d-none').empty().append(text);

        if (--timer < 0) {
            clearInterval(intervalId);
            alert("se acabo tu tiempo");
        }
    }, 1000);
}

function reOrdenar(arreglo){

    console.log(arreglo);
    let currentIndex = arreglo.length,  randomIndex;
    
    while (currentIndex != 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [arreglo[currentIndex], arreglo[randomIndex]] = [
        arreglo[randomIndex], arreglo[currentIndex]];
    }
    
    return arreglo;
}
      



/*<p> La pregunta</p>
                <ul class="list-group">
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                      First checkbox
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                      Second checkbox
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                      Third checkbox
                    </li>
                    <li class="list-group-item">
                      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                      Fourth checkbox
                    </li>
                  </ul>*/
  

