import React from 'react';
import { connect } from 'react-redux';
import AboutTemplate from '../src/components/templates/AboutTemplate/index';

function mapStateToProps(state) {
    return {
        naviItems: state.naviItems,
        profileItems: state.profileItems
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

class AboutPage extends React.Component {
    render() {
        return (
            <AboutTemplate
                naviItems={this.props.naviItems}
                profileItems={this.props.profileItems}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
