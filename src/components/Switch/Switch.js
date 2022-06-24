import React from 'react';
import './Switch.css';

const Switch = ({ isActive, handleToggle }) => {
  let labelClass = `switch__label ${isActive ? 'switch__label_type_active' : ''}`;

  return (
    <div className="switch">
      <input
        className="switch__checkbox"
        onChange={handleToggle}
        id={`switch-new`}
        defaultChecked={isActive}
        type="checkbox"
      />
      <label className={labelClass} htmlFor={`switch-new`}>
        <span className={`switch__button`} />
      </label>
    </div>
  );
};

export default Switch;
