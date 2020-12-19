import PropTypes from 'prop-types';

import s from './Button.module.css';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={s.Button} type="button">
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
