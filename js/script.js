let sort = document.getElementById("sort");
let MaleBtn = document.getElementById("MaleBtn");
let FemaleBtn = document.getElementById("FemaleBtn")
let sortText = document.getElementById("sortText");
let arr = [
  {
    name:"Konstantin",
    age:30 + " years old",
    sex:"male"
    
  },
  {
    name:"Georgiy",
    age:21 + " years old",
    sex:"male"
   
    
  },
  {
    name:"Yulia",
    age:19 + " years old",
    sex:"famele"
    
  },
  {
    name:"Katia",
    age:22 + " years old",
    sex:"famele"
    
  }
]

for(let people in arr){

  let array = arr[people].name + " " + arr[people].age + " " + arr[people].sex + " " +  "<br>";

 document.getElementById("text").innerHTML +=   array;

}

sort.onclick = function() {


 arr.sort(function (x,y) {


  if(x.name < y.name){
        return -1;

  }
  if(x.name > y.name){
    return 1;

}

  return 0;

 }) 

 document.getElementById("text").innerHTML =  "";
 document.getElementById("sortText").innerHTML =  "";
 textSort = arr;
 for(let people in textSort){

  sortText.innerHTML += textSort[people].name + " " + textSort[people].age + " " + textSort[people].sex + "<br>";

 }

  

  MaleBtn.disabled = "";
  sort.disabled = true;
  FemaleBtn.disabled = "";
 
 

}
MaleBtn.onclick = () => {


  let man = "male";

  const Male = arr.filter((male) => male.sex == man);

  document.getElementById("sortText").innerHTML =  "";
  for(let people in Male) {


    sortText.innerHTML += Male[people].name + " " +  Male[people].age + " " +  Male[people].sex + " " + "<br>";

  }
  

    MaleBtn.disabled = true;
    sort.disabled = "";
    FemaleBtn.disabled = "";

}

FemaleBtn.onclick = () => {


  let woman = "famele";

  const Famele = arr.filter((famele) => famele.sex == woman);
  document.getElementById("sortText").innerHTML =  "";
  for(let people in Famele) {


    sortText.innerHTML += Famele[people].name + " " +  Famele[people].age + " " +  Famele[people].sex + " " + "<br>";

  }

  

    MaleBtn.disabled = "";
    sort.disabled = "";
    FemaleBtn.disabled = true;


}