# Artium Movie Listing

This project is a React-based movie listing site that allows users to search for movies, view search results, and see detailed information about individual movies. It uses the OMDB API to fetch movie data.

## Features

- Movie search with debounced API calls
- Search type-ahead list
- Infinite scroll on the listing page
- Responsive design for mobile and desktop
- Detailed movie information page

## Technologies Used

- React
- TypeScript
- Styled Components
- React Router
- OMDB API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (v14.0.0 or later)
- You have a Windows/Linux/Mac machine

## Installing and Running the Movie Listing Site

To install and run the Movie Listing Site, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yoginderkumar/artium-movies
   ```

2. Navigate to the project directory:
   ```
   cd artium-movies
   
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OMDB API key:
   ```
   VITE_API_KEY=your_api_key_here
   VITE_BASE_URL=https://www.omdbapi.com/
   ```
   Replace `your_api_key_here` with your actual OMDB API key.

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173/` to view the application.

## Using the Movie Listing Site

- On the home page, use the search bar to look for movies.
- As you type, you'll see a list of movie suggestions.
- Click on a movie card to view more details about that movie.
- On the movie details page, you can see additional information about the selected movie.
- Use the "Back to Search" button to return to the search results.

## Contributing to the Movie Listing Site

To contribute to the Movie Listing Site, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).