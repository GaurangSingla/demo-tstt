import { LOGIN ,getApi} from "./actiontype";

export const login = (payload) => ({
    type:LOGIN,
    payload:payload
});
export const api =(cardData)=>({
    type:getApi,
    cardData:cardData
    
})
