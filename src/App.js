import React, { useState, useCallback, useMemo } from "react";
import Button from "./Components/UI/Button";
import './App.css';
import DemoList from "./Components/Demo/DemoList";

function App(){
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setIsDescending(prevIsDescending => !prevIsDescending);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

 
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return isDescending ? [...listItems].sort((a, b) => b - a) : [...listItems].sort((a, b) => a - b);
  }, [listItems, isDescending]);

  console.log('App RUNNING');

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        {isDescending ? "Change to Ascending Order"  :  "Change to Descending Order"}
      </Button>
    </div>
  );
}

export default App;
