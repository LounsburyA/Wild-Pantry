
import userReducer from './user.reducer'
import edibleReducer from './edit.reducer'

describe('USER REDUCER TEST', () => {
    it('should have empty object initial state', () => {
        let action = {};
        let retunredState = userReducer(undefined, action);
        expect(retunredState).toEqual({});
    })
})


