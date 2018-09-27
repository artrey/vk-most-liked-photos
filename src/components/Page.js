import React from 'react';
import PropTypes from 'prop-types';

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
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ));
    }
  };

  renderButtons = (start, end) => {
    const len = end - start + 1;
    return [...Array(len).keys()]
      .reverse()
      .map(i => i + start)
      .map(year => (
        <button key={year} className="btn" onClick={this.onBtnClick}>
          {year}
        </button>
      ));
  };

  render() {
    return (
      <div className="ib page">
        {this.renderButtons(2008, 2018)}
        <h3>{this.props.year} год</h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  getPhotos: PropTypes.func.isRequired,
};
