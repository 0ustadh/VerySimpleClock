function App() {
  return(
    <div>
      <Logo />
      <Clock />
    </div>
  )
}

function Logo() {
  return(
    <img src='logo192.png' alt='ReactJS Logo' />
  )
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div>
          <h1>Hello! It's</h1>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />)