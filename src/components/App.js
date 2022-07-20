import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {

    state ={
      items: itemData,
      isDarkMode : false,
    };

    handleDarkModeClick = (e) => {
      this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}));
      // setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  
   render(){

  // const [items, setItems] = useState(itemData);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.handleDarkModeClick}>
          {this.state.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={this.state.items} />
    </div>
  );
}
}

export default App;
