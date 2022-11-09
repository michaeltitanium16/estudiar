
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
        "respuestasCorrectas": ["1","2"],
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

let contador = 0;

function getQuestion(contador)
{
    let question = data.filter(function(value)
    {
        return value.id ==  contador.toString();
    });

    question = question[0];

    makeQuestion(question);

}
function getNext()
{

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
    if(contador == 1)
    {
        alert('Estas es la primera pregunta');
        return;
    }
    contador--;
    getQuestion(contador);
}

function michael()
{
    alert("michael");
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
            bloque+= '<input class="form-check-input me-1" type="checkbox" value="'+value.id+'" aria-label="...">';
            bloque+= value.titulo;
            bloque+='</li>';
        });

        bloque+='<div>';
        bloque+='<button onclick="getBack()">Anterior</button>';
        bloque+='<button onclick="michael()">Comprobar</button>';
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
  

