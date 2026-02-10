# React Quiz Application

A dynamic and interactive multiple-choice quiz application built with React. The app fetches trivia questions from the Open Trivia Database API and provides an engaging quiz experience with real-time scoring and answer validation.

## Project Overview

This is a single-page React application that:
- Fetches 10 random trivia questions from [Open Trivia Database API](https://opentdb.com/api_config.php)
- Displays questions with 4 multiple-choice answers each
- Shows real-time feedback on correct/incorrect answers
- Tracks the user's score throughout the quiz
- Displays final results with restart functionality

## Project Structure

```
react-quiz/
├── src/
│   ├── components/
│   │   ├── Quiz.js          # Main quiz component
│   │   ├── Question.js      # Question display component
│   │   └── Answer.js        # Individual answer button component
│   ├── contexts/
│   │   └── quiz.js          # Quiz state management with useReducer
│   ├── helpers.js           # Utility functions (decode, shuffle)
│   ├── index.js             # App entry point
│   └── index.css            # Styles
├── public/
└── package.json
```

## Technologies Used

- **React 19.2.0** - UI framework
- **React DOM 19.2.0** - DOM rendering
- **React Scripts 5.0.1** - Build and development tools
- **Context API + useReducer** - State management

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-quiz
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page reloads when you make changes
- Lint errors appear in the console

```bash
npm start
```

### `npm run build`

Builds the app for production to the `build` folder.
- Bundles React in production mode
- Optimizes performance with minified files
- Ready for deployment

```bash
npm run build
```

### `npm test`

Launches the test runner in interactive watch mode.

```bash
npm test
```

### `npm run eject`

**⚠️ Note: this is a one-way operation. Once you eject, you can't go back!**

Ejects from Create React App, giving you full control over configuration files and dependencies.

```bash
npm run eject
```

## How to Use

1. Start the development server: `npm start`
2. The quiz automatically loads 10 random trivia questions
3. Read each question and click on the answer you believe is correct
4. Answers turn green for correct, red for incorrect
5. Click "Next Question" to proceed to the next question
6. After all questions are answered, view your final score
7. Click "Restart" to take the quiz again

## Features

- ✅ Fetches questions from Open Trivia Database API
- ✅ Shuffled answer options for each question
- ✅ URL-encoded answer decoding
- ✅ Real-time answer validation with visual feedback
- ✅ Score tracking throughout the quiz
- ✅ Final score display with total and correct answers
- ✅ Restart functionality

## State Management

The app uses React Context API with `useReducer` for state management:
- `currentQuestionIndex` - Current question being displayed
- `questions` - Array of fetched and decoded questions
- `showResults` - Toggle between quiz and results view
- `answers` - Shuffled answers for current question
- `currentAnswer` - User's selected answer
- `currectAnswerCount` - Total correct answers

## API Reference

Fetches from Trivia API: `https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986`

Returns 10 multiple-choice trivia questions with URL-encoded content.

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
