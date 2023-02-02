export const initialState = false;


export const reducer=(state,action)=>{
    if(action.type ==='USER'){
        return action.payload;
    }
    return state;
} 


export const InitialState={
    data:""
};

export const cartreducer=(cartData,action)=>{
    if(action.type === 'CART'){
        return action.payload;
    }
    return cartData;
};