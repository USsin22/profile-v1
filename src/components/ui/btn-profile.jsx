import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <div className='bg-[#fff] flex items-center justify-center p-1 rounded-[1.625rem]'>
      {/* First Button (Styled Components) */}
      <StyledWrapper>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Portfolio</span>
        </button>
      </StyledWrapper>

      {/* Second Button (Tailwind, updated) */}
      <button className="cursor-pointer bg-gradient-to-b bg-[#ff451d] px-3 py-2 md:px-4 md:py-3 rounded-[1.625rem] text-sm md:text-base text-white font-medium group transition-all duration-300">
        <div className="relative overflow-hidden">
          <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Hire Me
          </p>
          <p className="absolute top-7 text-center left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            click
          </p>
        </div>
      </button>
    </div>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #ff451d; /* red color */
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #ffffffff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #000;
    border-right: 0.125rem solid #000;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #000;
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #fffcfcff;
  }
`;

export default Button;
