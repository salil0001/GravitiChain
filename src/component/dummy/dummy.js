import React, { Component } from 'react';
import './ercForm.css';
import { Consumer } from '../../context/index';
import './ercForm.css';
import { NavLink } from 'react-router-dom';
import '../../formRequiredStyle.css';
// import web3 from '../../Ethereum/web3';
// import factory from '../../Ethereum/factory';

class ERCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token_name: '',
      token_symbol: '',
      ico_start_date: '',
      ico_end_date: '',
      token_price: '',
      totalsupply: '',
      phase_name: '',
      phase_start_date: '',
      phase_end_date: '',
      phase_token_supply: '',
      bc: false,
      ercFormcontract: true
    };
  }
  render() {
    let {
      token_name,
      token_symbol,
      ico_start_date,
      ico_end_date,
      token_price,
      totalsupply,
      phase_name,
      phase_start_date,
      phase_end_date,
      phase_token_supply,
      bc
    } = this.state;

    const isEnabled =
      token_name.length > 0 &&
      token_symbol.length > 0 &&
      ico_start_date.length > 0 &&
      ico_end_date.length > 0 &&
      token_price.length > 0 &&
      totalsupply.length > 0 &&
      phase_name.length > 0 &&
      phase_start_date.length > 0 &&
      phase_end_date.length > 0 &&
      phase_token_supply.length > 0

    return (
      <div className="ercFormContainer">
        <div className="directoryContainer">
          <div className="col-xs-12 ercForm">
            <Consumer>
              {(context) => {
                const handleChange = (e) => {
                  this.setState({
                    [e.target.id]: e.target.value
                  });
                  console.log(e.target.id);
                  console.log(e.target.value);
                };
                const handleButton = () => {
                  console.log(this.state);
                  this.setState({ bc: true });
                  context.actions.ercdataRender(this.state);
                };
                const handleSubmit = (e) => {
                  console.log('Inside Subit');
                  console.log(this.state);
                  this.setState({ bc: true });
                  context.actions.ercdataRender(this.state);
                  // e.preventDefault();
                  // console.log('Handnnsjnjenfifneefiu');
                  // this.setState({
                  //   ercFormcontract: false
                  // });
                  // console.log('Handnnsjnjenfifneefiu');
                  // //context.actions.ercdataRender(this.state);
                  // console.log(this.state);
                };
                return (
                  <div>
                    <div>
                      <form className="simple-form" onSubmit={handleSubmit}>
                        <div>
                          <div className="form-row formSplit">
                            <div className="col-sm-6 splitInputForm">
                              <div className="form-group">
                                <label>Token Name</label>
                                <input
                                  required
                                  pattern=".{3,}"
                                  title="three or more characters"
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="text"
                                  id="token_name"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Token Symbol</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="text"
                                  id="token_symbol"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>ICO Start Date</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="date"
                                  id="ico_start_date"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>ICO End Date</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="date"
                                  id="ico_end_date"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Tokens per ETH</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="text"
                                  id="token_price"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Max Token supply</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="number"
                                  id="totalsupply"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 splitInputForm">
                              <div className="form-group">
                                <label>Phase Name</label>
                                <input
                                  required
                                  autoComplete="off"
                                  pattern=".{3,}"
                                  className="form-control inputBox"
                                  type="text"
                                  id="phase_name"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Start Date</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="date"
                                  id="phase_start_date"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>End Date</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="date"
                                  id="phase_end_date"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Phase Token supply</label>
                                <input
                                  required
                                  autoComplete="off"
                                  className="form-control inputBox"
                                  type="number"
                                  id="phase_token_supply"
                                  onChange={handleChange}
                                />
                              </div>

                              <div className="btnFloat">
                                <button
                                  type="reset"
                                  className="btn btn-danger globalRedButton"
                                >
                                  Reset Form
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-warning"
                                  onClick={handleButton}
                                >
                                  Confirm details
                                </button>
                                <NavLink to="/create-contract">
                                  <button
                                    disabled={!isEnabled}
                                    className="btn globalBlueButton"
                                  >
                                    Submit
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                );
              }}
            </Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default ERCForm;
