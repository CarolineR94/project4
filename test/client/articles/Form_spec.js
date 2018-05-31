/* global describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ArticleForm from '../../../src/components/articles/Form';

describe('ArticleForm', () => {
  it('should render 2 input fields and 2 textareas', done => {
    const state = {
      errors: {}
    };

    const component = shallow(<ArticleForm article={state} errors={state.errors}/>);
    expect(component.find('input').length).to.eq(2);
    expect(component.find('textarea').length).to.eq(2);
    done();
  });

  it('should populate the form', done => {
    const state = {
      title: 'title',
      image: 'image',
      tagline: 'tagline',
      content: 'content',
      errors: {}
    };

    const component = shallow(<ArticleForm article={state} errors={state.errors}/>);
    expect(component.find({ value: 'title', name: 'title' }).length).to.eq(1);
    expect(component.find({ value: 'image', name: 'image' }).length).to.eq(1);
    expect(component.find({ value: 'tagline', name: 'tagline' }).length).to.eq(1);
    expect(component.find({ value: 'content', name: 'content' }).length).to.eq(1);
    done();
  });

  it('should display errors', done => {
    const state = {
      errors: {
        title: 'This field is required',
        image: 'This field is required',
        tagline: 'This field is required',
        content: 'This field is required'
      }
    };

    const component = shallow(<ArticleForm article={state} errors={state.errors}/>);
    expect(component.find('small').length).to.eq(4);
    done();
  });


});
