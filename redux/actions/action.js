import { LOGIN } from "./actiontype";

export const login = (payload) => ({
    type:LOGIN,
    payload:payload
});
// export const logout = () => ({
//     type:LOGOUT,
// });