import React from 'react';
import { connect } from 'react-redux';
import IndexTemplate from '../src/components/templates/IndexTemplate';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {};
}

class IndexPage extends React.Component {
    render() {
        return <IndexTemplate />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
