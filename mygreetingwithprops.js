import './App.css';

function GreetingElementWithProps(props) {
          return (
            <div className="App">
              <h1>HELLO, {props.message}</h1>
            </div>
          );
}

export default GreetingElementWithProps;