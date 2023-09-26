import React from "react";
import PropTypes from "prop-types";

/**
 * "Карточка с рекламой" - вывод рекламы и принимаемых children
 */

export default function Card({ img, children }) {
  return (
    <div className='card mb-5' style={{ width: "18rem" }}>
      {img && <img src={img} alt='card' />}
      {children}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
};

Card.defaultProps = {
  image: "",
};
