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
        <center>
          <h1>Hi There, This is React on Rails with webpack</h1>
          <h2>Greeting:</h2>
          <p>{greeting}</p>
        </center>
      </>
    );
}

export default Greeting;
