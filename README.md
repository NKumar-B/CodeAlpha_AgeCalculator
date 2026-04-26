# NithyaChronix - Age Calculator

NithyaChronix is a sleek, lightweight, and interactive Single Page Application (SPA) built to calculate a user's exact age in years, months, and days. It features a modern user interface with a dark/light mode toggle, smooth scrolling, and responsive design.

**Go Live** : https://nkumar-b.github.io/CodeAlpha_AgeCalculator/

<img width="1879" height="851" alt="image" src="https://github.com/user-attachments/assets/ba753b31-85c2-493c-9016-f2d7d6d0438a" /><br/>

<img width="1887" height="848" alt="image" src="https://github.com/user-attachments/assets/48adc82b-9226-4ae7-984f-2d33109f0915" />

## Features

- **Precise Age Calculation**: Calculates exact age (Years, Months, Days) using the JavaScript `Date` object, accounting for leap years and varying month lengths.
- **Interactive UI**: 
  - The calculator section is initially hidden and smoothly reveals itself when the "Calculate Your Age" button is clicked.
  - Custom modal popup to display the calculated result cleanly without standard browser alerts.
- **Dark/Light Mode Toggle**: Built-in theme switcher that dynamically updates CSS variables for a comfortable viewing experience in any lighting.
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling to different sections (Home, About, Contact).
- **Responsive Layout**: Fully responsive design that adapts to mobile, tablet, and desktop screens.
- **Integrated Map**: Features a Google Maps iframe pointing to headquarters (Gangavaram, Andhra Pradesh) alongside contact details.

## Tech Stack

This project is built using strictly vanilla web technologies for maximum performance and zero dependencies:
- **HTML5**: Semantic structure and layout.
- **CSS3**: Custom properties (variables) for theming, Flexbox for layout, and modern styling.
- **JavaScript**: DOM manipulation, event handling, and date math logic.

## File Structure

The project is modularized into three core files for easy maintenance:

```text
NithyaChronix
 ┣ index.html   # The main HTML structure
 ┣ style.css    # The stylesheet containing themes and responsive layouts
 ┗ script.js    # The logic for the calculator, modal, and theme toggle
```

## Installation & Setup

You can easily get this project up and running on your local machine. No local server or build steps are required.

**To clone the repository using Git:**

1. Open your terminal or command prompt.
2. Run the following cloning command (replace the URL with your actual repository URL if hosted):
   ```bash
   git clone [https://github.com/NKumar-B/CodeAlpha_AgeCalculator.git](https://github.com/NKumar-B/CodeAlpha_AgeCalculator.git)
   ```
3. Navigate into the project directory:
   ```bash
   cd CodeAlpha_AgeCalculator
   ```
4. Simply double-click `index.html` to open it in your default web browser!

## Usage

1. Open the website.
2. Scroll to the **About** section and click **Calculate Your Age**.
3. Enter your **Full Name** and select your **Date of Birth**.
4. Click **Calculate Age**.
5. View your exact age in the custom popup modal.
6. Click **OK** to close the modal and return to the home section.

## Future Enhancements

Here are a few planned features to make NithyaChronix even better in future iterations:

- **Next Birthday Countdown:** Display how many months and days are left until the user's next birthday.
- **Zodiac Sign Integration:** Automatically display the user's astrological/zodiac sign based on their Date of Birth.
- **Local Storage History:** Save recent age calculations locally so users can view a history of their entries without a database.
- **Advanced Animations:** Implement libraries like Framer Motion or GSAP to add micro-interactions to the modal and buttons.
- **Export & Share:** Add functionality to let users download an image of their age result or share it directly to social media.

## Author

Built by **Badduluri Nithin Kumar**
- **Email:** nithinkumarbadduluri@gmail.com
- **Location:** Chittoor, Andhra Pradesh, India
- **Copyright:** © 2026 NithyaChronix. All rights reserved.
```
