import propTypes from 'prop-types';
import React from 'react';
import { classNames } from "../../../utils";

function Container({ children, className, ...rest }) {
  return (
    <section className={classNames("animate-fade", className)} {...rest}>{children}</section>
  );
}

Container.propTypes = {
  children: propTypes.any,
};

export default Container;
