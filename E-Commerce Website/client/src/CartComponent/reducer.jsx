const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
      return { ...state, item: [] };
    }
  
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    }
  
    if (action.type === "INCREMENT") {
      //   we need to find out which item is clicked
      let updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      //   we need to find out which item is clicked
      let updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, item: updatedCart };
    }

    if(action.type==="GET_TOTAL"){
      let {totalItems,totalAmount}=state.item.reduce((accum,curval)=>{
        let {price,quantity}=curval;
        const a=price.replaceAll(",","");
  
        const b=a.replaceAll("₹","");
        console.log("total:",b);
        let updateamount=parseInt(b)*quantity;
        accum.totalAmount+=updateamount;
        accum.totalItems+=quantity;
        return accum;
      },{
        totalItems:0,
        totalAmount:0
      });
      return {...state,totalItems,totalAmount}
    }
  
    return state;
  };
  
  export default reducer;