const initialState = [
    {
        term: 'Name',
        description: 'Yuta Yamamoto'
    },
    {
        term: 'Birthday',
        description: 'March, 12th, 1985'
    },
    {
        term: 'Work',
        description: '株式会社 Kaizen Platform'
    },
    {
        term: 'Location',
        description: 'Tokyo, Japan'
    }
];

function profileItems(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default profileItems;
