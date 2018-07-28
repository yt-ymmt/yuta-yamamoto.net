const initialState = [
    {
        url: 'https://twitter.com/YtYmmt',
        iconCategory: 'fab',
        iconName: 'twitter',
        name: 'Twitter'
    },
    {
        url: 'https://note.mu/ytymmt',
        iconCategory: 'fas',
        iconName: 'file',
        name: 'note'
    },
    {
        url: 'https://github.com/yt-ymmt',
        iconCategory: 'fab',
        iconName: 'github',
        name: 'Github'
    },
    {
        url: 'http://memolu.hatenablog.com/',
        iconCategory: 'fas',
        iconName: 'pencil-alt',
        name: 'Hatena Blog'
    }
];

function snsItems(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default snsItems;
