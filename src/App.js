import React from 'react';

import List from './List';

// function sum1(a, b) {
//   return a + b;
// }

// const sum2 = function(a , b) {
//   return a + b;
// }

// const sum3 = (a , b) => {
//   return a + b;
// };

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: [1,2,3,4,5],
      value: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        count: this.state.count + 1
      });
    }, 1000);
  }

  handleOnClick(clickedElement, index) {
    this.setState({
      ...this.state,
      list : this.state.list.filter((element) => element !== clickedElement)
    });
  } 

  addItem(){
    let newList = this.state.list;
    newList.push(this.state.value);
    this.setState({
      ...this.state,
      list : newList
    })
  }

  handleUpdateValue(event) {
    const newValue = event.target.value;
    this.setState({
      ...this.state,
      value: newValue
    })
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.value} onChange={(e) => this.handleUpdateValue(e)} />
        <button onClick={() => this.addItem()}>Add</button>
        <List list={this.state.list} click={(item, index) => this.handleOnClick(item, index)} />
        <List list={this.state.list} click={(item, index) => this.handleOnClick(item, index)} />
      </div>
      
    )
  }
}

export default App;
