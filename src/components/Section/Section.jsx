import React from "react";
import { CSSTransition } from "react-transition-group";
// import PropTypes from "prop-types";

import s from "./Section.module.css";
import AppearStyles from "./AppearStyles.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={s.Section}>
      <CSSTransition
        in={true}
        appear
        unmountOnExit
        classNames={AppearStyles}
        timeout={200}
      >
        <h2>{title}</h2>
      </CSSTransition>
      {children}
    </div>
  );
};

export default Section;

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.object,
// };
//
//        NOTE: ГЛЮК ????
// Warning: Failed prop type: Invalid prop `children` of type `array`(!) supplied to `Section`, expected `object`(!)
//     in Section (at App.jsx:14)
//     in App (at src/index.js:11)
//     in Provider (at src/index.js:10)
