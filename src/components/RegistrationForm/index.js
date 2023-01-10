// Write your JS code here
import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    hasSubmitted: false,
    firstname: '',
    lastname: '',
    hasfirstNameErr: false,
    haslastNameErr: false,
    leftoperand: '',
    rightoperand: '',
    operator: '',
    result: '',
  }

  onFirstNameChange = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onLastNameChange = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  validateFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        hasfirstNameErr: true,
      })
    } else {
      this.setState({
        hasfirstNameErr: false,
      })
    }
  }

  validateLastName = event => {
    if (event.target.value === '') {
      this.setState({
        haslastNameErr: true,
      })
    } else {
      this.setState({
        haslastNameErr: false,
      })
    }
  }

  submitFirstName = value => {
    if (value !== '') {
      this.setState({
        hasfirstNameErr: false,
      })
    } else {
      this.setState({
        hasfirstNameErr: true,
      })
    }
  }

  submitLastName = value => {
    if (value !== '') {
      this.setState({
        haslastNameErr: false,
      })
    } else {
      this.setState({
        haslastNameErr: true,
      })
    }
  }

  onRegistration = event => {
    const {firstname, lastname} = this.state
    event.preventDefault()
    this.submitFirstName(firstname)
    this.submitLastName(lastname)

    if (firstname !== '' && lastname !== '') {
      this.setState({
        hasSubmitted: true,
        firstname: '',
        lastname: '',
      })
    }
  }

  submitAnother = () => {
    this.setState({
      hasSubmitted: false,
      firstname: '',
      lastname: '',
    })
  }

  onLeftOperand = event => {
    this.setState({leftoperand: event.target.value})
  }

  onRightOperand = event => {
    this.setState({rightoperand: event.target.value})
  }

  onOperator = event => {
    this.setState({operator: event.target.value})
  }

  Oncalculation = () => {
    const {leftoperand, operator, rightoperand, result} = this.state

    if (operator === '+') {
      this.setState({result: parseInt(leftoperand) + parseInt(rightoperand)})
    }
    if (operator === '-') {
      this.setState({result: parseInt(leftoperand) - parseInt(rightoperand)})
    }
    if (operator === '*') {
      this.setState({result: parseInt(leftoperand) * parseInt(rightoperand)})
    }
    if (operator === '%') {
      this.setState({
        result: Math.round(parseInt(leftoperand) % parseInt(rightoperand)),
      })
    }
    return result
  }

  render() {
    const {
      hasSubmitted,
      hasfirstNameErr,
      haslastNameErr,
      firstname,
      lastname,
      leftoperand,
      rightoperand,
      operator,
      result,
    } = this.state

    return (
      <div className="registration-form-container">
        <>
          {!hasSubmitted && (
            <form className="form-container" onSubmit={this.onRegistration}>
              <h1 className="form-title">Spritle Login-page</h1>
              <div className="view-container">
                <label htmlFor="firstname" className="label">
                  Master
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="name-input-field input-label "
                  value={firstname}
                  onChange={this.onFirstNameChange}
                  onBlur={this.validateFirstName}
                />

                {hasfirstNameErr && (
                  <p className="error-message error-field">Required</p>
                )}
                <label htmlFor="lastname" className="label">
                  Student
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="name-input-field"
                  value={lastname}
                  onChange={this.onLastNameChange}
                  onBlur={this.validateLastName}
                />
                {haslastNameErr && (
                  <p className="error-message error-field">Required</p>
                )}
                <button type="submit" className="submit-button">
                  Login
                </button>
              </div>
            </form>
          )}
        </>
        {hasSubmitted && (
          <div className="form-control shadow">
            <form>
              <h1 className="header">Task Executor</h1>
              <label htmlFor="left" type="integer" className="left">
                Left Operand :
              </label>
              <input
                id="left"
                type="integer"
                onChange={this.onLeftOperand}
                value={leftoperand}
                className="inputvalue"
              />
              <label htmlFor="operator" type="integer" className="oper">
                {' '}
                Operator :
              </label>
              <input
                id="operator"
                type="integer"
                onChange={this.onOperator}
                value={operator}
                className="inputvalue"
              />

              <label htmlFor="right" type="integer" className="right">
                Right Operand :
              </label>
              <input
                id="right"
                type="integer"
                onChange={this.onRightOperand}
                value={rightoperand}
                className="inputvalue"
              />
              <button
                type="button"
                className="sub"
                onClick={this.Oncalculation}
              >
                Submit
              </button>
            </form>
            <p className="para">RESULT : {result}</p>
            <button
              type="submit"
              className="submit-button"
              onClick={this.submitAnother}
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Registration
