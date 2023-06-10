import React from 'react';
import './Main.scss';

class Main extends React.Component {

render() {
    console.log(this.props);
        return(
        <main className="Main">
            <div className="container">
                <fieldset className="field">
                    <legend className="label">GJINIA</legend>
                    <div className="gender-control" data-gender={this.props.gender}>
                        <div className="active-gender-slider"></div>
                        <div className="gender-group">
                            <input type='radio' id='sufsk_gender_1' value="male"
                                onChange={this.props.handleChange}
                                checked={this.props.gender === 'male'} />
                            <label htmlFor="sufsk_gender_1">Mashkull</label>
                        </div>
                        <div className="gender-group">
                            <input type='radio' id='sufsk_gender_2' value="female"
                                onChange={this.props.handleChange}
                                checked={this.props.gender === 'female'} />
                            <label htmlFor="sufsk_gender_2">Femër</label>
                        </div>
                    </div>
                </fieldset>
                <div className="field">
                    <label className="label" htmlFor="sufsk_ssh">SPRINT ME SHTRIRJE </label>
                    <div className="control">
                        <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="sufsk_ssh" onChange={this.props.handleChange} placeholder="0" />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="sufsk_po">POMPA </label>
                    <div className="control">
                        <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="sufsk_po" onChange={this.props.handleChange} placeholder="0" />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="sufsk_kl">KËRCIM SË LARGU </label>
                    <div className="control">
                        <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="sufsk_kl" onChange={this.props.handleChange} placeholder="0" />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="sufsk_np">NGRITJA E PESHËS </label>
                    <div className="control">
                        <input className="input" type="number" pattern="[0-9]*" min="0" inputMode="numeric" id="sufsk_np" onChange={this.props.handleChange} placeholder="0" />
                </div>
               </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="sufsk_min">MBËSHTETJE MBI PARAKRAHË</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="99" inputMode="numeric" id="sufsk_min" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="sufsk_sec">&nbsp;</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="59" inputMode="numeric" id="sufsk_sec" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="sufsk_min">2-km VRAPIM</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="99" inputMode="numeric" id="sufsk_min" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label" htmlFor="sufsk_sec">&nbsp;</label>
                                <div className="control">
                                    <input className="input" type="number" pattern="[0-9]*" min="0" max="59" inputMode="numeric" id="sufsk_sec" onChange={this.props.handleChange} placeholder="00" />
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
              </div>
              </div>
              </div>
              </div>
        </main>
        );
    }
}

export default Main;
