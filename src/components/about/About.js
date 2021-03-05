import React from 'react';
import './About.css';
import { text } from './text.json';

const About = () => (
  <p className="message">{ text }</p>
);

export default About;
