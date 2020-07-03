import React from 'react';
import { shallow } from 'enzyme';

import { Selector } from './Selector';


describe("<Selector />", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Selector />))

  it('should render 4 <div>\'s elements', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  
})
