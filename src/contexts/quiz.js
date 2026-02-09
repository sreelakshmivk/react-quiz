import { act, createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
    currentQuestionIndex: 0,
    questions,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: '',
    currectAnswerCount: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const currectAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ?
                state.currectAnswerCount + 1 :
                state.currectAnswerCount;
            return {
                ...state,
                currentAnswer: action.payload,
                currectAnswerCount,
            }
        }
        case "NEXT_QUESTION": {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ?
                state.currentQuestionIndex :
                state.currentQuestionIndex + 1;
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: ''
            };
        }
        case "RESTART": {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}