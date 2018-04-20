import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

// layouts
import IndexContent from '~/app/layouts/index-content';

// components
import Header from '~/app/components/header/header';
import Menu from '~/app/components/menu/main-menu';
import Footer from '~/app/components/footer/footer';

// actions
import {getUser} from '~/app/actions/user-actions';
import {getSolutions} from '~/app/actions/solution-actions';

class Index extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isNeedBurger: false
    };

    this.isNeedBurger = this.isNeedBurger.bind(this);
  }

  isNeedBurger() {
    if (window.innerWidth <= 650) this.setState({isNeedBurger: true});
    if (this.state.isNeedBurger && window.innerWidth > 650) this.setState({isNeedBurger: false});
  }

  componentDidMount() {
    this.props.dispatch(getUser());
    this.isNeedBurger();
    window.addEventListener('resize', this.isNeedBurger);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.isNeedBurger);
  }

  render() {
    let header, menu;
    if(this.state.isNeedBurger){
      header = <Header user={this.props.user} menu={<Menu path={window.location.pathname} burger/>}/>;
      menu = '';
    }else{
      header = <Header user={this.props.user}/>;
      menu = <Menu path={window.location.pathname}/>;
    }

    return (
      <div className="container-fluid">
        {header}
        {menu}
        <IndexContent/>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(Index));