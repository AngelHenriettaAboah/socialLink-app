# Building My Social Link App: A Journey Through Code and Creativity

- \*\*Overview

In today's digital age, managing multiple social media profiles can be overwhelming. To address this challenge by Frontend Mentor, I embarked on a journey to create a Social Link App—a simple yet effective tool to aggregate and share social media links seamlessly. This file details my experience building the app, the technical choices I made, and the lessons I learned along the way.

Project Overview

The Social Link App allows users to input their basic information and social media links, and then generates a shareable profile showcasing these links. The app extracts the platform names from the URLs, providing a clean and concise display of the user's social media presence.

Workflow and Technical Choices

Setting Up the Project
I started by setting up the basic structure of the project:

HTML for the structure
CSS for styling
JavaScript for functionality

Here's the initial setup:

Building the Form
The form includes fields for the user's name, city, country, profession, and social media links. It also has a file input for uploading a profile picture and buttons to add more social links dynamically.

Adding Dynamic Social Links
To allow users to add multiple social links, I created a function that appends new input fields dynamically:

Generating the Profile
The core functionality of the app is to generate a profile with the user's information and social media links. The generateLink function collects the data, validates it, and then displays it in a clean format.

Extracting Platform Names
To display only the platform names instead of full URLs, I implemented a function to extract and map these names:

Hiding and Showing Elements
To enhance the user experience, I ensured that the form hides once the profile is generated, and the profile result displays appropriately.

Conclusion

Building the Social Link App was a rewarding experience that solidified my understanding of HTML, CSS, and JavaScript. I learned how to manipulate the DOM dynamically, handle user inputs, and improve UX by showing and hiding elements based on user actions. This project not only honed my technical skills but also gave me a deeper appreciation for the intricacies involved in web development.

I look forward to iterating on this project, adding more features, and improving its functionality based on user feedback.

## Demo

![Demo of the Social Link App Solution](https://raw.githubusercontent.com/AngelHenriettaAboah/socialLink-app/main/social-links-profile-main/design/solution.jpg)

![Demo of the Social Link App challenge](https://raw.githubusercontent.com/AngelHenriettaAboah/socialLink-app/main/social-links-profile-main/design/active-states.jpg)
