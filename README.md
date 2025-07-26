# Vietnam Geography - 34 Provincial Administrative Units

A modern, professional NextJS educational web application that helps users explore Vietnam's 34 provincial-level administrative units after the administrative merger.

## Features

### 🗺️ Interactive Map

- SVG-based interactive map of Vietnam
- Click on cities to explore detailed information
- Hover effects and visual feedback
- Responsive design for desktop and mobile

### 🔍 Smart Search

- Search by current city names
- Search by former province names (e.g., searching "Quang Nam" returns "Đà Nẵng")
- Real-time filtering with visual highlighting on map
- Autocomplete suggestions

### 📊 Detailed City Information

- Comprehensive city profiles with 3-paragraph descriptions
- Population and area statistics
- Former province names included in merger
- Share functionality for each city

### 🌐 SEO Optimized

- Individual pages for each city with SEO-friendly URLs (e.g., `/city/ha-noi`, `/city/da-nang`)
- Proper meta tags and Open Graph support
- Static generation for better performance

### 💌 Feedback System

- Contact form with validation
- Direct email integration (mailto:jobtimeseo@gmail.com)
- User-friendly form with proper error handling

### 📱 Mobile Responsive

- Optimized for all screen sizes
- Touch-friendly interactions
- Mobile-first design approach

## Technology Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS for modern, clean design
- **State Management:** React hooks
- **Data Storage:** JSON files for city data, localStorage for user preferences
- **Icons:** Custom SVG icons for better performance

## Installation and Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Building for Production

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Testing All Features

### 1. Interactive Map Testing

- Click on different cities on the map
- Hover over cities for visual feedback
- Verify city information updates in right panel

### 2. Search Functionality Testing

- Search for current city names (e.g., "Hà Nội")
- Search for former province names (e.g., "Quang Nam" should return "Đà Nẵng")
- Test autocomplete and filtering

### 3. City Pages Testing

- Click "View Full Page" on any city
- Test direct URL access (e.g., `/city/ha-noi` for Hà Nội, `/city/da-nang` for Đà Nẵng)
- Test share button functionality

### 4. Feedback Form Testing

- Fill out form with valid/invalid data
- Test email integration (opens to jobtimeseo@gmail.com)
- Verify form validation

### 5. Mobile Responsiveness

- Test on different screen sizes
- Verify touch interactions work properly

## Key Features Implemented

✅ Interactive SVG map of Vietnam's 34 provincial units  
✅ Search functionality with former province name support  
✅ Individual city pages with SEO optimization  
✅ Feedback form with email integration  
✅ Mobile-responsive design  
✅ Local storage for user preferences  
✅ TypeScript for type safety  
✅ Modern UI with Tailwind CSS

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
