import React from 'react';
import Navbar from './components/Navbar.scss';
import standards from './standards.json';
import { getPassFail, getNextLowestKey, getNextHighestKey } from './utils/Helpers';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import ResultsDial from './components/ResultsDial';

class App extends React.Component {
  
constructor() {
    super();
    this.state = {
      gender: 'male',
      age: '18-26',
      count: {
        ssh: '0',
        po: '0',
        kl: '0',
        np: '0',
        mp: '0',
        min: '00',
        sec: '00'
      },
      score: {
        ssh: '0',
        po: '0',
        kl: '0',
        np: '0',
        mp: '0',
        run: '0',
        total: '0'
      },
      pass: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        mp: false,
        run: false
      },
        error: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        mp: false,
        run: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id.replace('sufsk_', '');

  let gender = this.state.gender;
  let age = this.state.age;
  let score = { ...this.state.score };
  let count = { ...this.state.count };
  let pass = { ...this.state.pass };
  let error = { ...this.state.error };

  // assign changed value to corresponding item
  if (id.startsWith("gender_")) {
    gender = value;
    this.setState({ gender });
  } else if (id.startsWith("age_")) {
    age = value;
    this.setState({ age });
  } else if ('ssh' === id) {
    count.ssh = value;
  } else if ('po' === id) {
    count.po = value;
  } else if ('kl' === id) {
    count.kl = value;
  } else if ('np' === id) {
    count.np = value;
  } else if ('mp' === id) {
    count.mp = value;
  } else if ('min' === id) {
    count.min = value.padStart(2, "0");
  } else if ('sec' === id) {
    count.sec = value.padStart(2, "0");
  } else {
    alert('Something went wrong.');
  }

 // change object keys to arrays for easier sorting
 const sshArray = Object.keys(standards[gender]['sprint me shtrirje']);
 const poArray = Object.keys(standards[gender]['pompa']);
 const klArray = Object.keys(standards[gender]['kërcim së largu']);
 const npArray = Object.keys(standards[gender]['ngritja e peshës']);
 const mpArray = Object.keys(standards[gender]['mbështetje mbi parakrahë']);
 const timeArray = Object.keys(standards[gender]['run']);

 // filter user reps to be within available range
 const sshFinal = getNextLowestKey(sshArray, count.ssh);
 const poFinal = getNextLowestKey(poArray, count.po);
 const klFinal = getNextLowestKey(klArray, count.kl);
 const npFinal = getNextLowestKey(npArray, count.np);
 const mpFinal = getNextLowestKey(mpArray, count.mp);

 // grab the scores from the json data
 score.ssh = standards[gender]['sprint me shtrirje'][sshFinal][0][age];
 score.po = standards[gender]['pompa'][poFinal][0][age];
 score.kl = standards[gender]['kërcim së largu'][klFinal][0][age];
 score.np = standards[gender]['ngritja e peshës'][npFinal][0][age];
 score.mp = standards[gender]['mbështetje mbi parakrahë'][mpFinal][0][age];

 if ((count.min + count.sec) === '0000') {
   score.run = 0;
 } else {
   // filter user run time to be taken from available time
   const runFinal = getNextHighestKey(timeArray, (count.min + count.sec));
   score.run = standards[gender]['run'][runFinal][0][age];
 }
 score.total = score.ssh + score.po + score.kl + score.np + score.mp + score.run;

 // get pass/fail (boolean)
 pass.ssh = getPassFail(score.ssh);
 pass.po = getPassFail(score.po);
 pass.kl = getPassFail(score.kl);
 pass.np = getPassFail(score.np);
 pass.mp = getPassFail(score.mp);
 pass.run = getPassFail(score.run);

 this.setState({ score });
 this.setState({ count });
 this.setState({ pass });
 this.setState({ error });
  }

  render() {
    return (
      <div className="App">
        <Sidebar handleChange={this.handleChange} age={this.state.age} />
        <ResultsDial handleChange={this.handleChange} score={this.state.score} pass={this.state.pass} r="60" />
        <Main handleChange={this.handleChange} score={this.state.score} gender={this.state.gender} count={this.state.count} />
        <Footer />
        </div>
    );
  }
}

export default App;
