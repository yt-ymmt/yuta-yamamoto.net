const initialState = [
    {
        title: 'TOP',
        href: '/'
    },
    {
        title: 'ABOUT',
        href: '/about'
    }
];

function naviItems(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default naviItems;
