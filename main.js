
let data = [
    {
        "id": "1",
        "pregunta" : "sassa" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "sdsdsdsdsdsds",
            },
            {
                "id" : "2",
                "titulo" : "sdsdsdsdsdsds",
            },
            {
                "id" : "3",
                "titulo" : "sdsdsdsdsdsds"
            }
        ]
    },
    {
        "id": "2",
        "pregunta" : "xxxxxxx" ,
        "respuestasCorrectas": ["3"],
        "tipo": "simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "aaaaa",
            },
            {
                "id" : "2",
                "titulo" : "aaaaa",
            },
            {
                "id" : "3",
                "titulo" : "aaaaa"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "Que lenguaje es una mierda" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "apex",
            },
            {
                "id" : "2",
                "titulo" : "js",
            },
            {
                "id" : "3",
                "titulo" : "c++"
            }
        ]
    }

];

let respuestas = [];

let contador = 0;

function getQuestion(contador)
{
    respuestas = [];
    let question = data.filter(function(value)
    {
        return value.id ==  contador.toString();
    });

    question = question[0];

    makeQuestion(question);

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
    console.log
    let question = data.filter(function(value)
    {
        return value.id ==  contador.toString();
    });

    question = question[0];

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
        bloque+= '<h3>' + question.pregunta +'</h3><input type="hidden" id="preguntaId" value="'+question.id+'"/>';
        bloque+= '<br><br>';
        bloque+= '<ul class="list-group">';
        
        question.respuestas.forEach(function(value)
        {
            bloque+= '<li class="list-group-item">';
            bloque+= '<input class="form-check-input me-1" type="checkbox" onclick="setvalue('+value.id+')" value="'+value.id+'"  id="'+value.id+'"  aria-label="...">';
            bloque+= value.titulo;
            bloque+='</li>';
        });

        bloque+='<div>';
        bloque+='<button onclick="getBack()">Anterior</button>';
        bloque+='<button onclick="comprobar()">Comprobar</button>';
        bloque+='<button onclick="getNext()">Siguiente</button>';
        bloque+='</div>';
        
    bloque += '</div>'

    $('#questionSection').empty().append(bloque);


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
  

