// const playersList = require('./components/PlayersList');
// const app = require('./App');

// test('App component contains PlayersList component', () => {
//   expect(app).toContain(playersList);
// })
import React from 'react'
import App from './App'
import PlayersList from './components/PlayersList'
import renderer from 'react-test-renderer'

test('the data is peanut butter', done => {

  const root = renderer.create(<App/>).root;

  root.instance.setState({players: [
    {
      country: "United States",
      id: 7,
      name: "Kelley O'Hara",
      searches: 8      
    }
  ]});

  expect(
    root.find(node => node.type === PlayersList)
  ).not.toBeNull();

  expect(
    root.findByProps({country: 'United States'}).type === 'Player'
  ).not.toBeNull();  

  done();
});