import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "white",
  };
  return (
    <section
      className="dice-face"
      onClick={() => props.diceHeld(props.id)}
      style={styles}
    >
      <div className="dice-num">{props.value}</div>
    </section>
  );
};

export default Die;
