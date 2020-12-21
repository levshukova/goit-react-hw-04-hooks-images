import errorImage from '../../images/search_error.png';

export default function ErrorView() {
  return (
    <div>
      <img
        src={errorImage}
        width="250"
        alt="nothing-found"
        style={{ marginTop: 150 }}
      ></img>
    </div>
  );
}
