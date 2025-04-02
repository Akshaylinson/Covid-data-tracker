document.addEventListener("DOMContentLoaded", () => {
    populateCountries();
    setupDarkModeToggle();
});

async function populateCountries() {
    try {
        const response = await fetch("https://disease.sh/v3/covid-19/countries");
        const data = await response.json();
        const countrySelect = document.getElementById("country");

        data.forEach(country => {
            let option = document.createElement("option");
            option.value = country.country;
            option.textContent = country.country;
            countrySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching country data:", error);
    }
}

async function fetchCovidData() {
    try {
        const country = document.getElementById("country").value;
        const date = document.getElementById("date").value;
        const url = `https://disease.sh/v3/covid-19/countries/${country}`;
        const response = await fetch(url);
        const data = await response.json();

        const dailyCases = data.todayCases;
        const dailyRecoveries = data.todayRecovered;
        const dailyDeaths = data.todayDeaths;
        const vaccinations = data.todayVaccinated || 0;

        createCasesChart(dailyCases, dailyRecoveries, dailyDeaths);
        createVaccinationChart(vaccinations);
    } catch (error) {
        console.error("Error fetching COVID-19 data:", error);
    }
}

function createCasesChart(cases, recoveries, deaths) {
    const ctx = document.getElementById("casesChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Cases", "Recoveries", "Deaths"],
            datasets: [{
                label: "Daily Count",
                data: [cases, recoveries, deaths],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
            }]
        }
    });
}

function createVaccinationChart(vaccinations) {
    const ctx = document.getElementById("vaccinationChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Vaccinated Today"],
            datasets: [{
                data: [vaccinations, 1000000 - vaccinations],
                backgroundColor: ["#4CAF50", "#ddd"],
            }]
        }
    });
}

function downloadChart() {
    const link = document.createElement("a");
    const canvas = document.getElementById("casesChart");
    link.href = canvas.toDataURL("image/png");
    link.download = "covid_chart.png";
    link.click();
}

function setupDarkModeToggle() {
    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

async function fetchCovidData() {
    try {
        const response = await fetch("http://127.0.0.1:5000/covid");
        const data = await response.json();

        createCasesChart(data.cases, data.recovered, data.deaths);
    } catch (error) {
        console.error("Error fetching COVID-19 data:", error);
    }
}

