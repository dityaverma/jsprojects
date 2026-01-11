let joke=document.querySelector(".joke")
let generateBtn=document.querySelector(".generate-btn")
const url="https://icanhazdadjoke.com/";

generateBtn.addEventListener ("click",async (e)=>{
  let new_joke=await fetch(url,{
    headers:{
      accept:"application/json"
    }
  });
  let data=await new_joke.json()
  let the_thedisplayjoke=data.joke;
  joke.textContent=the_thedisplayjoke;
})