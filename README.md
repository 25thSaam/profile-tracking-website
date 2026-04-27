# International Tracking & Profiling Database (ITPD) – Fake Website Project

## Overview

The **International Tracking & Profiling Database (ITPD)** is a fake web application built for a school project exploring an information crisis scenario set in the year 2076. The website simulates a dystopian system where user profiles are tracked, analyzed, and accessed through a centralized database.

The project was built using **HTML, CSS, and JavaScript** to explore frontend development and UI/UX design concepts while also engaging with themes of privacy, and surveillance.


## Motivation

As a Computer Science student with an interest in cybersecurity, I wanted to explore the growing importance of **information security and digital privacy**.

Although modern-day systems are not as extreme as the scenario presented in this project, issues such as data collection, surveillance, and privacy violations already exist. This project exaggerates these concerns to highlight a potential dystopian future shaped by unchecked information systems.


## Key Features

- **Profile Search & Filtering System**
  - Users can search and filter profile cards

- **Dynamic Profile Pages**
  - Some profiles (first 4) redirects to a unique page using URL parameters
  - Displays fake data such as:
    - Location
    - Financial status
    - Social information

- **Simulated Live Tracking Feed**
  - Fake real-time logs generated to simulate continuous monitoring

- **Access-Controlled Pages**
  - Certain pages are restricted to simulate unequal access to information

- **Data Visualization Page**
  - Includes a map showing simulated global distribution of tracked profiles
  - Highlights concentration in more developed regions


## Course Connections & Themes

This project connects to several themes discussed in class:

- **Unequal distribution of suffering**
  - Crises and surveillance impact populations differently based on geography and socioeconomic status

- **Geography of crises**
  - Inspired by readings such as *Why Geography Matters* and discussions on global inequality

- **Technology & AI risks**
  - Explores how advanced systems of data collection could be misused

- **Power and information control**
  - Highlights how organizations may profit from or exploit personal data

---

## Design Process

The initial design was created using **Figma** as blueprint for the website structure.
- https://www.figma.com/site/YfS0QhupOBNOp4SqVRF5ci/ITPD-Site---2076-Project?node-id=0-1&t=4MYuAEfP9EyUv3A6-1

- Figma planning was used to design layout and user flow
- Figma was used as reference to built interactive website in **Visual Studio Code**  
  - The final website was implemented using **JavaScript, HTML, and CSS** with changes to design being made during     development for a cleaner website design.


## Data Visualization

The map used in the “Data” page was created using **Canva**, utilizing pre-made design elements to represent global tracking distribution.


## Use of Artificial Intelligence

AI was used as a development tool in the following areas:

### Profile Generation
- Generated 50+ fictional user profiles
- Format: 
```js
{ name: "Alice Johnson", id: 1023, access: true }
```

### Live Tracking Log Generation
- Generated 100+ fake logs
