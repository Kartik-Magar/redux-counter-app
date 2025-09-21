import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  // console.log(counterVal);

  return <p className="lead mb-4">Current value of counter is: {counterVal}</p>;
};
export default DisplayCounter;
