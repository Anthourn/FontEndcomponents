import Select from "react-select";
import {
  components,
  DropdownIndicatorProps,
  OptionProps,
  MenuListProps,
} from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flip } from "../darkmodeSlice";
import { seriff, sansSeriff, mono } from "../fontSlice";

const Header = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.darkmode.value);
  const font = useSelector((state) => state.font.value);

  // 1
  const Option = (props) => {
    return (
      <div
        className={props.data.className}
        style={{
          fontFamily: props.data.fontFamily,
        }}
        onClick={props.data.onClick}
      >
        <components.Option {...props} />
      </div>
    );
  };
  const MenuList = (props) => {
    return (
      <components.MenuList
        className={
          darkmode ? "react-select__menu-list-dark" : "react-select__menu-list"
        }
        {...props}
      />
    );
  };
  const options = [
    {
      value: "Sans-Seriff",
      label: "Sans Seriff",
      className: "react-select-sans-seriff",
      onClick: () => dispatch(sansSeriff()),
    },
    {
      value: "Seriff",
      label: "Seriff",
      className: "react-select-seriff",
      onClick: () => dispatch(seriff()),
    },
    {
      value: "Mono",
      label: "Mono",
      className: "react-select-mono",
      onClick: () => dispatch(mono()),
    },
  ];

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-width="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const dictionaryIcon = (
    <svg
      className="header__dict-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="38"
      viewBox="0 0 34 38"
      fill="none"
    >
      <path
        d="M0.25 33C0.25 33.4142 0.585786 33.75 1 33.75C1.41421 33.75 1.75 33.4142 1.75 33H0.25ZM2.17157 2.17157L1.64124 1.64124L1.64124 1.64124L2.17157 2.17157ZM32.6485 1.35147L32.1181 1.88175L32.1182 1.88186L32.6485 1.35147ZM32.25 28.428C32.25 28.8422 32.5858 29.178 33 29.178C33.4142 29.178 33.75 28.8422 33.75 28.428H32.25ZM5 28.25C4.58579 28.25 4.25 28.5858 4.25 29C4.25 29.4142 4.58579 29.75 5 29.75V28.25ZM33 29.75C33.4142 29.75 33.75 29.4142 33.75 29C33.75 28.5858 33.4142 28.25 33 28.25V29.75ZM5 36.25C4.58579 36.25 4.25 36.5858 4.25 37C4.25 37.4142 4.58579 37.75 5 37.75V36.25ZM33 37.75C33.4142 37.75 33.75 37.4142 33.75 37C33.75 36.5858 33.4142 36.25 33 36.25V37.75ZM1.75 33V5H0.25V33H1.75ZM1.75 5C1.75 4.13804 2.09241 3.3114 2.7019 2.7019L1.64124 1.64124C0.750449 2.53204 0.25 3.74022 0.25 5H1.75ZM2.7019 2.7019C3.3114 2.09241 4.13802 1.75 5 1.75V0.25C3.74018 0.25 2.53204 0.750451 1.64124 1.64124L2.7019 2.7019ZM5 1.75H31.8V0.25H5V1.75ZM31.8 1.75C31.9194 1.75 32.0338 1.79742 32.1181 1.88175L33.1789 0.821187C32.8132 0.455444 32.3172 0.25 31.8 0.25V1.75ZM32.1182 1.88186C32.2026 1.96621 32.25 2.08062 32.25 2.2H33.75C33.75 1.68286 33.5446 1.18683 33.1788 0.821081L32.1182 1.88186ZM32.25 2.2V28.428H33.75V2.2H32.25ZM5 29.75H33V28.25H5V29.75ZM5 37.75H33V36.25H5V37.75Z"
        fill="#757575"
      />
    </svg>
  );
  const darkmodeButton = (
    <button
      aria-label="dark  mode toggle"
      onClick={() => dispatch(flip(), console.log(darkmode))}
      className="header__dark-mode-toggle"
    >
      {darkmode === true ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="22"
          viewBox="0 0 73 22"
          fill="none"
        >
          <rect y="1" width="40" height="20" rx="10" fill="#A445ED" />
          <circle cx="30" cy="11" r="7" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z"
            stroke="#A445ED"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="22"
          viewBox="0 0 73 22"
          fill="none"
        >
          <rect y="1" width="40" height="20" rx="10" fill="#757575" />
          <circle cx="10" cy="11" r="7" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z"
            stroke="#757575"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
  return (
    <header className="header">
      {dictionaryIcon}
      <div className="header__controls">
        <div className="header__custom-select">
          <Select
            aria-label="font selector"
            defaultValue={options[0]}
            isSearchable={false}
            classNamePrefix="react-select"
            unstyled
            components={{ DropdownIndicator, Option, MenuList }}
            options={options}
          />
        </div>

        {darkmodeButton}
      </div>
    </header>
  );
};

export default Header;

// 1: I needed to add classnames to each option so they could maintain their own font, so i made option a custom component where the div has a classname that comes from the option object
