const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const _ = require('lodash');

let questionList = require('../data/questionsList').questions;

let questions = flattenQuestions(questionList);
let resultsList = require('../data/results').results;


axios.get(`https://api.myjson.com/bins/9h6aa`)
    .then(data => {
      console.log('questions',data.data);
      questionList= data.data.questions;
      questions = flattenQuestions(questionList);
    });
    
    axios.get(`https://api.myjson.com/bins/7tdia`)
    .then(data => {
      console.log('results',data.data);
      resultsList= data.data.results;
    });

/* GET api listing. */
router.get('/', (req, res) => {
  //res.send('api works');
  res.status(200).json(questions);
});

// Get all posts
router.get('/question/:id', (req, res) => {
  let id = req.params.id;
  console.log(isNaN(id));
  let question = questions[0];
  if (id != 0 && !isNaN(id)) {
    id = parseInt(id);
    question = _.find(questions, { "id": id });
  }

  res.status(200).json(formatQuestion(question));
});


router.get('/nextQuestion/:id/:answerId', (req, res) => {
  let id = req.params.id;
  if (id == 0 || isNaN(id)) {
    res.status(500).send({ "error": "invalid id" });
    return;
  }

  id = parseInt(id);
  let answerId = parseInt(req.params.answerId);
  let question = _.find(questions, { "id": id });
  let answer = _.find(question.answers, { "id": answerId });
  let nextQuestion;
  if (answer.questions.length > 0)
    nextQuestion = answer.questions[0];
  else
    nextQuestion = getNextSiblingQuestion(question);


  res.status(200).json(formatQuestion(nextQuestion));

});



router.post('/results', (req, res) => {
  var results = req.body;
  console.log("req.body", req.body);
  let sumAnswer = _.reduce(results, (calculator, result) => {
    let questionOfAnswer = _.find(questions, { id: result.questionId });
    let answer = _.find(questionOfAnswer.answers, { id: result.answerId });
    console.log("calculator", calculator);
    console.log("value", answer.value);

    return calculator + answer.value;
  }, 0);
  console.log("sumAnswer", sumAnswer);


  let calculteResultOption;
  let calculteResult = _.find(resultsList, (result) => {
    calculteResultOption = _.find(result.options, { "value": sumAnswer });
    return calculteResultOption;
  });

  let result = {};
  if (calculteResult) {
    result.name = calculteResult.name;
    result.probability = randomIntFromInterval(calculteResultOption.probability.from, calculteResultOption.probability.to);
  }
  else {
    if (sumAnswer > 1) {
      let nearestCalculteResult = _.flatMap(resultsList, (result) => {
        return _.map(result.options, option => _.assign(option, { name: result.name, calculate: Math.abs(sumAnswer - option.value) }));
      });
      nearestCalculteResult = _.head(_.orderBy(nearestCalculteResult, 'calculate'));
      console.log("nearestCalculteResult", nearestCalculteResult);
      result.name = nearestCalculteResult.name;
      result.probability = randomIntFromInterval(nearestCalculteResult.probability.from, nearestCalculteResult.probability.to) * 0.7;
    }
    else {
      result.name = 'There is no disease';
      result.probability = 0;
    }
  }

  res.status(200).json(result);
});


function randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNextSiblingQuestion(question) {
  if (question.isLast) {
    if (question.parentId == 0) return null;

    //next parent sibling
    parent = _.find(questions, { "id": question.parentId });
    return getNextSiblingQuestion(parent);
  }

  //next sibling
  return _.find(questions, { "parentId": question.parentId, "index": question.index + 1 });
}

function formatQuestion(question) {
  if (!question) return null;

  return {
    id: question.id,
    text: question.text,
    answers: _.map(question.answers, answer => { return { "id": answer.id, "text": answer.text } }),
    isLast: question.isLast && question.parentId === 0
  };
}



function flattenQuestions(tree) {
  let id = 1;
  function recurse(nodes, level, parentId) {
    var nodeLength = nodes.length;
    return _.map(nodes, function (node, index) {
      var nodeId = id++;
      let questionsAnswers = [];
      var answers = _.map(node.answers, answer => {
        var questions = [];
        if (_.isArray(answer.questions)) {
          questions = answer.questions;
          questionsAnswers = _.concat(questionsAnswers, recurse(answer.questions, level + 1, nodeId));
        }
        return _.assign(answer, { "questions": questions })
      });
      var newNode = _.assign(node, { "id": nodeId, "level": level, parentId: parentId, "index": index, isLast: index + 1 == nodeLength, "answers": answers });
      return [newNode, questionsAnswers];
    });
  }
  return _.flattenDeep(recurse(tree, 0, 0));
}


module.exports = router;