import { PropTypes } from "prop-types";

import { createContext } from "react";

import { AppNavBar } from "../layout/AppNavBar";
import { AppFooter } from "../layout/AppFooter";

import { useState } from "react";

import { ErrMsg } from "../components/ErrMsg";

export const ErrorContext = createContext(null);

export default function BasePage({ children }) {
  const [error, setError] = useState({
    type: "danger",
    msg: "",
  });

  return (
    <>
      <ErrorContext.Provider value={setError}>
        <AppNavBar />

        {error.msg ? (
          <ErrMsg type={error.type}>
            <strong>{error.msg}</strong>
          </ErrMsg>
        ) : null}

        {children}

        <AppFooter />
      </ErrorContext.Provider>
    </>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

