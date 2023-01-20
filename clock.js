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
      this.changeTime = React.createRef();
      this.showDate = React.createRef();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
            1000
        );
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
          <h2 ref={this.changeTime}>{this.state.date.toLocaleTimeString()}.</h2>
          <h3 ref={this.showDate}></h3>
          <button onClick={()=>(alert('24'))}>24 Hours</button>
          <button onClick={()=>(alert('12'))}>12 Hours</button>
          <button onClick={()=>(alert('date'))}>Show date</button>
          <button onClick={()=>startDate()}>Sample</button>
        </div>
      );
    }
  }

  function startDate(){
    const dates = new Date();
    let da = dates.getUTCDay();
    let yr = dates.getFullYear();
    let mo = dates.getUTCMonth()+1; //month has +1 because Javascript month starts with 0
    let dy = dates.getUTCDate();
    mo = checkTime(mo);
    dy = checkTime(dy);
    da = days[dates.getUTCDay()];
    //document.getElementById('date').innerHTML = da +", " + yr + "/" + mo + "/" + dy;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return(this.showDate.innerHTML = da +", " + yr + "/" + mo + "/" + dy);
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />)