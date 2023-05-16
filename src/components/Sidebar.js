import React from 'react';
import './Sidebar.scss';

class Sidebar extends React.Component {

    render() {
        return(
            <aside className="Sidebar">
                <fieldset>
                    <legend>MOSHA</legend>
                    <div className="control">
                        <div className="age-group">
                            <input type='radio' id='sufsk_age_1' value="18-26"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '18-26'} />
                            <label htmlFor="sufsk_age_1">18-26</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='sufsk_age_2' value="27-36"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '27-36'} />
                            <label htmlFor="sufsk_age_2">27-36</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='sufsk_age_3' value="37-45"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '37-45'} />
                            <label htmlFor="sufsk_age_3">37-45</label>
                        </div>
                        <div className="age-group">
                            <input type='radio' id='sufsk_age_4' value="46-55"
                                onChange={this.props.handleChange}
                                checked={this.props.age === '46-55'} />
                            <label htmlFor="sufsk_age_4">46-55</label>
                        </div>
                    </div>
                </fieldset>
            </aside>
        )
    }
}

export default Sidebar;
