import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    const ano = `Ano de lançamento: ${year}`;
    const local = `Desenvolvido por: ${country}`;
    const destino = `Destino: ${destination}`;

    return (
      <div data-testid="mission-card" className="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <p data-testid="mission-year">{ano}</p>
        <p data-testid="mission-country">{local}</p>
        <p data-testid="mission-destination">{destino}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
