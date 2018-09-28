import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { getRangeYears, getCurrentYear } from '../util/date';

class PageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.years = getRangeYears(2008, getCurrentYear()).reverse();
  }

  render() {
    const { page, getPhotos } = this.props;
    return (
      <Page
        years={this.years}
        photos={page.photos}
        year={page.year}
        isFetching={page.isFetching}
        error={page.error}
        getPhotos={getPhotos}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
