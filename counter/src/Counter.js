import React from "react"

class Counter extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      counter: props.initialCount
    }
  }
  render () {

    const style = { color: this.props.color
    }
    return (
    <div>
      <button onClick={() => this.setState({ counter: this.state.counter -100 })} > - </button>
      <span style={style}> Mateus esta me devendo R$ : {this.state.counter} </span>
      <button onClick={() => this.setState({ counter: this.state.counter +100 })} > + </button>
    </div>
    )
  }
}



export default Counter
