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
    componentDidMount() {
      this.props.dispatch(getUser());
    }

    render() {
        return (
            <div className="container-fluid">
                <Header user={this.props.user}/>
                <Menu path={window.location.pathname}/>
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