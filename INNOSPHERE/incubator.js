// Update incubator count based on region selection
function updateIncubatorsCount() {
    const region = document.getElementById('region').value;
    document.getElementById('incubatorCount').innerText = `There are 486 registered incubators in the ${region} region.`;
}

// Display premium rate range
function displayRangeValue(value) {
    const rangeText = value < 3000 ? `$1000-$2000` : `$3000-$5000`;
    document.getElementById('rangeValue').innerText = rangeText;
}

// Simulate search functionality
function searchIncubators() {
    const region = document.getElementById('region').value;
    const domain = document.getElementById('domain').value;
    const startupType = document.getElementById('startupType').value;
    const premiumRate = document.getElementById('premiumRate').value;
    const funding = document.getElementById('funding').value;
    const cost = document.getElementById('cost').value;

    // Displaying the selected filters in search result
    const resultDiv = document.getElementById('searchResult');
    resultDiv.style.display = "block";
    resultDiv.innerText = `Searching for ${domain} incubators in ${region} with ${startupType} startup type, premium rate ${premiumRate}, funding ${funding}, and ${cost} option.`;
}
