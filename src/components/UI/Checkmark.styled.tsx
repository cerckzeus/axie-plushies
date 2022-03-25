import React, { useState } from "react";
import styled from "styled-components";

const Checkmark: React.FC<{ done: boolean }> = ({ done }) => {
  const [isDone, setIsDone] = useState(false);
  const timer = setTimeout(() => {
    setIsDone(true);
  }, 2000);
  if (isDone) {
    clearTimeout(timer);
  }

  return (
    <StyledCheckmark>
      <input checked={isDone} type="checkbox" id="check" disabled />
      <label htmlFor="check">
        <div className="check-icon"></div>
      </label>
    </StyledCheckmark>
  );
};

const StyledCheckmark = styled.div`
  & label {
    position: relative;
    height: 125px;
    width: 125px;
    display: inline-block;
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border-left-color: #5cb85c;
    animation: rotate 1.2s linear infinite;
  }
  @keyframes rotate {
    50% {
      border-left-color: #9b59b6;
    }
    75% {
      border-left-color: #e67e22;
    }
    100% {
      transform: rotate(360deg);
    }
  }
  label .check-icon {
    display: none;
  }
  label .check-icon:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 24px;
    transform: scaleX(-1) rotate(135deg);
    height: 56px;
    width: 28px;
    border-top: 5px solid #5cb85c;
    border-right: 5px solid #5cb85c;
    transform-origin: left top;
    animation: check-icon 0.8s ease;
  }
  @keyframes check-icon {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 28px;
      opacity: 1;
    }
    40% {
      height: 56px;
      width: 28px;
      opacity: 1;
    }
    100% {
      height: 56px;
      width: 28px;
      opacity: 1;
    }
  }
  input {
    display: none;
  }
  input:checked ~ label .check-icon {
    display: block;
  }
  input:checked ~ label {
    animation: none;
    border-color: #5cb85c;
    transition: border 0.5s ease-out;
  }
`;

export default Checkmark;
