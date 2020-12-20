import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

function Spinner() {
  return (
    <div className={s.loaderContainer}>
      <Loader
        className="Loader"
        type="ThreeDots"
        color="#3f51b5"
        height={80}
        width={80}
      />
    </div>
  );
}

export default Spinner;
