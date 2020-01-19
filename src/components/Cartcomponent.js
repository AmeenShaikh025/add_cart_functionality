import React from "react";

const Cartcomponent = props => {
  return (
    <div>
      <h2>Cartcomponent</h2>

      {Object.entries(props.cart).map(([k, v]) => (
        <div key={k}>
          {props.cart[k] ? (
            <div style={{ marginBottom: 30 }}>
              <div>
                {k}:{v}
              </div>
              <button onClick={() => props.remove(k)}>-</button>
              {props.cart[k]}
              <button onClick={() => props.add(k)}>+</button>
            </div>
          ) : null}
        </div>
      ))}
      <h4>Total:</h4>
      {Object.values(props.cart).reduce((acc, cur) => {
        return (acc = acc + cur);
      }, 0)}
    </div>
  );
};

export default Cartcomponent;
