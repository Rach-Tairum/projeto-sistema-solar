import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    const nomePlaneta = `Planeta ${planetName}`;

    return (

      <div data-testid="planet-card" className="planet">
        <img src={ planetImage } alt={ nomePlaneta } />
        <p data-testid="planet-name">{planetName}</p>
      </div>

    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
