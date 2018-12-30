import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { aumentar100, cambiarValor } from "../acciones/baseActions.js";

class Temperatura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: 0
    };

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.handleChange = this.handleChange.bind(this);
  }

  celsiusToFanhrenheit(value) {
    //(0 °C × 9 / 5) + 32
    return (value * 9) / 5 + 32;
  }
  componentWillMount() {}

  handleChange(e) {
    const {
      target: { value }
    } = e;
    var { fahrenheit } = this.state;
    fahrenheit = this.celsiusToFanhrenheit(value);

    const { cambiarValor } = this.props;
    this.setState({ fahrenheit });
    cambiarValor(Number(value) || 0);
  }

  render() {
    const { fahrenheit } = this.state;
    const { aumentar100, celsius } = this.props;

    return (
      <div className="main">
        <h1>Calcular temperatura</h1>
        <section>
          <input
            type="text"
            name="celsius"
            placeholder="21º C"
            value={celsius}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="fahrenheit"
            placeholder="21º F"
            value={fahrenheit}
            onChange={event => event.preventDefault()}
          />
          <input type="button" value="Aumentar 100" onClick={aumentar100} />
          <h4>Referecia imput</h4>
          <input type="text" ref={this.setTextInputRef} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    celsius: state.temperatura.celsius
  };
}

const mapDispatchToProps = dispatch => ({
  aumentar100: () => dispatch(aumentar100()),
  cambiarValor: valor => dispatch(cambiarValor(valor))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Temperatura);
