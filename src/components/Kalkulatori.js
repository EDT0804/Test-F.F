import React from 'react';
import Sidebar from '../components/Sidebar'; // Update the path accordingly
import Main from '../components/Main'; // Update the path accordingly
import Footer from '../components/Footer'; // Update the path accordingly
import ResultsDial from '../components/ResultsDial'; // Update the path accordingly
import standards from '../standards.json';
import { getPassFail, getNextLowestKey, getNextHighestKey } from '../utils/Helpers'; // Update the path accordingly

class Kalkulatori extends React.Component {
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
        mi: '00',
        se: '00',
        min: '00',
        sec: '00'
      },
      score: {
        ssh: '0',
        po: '0',
        kl: '0',
        np: '0',
        plank: '0',
        run: '0',
        total: '0'
      },
      pass: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        plank: false,
        run: false
      },
      error: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        plank: false,
        run: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id.replace('sufsk_', '');

    let { gender, age, score, count, pass, error } = this.state;

    if (id.startsWith('gender_')) {
      gender = value;
    } else if (id.startsWith('age_')) {
      age = value;
    } else if (id === 'ssh') {
      count.ssh = value;
    } else if (id === 'po') {
      count.po = value;
    } else if (id === 'kl') {
      count.kl = value;
    } else if (id === 'np') {
      count.np = value;
    } else if (id === 'mi') {
      count.mi = value.padStart(2, '0');
    } else if (id === 'se') {
      count.se = value.padStart(2, '0');
    } else if (id === 'min') {
      count.min = value.padStart(2, '0');
    } else if (id === 'sec') {
      count.sec = value.padStart(2, '0');
    } else {
      alert('Something went wrong.');
      return;
    }

    const sshArray = Object.keys(standards[gender]['sprint me shtrirje']);
    const poArray = Object.keys(standards[gender]['pompa']);
    const klArray = Object.keys(standards[gender]['kërcim së largu']);
    const npArray = Object.keys(standards[gender]['ngritja e peshës']);
    const plankArray = Object.keys(standards[gender]['plank']);
    const timeArray = Object.keys(standards[gender]['run']);

    const sshFinal = getNextLowestKey(sshArray, count.ssh);
    const poFinal = getNextLowestKey(poArray, count.po);
    const klFinal = getNextLowestKey(klArray, count.kl);
    const npFinal = getNextLowestKey(npArray, count.np);

    score.ssh = standards[gender]['sprint me shtrirje'][sshFinal][0][age];
    score.po = standards[gender]['pompa'][poFinal][0][age];
    score.kl = standards[gender]['kërcim së largu'][klFinal][0][age];
    score.np = standards[gender]['ngritja e peshës'][npFinal][0][age];

    if (count.mi + count.se === '0000') {
      score.plank = 0;
    } else {
      const plankFinal = getNextHighestKey(plankArray, count.mi + count.se);
      score.plank = standards[gender]['plank'][plankFinal][0][age];
    }

    if (count.min + count.sec === '0000') {
      score.run = 0;
    } else {
      const runFinal = getNextHighestKey(timeArray, count.min + count.sec);
      score.run = standards[gender]['run'][runFinal][0][age];
    }

    score.total = parseInt(score.ssh) + parseInt(score.po) + parseInt(score.kl) + parseInt(score.np) + parseInt(score.plank) + parseInt(score.run);

    pass.ssh = getPassFail(score.ssh);
    pass.po = getPassFail(score.po);
    pass.kl = getPassFail(score.kl);
    pass.np = getPassFail(score.np);
    pass.plank = getPassFail(score.plank);
    pass.run = getPassFail(score.run);

    this.setState({ gender, age, score, count, pass, error });
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

export default Kalkulatori;
