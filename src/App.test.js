import React from 'react';
import banana from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App from './App';

describe('<App />', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  })

  // 2. write this test
  it('matches snapshot', () => {
    const tree = banana.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
