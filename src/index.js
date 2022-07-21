document.addEventListener("DOMContentLoaded", () => {
  //we want to grab the form first
  let form = document.getElementById('create_task_form')
  //create an event listener on the form to take the submit button and execute
  //our event handler
  form.addEventListener('submit', (e) => {
  //recall that for submit events, default is autorefresh so prevent that with
  //method .preventDefault()
    e.preventDefault()
  //we want to pass in some function here that is going create our task
  //to be called when we the event submit happens
  console.log(e.target)
    CreateToDo(e.target.new_task_description.value)
  //to keep adding new tasks, we need to reset the form as well in beginning
    form.reset
  })
});


//Here we are creating the function CreateToDo that will be called once the
//event handler function is called (basically inside the anon function with 
//argument (e))
function CreateToDo (todo){
  //we need to create an element p, which will have our input text 
  let p = document.createElement('p')
  //we will also need to create the remove button [x]
  let btn = document.createElement('button')
  //we also need to change the text content for both of these new variables
  //for p we want to change the text with whatever to do task we are passing in 
  //as argument in the parameter
  p.textContent = `${todo}`
  //for button, we want there to be a x in it
  btn.textContent = 'x'
  //we can also add an event listener for button to remove the input and the box itself 
  btn.addEventListener('click', handleDelete)
  //we want to append the p, btn inside of the <ul id "tasks"><ul>, then append it to 
  //its parentNode <div id "list"><div>
  //
  //                              <div id = "list">
  //                             /                  \
  //    <h2> - text ="My Todos"                     <ul id = "tasks">
  //                                                   /        \
  //                                                  <p>       <p>   
  //                                                   |         |
    //                                              <button> <button>         
  let ulContainer = document.getElementById('tasks')
  let divContainer = document.querySelector('div#list')
  p.appendChild(btn)
  ulContainer.append(p)
}

function handleDelete(e){
 e.target.parentNode.remove()
}