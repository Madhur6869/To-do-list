//Selecting row with all cards element
var row=document.querySelector('.cards-row');

//Selecting add new section elements
var addsec= document.getElementsByClassName('add-section');
var input_section=document.getElementById('input-section');

//Selecting card elements
var add=document.getElementsByClassName('add-task');
var input=document.getElementsByClassName('input');
var task_list=document.getElementsByClassName('task-list');
var rem_Section=document.getElementsByClassName('remove-section');

//Selecting check and delete elements
var completed1=document.getElementsByClassName('completed');
var del1=document.getElementsByClassName('del');

//Adding new section button
addsec[0].addEventListener('click',addsection);

//Function for adding new task
function addtask(n){
    console.log('start of function');
    //    if(input.value==" "){
    //        alert('Pls enter a task before clicking the add button');
    //        return;
    //    }
    console.log('n',n);
    //Creating child elements
    const task=document.createElement('div');
    const task_text=document.createElement('p');
    const del=document.createElement('img');
    const completed=document.createElement('img');
    
    //Adding attributes to child elements
    task.classList.add('task');
    task_text.classList.add("task-text","col-11","rounded");
    del.classList.add("col-1","del","rounded");
    del.src="trash-fill.svg";
    completed.classList.add("col-1","completed","rounded");
    completed.src="check-circle.svg";
    
    //adding task content
    task_list[n].appendChild(task);
    task_text.innerText=(input[n].value);
    
    //task_text.innerText="hello";
    task.appendChild(task_text);
    task_text.appendChild(del);
    task_text.appendChild(completed);
    console.log('task added');
    input[n].value="";
    
    //Number of tasks in each section
    let N_tasks=task_list[n].childElementCount;
    
    //Check
    task_list[n].children[N_tasks-1].children[0].children[1].addEventListener('click',function(){
        console.log('clicked on tick inside function');
        this.parentElement.classList.toggle('crossed');        
    })     
    
    //Del
    task_list[n].children[N_tasks-1].children[0].children[0].addEventListener('click',function(){
        console.log('clicked on del inside function');
        this.parentElement.parentElement.remove();      
    })      
}

//Function for adding new section
function addsection(){
   console.log('start of addsection function');
   if(input_section.value==""){
       alert('Enter section title');
       return;
   }

     //Creating new section elements and appending attributes
     const column=document.createElement('div');
     column.classList.add("col-lg-4","col-sm-6","column");
     
     const card=document.createElement('div');
     card.classList.add("card");
     
     const card_body=document.createElement('div');
     card_body.classList.add("card-body");
     
     //Section title from input_section form
     const card_title=document.createElement('H5')
     card_title.classList.add("card-title","text-center");
     var text=(input_section.value);
     var t = document.createTextNode(text); // Create a text element 
     card_title.appendChild(t); // Append the text node to the H1 element 
     
     //Add task form
     const form=document.createElement('form');
     form.classList.add("row","g-3","container-fluid","form");
     
     const div_input= document.createElement('div');
     div_input.classList.add("col-9")
     
     const inputtask=document.createElement('input');
     inputtask.classList.add("form-control","input");
     inputtask.type="text";
     inputtask.placeholder="Enter task";
     
     const button_div=document.createElement('div');
     button_div.classList.add("col-3");
     
     const button_addsection=document.createElement('button');
     button_addsection.classList.add("btn","btn-primary","mb-3","add-task");
     button_addsection.type="button";
     button_addsection.innerText="Add";
     
     //Adding task_list div for appending tasks 
     const task_list_div=document.createElement('div');
     task_list_div.classList.add("container-fluid","task-list");

     //Remove section button
     const button_remove_section=document.createElement('button');
     button_remove_section.classList.add("btn","btn-primary","mb-3","remove-section");
     button_remove_section.type="button";
     button_remove_section.innerText="Remove section";

    //Creating structure of new section
     column.appendChild(card);
     card.appendChild(card_body);
     card_body.appendChild(card_title);
     card_body.appendChild(form);     
     form.appendChild(div_input);
     div_input.appendChild(inputtask);
     form.appendChild(button_div);
     button_div.appendChild(button_addsection);
     card_body.appendChild(task_list_div);
     card_body.appendChild(button_remove_section);

     //Appending New section to the row
     row.appendChild(column);

     //Clearing input_Section form
     input_section.value="";
     
     //Adding event listener to add-task button
     let k=add.length-1;
     add[add.length-1].addEventListener('click',function(){         
         addtask(k);
     },false);

    //Adding event listener to remove section button
    let s=rem_Section.length-1;
    rem_Section[s].addEventListener('click',function(){
        this.parentElement.parentElement.parentElement.remove();
    })

}
console.log('end of file');