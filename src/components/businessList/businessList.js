import React from 'react';
import './businessList.css';

import Business from '../business/business.js';
import '../business/business.css';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      {this.props.businesses.map(business => {
        return <Business business={business} key={business.id} />;
      })}
      </div>
    );
  }
}

export default BusinessList;