import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Heading = () => {
  return (
    <h1 className="text-3xl font-bold text-green-700">
      <Typewriter
        words={['Welcome to My Garden', 'Grow Your Plants', 'Love Nature','stay with plant and take pure oxygen']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default Heading;
