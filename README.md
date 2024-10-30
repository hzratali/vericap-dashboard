# User Dashboard Interface

A simple, responsive, React-based User Dashboard that displays and updates user information, retrieves data from an API, and allows searching through the user list. This project is designed with a clean layout, mobile responsiveness, and a component-based architecture.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)

## Features

- **Dashboard Layout**:

  - Navigation bar
  - Sidebar with navigation options (Dashboard, Profile, Settings)
  - Main content area for user data display

- **Profile Section**:

  - Displays user information (e.g., name, email)
  - Provides an update form to modify name and email, using React state management

- **Data Fetching and Display**:

  - Fetches user data from a public API
  - Displays data in a responsive table
  - Provides a search bar to filter user data

- **Responsive Design**:
  - Optimized for both desktop and mobile views
  - Sidebar repositions below the navbar in mobile view

## Technologies Used

- **Frontend**: React.js, CSS
- **Libraries**: Axios for data fetching, React Router for navigation
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/users) for sample user data

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hzratali/vericap-dashboard.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd user-dashboard
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the application**:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## File Structure

```plaintext
user-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.css
│   │   ├── Dashboard.js
│   │   ├── Navbar.css
│   │   ├── Navbar.js
│   │   ├── Profile.css
│   │   ├── Profile.js
│   │   ├── Sidebar.css
│   │   ├── Sidebar.js
│   │   ├── Settings.css
│   │   ├── Settings.js
│   │   └── UserTable.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
├── package.json
└── .gitignore
```
