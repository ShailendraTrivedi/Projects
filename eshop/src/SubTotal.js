import React from 'react'
import "./SubTotal.css"
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
const SubTotal = () => {
    const[{basket},dispatch] = useStateValue();
    return (
        <>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                SubTotal ({basket.length} item): <strong>${value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                            <button>
                                Procced to Checkout.
                            </button>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    // value={1000 }
                    displayType={"text"}
                    thousandSeperator={true}
                />
            </div>

        </>
    )
}

export default SubTotal
