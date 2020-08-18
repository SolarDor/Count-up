$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    
    const firstNumberInput = parseInt($("input#firstNumber").val());
    const secondNumberInput = parseInt($("input#secondNumber").val());

    

    for (let index = 0; index <=firstNumberInput; index += secondNumberInput){
      alert(index);
    } 

  })
})