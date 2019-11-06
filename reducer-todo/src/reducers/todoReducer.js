export const initialState = {
    todos: [
        {
            title: 'Learn about reducers',
            completed: false,
            id: 3892987589
    },
        {
            title: 'Learn Redux',
            completed: false,
            id: 3892987590
        }
    ]
}


export const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};