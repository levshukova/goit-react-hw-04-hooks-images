import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Spinner() {
  return (
    <Loader
      className="Loader"
      type="ThreeDots"
      color="#3f51b5"
      height={80}
      width={80}
      timeout={0}
    />
  );
}

export default Spinner;
