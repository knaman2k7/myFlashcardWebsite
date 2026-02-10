function adder(){

    var newQuestion = Question.value;
    var newAnswer = Answer.value;
    
    console.log(Answer.value);

    qandas.push([newQuestion, newAnswer]);
    console.log([newQuestion, newAnswer]);

    Question.value = "";
    Answer.value = "";

    reporter(false);

}

// report back the json of the values
function reporter(ReportToMain){

    var outPutString = "";
    var startnum = Number(startIndex.value);

    for(let i = 0; i<qandas.length-1; i++){
        outPutString = outPutString + 
        `'${i+startnum}': {\n     'q':"${qandas[i][0].replace(/(\r\n|\n|\r)/gm, " \\n ")}",\n     'a':"${qandas[i][1].replace(/(\r\n|\n|\r)/gm, " \\n ")}" \n     }, \n`;
    }

    outPutString = outPutString + 
    `'${qandas.length-1+startnum}': {\n     'q':"${qandas[qandas.length-1][0].replace(/(\r\n|\n|\r)/gm, " \\n ")}",\n     'a':"${qandas[qandas.length-1][1].replace(/(\r\n|\n|\r)/gm, " \\n ")}" \n     }`;

    if (ReportToMain){
        outputBox.innerHTML = outPutString;
    }
    else{
        console.log(outPutString);
    }
}

var qandas = []

var Question = document.getElementById("QuestionBox");
var Answer = document.getElementById("AnswerBox")

var startIndex = document.getElementById("startNum");
var outputBox = document.getElementById("OutputBox");

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", adder);

var createButton = document.getElementById("CreateButton");
createButton.addEventListener("click", function(){
    reporter(true);
});

document.addEventListener('keydown', function(event){


    if(event.key=='"'){
        alert('do not use "" ');
    }

})