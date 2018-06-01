/* global describe, before, after, it, beforeEach */

import React from 'react';
import Promise from 'bluebird';
import axios from 'axios';
import sinon from 'sinon';
import _ from 'lodash';
import { expect } from 'chai';
import { mount }  from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import ArticlesIndex from '../../../src/components/articles/Index';

const articleData = [{
  id: 1,
  translations: [{
    title: 'The unstoppable rise of veganism: how a fringe movement went mainstream',
    tagline: 'Health, climate change, animal welfare... what\'s driving more people and brands to embrace a plant-based lifestyle? We investigate, and, below, four vegans explain their choice',
    image: 'https://i.guim.co.uk/img/media/8de19142730357dbd596dcb049fed8f75b6e8b37/0_327_5880_3528/master/5880.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=9231ae495163d6e4ca75273f6b9e2636',
    language: 'en',
    content: `Late on a Thursday afternoon in early March, just off Brick Lane in the heart of London's nightlife hotspot Shoreditch, 23-year-old Louisa Davidson is taking calls and co-ordinating cables and scaffolds, as shocking pink Vegan Nights banners are hung around the expansive courtyards of the Truman Brewery. There is a chill in the air, quickly warmed by a buzzing atmosphere more like a music festival than an ethical food fair, as BBC Radio 1Xtra and House of Camden DJs play records, cocktails are poured and entrepreneurs sell zines and street wear alongside the vegan sushi, patisserie and "filthy vegan junk food". Davidson had been running weekend markets at the venue when she noticed a sharp increase in the number of vegan food businesses and vegan menus on offer. So last September, with her colleagues, she decided to put on a one-off vegan night market, with music, drinks and food. "On the day there were queues around the corner," she says. "We were not prepared for it at all! There was so much interest that by Christmas we decided to make it a monthly thing. It's all happened very quickly." Inspired by its success, and the traders she was working with, Davidson switched from vegetarian to a vegan diet in January.
    "We're riding on that wave of veganism getting into the mainstream," Davidson says. "People are curious about it and they're finding out that vegan food is not just a boring salad, it's experimental, and the food traders are amazing – people can have a drink, listen to music and hang out. First and foremost, we want to offer a positive platform, whether you've never had a fried jackfruit before or you're a longstanding vegan." Many of the traders are new to it as well, with a couple of them having launched their businesses at Vegan Nights. "It is a community and everyone supports each other's businesses. It's great to be a part of it."`
  }]
}, {
  id: 2,
  translations: [{
    title: 'Ambitious women shouldn\'t be afraid of the word \'bitch\'. Or the term \'ambitchous\'',
    tagline: 'Sometimes we all have to do things that other people don\'t like. It doesn\'t make us bitches',
    image: 'http://www.leisureopportunities.com/images/551020_186616.jpg',
    language: 'en',
    content: `I was talking to a friend about a big step-up she was facing at work and she suddenly said, "I know I need to do this. But I'm hesitating because I am scared people will call me a bitch." My reply was harsh: "They might call you a bitch. It doesn't mean you are one. In fact, I know you're not one. And you know you're not one." What is she, instead of that word? Ambitious. Assertive. Self-driven. Decisive. Brave. Those are not bitch qualities. They are the qualities of self-preservation.

    I absolutely admit that I've done this, too, many times. (I.e. not done things because they risked being seen as bitchy.) But I'm now less interested in why women do this (habit, self-deprecation, patriarchy...), and I'm more interested in how we can stop doing it. So, of late, I have started to think to myself: What would a total and utter lunatic bastard do in this situation? This can be very entertaining as an exercise, especially if you imagine yourself doing this thing.

    So, for example, say you are facing a job interview and you want a three-day week (which is not on offer). You think to yourself: What would be a "bitchy" ask? Think about the total and utter lunatic bastard who would say, "I have already been offered seven other jobs at this level and they have all proposed triple the pay you are offering for a two-day week. Why should I even be talking to you?" (I did say this person was a lunatic.)This gives you a measure of what really counts as bitch/bastard behaviour and allows you to row back from that extreme point. At least you are not as much of a bitch/bastard as that person. So, instead, you might say – assertively – "I'm only considering jobs at the moment that can offer flexibility. What's possible?" This is not bitchy or ambitchous. It's a statement of what you want and need. It's not wrong to know or state that.

    There are two issues here, of course. First, a lot of us care way too much what other people think. Of course, there are people whose opinion matters: the people closest to you who trust you and know you best. You can always check with them whether you're being a bitch or not. (I bet you're not.) Second, the word "bitch" is a reaction from someone who doesn't like something you've done. But that doesn't mean they're right.

    Sometimes we all have to do things that other people don't like. It doesn't make us bitches. It's not our job to do only the things that will make other people think that we are nice. (Like working a five-day week when we really don't want to, and seething internally with resentment for many years as we shrivel away towards death. Not that I've felt this way or anything.)

    The word "ambitchous" is in the urban dictionary as "striving to be more of a bitch than the average bitch." (Which, let's face it, is a pretty fine ambition. Anyone seen Feud? In a parallel universe, I'd kill to access those levels of bitch-dom. As long as I get the same costumes.) But, in her book of the same name, Debra Condren defines "ambitchous" as something many of us can identify with: "A woman who (1) makes more money (2) has more power (3) gets the recognition she deserves and (4) has the determination to go after her dreams." See what I mean about not bitchy? Just normal. Just not doormat. Now go think about the lunatic bastard and get closer to that.`
  }]
}];

describe('ArticlesIndex', () => {
  let wrapper;
  let promise;

  before(done => {
    promise = Promise.resolve({ data: articleData });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <Router>
        <ArticlesIndex/>
      </Router>
    );
    done();
  });


  it('should display 2 cards', done => {
    promise.then(() => {
      wrapper.update();
      console.log(wrapper.debug());
      expect(wrapper.find('div.card').length).to.eq(articleData.length);
      done();
    });
  });

  xit('should display correct image, title and tagline for each article', done => {
    promise.then(() => {
      wrapper.update();
      _.orderBy(articleData, 'name', 'asc').forEach((article, index) => {
        expect(wrapper.find('.title').at(index).text()).to.eq(article.title);
        expect(wrapper.find('.subtitle').at(index).text()).to.eq(article.tagline);
        expect(wrapper.find('.card-image').at(index).prop('style').backgroundImage).to.include(article.image);
      });
      done();
    });
  });

  xit('should create a link for each article', done => {
    promise.then(() => {
      wrapper.update();
      articleData.forEach(article => {
        expect(wrapper.find({ href: `/articles/${article._id}` }).length).to.eq(1);
      });
      done();
    });
  });

});
