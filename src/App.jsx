import React, { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';

function App() {
  // Task 1: Declare count state variable
  const [count, setCount] = useState(0);

  // Task 2: Declare isVisible state variable
  const [isVisible, setIsVisible] = useState(true);

  // Task 3: Declare inputValue state variable
  const [inputValue, setInputValue] = useState('');

  // Task 4: Create handleInputChange function
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Task 5: Create applyInputValue function
  const applyInputValue = () => {
    const newValue = parseInt(inputValue) || 0;
    setCount(newValue);
  };

  return (
    <VStack spacing={4}>
      {/* Task 6: Toggle Counter Visibility Button */}
      <Button onClick={() => setIsVisible(!isVisible)}>
        Toggle Counter Visibility
      </Button>

      {/* Task 7: Input Field */}
      <Input 
        placeholder="Set counter value" 
        value={inputValue} 
        onChange={handleInputChange} 
      />

      {/* Task 8: Set Counter Button */}
      <Button className="set-counter-button" onClick={applyInputValue}>
        Set Counter
      </Button>

      {/* Task 9: Reset Counter Button */}
      <Button onClick={() => setCount(0)}>
        Reset Counter
      </Button>

      {/* Task 10: Conditionally Render Counter */}
      {isVisible && (
        <Button onClick={() => setCount(count + 1)}>
          Count is {count}
        </Button>
      )}
    </VStack>
  );
}

export default App;
