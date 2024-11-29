#Weather App Using ReactJS

Project Overview
This Weather App is a ReactJS-based project that allows users to check the current weather conditions for any city. The app fetches real-time weather data using the OpenWeatherMap API and displays key information, including temperature, weather conditions, and a relevant weather icon. Users can also dynamically search for weather updates by entering city names, making the app highly interactive and user-friendly.

Features
Real-Time Weather Updates:

Fetches and displays the current weather for any city using the OpenWeatherMap API.
Dynamic City Search:

Includes a search bar for users to input city names and get instant weather data.
React Features:

State Management: Managed using useState.
Lifecycle Hooks: Used useEffect to fetch data when the app loads or when user input changes.
Props: Passed data between components for modularity.
User Interface:

Displays temperature, weather conditions, and weather icons fetched dynamically.
Icons sourced from OpenWeatherMap Weather Conditions.
Responsive Design:

Uses free design templates for a polished, mobile-friendly interface.
Incorporates themes, fonts, and weather-related imagery.

Project Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/<your-github-username>/<studentId>_comp3123_labtest2.git
cd <studentId>_comp3123_labtest2
2. Install Dependencies
bash
Copy code
npm install
3. Obtain API Key
Create an account on OpenWeatherMap to get a free API key.
4. Add API Key to .env File
Create a .env file in the root directory and add:

makefile
Copy code
REACT_APP_API_KEY=<Your_API_Key>
5. Start the Development Server
bash
Copy code
npm start
Usage Instructions
Search for Weather:
Enter a city name in the search bar to view its current weather conditions.
Weather Display:
The app shows the temperature, weather description, and an icon representing the weather condition.
Responsive Design:
Works seamlessly on both desktop and mobile devices.
Screenshots
Home Page

Search Result

API Integration
API Used: OpenWeatherMap API
Endpoint:
bash
Copy code
http://api.openweathermap.org/data/2.5/weather?q=<city>&appid=<API_KEY>
Libraries Used:
Axios: For API calls.
Folder Structure
java
Copy code
<studentId>_comp3123_labtest2/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherDisplay.js
│   │   └── WeatherIcon.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
├── README.md
└── screenshots/

References

OpenWeatherMap API Documentation
React Axios Integration
Weather Conditions Icons
