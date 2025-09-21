import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const currentValue = useSelector((store) => store.counter);

  return (
    <p className="lead mb-4">Current value of counter is: {currentValue}</p>
  );
};
export default DisplayCounter;
