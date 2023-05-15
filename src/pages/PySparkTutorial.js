import { Box, Image, Text, Flex, Divider, Table, Input, Button,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer} from "@chakra-ui/react";
import React, { useState } from "react";

import SentenceBox from "../PySpark tutorial components/SentenceBox";
import AnswerBox from "../PySpark tutorial components/AnswerBox";
import { getSentence, getAnswers } from "../PySpark tutorial components/TextConverter";
import Results from "../PySpark tutorial components/Results";
import Navbar from "../Navbar.js"

import { PrimaryButton } from "../PySpark tutorial components/styled";

const text = "The <brown> fox <jumped> over the <dog>";

export default function PySparkTutorial() {
  const [state, setState] = useState({
    showResults: false,
    question: "",
    answers: getAnswers(text),
    sentence: getSentence(text)
  });

  const onDrop = (e, dropId) => {
    const text = e.dataTransfer.getData("text/plain");

    const sentence = state.sentence.map(word => {
      if (word.id === dropId) {
        return { ...word, placed: true, displayed: text };
      }
      return word;
    });
    setState({ ...state, sentence });
  };

  const test = () => {
    setState({ ...state, showResults: !state.showResults });
  };

  const { showResults } = state;

  //QUESTION FOR INPUT 2
  const [questionsSecondInput] = useState([
    { id: 1, sentence: 'import ', answer: 'pyspark' },
  ]);

  const [answersSecondInput, setAnswersSecondInput] = useState(new Array(questionsSecondInput.length).fill(''));
  const [showAnswersSecondInput, setShowAnswersSecondInput] = useState(false);
  const [scoreSecondInput, setScoreSecondInput] = useState(null);

  const handleInputChangeSecondInput = (index, event) => {
    const newAnswers = [...answersSecondInput];
    newAnswers[index] = event.target.value;
    setAnswersSecondInput(newAnswers);
  };

  const handleSubmitSecondInput = (event) => {
    event.preventDefault();
    let scoreSecondInput = 0;
    questionsSecondInput.forEach((question, index) => {
      if (question.answer === answersSecondInput[index].replace(' ', '')  ) {
        scoreSecondInput++;
      }
    });
    setScoreSecondInput(scoreSecondInput);
    setShowAnswersSecondInput(true);
  };

  const handleClearSecondInput = () => {
    setAnswersSecondInput(new Array(questionsSecondInput.length).fill(''));
    setShowAnswersSecondInput(false);
    setScoreSecondInput(null);
  };

//QUESTION FOR INPUT 4 
  const [questions] = useState([
    { id: 1, sentence: 'from ', answer: 'pyspark.sql' },
    { id: 2, sentence: 'import ', answer: 'SparkSession' },
  ]);

  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(null);

  const handleInputChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer === answers[index].replace(' ', '')) {
        score++;
      }
    });
    setScore(score);
    setShowAnswers(true);
  };

  const handleClear = () => {
    setAnswers(new Array(questions.length).fill(''));
    setShowAnswers(false);
    setScore(null);
  };


    //QUESTION FOR INPUT 5
    const [questionsFifthInput] = useState([
      { id: 1, sentence: 'spark = SparkSession.', answer: 'builder' },
      { id: 2, sentence: '.appName(\'', answer: 'quizSession' },

    ]);
  
    const [answersFifthInput, setAnswersFifthInput] = useState(new Array(questionsFifthInput.length).fill(''));
    const [showAnswersFifthInput, setShowAnswersFifthInput] = useState(false);
    const [scoreFifthInput, setScoreFifthInput] = useState(null);
  
    const handleInputChangeFifthInput = (index, event) => {
      const newAnswers = [...answersFifthInput];
      newAnswers[index] = event.target.value;
      setAnswersFifthInput(newAnswers);
    };
  
    const handleSubmitFifthInput = (event) => {
      event.preventDefault();
      let scoreFifthInput = 0;
      questionsFifthInput.forEach((question, index) => {
        if (question.answer === answersFifthInput[index].replace(' ', '')) {
          scoreFifthInput++;
        }
      });
      setScoreFifthInput(scoreFifthInput);
      setShowAnswersFifthInput(true);
    };
  
    const handleClearFifthInput = () => {
      setAnswersFifthInput(new Array(questionsFifthInput.length).fill(''));
      setShowAnswersFifthInput(false);
      setScoreFifthInput(null);
    };

    //QUESTION FOR INPUT 6
    const [questionsSixthInput] = useState([
      { id: 1, sentence: 'df_pySpark = ', answer: 'spark' },
      { id: 2, sentence: '.read.', answer: 'option' },
      { id: 3, sentence: '(', answer: '\'header\',\'true\'' },
      { id: 4, sentence: ').csv(', answer: '\'sparkQuiz.csv\'' },
    ]);
  
    const [answersSixthInput, setAnswersSixthInput] = useState(new Array(questionsSixthInput.length).fill(''));
    const [showAnswersSixthInput, setShowAnswersSixthInput] = useState(false);
    const [scoreSixthInput, setScoreSixthInput] = useState(null);
  
    const handleInputChangeSixthInput = (index, event) => {
      const newAnswers = [...answersSixthInput];
      newAnswers[index] = event.target.value;
      setAnswersSixthInput(newAnswers);
    };
  
    const handleSubmitSixthInput = (event) => {
      event.preventDefault();
      let scoreSixthInput = 0;
      questionsSixthInput.forEach((question, index) => {
        if (question.answer === answersSixthInput[index].replace(' ', '')) {
          scoreSixthInput++;
        }
      });
      setScoreSixthInput(scoreSixthInput);
      setShowAnswersSixthInput(true);
    };
  
    const handleClearSixthInput = () => {
      setAnswersSixthInput(new Array(questionsSixthInput.length).fill(''));
      setShowAnswersSixthInput(false);
      setScoreSixthInput(null);
    };

    //QUESTION FOR INPUT 7
    const [questionsSeventhInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'show()' },
    ]);
  
    const [answersSeventhInput, setAnswersSeventhInput] = useState(new Array(questionsSeventhInput.length).fill(''));
    const [showAnswersSeventhInput, setShowAnswersSeventhInput] = useState(false);
    const [scoreSeventhInput, setScoreSeventhInput] = useState(null);
  
    const handleInputChangeSeventhInput = (index, event) => {
      const newAnswers = [...answersSeventhInput];
      newAnswers[index] = event.target.value;
      setAnswersSeventhInput(newAnswers);
    };
  
    const handleSubmitSeventhInput = (event) => {
      event.preventDefault();
      let scoreSeventhInput = 0;
      questionsSeventhInput.forEach((question, index) => {
        if (question.answer === answersSeventhInput[index].replace(' ', '')) {
          scoreSeventhInput++;
        }
      });
      setScoreSeventhInput(scoreSeventhInput);
      setShowAnswersSeventhInput(true);
    };
  
    const handleClearSeventhInput = () => {
      setAnswersSeventhInput(new Array(questionsSeventhInput.length).fill(''));
      setShowAnswersSeventhInput(false);
      setScoreSeventhInput(null);
    };  
    
    //QUESTION FOR INPUT 8
    const [questionseighthInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'printSchema()' },

    ]);
  
    const [answerseighthInput, setAnswerseighthInput] = useState(new Array(questionseighthInput.length).fill(''));
    const [showAnswerseighthInput, setShowAnswerseighthInput] = useState(false);
    const [scoreeighthInput, setScoreeighthInput] = useState(null);
  
    const handleInputChangeeighthInput = (index, event) => {
      const newAnswers = [...answerseighthInput];
      newAnswers[index] = event.target.value;
      setAnswerseighthInput(newAnswers);
    };
  
    const handleSubmiteighthInput = (event) => {
      event.preventDefault();
      let scoreeighthInput = 0;
      questionseighthInput.forEach((question, index) => {
        if (question.answer === answerseighthInput[index].replace(' ', '')) {
          scoreeighthInput++;
        }
      });
      setScoreeighthInput(scoreeighthInput);
      setShowAnswerseighthInput(true);
    };
  
    const handleCleareighthInput = () => {
      setAnswerseighthInput(new Array(questionseighthInput.length).fill(''));
      setShowAnswerseighthInput(false);
      setScoreeighthInput(null);
    };   

    //QUESTION FOR INPUT 9
    const [questionsninthInput] = useState([
      { id: 1, sentence: 'print(df_pySpark.', answer: 'columns' },
    ]);
  
    const [answersninthInput, setAnswersninthInput] = useState(new Array(questionsninthInput.length).fill(''));
    const [showAnswersninthInput, setShowAnswersninthInput] = useState(false);
    const [scoreninthInput, setScoreninthInput] = useState(null);
  
    const handleInputChangeninthInput = (index, event) => {
      const newAnswers = [...answersninthInput];
      newAnswers[index] = event.target.value;
      setAnswersninthInput(newAnswers);
    };
  
    const handleSubmitninthInput = (event) => {
      event.preventDefault();
      let scoreninthInput = 0;
      questionsninthInput.forEach((question, index) => {
        if (question.answer === answersninthInput[index].replace(' ', '')) {
          scoreninthInput++;
        }
      });
      setScoreninthInput(scoreninthInput);
      setShowAnswersninthInput(true);
    };
  
    const handleClearninthInput = () => {
      setAnswersninthInput(new Array(questionsninthInput.length).fill(''));
      setShowAnswersninthInput(false);
      setScoreninthInput(null);
    };        

    //QUESTION FOR INPUT 10
    const [questionstenthInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'head(2)' },
    ]);
  
    const [answerstenthInput, setAnswerstenthInput] = useState(new Array(questionstenthInput.length).fill(''));
    const [showAnswerstenthInput, setShowAnswerstenthInput] = useState(false);
    const [scoretenthInput, setScoretenthInput] = useState(null);
  
    const handleInputChangetenthInput = (index, event) => {
      const newAnswers = [...answerstenthInput];
      newAnswers[index] = event.target.value;
      setAnswerstenthInput(newAnswers);
    };
  
    const handleSubmittenthInput = (event) => {
      event.preventDefault();
      let scoretenthInput = 0;
      questionstenthInput.forEach((question, index) => {
        if (question.answer === answerstenthInput[index].replace(' ', '')) {
          scoretenthInput++;
        }
      });
      setScoretenthInput(scoretenthInput);
      setShowAnswerstenthInput(true);
    };
  
    const handleCleartenthInput = () => {
      setAnswerstenthInput(new Array(questionstenthInput.length).fill(''));
      setShowAnswerstenthInput(false);
      setScoretenthInput(null);
    };  


    //QUESTION FOR INPUT 11
    const [questionseleventhInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'select' },
      { id: 2, sentence: '(\'Name\').', answer: 'show()' },
    ]);
  
    const [answerseleventhInput, setAnswerseleventhInput] = useState(new Array(questionseleventhInput.length).fill(''));
    const [showAnswerseleventhInput, setShowAnswerseleventhInput] = useState(false);
    const [scoreeleventhInput, setScoreeleventhInput] = useState(null);
  
    const handleInputChangeeleventhInput = (index, event) => {
      const newAnswers = [...answerseleventhInput];
      newAnswers[index] = event.target.value;
      setAnswerseleventhInput(newAnswers);
    };
  
    const handleSubmiteleventhInput = (event) => {
      event.preventDefault();
      let scoreeleventhInput = 0;
      questionseleventhInput.forEach((question, index) => {
        if (question.answer === answerseleventhInput[index].replace(' ', '')) {
          scoreeleventhInput++;
        }
      });
      setScoreeleventhInput(scoreeleventhInput);
      setShowAnswerseleventhInput(true);
    };
  
    const handleCleareleventhInput = () => {
      setAnswerseleventhInput(new Array(questionseleventhInput.length).fill(''));
      setShowAnswerseleventhInput(false);
      setScoreeleventhInput(null);
    };       

    //QUESTION FOR INPUT 12
    const [questionstwelfthInput] = useState([
      { id: 1, sentence: 'df_pySpark.select(', answer: '[\'Name\',\'Experience\']' },
    ]);
  
    const [answerstwelfthInput, setAnswerstwelfthInput] = useState(new Array(questionstwelfthInput.length).fill(''));
    const [showAnswerstwelfthInput, setShowAnswerstwelfthInput] = useState(false);
    const [scoretwelfthInput, setScoretwelfthInput] = useState(null);
  
    const handleInputChangetwelfthInput = (index, event) => {
      const newAnswers = [...answerstwelfthInput];
      newAnswers[index] = event.target.value;
      setAnswerstwelfthInput(newAnswers);
    };
  
    const handleSubmittwelfthInput = (event) => {
      event.preventDefault();
      let scoretwelfthInput = 0;
      questionstwelfthInput.forEach((question, index) => {
        if (question.answer === answerstwelfthInput[index].replace(' ', '')) {
          scoretwelfthInput++;
        }
      });
      setScoretwelfthInput(scoretwelfthInput);
      setShowAnswerstwelfthInput(true);
    };
  
    const handleCleartwelfthInput = () => {
      setAnswerstwelfthInput(new Array(questionstwelfthInput.length).fill(''));
      setShowAnswerstwelfthInput(false);
      setScoretwelfthInput(null);
    };        
      

    //QUESTION FOR INPUT 13
    const [questionsthirteenthInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'dtypes' },
    ]);
  
    const [answersthirteenthInput, setAnswersthirteenthInput] = useState(new Array(questionsthirteenthInput.length).fill(''));
    const [showAnswersthirteenthInput, setShowAnswersthirteenthInput] = useState(false);
    const [scorethirteenthInput, setScorethirteenthInput] = useState(null);
  
    const handleInputChangethirteenthInput = (index, event) => {
      const newAnswers = [...answersthirteenthInput];
      newAnswers[index] = event.target.value;
      setAnswersthirteenthInput(newAnswers);
    };
  
    const handleSubmitthirteenthInput = (event) => {
      event.preventDefault();
      let scorethirteenthInput = 0;
      questionsthirteenthInput.forEach((question, index) => {
        if (question.answer === answersthirteenthInput[index].replace(' ', '')) {
          scorethirteenthInput++;
        }
      });
      setScorethirteenthInput(scorethirteenthInput);
      setShowAnswersthirteenthInput(true);
    };
  
    const handleClearthirteenthInput = () => {
      setAnswersthirteenthInput(new Array(questionsthirteenthInput.length).fill(''));
      setShowAnswersthirteenthInput(false);
      setScorethirteenthInput(null);
    };     

    //QUESTION FOR INPUT 14
    const [questionsfourteenthInput] = useState([
      { id: 1, sentence: 'df_pySpark = df_pySpark.', answer: 'withColumn' },
      { id: 2, sentence: '(\'Experience after 4 years\',', answer: 'df_pySpark[\'Experience\']' },
    ]);
  
    const [answersfourteenthInput, setAnswersfourteenthInput] = useState(new Array(questionsfourteenthInput.length).fill(''));
    const [showAnswersfourteenthInput, setShowAnswersfourteenthInput] = useState(false);
    const [scorefourteenthInput, setScorefourteenthInput] = useState(null);
  
    const handleInputChangefourteenthInput = (index, event) => {
      const newAnswers = [...answersfourteenthInput];
      newAnswers[index] = event.target.value;
      setAnswersfourteenthInput(newAnswers);
    };
  
    const handleSubmitfourteenthInput = (event) => {
      event.preventDefault();
      let scorefourteenthInput = 0;
      questionsfourteenthInput.forEach((question, index) => {
        if (question.answer === answersfourteenthInput[index].replace(' ', '')) {
          scorefourteenthInput++;
        }
      });
      setScorefourteenthInput(scorefourteenthInput);
      setShowAnswersfourteenthInput(true);
    };
  
    const handleClearfourteenthInput = () => {
      setAnswersfourteenthInput(new Array(questionsfourteenthInput.length).fill(''));
      setShowAnswersfourteenthInput(false);
      setScorefourteenthInput(null);
    };        
      

    //QUESTION FOR INPUT 15
    const [questionsfifteenthInput] = useState([
      { id: 1, sentence: 'df_pySpark = df_pySpark.', answer: 'drop' },
    ]);
  
    const [answersfifteenthInput, setAnswersfifteenthInput] = useState(new Array(questionsfifteenthInput.length).fill(''));
    const [showAnswersfifteenthInput, setShowAnswersfifteenthInput] = useState(false);
    const [scorefifteenthInput, setScorefifteenthInput] = useState(null);
  
    const handleInputChangefifteenthInput = (index, event) => {
      const newAnswers = [...answersfifteenthInput];
      newAnswers[index] = event.target.value;
      setAnswersfifteenthInput(newAnswers);
    };
  
    const handleSubmitfifteenthInput = (event) => {
      event.preventDefault();
      let scorefifteenthInput = 0;
      questionsfifteenthInput.forEach((question, index) => {
        if (question.answer === answersfifteenthInput[index].replace(' ', '')) {
          scorefifteenthInput++;
        }
      });
      setScorefifteenthInput(scorefifteenthInput);
      setShowAnswersfifteenthInput(true);
    };
  
    const handleClearfifteenthInput = () => {
      setAnswersfifteenthInput(new Array(questionsfifteenthInput.length).fill(''));
      setShowAnswersfifteenthInput(false);
      setScorefifteenthInput(null);
    };  

    //QUESTION FOR INPUT 16
    const [questionssixteenthInput] = useState([
      { id: 1, sentence: 'df_pySpark.', answer: 'withColumnRenamed' },
    ]);
  
    const [answerssixteenthInput, setAnswerssixteenthInput] = useState(new Array(questionssixteenthInput.length).fill(''));
    const [showAnswerssixteenthInput, setShowAnswerssixteenthInput] = useState(false);
    const [scoresixteenthInput, setScoresixteenthInput] = useState(null);
  
    const handleInputChangesixteenthInput = (index, event) => {
      const newAnswers = [...answerssixteenthInput];
      newAnswers[index] = event.target.value;
      setAnswerssixteenthInput(newAnswers);
    };
  
    const handleSubmitsixteenthInput = (event) => {
      event.preventDefault();
      let scoresixteenthInput = 0;
      questionssixteenthInput.forEach((question, index) => {
        if (question.answer === answerssixteenthInput[index].replace(' ', '')) {
          scoresixteenthInput++;
        }
      });
      setScoresixteenthInput(scoresixteenthInput);
      setShowAnswerssixteenthInput(true);
    };
  
    const handleClearsixteenthInput = () => {
      setAnswerssixteenthInput(new Array(questionssixteenthInput.length).fill(''));
      setShowAnswerssixteenthInput(false);
      setScoresixteenthInput(null);
    };  

    //QUESTION FOR INPUT 17
    const [questionsseventeenthInput] = useState([
      { id: 1, sentence: 'df_pyspark = df_pyspark.', answer: 'na' },
    ]);
  
    const [answersseventeenthInput, setAnswersseventeenthInput] = useState(new Array(questionsseventeenthInput.length).fill(''));
    const [showAnswersseventeenthInput, setShowAnswersseventeenthInput] = useState(false);
    const [scoreseventeenthInput, setScoreseventeenthInput] = useState(null);
  
    const handleInputChangeseventeenthInput = (index, event) => {
      const newAnswers = [...answersseventeenthInput];
      newAnswers[index] = event.target.value;
      setAnswersseventeenthInput(newAnswers);
    };
  
    const handleSubmitseventeenthInput = (event) => {
      event.preventDefault();
      let scoreseventeenthInput = 0;
      questionsseventeenthInput.forEach((question, index) => {
        if (question.answer === answersseventeenthInput[index].replace(' ', '')) {
          scoreseventeenthInput++;
        }
      });
      setScoreseventeenthInput(scoreseventeenthInput);
      setShowAnswersseventeenthInput(true);
    };
  
    const handleClearseventeenthInput = () => {
      setAnswersseventeenthInput(new Array(questionsseventeenthInput.length).fill(''));
      setShowAnswersseventeenthInput(false);
      setScoreseventeenthInput(null);
    };        

    //QUESTION FOR INPUT 18
    const [questionseighteenthInput] = useState([
      { id: 1, sentence: 'df_pySpark = ', answer: 'spark' },
      { id: 2, sentence: '.read.', answer: 'option' },
      { id: 3, sentence: '(', answer: '\'header\',\'true\'' },
      { id: 4, sentence: ').csv(', answer: '\'sparkQuiz.csv\'' },
    ]);
  
    const [answerseighteenthInput, setAnswerseighteenthInput] = useState(new Array(questionseighteenthInput.length).fill(''));
    const [showAnswerseighteenthInput, setShowAnswerseighteenthInput] = useState(false);
    const [scoreeighteenthInput, setScoreeighteenthInput] = useState(null);
  
    const handleInputChangeeighteenthInput = (index, event) => {
      const newAnswers = [...answerseighteenthInput];
      newAnswers[index] = event.target.value;
      setAnswerseighteenthInput(newAnswers);
    };
  
    const handleSubmiteighteenthInput = (event) => {
      event.preventDefault();
      let scoreeighteenthInput = 0;
      questionseighteenthInput.forEach((question, index) => {
        if (question.answer === answerseighteenthInput[index].replace(' ', '')) {
          scoreeighteenthInput++;
        }
      });
      setScoreeighteenthInput(scoreeighteenthInput);
      setShowAnswerseighteenthInput(true);
    };
  
    const handleCleareighteenthInput = () => {
      setAnswerseighteenthInput(new Array(questionseighteenthInput.length).fill(''));
      setShowAnswerseighteenthInput(false);
      setScoreeighteenthInput(null);
    };        





  return (
    <Box align={'center'} minH="100vh" p={5} bg='#F0EFE2'>
      <Box w='94%' bg='white' boxShadow={'dark-lg'} rounded='md' >
        <Text fontWeight={'bold'} fontSize='40' align={'left'} ms='50px' mt='10px'>Introduction To PySpark</Text>
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>Apache Spark runs programs up to 100 times faster than Hadoop 
          MapReduce in memory, and 10 times faster on disk. It has an advanced DAG execution engine that supports
          acyclic data flow and in-memory computing. Spark offers over 80 high-level operators, which makes it 
          easy to build parallel apps, and can be used interactively from the Scala, Python and R shells. 
          We will be focusing on Spark and its functionalities with Python, the most popular programming language. 
        </Text>
        <Flex mt='25px'></Flex>
        <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>PySpark Tutorial</Text>
        <Divider orientation='horizontal' width='94%' borderColor={'Black'}/>

        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%' fontWeight={'bold'}>The following process is the same for every time we start a PySpark session</Text>
        <Flex mt='8px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [1]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <Flex align='horizontal'>
              <Text align={'left'} color='#93F5FD' ms='15px'>!</Text>
              <Text align={'left'} color='white'>pip install pyspark</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex mt='10px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>Out [1]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px'>
            <Text align={'left'} color='white' ms='40px'>Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/</Text>
            <Text align={'left'} color='white' ms='40px'>Requirement already satisfied: pyspark in /usr/local/lib/python3.8/dist-packages (3.3.2)</Text>
            <Text align={'left'} color='white' ms='40px'>Requirement already satisfied: py4j==0.10.9.5 in /usr/local/lib/python3.8/dist-packages (from pyspark) (0.10.9.5)</Text>
          </Box>
        </Flex>

        <Flex mt='10px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [2]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <Flex align='horizontal'>
              <Text align={'left'} color='#C678DD' ms='15px'>import </Text>
              <Text align={'left'} color='white' ms='6px'> pyspark</Text>
            </Flex>
          </Box>
        </Flex>

        <Flex mt='10px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [3]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <Flex align='horizontal'>
              <Text align={'left'} color='#C678DD' ms='15px'>import </Text>
              <Text align={'left'} color='white' ms='6px'> pandas</Text>
              <Text align={'left'} color='#C678DD' ms='6px'>as</Text>
              <Text align={'left'} color='white' ms='6px'> pd</Text>
            </Flex>
            <Flex mt='10px'></Flex>
            <Text align={'left'} color='#90EE90' ms='15px'> # We must read the data in through pandas. Here's an example:</Text>
            <Flex align='horizontal'>
              <Text align={'left'} color='white' ms='15px'> pd.read_csv(</Text>
              <Text align={'left'} color='#FFA500' ms='2px'>(((INSERT FILE NAME.CSV))) </Text>
              <Text align={'left'} color='white' ms='2px'>)</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex mt='10px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [4]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
          <Text align={'left'} color='#90EE90' ms='15px'> # Each time we want to run PySpark, we must start a new SparkSession</Text>
          <Flex align='horizontal'>
              <Text align={'left'} color='#C678DD' ms='15px'>from </Text>
              <Text align={'left'} color='white' ms='6px'> pyspark.sql</Text>
              <Text align={'left'} color='#C678DD' ms='6px'>import</Text>
              <Text align={'left'} color='white' ms='6px'> SparkSession</Text>
            </Flex>
          </Box>
        </Flex>

        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%' fontWeight={'bold'}>The following ipynb is a demo for different PySpark functionalities:</Text>
        <Flex mt='8px'></Flex>
        <iframe src="https://drive.google.com/file/d/1r_LVfzJjRBUyX6oPhdrtOEAuWY6vM4RE/preview" width="850" height="920" allow="autoplay"></iframe>
        
        <Flex mt='45px'></Flex>
        <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Now You Try</Text>
        <Divider orientation='horizontal' width='94%' borderColor={'Black'}/>
        <Flex mt='25px'></Flex>
        <Box bg='white'>

        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [1]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <Flex align='horizontal'>
              <Text align={'left'} color='#93F5FD' ms='15px'>!</Text>
              <Text align={'left'} color='white'>pip install pyspark</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex mt='15px'></Flex>
        
        {/**Input and output 2**/}
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Import the library:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [2]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitSecondInput}>
              <Flex align='horizontal'>
                {questionsSecondInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='pink'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='100px'
                      value={answersSecondInput[index]}
                      onChange={(event) => handleInputChangeSecondInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitSecondInput}>
              {showAnswersSecondInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreSecondInput} out of {questionsSecondInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [2]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreSecondInput<1) ? (questionsSecondInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='#90EE90' ms='13px'>
                            Correct!
                          </Flex>
                        )}
                        {showAnswersSecondInput && (
                          <Button color='black' h='22px' onClick={handleClearSecondInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        
        {/***INPUT 3 */}
        <Flex mt='10px'></Flex>
        <Flex mt='10px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [3]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <Flex align='horizontal'>
              <Text align={'left'} color='#C678DD' ms='15px'>import </Text>
              <Text align={'left'} color='white' ms='6px'> pandas</Text>
              <Text align={'left'} color='#C678DD' ms='6px'>as</Text>
              <Text align={'left'} color='white' ms='6px'> pd</Text>
            </Flex>
            <Flex mt='10px'></Flex>
            <Text align={'left'} color='#90EE90' ms='15px'> # We must read the data in through pandas. Here's an example:</Text>
            <Flex align='horizontal'>
              <Text align={'left'} color='white' ms='15px'> pd.read_csv(</Text>
              <Flex align={'left'} color='#FFA500' ms='2px'>sparkQuiz.csv</Flex>
              <Text align={'left'} color='white' ms='2px'>)</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex mt='10px'></Flex>
        

        {/**Input and output 4**/}
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Start a new spark session:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [4]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmit}>
              <Flex align='horizontal'>
                {questions.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='pink'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='135px'
                      value={answers[index]}
                      onChange={(event) => handleInputChange(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmit}>
              {showAnswers && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {score} out of {questions.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [4]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(score<2) ? (questions.map((question, index) => (
                          <p key={question.id}>
                          <Flex align='vertical' textColor='white' ms='13px'>
                          ○ Answer to question {index + 1}: {question.answer}
                          </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='#90EE90' ms='13px'>
                            Correct!
                          </Flex>
                        )}
                        {showAnswers && (
                          <Button color='black' h='22px' onClick={handleClear}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 5**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Create a spark session with the name 'quizSession':</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [5]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitFifthInput}>
              <Flex align='horizontal'>
                {questionsFifthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      
                      <Flex ms = '5px'></Flex>
                      
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='130px'
                      value={answersFifthInput[index]}
                      onChange={(event) => handleInputChangeFifthInput(index, event)}
                    >
                    </Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='5px' color='white'>').getOrCreate()</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitFifthInput}>
              {showAnswersFifthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreFifthInput} out of {questionsFifthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [5]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreFifthInput<2) ? (questionsFifthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='#90EE90' ms='13px'>
                            Correct!
                          </Flex>
                        )}
                        {showAnswersFifthInput && (
                          <Button color='black' h='22px' onClick={handleClearFifthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}

            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 6**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Change the column header to the actual column names:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [6]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitSixthInput}>
              <Flex align='horizontal'>
                {questionsSixthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='140px'
                      value={answersSixthInput[index]}
                      onChange={(event) => handleInputChangeSixthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='5px' color='white'>)</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitSixthInput}>
              {showAnswersSixthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreSixthInput} out of {questionsSixthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [7]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreSixthInput<1) ? (questionsSixthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='#90EE90' ms='13px'>
                            Correct!
                          </Flex>
                        )}
                        {showAnswersSixthInput && (
                          <Button color='black' h='22px' onClick={handleClearSixthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
          <Flex mt='10px'></Flex>

        {/**Input and output 7**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>View the entire dataset:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [7]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitSeventhInput}>
              <Flex align='horizontal'>
                {questionsSeventhInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='85px'
                      value={answersSeventhInput[index]}
                      onChange={(event) => handleInputChangeSeventhInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitSeventhInput}>
              {showAnswersSeventhInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreSeventhInput} out of {questionsSeventhInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [7]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreSeventhInput<1) ? (questionsSeventhInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre>
                              {'+--------+---+----------+------+\n|    Name|Age|Experience|Salary|\n+--------+---+----------+------+\n|  Sawyer| 21|         1|  1000|\n|    Mike| 22|         3|  6000|\n|   Jorge| 47|        22|100000|\n|    Heta| 21|      null|  1200|\n| Jessica| 35|        10|200000|\n|Cristina| 20|      null|  5000|\n|  Lauren| 21|         4|150000|\n|   Elena| 52|        14| 90000|\n+--------+---+----------+------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswersSeventhInput && (
                          <Button color='black' h='22px' onClick={handleClearSeventhInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
          <Flex mt='10px'></Flex>

        {/**Input and output 8**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>See more information about the columns:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [8]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmiteighthInput}>
              <Flex align='horizontal'>
                {questionseighthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='140px'
                      value={answerseighthInput[index]}
                      onChange={(event) => handleInputChangeeighthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmiteighthInput}>
              {showAnswerseighthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreeighthInput} out of {questionseighthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [8]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreeighthInput<1) ? (questionseighthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'root\n |-- Name: string (nullable = true)\n |-- Age: string (nullable = true)\n |-- Experience: string (nullable = true)\n |-- Salary: string (nullable = true)'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswerseighthInput && (
                          <Button color='black' h='22px' onClick={handleCleareighthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 9**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Get column names:</Text>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [9]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitninthInput}>
              <Flex align='horizontal'>
                {questionsninthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='100px'
                      value={answersninthInput[index]}
                      onChange={(event) => handleInputChangeninthInput(index, event)}
                    ></Input>
                    <Flex ms='5px' color='white'> )</Flex>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitninthInput}>
              {showAnswersninthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreninthInput} out of {questionsninthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='40px' >
                    <Text mt='14px' fontWeight={'bold'}>Out [9]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreninthInput<1) ? (questionsninthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            ['Name', 'Age', 'Experience', 'Salary']
                          </Flex>
                        )}
                        {showAnswersninthInput && (
                          <Button color='black' h='22px' onClick={handleClearninthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 10**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Get the top 2 records (top 2 rows):</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [10]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmittenthInput}>
              <Flex align='horizontal'>
                {questionstenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='100px'
                      value={answerstenthInput[index]}
                      onChange={(event) => handleInputChangetenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmittenthInput}>
              {showAnswerstenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoretenthInput} out of {questionstenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [10]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoretenthInput<1) ? (questionstenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'[Row(Name=\'Sawyer\', Age=\'21\', Experience=\'1\', Salary=\'1000\'),\nRow(Name=\'Mike\', Age=\'22\', Experience=\'3\', Salary=\'6000\')]'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswerstenthInput && (
                          <Button color='black' h='22px' onClick={handleCleartenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 11**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Select an entire column called 'Name' and view it properly:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [11]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmiteleventhInput}>
              <Flex align='horizontal'>
                {questionseleventhInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='90px'
                      value={answerseleventhInput[index]}
                      onChange={(event) => handleInputChangeeleventhInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmiteleventhInput}>
              {showAnswerseleventhInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreeleventhInput} out of {questionseleventhInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [11]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreeleventhInput<2) ? (questionseleventhInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex textColor='white' ms='13px'>
                            <pre align={'left'} textColor='white'>
                              {'+--------+\n|    Name|\n+--------+\n|  Sawyer|\n|    Mike|\n|   Jorge|\n|    Heta|\n| Jessica|\n|Cristina|\n|  Lauren|\n|   Elena|\n+--------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswerseleventhInput && (
                          <Button color='black' h='22px' onClick={handleCleareleventhInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 13**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Select two columns called 'Name' and 'Experience' and view them properly:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [12]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmittwelfthInput}>
              <Flex align='horizontal'>
                {questionstwelfthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='190px'
                      value={answerstwelfthInput[index]}
                      onChange={(event) => handleInputChangetwelfthInput(index, event)}
                    ></Input>
                    </Flex>
                    <Flex ms='5px' color='white'>).show()</Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmittwelfthInput}>
              {showAnswerstwelfthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoretwelfthInput} out of {questionstwelfthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [12]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoretwelfthInput<1) ? (questionstwelfthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex textColor='white' ms='13px'>
                          <pre align={'left'}>
                            {'+--------+----------+\n|    Name|Experience|\n+--------+----------+\n|  Sawyer|         1|\n|    Mike|         3|\n|   Jorge|        22|\n|    Heta|      null|\n| Jessica|        10|\n|Cristina|      null|\n|  Lauren|         4|\n|   Elena|        14|\n+--------+----------+'}
                          </pre>
                        </Flex>
                        )}
                        {showAnswerstwelfthInput && (
                          <Button color='black' h='22px' onClick={handleCleartwelfthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 13**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Get data types  of each column:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [13]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitthirteenthInput}>
              <Flex align='horizontal'>
                {questionsthirteenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='100px'
                      value={answersthirteenthInput[index]}
                      onChange={(event) => handleInputChangethirteenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitthirteenthInput}>
              {showAnswersthirteenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scorethirteenthInput} out of {questionsthirteenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [13]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scorethirteenthInput<1) ? (questionsthirteenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'[(\'Name\', \'string\'),\n (\'Age\', \'string\'),\n (\'Experience\', \'string\'),\n (\'Salary\', \'string\')]'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswersthirteenthInput && (
                          <Button color='black' h='22px' onClick={handleClearthirteenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 14**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Add a new column into the dataframe called “Experience after 4 years”, adding onto the 'Experience' column:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [14]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitfourteenthInput}>
              <Flex align='horizontal'>
                {questionsfourteenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='200px'
                      value={answersfourteenthInput[index]}
                      onChange={(event) => handleInputChangefourteenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}                  
                <Flex ms='5px' color='white'>+ 4)</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitfourteenthInput}>
              {showAnswersfourteenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scorefourteenthInput} out of {questionsfourteenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [14]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scorefourteenthInput<2) ? (questionsfourteenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'+--------+---+----------+------+------------------------+\n|    Name|Age|Experience|Salary|Experience after 4 years|\n+--------+---+----------+------+------------------------+\n|  Sawyer| 21|         1|  1000|                     5.0|\n|    Mike| 22|         3|  6000|                     7.0|\n|   Jorge| 47|        22|100000|                    26.0|\n|    Heta| 21|      null|  1200|                    null|\n| Jessica| 35|        10|200000|                    14.0|\n|Cristina| 20|      null|  5000|                    null|\n|  Lauren| 21|         4|150000|                     8.0|\n|   Elena| 52|        14| 90000|                    18.0|\n+--------+---+----------+------+------------------------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswersfourteenthInput && (
                          <Button color='black' h='22px' onClick={handleClearfourteenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>
  
        {/**Input and output 15**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Drop the “Experience after 4 years” column:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [15]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitfifteenthInput}>
              <Flex align='horizontal'>
                {questionsfifteenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='70px'
                      value={answersfifteenthInput[index]}
                      onChange={(event) => handleInputChangefifteenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='5px' color='white'>('Experience after 4 years')</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitfifteenthInput}>
              {showAnswersfifteenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scorefifteenthInput} out of {questionsfifteenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [15]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scorefifteenthInput<1) ? (questionsfifteenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre align={'left'}>
                            {'+--------+---+----------+------+\n|    Name|Age|Experience|Salary|\n+--------+---+----------+------+\n|  Sawyer| 21|         1|  1000|\n|    Mike| 22|         3|  6000|\n|   Jorge| 47|        22|100000|\n|    Heta| 21|      null|  1200|\n| Jessica| 35|        10|200000|\n|Cristina| 20|      null|  5000|\n|  Lauren| 21|         4|150000|\n|   Elena| 52|        14| 90000|\n+--------+---+----------+------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswersfifteenthInput && (
                          <Button color='black' h='22px' onClick={handleClearfifteenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 16**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Rename the column 'Experience' to 'New Experiences':</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [16]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitsixteenthInput}>
              <Flex align='horizontal'>
                {questionssixteenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='190px'
                      value={answerssixteenthInput[index]}
                      onChange={(event) => handleInputChangesixteenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='5px' color='white'>(‘Experiences’, ‘New Experiences’)</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitsixteenthInput}>
              {showAnswerssixteenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoresixteenthInput} out of {questionssixteenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [16]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoresixteenthInput<1) ? (questionssixteenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'+--------+---+--------------+------+\n|    Name|Age|New Experience|Salary|\n+--------+---+--------------+------+\n|  Sawyer| 21|             1|  1000|\n|    Mike| 22|             3|  6000|\n|   Jorge| 47|            22|100000|\n|    Heta| 21|          null|  1200|\n| Jessica| 35|            10|200000|\n|Cristina| 20|          null|  5000|\n|  Lauren| 21|             4|150000|\n|   Elena| 52|            14| 90000|\n+--------+---+--------------+------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswerssixteenthInput && (
                          <Button color='black' h='22px' onClick={handleClearsixteenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 17**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Drop all rows with null values:</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [17]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmitseventeenthInput}>
              <Flex align='horizontal'>
                {questionsseventeenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='50px'
                      value={answersseventeenthInput[index]}
                      onChange={(event) => handleInputChangeseventeenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='5px' color='white'>.drop()</Flex>
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmitseventeenthInput}>
              {showAnswersseventeenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreseventeenthInput} out of {questionsseventeenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [17]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreseventeenthInput<1) ? (questionsseventeenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='white' ms='13px'>
                            <pre align={'left'}>
                              {'+-------+---+--------------+------+\n|   Name|Age|New Experience|Salary|\n+-------+---+--------------+------+\n| Sawyer| 21|             1|  1000|\n|   Mike| 22|             3|  6000|\n|  Jorge| 47|            22|100000|\n|Jessica| 35|            10|200000|\n| Lauren| 21|             4|150000|\n|  Elena| 52|            14| 90000|\n+-------+---+--------------+------+'}
                            </pre>
                          </Flex>
                        )}
                        {showAnswersseventeenthInput && (
                          <Button color='black' h='22px' onClick={handleClearseventeenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>

        {/**Input and output 18**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Get the top 2 records (top 2 rows):</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [18]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
            <div className="App">
            <form onSubmit={handleSubmiteighteenthInput}>
              <Flex align='horizontal'>
                {questionseighteenthInput.map((question, index) => (
                  <Flex align='horizontal' ms = '10px' key={question.id}>
                    <Flex align='horizontal' textColor='white'>
                      {question.sentence.replace(/___/g, '______')}
                      <Flex ms = '10px'></Flex>
                    <Input textColor='black' h='22px' variant='main'
                      type="text" width='auto'
                      value={answerseighteenthInput[index]}
                      onChange={(event) => handleInputChangeeighteenthInput(index, event)}
                    ></Input>
                    </Flex>
                  </Flex>
                ))}
                <Flex ms='10px'></Flex>
                <Button type="submit" color='black' h='22px'>Submit</Button>
              </Flex>
            </form>
          </div>
        </Box>
        </Flex>
          <div className="App">
            <form onSubmit={handleSubmiteighteenthInput}>
              {showAnswerseighteenthInput && (
                <div>
                  <Flex mt='6px'></Flex>
                  <Text color='black' align='left' ms='122px'>★ Your score is {scoreeighteenthInput} out of {questionseighteenthInput.length}</Text>
                  <Flex align='horizontal' width='94%' ms='31.5px'>
                    <Text mt='14px' fontWeight={'bold'}>Out [18]:</Text>
                    <Flex w='10px'></Flex>
                      <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px'>
                        {(scoreeighteenthInput<1) ? (questionseighteenthInput.map((question, index) => (
                          <p key={question.id}>
                        <Flex align='vertical' textColor='white' ms='13px'>
                        ○ Answer to question {index + 1}: {question.answer}
                        </Flex>
                        </p>
                        ))):(
                          <Flex align='vertical' textColor='#90EE90' ms='13px'>
                            Correct!
                          </Flex>
                        )}
                        {showAnswerseighteenthInput && (
                          <Button color='black' h='22px' onClick={handleCleareighteenthInput}>
                            Reset
                          </Button>
                        )}
                      </Box>
                    </Flex>
                </div>
              )}
            </form>
          </div>
        <Flex mt='10px'></Flex>
  



        </Box>
      </Box>
      </Box>


  );
  

  }