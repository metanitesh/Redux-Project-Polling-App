import { _saveQuestionAnswer, _saveQuestion, formatQuestion } from '../_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

const saveAnswer = (qid, authUser, answer) => ({
  type: SAVE_ANSWER,
  qid,
  authUser,
  answer,
});


const saveQuestionAction = (question) => ({
  type: SAVE_QUESTION,
  question,
});

export const saveQuestionAnswer = (qid, answer) => (dispatch, getState) => {
  const authedUser = getState().authUser;
  dispatch(saveAnswer(qid, authedUser, answer));
  _saveQuestionAnswer({ qid, authedUser, answer }).then(() => {
    console.log(SAVE_ANSWER, 'success');
  });
};


export const saveQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
  const author = getState().authUser;
  const question = formatQuestion({author, optionOneText, optionTwoText});
  console.log(question);
  
  dispatch(saveQuestionAction(question));
  _saveQuestion(question).then(() => {
    console.log(SAVE_QUESTION, 'success');
  });
};
