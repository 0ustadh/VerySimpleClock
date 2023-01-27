const {useState, useRef} = React;

function App() {
  return(
    <div>
      <Header title='Clock'/>
      <Header title='Pogi'/>
      <Logo />
      <Clock />
      <HomePage/>
    </div>
  )
}

function Header({title}){
  console.log(title);
  return <h1>{title}</h1>;
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
          <button onClick={()=>(alert(this.state.date.toLocaleTimeString('en-US', {hour12:false})))}>24 Hours</button>
          <button onClick={()=>(alert(this.state.date.toLocaleTimeString()))}>12 Hours</button>
          <button onClick={()=>(alert(this.state.date.toLocaleDateString()))}>Show date</button>
          <button onClick={()=>startDate()}>Sample</button>
        </div>
      );
    }
  }

  function startDate(){
    const [date, showDate] = useState(0);
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
    //alert(da +", " + yr + "/" + mo + "/" + dy);
}

function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(<App />)