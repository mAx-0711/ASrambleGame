const btn = document.querySelector('.btn');
const msg =document.querySelector('.msg');
const guess=document.querySelector('input');

let words=['python','javascript','sql','java','c++','php','c#','html','css','reactjs','angular','swift','android','nodejs',];

let play = false;

let word="";
let modifiedWord="";

createWord= (words)=>{
    let n=Math.floor(Math.random()*words.length);
    return words[n];
}

ModifyWord=(word)=>{
    for(let i=word.length-1;i>=0;i--){
        let t= word[i];
        let j = Math.floor(Math.random(i+1));
        word[i]=word[j];
        word[j]=t;
    }
    return word.join("");
    
}

fun=()=>{
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        word = createWord(words);
        modifiedWord = ModifyWord(word.split(""));
        msg.innerHTML=modifiedWord;
    }
    else{
        let guessedWord=guess.value.toLowerCase();
        if(guessedWord===word){
            play=false;
            msg.innerHTML=`Awesome it's correct. It is ${word}.`;
            btn.innerHTML="start again";
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            msg.innerHTML=`It's incorrect. Please try again.${word}`;
            guess.value="";
        }
    }
}

btn.addEventListener('click',fun);
