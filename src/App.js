import React, { Component } from "react";
import Cartcomponent from "./components/Cartcomponent";
import Menucomponent from "./components/Menucomponent";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    items: [],
    cart: {}
  };
  componentDidMount() {
    let self = this;
    axios
      .get("http://food-power.glitch.me/restaurant/25225")
      .then(response => {
        self.setState({
          items: response.data.data.menu.items
        });
        //console.log(self.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onAdd = name => {
    this.setState({
      cart: {
        ...this.state.cart,
        [name]: (this.state.cart[name] || 0) + 1
      }
    });
    console.log(this.state);
  };

  onRemove = name => {
    this.setState({
      cart: {
        ...this.state.cart,
        [name]: this.state.cart[name] - 1
      }
    });
  };

  render() {
    const { items, cart } = this.state;
    return (
      <div className="App">
        <Menucomponent
          className="menu"
          items={items}
          add={this.onAdd}
          cart={cart}
          remove={this.onRemove}
        />
        <Cartcomponent
          className="cart"
          cart={cart}
          items={items}
          add={this.onAdd}
          remove={this.onRemove}
        />
      </div>
    );
  }
}

export default App;
