import React from 'react';
import PropTypes from 'prop-types';
import Histogram from '../Histogram';
import './index.css';

const Stats = ({ stats }) => (
  <div className="Stats">
    <div className="confined">
      {stats.map(({ label, value, icon, histogram }) => (
        <div
          className={`Stat ${histogram ? 'with-chart' : ''}`}
          key={`${label}-${value}`}
          // waits till SR has a moment to announce
          aria-live="polite"
          // changes to text announce
          aria-relevant="text"
          // true: whole text element announced, false: just what is changed is announced
          aria-atomic="true"
        >
          <h2>
            <div className="Stat__value">
              {icon && <img className="Stat__value-icon" src={icon} alt="" />}
              {histogram ? (
                <Histogram data={histogram} />
              ) : (
                <span>{value}</span>
              )}
            </div>
            <div>
              <div className="Stat__label">{label}</div>
              {histogram && (
                <div className="Histogram__value-wrap">
                  <span className="Histogram__value">{value} </span>
                  <span>avg</span>
                </div>
              )}
            </div>
          </h2>
        </div>
      ))}
    </div>
  </div>
);

Stats.displayName = 'Stats';
Stats.propTypes = {
  stats: PropTypes.array.isRequired
};
export default Stats;
