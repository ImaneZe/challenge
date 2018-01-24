import React from "react";
import ShopList from "../components/ShopList";

import * as actions from "../reducer/actions";

import {connect} from "react-redux";

class ListShops extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    
  }
  componentWillMount() {
    if (this.props.shops) {
      this.setState({
        shops: this.props.shops
      });
    }
  }
  likeShop(id) {
    this.props.like(id);
  }

  dislikeShop(id) {
    this.props.dislike(id);
  }



  
  
  render() {
    return (
      <ShopList
        shops={this.props.shops}
        dislike={this.dislikeShop.bind(this)}
        like={this.likeShop.bind(this)}
        />
    );
  }
}


const mapStateToProps = (state) => {
    return {
        shops: state.shops.data
    };
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(ListShops);
