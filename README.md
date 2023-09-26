Project Title:
Dynamic Donation Campaign Manager

Features:

Dynamic Content Rendering:
The project dynamically generates content based on the provided JSON data, ensuring a seamless user experience.

Home Page:
Users are greeted with a categorized list of cards. Each card features a cover picture, category name, and title. Cards within the same category are color-coded for easy identification.

Search Bar:
In the search bar, you can input categories to search for donations and click the search button display only the donations the specified category card show in the home page.

Navbar Section:
The navigation bar offers three menu items on the right: HOME, DONATION, and STATISTICS. The active route is visually highlighted, and clicking any menu item dynamically routes the user to the corresponding section.

Banner Section:
The banner section displays a captivating background image overlaid with a dynamic input field. When users search for a category, the system intelligently filters and displays only relevant cards in lowercase.

Card Details:
Clicking on a card allows users to view detailed information. Additionally, a "Donate" button is provided. Upon clicking, a toast notification confirms the successful donation. The card is then added to the donation section.

Sweet Alert Notifications:
Users receive a sweet alert notification upon successful donation. It ensures that each card can only be donated to once. Attempting to donate to the same card triggers an error alert, providing a user-friendly experience.

Donation Page:
All donated cards are stored here. A "See More" button is available, visible only when a user has donated more than four cards. Clicking "See All" allows users to view all donated cards, while the button remains hidden if there are fewer than four donations.

Statistics Page:
This page showcases a dynamic pie chart. Each donation contributes to the overall percentage of total donations. The chart updates in real-time, reflecting the user's contributions relative to the overall donation pool.

