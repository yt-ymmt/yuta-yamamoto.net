import React from 'react';
import { connect } from 'react-redux';
import AboutTemplate from '../src/components/templates/AboutTemplate/index';

function mapStateToProps(state) {
    return {
        naviItems: state.naviItems
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

class AboutPage extends React.Component {
    render() {
        return <AboutTemplate naviItems={this.props.naviItems} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
