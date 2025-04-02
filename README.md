# COVID-19 Data Tracker

## Overview
The **COVID-19 Data Tracker** is a web application that visualizes COVID-19 case and vaccination trends using real-time data from the [Disease.sh API](https://disease.sh/). It allows users to select a country and view historical data through interactive charts powered by **Chart.js**.

## Features
- Fetch real-time COVID-19 data for different countries.
- Display historical trends for cases and vaccinations in interactive line charts.
- Simple and responsive UI for better user experience.
- Toggle dark mode for better readability.

## Technologies Used
- **HTML, CSS, JavaScript**: Frontend development
- **Disease.sh API**: Fetching real-time COVID-19 data
- **Chart.js**: Data visualization

## Setup Instructions
1. Clone the repository.
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd covid19-data-tracker
   ```
3. Open `index.html` in a browser.

## Usage
1. Select a country from the dropdown menu.
2. Click the **Fetch Data** button to retrieve and display COVID-19 data.
3. View the cases and vaccination trends in interactive charts.
4. Toggle **Dark Mode** using the button for a better viewing experience.

## API Reference
This project uses the **Disease.sh API**:
- **Country-wise historical data**: `https://disease.sh/v3/covid-19/historical/{country}?lastdays=30`
- **List of available countries**: `https://disease.sh/v3/covid-19/countries`

## Contributing
Feel free to fork the repository and submit pull requests with improvements or bug fixes.

## License
This project is licensed under the MIT License.

