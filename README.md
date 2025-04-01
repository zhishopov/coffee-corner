# The Coffee Corner

**The Coffee Corner** is a single-page React application for a bakery/coffee shop. It provides a public area where users can view the menu and product details, and a private area where registered users can book a table. The app communicates with a RESTful server provided by Software University.

## Features

- **Home Page:** Welcome message and a brief overview.
- **Menu Page:** Displays all products with a "Details" button to toggle product descriptions.
- **Product Details:** Shown on the Menu page upon user request.
- **Authentication:** Users can register and log in.
- **Book a Table:** Authenticated users can create, update, and delete table bookings (CRUD operations).
- **Responsive Design:** The UI is responsive and styled with CSS.
- **Error Handling:** Improved error handling for API requests.

## Installation

1. **Clone the repository:**

   git clone "https://github.com/zhishopov/coffee-corner.git"
   cd coffee-corner

2. **Server Setup**
   The server runs on http://localhost:3030

   Navigate to the server folder:
   cd ../server

   Start the server:
   node server.js

3. **Install dependencies**
   cd client
   npm install

4. **Start the app**
   npm run dev

5. **Admin Credentials**
   Email: admin@abv.bg  
   Password: admin

**How the App works**
Navigation: Use the header links to navigate between Home, Menu, Login, Register, and Book a Table pages.

Register/Login: Create an account or log in to access the booking features.

Menu: View available products and click "Details" to see more information.

Book a Table: Fill in the form to book a table. Edit or cancel your booking using the provided options.

**Technologies Used**
React (with Vite)
React Router
Context API for state management
Custom hooks for API calls and authentication
CSS for styling
