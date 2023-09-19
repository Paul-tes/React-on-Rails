import React from 'react';
import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { fetchGreetingsFromApi } from '../redux/reducer/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.text);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchGreetingsFromApi());
  }, [dispatch]);

  return (
      <>
        <h1>Greeting:</h1>
        <p>{greeting}</p>
      </>
    );
}

export default Greeting;
