//using selectors inside the element

// grab all the articles
const questions = document.querySelectorAll('.question');

// loop through articles
questions.forEach(function(question){
  //console.log(question);
  // looks for button just within the current article
  const button = question.querySelector('.question-btn')
  //console.log(button);
  // each button gets an event listener
  button.addEventListener('click', function(){
    // loop through the articles again
    questions.forEach(function(item){
      //console.log(item);
      // any item/article that is NOT the one clicked on, gets show-text removed
      if(item !== question){
        item.classList.remove('show-text')
      }
    });
    question.classList.toggle('show-text');
  });
})


// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function(button){
//   button.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });