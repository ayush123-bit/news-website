
# News Web Application

This project is a simple news aggregator that fetches and displays the latest news articles from various categories such as Business, Technology, Sports, and more. Users can filter articles by category and read detailed content in a modal dialog box. The project demonstrates API integration, state management, and responsive design using React.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Integration](#api-integration)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## Features
- Fetches latest news articles from multiple categories.
- Allows filtering articles by category (e.g., Business, Technology, Health, etc.).
- Responsive grid layout for news cards.
- Modal dialog box for viewing detailed article content.
- Error handling for API failures.
- Default image display if no image is available for an article.

---

## Technology Stack
- **Frontend:** React.js
- **CSS:** For styling the homepage and modal components.
- **Backend/API:** NewsAPI (for fetching news articles).

---

## API Integration
### NewsAPI
- This application uses the [NewsAPI](https://newsapi.org/) to fetch top headlines for different categories.
- You can sign up for an API key [here](https://newsapi.org/register) and use it for fetching the news articles.
- API endpoint example: `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=YOUR_API_KEY`

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- NewsAPI key (available by registering on [NewsAPI](https://newsapi.org/register))

### Steps to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ayush123-bit/news-website
   cd news-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create an `.env` file** in the root of your project and add your NewsAPI key:

   ```bash
   REACT_APP_NEWS_API_KEY=your-newsapi-key
   ```

4. **Run the development server:**

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. The homepage will display the latest general news.
3. Use the category filter dropdown to filter articles based on categories like Business, Technology, Health, Sports, etc.
4. Click on "Read More" to open a modal dialog with detailed article content, including the source, published date, and a link to the full article.
5. Close the modal dialog by clicking the "X" or outside the modal.

---

## Folder Structure
```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── HomePage.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

### Key Files:
- `src/components/HomePage.js`: Contains the main logic for fetching and displaying news articles.
- `src/App.js`: Renders the main `HomePage` component.
- `public/index.html`: HTML file that serves the React app.
- `.env`: Stores the NewsAPI key.

---

## Future Enhancements
- Add pagination for larger sets of news results.
- Allow users to save favorite articles or share articles via social media.
- Implement search functionality to find articles by keywords.
- Improve error handling and user feedback for loading and API errors.
- Add a loading spinner when fetching new content.

---

## Contact
**Ayush Rai**  
Email: ayushrai803@gmail.com  
Phone: +91 8318542040

Feel free to contribute, report issues, or suggest new features!
