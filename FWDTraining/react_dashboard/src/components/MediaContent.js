import "../css/contentScreen.css";
import useCounter from "../hooks/useCounter";

function MediaContent() {
  const { counter, setCounter, bgColor } = useCounter();
  return (
    <div className="content">
      <h2>Custom Hook Demo</h2>
      <div>
        <button
          className="pageButton icon"
          onClick={() => setCounter(counter - 1)}
        >
          <i className="fa-solid fa-less-than"></i>
        </button>
        <button
          className="pageButton pageText"
          style={{ backgroundColor: bgColor }}
        >
          {counter}
        </button>
        <button
          className="pageButton icon"
          onClick={() => setCounter(counter + 1)}
        >
          <i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </div>
  );
}

export default MediaContent;
