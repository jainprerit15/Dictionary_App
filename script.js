
const dictionary=()=>{
  const word = document.getElementById("my-form").elements.item(0).value;
  console.log(word);
const options = {
  method: 'GET',
  // url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
  // params: {word: 'bright'},
  headers: {
    'X-RapidAPI-Key': '5532fba70amsh42192b5879c2be6p18dd5fjsn3db0d7f7b1e4',
    
    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};



fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word,options)
.then(response =>response.json())
.then((response) =>{

console.log(response);
wordheading.innerHTML= "Meaning of :" + response.word;
definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
// definition.innerHTML=response.definition;
})

.catch(err=>console.error(err));


// searchbtn.addEventListener("click",(e)=>{
// // e.preventDefault();
// dictionary(searchinput.value);

// }
// )
}