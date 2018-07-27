import React from 'react';
import { connect } from 'react-redux';
import AboutTemplate from '../src/components/templates/AboutTemplate/index';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {};
}

class AboutPage extends React.Component {
    render() {
        return <AboutTemplate />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
