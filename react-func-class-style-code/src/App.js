import React, { useState, useEffect } from 'react'
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

let funcStyle = 'color: blue';
let funcId = 0;
// function FuncComp({ initNumber }) {
function FuncComp(props) {
  // let numberState = useState(props.initNumber);
  // let number = numberState[0];
  // let setNumber = numberState[1];
  const [number, setNumber] = useState(props.initNumber);

  // let dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
  const [_date, setDate] = useState((new Date()).toString());

  // side Effect
  useEffect(() => {
    console.log('%cfunc => useEffect (componentDidMount && componentDidUpdate)' + (++funcId), funcStyle);
    // document.title = number + ' : ' + _date;
    return function () {
      console.log('%cfunc => useEffect return (componentDidMount && componentDidUpdate)' + (++funcId), funcStyle);
    }
  });
  // console.log('numberState', numberState);
  console.log('%cfunc => render' + (++funcId), funcStyle);
  return (
    <div className='container'>
      <h2>function style component</h2>
      {/* <p>Number : {initNumber}</p> */}
      <p>Number : {number}</p>
      <p>date : {_date}</p>
      <input type='button' value='random' onClick={
        function () {
          setNumber(Math.random())
        }
      } />
      <input type='button' value='date' onClick={
        function () {
          setDate((new Date()).toString());
        }
      } />
    </div>
  );
}

let classStyle = 'color:red';
class ClassComp extends React.Component {
  // state를 세팅 (초기화)
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString(),
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // render를 호출할 필요가 있냐 없냐.. 성능과 연관있음
    // true -> render 호출
    // false -> render 호출 안해 !
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className='container'>
        <h2>class style component</h2>
        {/* state값 사용 */}
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type='button' value='random' onClick={
          function () {
            // state 값 변경
            this.setState({ number: Math.random() })
          }.bind(this)
        } />
        <input type='button' value='date' onClick={
          function () {
            // state 값 변경
            this.setState({ date: (new Date()).toString() })
          }.bind(this)
        } />
      </div>
    )
  }
}
export default App;
