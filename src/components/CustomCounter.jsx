import { useEffect, useState } from "react";

const Counter = ({
  start = 0,
  end = 100,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startValue = start;
    const increment = (end - start) / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
