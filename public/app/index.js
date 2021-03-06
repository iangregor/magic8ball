const App = (children) => (
  <React.Fragment>
    <h1>Magic 8 Ball</h1>
    <Magic8Ball/>
  </React.Fragment>
)

class Magic8Ball extends React.Component {
  state = {
    status: "none",
    message: "Shake me!"
  }

  getMessage = async () => {
    const req = await fetch("/magic");
    const res = await req.json();

    this.setState(res);
  }

  render() {
    const { status, message } = this.state;

    return (
      <div className={`ball ${status}`}>
        <div className="message">{message}</div>
        <button onClick={this.getMessage}>Shake</button>
      </div>
    )
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App/>, app);