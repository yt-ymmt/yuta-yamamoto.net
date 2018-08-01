import React from 'react';
import { connect } from 'react-redux';
import IndexTemplate from '../src/components/templates/IndexTemplate';

function mapStateToProps(state) {
    return {
        naviItems: state.naviItems,
        snsItems: state.snsItems
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

class IndexPage extends React.Component {
    render() {
        return (
            <IndexTemplate
                naviItems={this.props.naviItems}
                snsItems={this.props.snsItems}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
