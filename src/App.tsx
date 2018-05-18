import * as React from "react";

export class App extends React.Component<{name: string}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('mounted')
  }

  handleClick() {
    alert()
  }

  render() {

    return (
      <button onClick={this.handleClick.bind(this)}/>
    );
  }
}
