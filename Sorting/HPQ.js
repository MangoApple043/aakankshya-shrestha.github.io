
var countG = 0; 
var countR = 0; 
var countS = 0; 
var countH = 0;



function answerG(){ 
	countG = countG+1;
	console.log(countG);


}

function answerR(){
        countR = countR+1;
        console.log(countR);
      
        }

function answerS(){
        countS = countS+1;
        console.log(countS);
        }

function answerH(){
        countH = countH+1;
        console.log(countH);
        }
function retakeQuiz(){
        window.location="HPQlanding.html";
}

function deletebox(){
        
}
function getGryffindor() {
        document.getElementById("welcome-textGryffindor").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
        
        
}
function getRavenclaw(){
        document.getElementById("welcome-textRavenclaw").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}
function getSlytherin(){
        document.getElementById("welcome-textSlytherin").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}
function getHufflepuff(){
        document.getElementById("welcome-textHufflepuff").style.display="block";
        document.getElementById("content").style.display = "none";
        document.getElementById("result").style.display = "none";
}

function calcResult(){
	on();
        if(countG>countS && countG>countR && countG>countH){

        	getGryffindor();
                console.log("if this works youre a G");
        }

        else if (countR>countG && countR>countH && countR>countS) {
                getRavenclaw();
        	console.log("Ravenclaw!!");
        }

        else if (countH>countG && countH>countR && countH>countS){
                getHufflepuff();
        	console.log("Hufflepuff!!");
        }

        else {
        	getSlytherin();
                console.log("Slytherin!!");
        }

        	
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

