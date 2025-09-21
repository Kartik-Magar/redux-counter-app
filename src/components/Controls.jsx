import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef("");

  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };

  const handleDecreament = () => {
    dispatch({ type: "DREAMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { num: Number(inputElement.current.value) },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: Number(inputElement.current.value) },
    });
    inputElement.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center Btn-Margin">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          Increament by 1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecreament}
        >
          Decreament by 1
        </button>
        <button type="button" class="btn btn-warning" onClick={handlePrivacy}>
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          className="no-input"
          placeholder="Enter Number"
          type="input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
