import React from "react";
import { connect } from "react-redux";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: props.formulario.nombre,
      apellidos: props.formulario.apellidos,
      errors: {
        nombre: false,
        apellidos: false
      },
      aficiones: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    this.setState({
      aficiones: [...this.props.aficiones]
    });
  }

  handleChange(e) {
    const {
      target: { value, name }
    } = e;

    this.setState({
      [name]: value
    });
  }
  handleCheckbox(e) {
    const {
      target: { checked, id }
    } = e;

    var aficiones = [...this.state.aficiones];
    var indice = aficiones.findIndex(elmento => {
      return elmento.nombre === id;
    });

    aficiones[indice].checked = checked;

    this.setState(aficiones);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { nombre, apellidos } = this.state;
    // If firstName or lastName is missing then we update the
    // local state with true
    this.setState({
      errors: {
        nombre: nombre === "",
        apellidos: apellidos === ""
      }
    });
  }

  render() {
    const { nombre, apellidos, aficiones } = this.state;

    return (
      <div className="main">
        <form onSubmit={this.handleOnSubmit}>
          <h1>Formulario</h1>
          <section>
            <input
              type="text"
              name="nombre"
              placeholder="Escribir nombre"
              value={nombre}
              onChange={this.handleChange}
            />
            {this.state.errors.nombre && (
              <div className="errorMessage">Required field</div>
            )}
            <input
              type="text"
              name="apellidos"
              placeholder="Escribir apellidos"
              value={apellidos}
              onChange={this.handleChange}
            />
            {this.state.errors.apellidos && (
              <div className="errorMessage">Required field</div>
            )}
          </section>
          <section>
            <h3>Aficiones</h3>
            {aficiones.map((e, index) => {
              const { nombre, checked } = e;
              return (
                <label key={index} htmlFor={nombre}>
                  {nombre}
                  <input
                    key={index}
                    id={nombre}
                    type="checkbox"
                    checked={checked}
                    value={nombre}
                    onChange={this.handleCheckbox}
                  />
                </label>
              );
            })}
          </section>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ formulario }) {
  return {
    formulario
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulario);
