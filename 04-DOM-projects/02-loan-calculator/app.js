// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
	// hide results right away
	document.getElementById("results").style.display = "none";
	// show loader
	document.getElementById("loading").style.display = "block";

	setTimeout(calculateResults, 1000);

	e.preventDefault();
});

function calculateResults() {
	// UI vars
	const amount = document.getElementById("amount");
	const interest = document.getElementById("interest");
	const years = document.getElementById("years");
	const monthlyPayment = document.getElementById("monthly-payment");
	const totalPayment = document.getElementById("total-payment");
	const totalInterest = document.getElementById("total-interest");
	const principal = parseFloat(amount.value);
	const calculateInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value * 12);

	// Computer Monthly Payment
	const x = Math.pow(1 + calculateInterest, calculatedPayments);
	const monthly = (principal * x * calculateInterest) / (x - 1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // show result
    document.getElementById("results").style.display = "block";
    // hide loader
    document.getElementById("loading").style.display = "none";
	} else {
		showError("please check your numbers");
	}
}

function showError(error) {
     // hide result
     document.getElementById("results").style.display = "none";
     // hide loader
     document.getElementById("loading").style.display = "none";

	const errorDiv = document.createElement("div");

	// get elements
	const card = document.querySelector(".card");
	const heading = document.querySelector(".heading");

	// add bootstrap classes
	errorDiv.className = "alert alert-danger";

	// create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// insert error above heading
	card.insertBefore(errorDiv, heading);

	// clear error after three seconds
	setTimeout(clearError, 1000);
}

function clearError() {
	document.querySelector(".alert").remove();
}
