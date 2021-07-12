import React from 'react'
import './App.css'
function App() {
  return (
    <>
      <div className='container'>
        <h1>Hello World</h1>
        <FuncComp initNumber={2} />
        <ClassComp initNumber={2} />
      </div>
    </>
  );
}

// function FuncComp({ initNumber }) {
function FuncComp(props) {
  return (
    <div className='container'>
      <h2>function style component</h2>
      {/* <p>Number : {initNumber}</p> */}
      <p>Number : {props.initNumber}</p>

    </div>
  );
}

class ClassComp extends React.Component {
  // state를 세팅 (초기화)
  state = {
    number: this.props.initNumber
  }
  render() {
    return (
      <div className='container'>
        <h2>class style component</h2>
        {/* state값 사용 */}
        <p>Number : {this.state.number}</p>
        <input type='button' value='random' onClick={
          function () {
            // state 값 변경
            this.setState({ number: Math.random() })
          }.bind(this)
        } />
      </div>
    )
  }
}
export default App;
