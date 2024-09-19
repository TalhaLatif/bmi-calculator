# BMI Calculator Web Application

This is a simple BMI (Body Mass Index) calculator web application. The app allows users to input their weight in kilograms and height in inches to calculate their BMI. It provides a feedback message based on the WHO Adult BMI Categories.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Key Files](#key-files)
- [Technologies Used](#technologies-used)

## Overview
The BMI Calculator Web Application is built using React for the front-end and a Spring Boot back-end to handle the BMI calculations. The application provides a responsive user interface, ensuring usability across different devices.

## Project Structure
The project is divided into two main parts:
- `fe/` (Frontend): Contains the React application.
- `be/` (Backend): Contains the Spring Boot application.

### Frontend (`fe/`)
The frontend is developed using React and is structured as follows:

fe/ │ ├── public/ │ ├── index.html │ └── ... │ ├── src/ │ ├── App.js │ ├── App.css │ ├── index.js │ └── ... │ ├── package.json └── README.md


### Backend (`be`)
The backend is a simple Spring Boot application structured as follows:

be/ │ ├── CALapp/ │ ├── src/main/java/com/example/CALapp/ │ │ ├── CalculatorApplication.java │ │ └── CalculatorController.java │ ├── src/main/resources/ │ ├── pom.xml │ └── ...




## Setup Instructions

### Prerequisites
- Node.js and npm installed for the frontend.
- Java Development Kit (JDK) installed for the backend.
- Maven installed for the backend.

### Frontend Setup (`fe`)
1. Navigate to the `fe` directory.
2. Install the dependencies:
 
    npm install


    Start the React development server:
    npm start

    The application will be available at http://localhost:3000.

Backend Setup (be)

    Navigate to the be/CALapp directory.
    Run the Spring Boot application using Maven:


./mvnw spring-boot:run

Or on Windows:

    mvnw.cmd spring-boot:run

    The backend server will be available at http://localhost:8080.

## Screenshot
![image](https://github.com/user-attachments/assets/939867ef-ad47-4223-bf4d-1f1840820c04)


## Usage

    Enter your weight in kilograms and height in inches in the input fields.
    Click on the "Calculate BMI" button to see your BMI and the corresponding category.
    The WHO BMI category table is provided on the right side (or below on mobile devices) for reference.

## Key Files
Frontend (fe/src/)

    App.js: Main component of the React application. Contains the layout and logic for the BMI calculation.
    App.css: Stylesheet for the application. Includes styling for the layout, input fields, buttons, and the BMI table.
    index.js: Entry point for the React application.

Backend (be/CALapp/src/main/java/com/example/CALapp/)

    CalculatorApplication.java: Main class for the Spring Boot application. Initializes and runs the application.
    CalculatorController.java: Controller that defines the REST API for the BMI calculation. It includes the following endpoints:
        GET /api/bmi: Calculates BMI based on the provided weight and height parameters.

Detailed Explanation of Files
Frontend Files

    App.js:
        Contains the form for user input (weight and height).
        Calls the backend API to calculate BMI and provides feedback based on the result.
        Displays the BMI value and the WHO BMI category table.
    App.css:
        Defines the layout of the BMI calculator and the WHO BMI table.
        Uses media queries to make the UI responsive for different screen sizes.
    index.js:
        Renders the main App component into the root element in index.html.

Backend Files

    CalculatorApplication.java:
        The main entry point for the Spring Boot application.
        Excludes data source configuration as this application does not require a database.
    CalculatorController.java:
        REST controller that provides endpoints for basic arithmetic operations and BMI calculation.
        Endpoint GET /api/bmi takes weight and height as parameters and returns the calculated BMI.

## Technologies Used

    Frontend: React, CSS
    Backend: Java, Spring Boot
    Build Tools: Maven, npm

License

This project is open source and available under the MIT License.
