import React from 'react';
import PropTypes from 'prop-types';
import PhotoManager from './PhotoManager';

export class Page extends React.Component {
  onBtnClick = e => {
    this.props.getPhotos(+e.currentTarget.innerText);
  };

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (error) {
      return <p className="error">Произошла ошибка... :( [{error}]</p>;
    } else if (isFetching) {
      return <p>Загрузка...</p>;
    } else {
      return <PhotoManager photos={photos} />;
    }
  };

  renderButtons = () => {
    const { years } = this.props;

    return years.map(year => (
      <button key={year} className="btn" onClick={this.onBtnClick}>
        {year}
      </button>
    ));
  };

  render() {
    return (
      <div className="ib page">
        {this.renderButtons()}
        <h3>{this.props.year} год</h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  years: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  getPhotos: PropTypes.func.isRequired,
};
