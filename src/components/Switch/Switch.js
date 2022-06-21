import React from 'react';
import './Switch.css';

const Switch = ({ isActive, handleToggle }) => {
  const labelClass = `switch__label ${isActive ? 'switch__label_type_active' : ''}`;

  function checkState() {
    return isActive;
  }

  return (
    <div className="switch">
      <input
        className="switch__checkbox"
        onChange={handleToggle}
        id={`switch-new`}
        defaultChecked={checkState()}
        type="checkbox"
      />
      <label className={labelClass} htmlFor={`switch-new`}>
        <span className={`switch__button`} />
      </label>
    </div>
  );
};

export default Switch;
