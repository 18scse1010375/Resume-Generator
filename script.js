function addNewWork()
{
   
    
   let newNode=document.createElement('textarea')
   newNode.classList.add('form-control')
   newNode.classList.add("weField","my-2")
   //newNode.classList.add("my-2")
   newNode.setAttribute('rows',3)
   newNode.setAttribute('placeholder',"Enter here")




  let weOb=document.getElementById('we')
   let weAddButtonOb=document.getElementById('weAddButton')

   weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewQualification()
{

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control','my-2')
    newNode.classList.add('qualiField') 
    newNode.setAttribute('rows',3)
  newNode.setAttribute('placeholder',"Enter here")


    let ob1=document.getElementById("quali")
    let ob2=document.getElementById("qualiButton")

      ob1.insertBefore(newNode,ob2)
}


function generateCV()
{
    alert("Testing")
    let nameField=document.getElementById("nameField").value
    ob1=document.getElementById("nameTemp1") 
    ob2=document.getElementById("nameTemp2")
    ob1.innerHTML=nameField
    ob2.innerHTML=nameField


    let contactField=document.getElementById("contactField").value
    ob1=document.getElementById("contactTemp")
    ob1.innerHTML=contactField


    let addressField=document.getElementById("addressField").value
    ob1=document.getElementById("addressTemp")
    ob1.innerHTML=addressField


    document.getElementById("fbTemp").innerHTML=document.getElementById("fbField").value 
    document.getElementById("insTemp").innerHTML=document.getElementById("insField").value
    
    document.getElementById("linkTemp").innerHTML=document.getElementById("linkField").value 


    // Set the Objective Value

document.getElementById("objectiveTemp").innerHTML=document.getElementById("objectiveField").value

   let wes=document.getElementsByClassName("weField")
   let str=""
   for(let e of wes)
   {
    str=str+ ` <li>  ${e.value}  </li>  `  ;
   }
   document.getElementById("weTemp").innerHTML=str;



   // Set the Acedemic Qualification
   let pqr=document.getElementsByClassName("qualiField")
   let str1=""
   for(let e of pqr)
   {
    str1=str1+ `  <li>   ${e.value}   </li>   `   ;
   }

   document.getElementById("aqTemp").innerHTML=str1;


   // code for setting image
   file=document.getElementById("imgField").files[0]  
   console.log(file)
   let reader=new FileReader();
   reader.readAsDataURL(file)

   console.log(reader.result)   //print the URL of image
   
   //set the image into template  

   reader.onloadend=function()
   {
    document.getElementById("imgTemplate").src=reader.result;

   }


    document.getElementById("cv-form").style.display='none'
   document.getElementById("cv-template").style.display='block'

}

function printCV()
{
    alert("print")
    window.print();
}