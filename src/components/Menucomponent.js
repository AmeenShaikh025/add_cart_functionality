import React from "react";

const Menucomponent = props => {
  //console.log(props.items);
  const itemsList = Object.entries(props.items).map(([k, v]) => {
    return (
      <div key={v.id}>
        <h4>{v.name}</h4>
        {/* <p>{v.category}</p> */}
        {props.cart[v.name] ? (
          <div>
            <button onClick={() => props.remove(v.name)}>-</button>
            {props.cart[v.name]}
            <button onClick={() => props.add(v.name)}>+</button>
          </div>
        ) : (
          <button onClick={() => props.add(v.name)}>Add</button>
        )}
      </div>
    );
  });
  //   const newItemsList = Object.values(props.items).map(v => {
  //     return (
  //       <div>
  //         <h4>{v.name}</h4>
  //       </div>
  //     );
  //   });
  //console.log(itemsList);
  return (
    <div>
      <h3>Cart</h3>
      {/* {Object.entries(props.cart).map(([k, v]) => (
        <div key={k}>
          {k}:{v}
        </div>
      ))} */}
      <h3>Items</h3>
      {itemsList}
    </div>
  );
};
export default Menucomponent;
