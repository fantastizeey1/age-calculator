// Function to remove the "float" class when the button is clicked
document.getElementById('calculateButton').addEventListener('click', function() {
    const floatDiv = document.getElementById('float');
    floatDiv.style.display = 'none';
    validateInputs();
  });
  
  