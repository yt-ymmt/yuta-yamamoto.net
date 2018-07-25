import React from 'react';
import { getStore } from './store';

export class StaticPage extends React.Component {
    static async getInitialProps({ req }) {
        const isServer = !!req;
        const store = getStore(undefined, isServer);
        const state = store.getState();
        return { state, isServer };
    }

    constructor(props) {
        super(props);
        this.store = getStore(props.initialState, props.isServer);
    }

    render() {
        return null;
    }
}
