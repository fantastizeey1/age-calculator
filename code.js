document.getElementById('calculateButton').addEventListener('click', function (e) {
  e.preventDefault();
  calculateAge();
});

function calculateAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  const errorMessage = document.querySelector('.error-message');

  // Check for invalid inputs
  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';

  // Rest of your age calculation logic here
  
}

function calculateAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  if (!isValidDate(day, month, year)) {
    document.getElementById('result').innerHTML = '<p style="color:red" >Please enter a valid date!</p>';
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays = prevMonthLastDay - birthDate.getDate() + today.getDate();
    ageMonths--;
  }

  // Display the result
  document.getElementById('result').innerHTML = `
    <h2><span style="color: hsl(259, 100%, 65%)">${ageYears}</span> years</h2><br>
    <h2><span style="color: hsl(259, 100%, 65%)">${ageMonths}</span> months</h2><br>
    <h2><span style="color: hsl(259, 100%, 65%)">${ageDays}</span> days</h2>
  `;
}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// Event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', function (e) {
  e.preventDefault();
  calculateAge();
});
