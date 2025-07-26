# Vietnam geography app

A modern, professional NextJS Vietnam geography. After the merger, Vietnam is expected to have 34 provincial-level administrative units. Here's my vision

## APPLICATION OVERVIEW

Build a complete education web app that helps users quickly get the Vietnam provincial-level (city) administrative units. The app should feel modern, intuitive, and professional.

## CORE FEATURES

- Use the image to create SVG for Vietnam city map
- Alway display the main map on the left for all pages and on the right for city information. If no city selected, display Vietnam geography
- The map is rendered in SVG format. When a user hovers over a city, it becomes highlighted. Clicking on a city also highlights it and displays relevant information about that city.
- Filter city by name, this name is before the merger and the current name, (e.g. filter Quang Nam should return for Da Nang), highlight filtered city
- Data persistence using json files and image if needed, localStorage for other
- Feedback form from users, submit button to open mailto:jobtimeseo@gmail.com

## TECHNICAL REQUIREMENTS

- NextJS 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling with a modern, clean design
- Responsive design that works on desktop and mobile
- Use React hooks for state management

## DESIGN REQUIREMENTS

- Clean, modern interface with a professional color scheme
- Intuitive navigation and user experience
- Visual feedback for user actions
- Loading states and error handling
- Mobile-responsive design

## SPECIFIC FUNCTIONALITY

- Feedback form with validation
- City list with search and filter capabilities
- Fetch the information over internet and then summary each city information in 3 paragraphs that best fit for the city information UI
- New city should contains the old city before the merger (e.g. Da Nang should contain Quang Nam)
- Share button for the city information, each city must have its own route (url) for better SEO optimization
- Make sure the JSON files loading with best performance and security

## INSTRUCTIONS

Please keep this as a complete, production-ready application, keep the project structure, implement all features, and make sure everything works together seamlessly. Focus on creating something that looks professional

## Vietnamese Geography

The following table lists the 34 provincial-level administrative units of Vietnam after the merger:
[reqs/34-cities.md](../docs/34-cities.md)
