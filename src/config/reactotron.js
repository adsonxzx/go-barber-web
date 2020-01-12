import Reactron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactron.configure().connect();

  tron.clear();

  console.tron = tron;
}
