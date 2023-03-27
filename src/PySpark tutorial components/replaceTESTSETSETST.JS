    //QUESTION FOR INPUT 12
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
        
        
        
        {/**Input and output 12**/}
        <Flex mt='10px'></Flex>
        <Text align={'left'} ms='120px' width='94%' fontWeight={'bold'}>Get the top 2 records (top 2 rows):</Text>
        <Flex align='horizontal' width='94%' ms='-18px'>
          <Text mt='14px' fontWeight={'bold'}>In [10]:</Text>
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
                    <Text mt='14px' fontWeight={'bold'}>Out [10]:</Text>
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
  