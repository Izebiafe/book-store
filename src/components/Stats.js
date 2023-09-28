import React from 'react';
import Chapter from './Chapter';
import Progress from './Progress';
import './styles/stats.css';

const Stats = () => (
  <div className="stats-container">
    <Progress />
    <Chapter />
  </div>
);

export default Stats;
