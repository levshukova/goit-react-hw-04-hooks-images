import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

import s from './Button.module.css';

function Button({ onClick }) {
  scroll = () => {
    onClick();
    scroll.scrollToBottom();
  };

  return (
    <button onClick={scroll} className={s.Button} type="button">
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
