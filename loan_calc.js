//Listen for submit event
document.getElementById('loan-form').addEventListener('submit', function(e) {

// show loader
  document.getElementById('loading').style.display = 'block'
//hide results
  document.getElementById('results').style.display = 'none'

setTimeout(calculateResults, 2000)

e.preventDefault()
})

// calculate results
function calculateResults() {
  console.log('Calculating...');
  //UI variables

  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  //compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)

//hide loader
  document.getElementById('loading').style.display = 'none'
// show loader
  document.getElementById('results').style.display = 'block'


  } else {
    // console.log('Please check the math')
    showError('Please review')
  }


  
}

// show error

function showError(error) {
  //hide loader
  document.getElementById('loading').style.display = 'none'

  // create a div
const errorDiv = document.createElement('div')

errorDiv.className = 'alert alert-danger'

const card = document.querySelector('.card')
const heading = document.querySelector('.heading')

errorDiv.appendChild(document.createTextNode(error))

card.insertBefore(errorDiv, heading)

setTimeout(clearError, 3000)

}
// clear error
function clearError() {
  document.querySelector('.alert').remove()
}