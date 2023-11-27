document.addEventListener('DOMContentLoaded', function() {
    let inputValues = document.getElementById('inputValues');
    let countButton = document.getElementById('countButton');
    let countResult = document.getElementById('count');
    countButton.addEventListener('click', function() {
      let values = inputValues.value.split(',').map(value => value.trim());
      let countTruthy = values.filter(value => !!value).length;
      countResult.textContent = countTruthy;
    });
  });
  
  
  
  
  
  
  