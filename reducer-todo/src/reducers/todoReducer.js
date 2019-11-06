const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
    },
        {
            item: 'Learn Redux',
            completed: false,
            id: 3892987590
        }
    ]
}


const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};