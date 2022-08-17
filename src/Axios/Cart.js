import myContext from "../Components/Context/myContext";
import { useContext } from "react";
import "../Css/Cartmodule.css"
import { Link, Switch, Route } from "react-router-dom"
import { useTranslation } from "react-i18next";
import "../Translation/i18n";
import Pricing from "../Components/Pricing/Pricing";
import Button from "../Components/TButton/Button"

// code starts, creating a functional component in this cart page for getting the data what user wanted to buy.

const Cart = () => {

  // t is the const for transalting the language and here i18n is being used.
  const { t } = useTranslation();

  // using useContext for getting the data from coin page 
  const cartContent = useContext(myContext)
  // console.log("img12", cartContent.count)

  //using deleteProd for deleting the product from cart if user dont wish to buy it.
  const deleteProd = () => {

  }

  // declaring initial value and doing the sum for cart's total which will be the final price that user have to pay.


  const initialValue = 0;
  const sumWithInitial = cartContent.count.reduce(
    (previousValue, currentValue) => previousValue + currentValue.current_price,
    initialValue
  );
  console.log(sumWithInitial);
  return (
    <>
      {/* mapping cartContent that is using contetx api for data */}
      {cartContent.count.map((cartItem) => {
        return (
          <>
            {/* showing the data on the browser(UI) */}
            <div className="cart-container">
              <h1 className="cart-symbol"> {cartItem.symbol}</h1>
              <img className="cart-img" src={cartItem.image} alt="crypto" />
              <h1 className="cart-name">{t("Name")} = {cartItem.name}</h1>
              <h1 className="cart-price">{"₹ " + cartItem.current_price}</h1>
            </div>
          </>
        )
      })}


      {/* this is the total for cart */}

      <h1 style={{ marginLeft: "45.6%" }}>{t("Cart_Total")}

        <br />

        <p style={{
          border: "5px solid greenYellow",
          width: "220px", marginLeft: "-2%",
          color: "#BDBDBD"
        }}>

          ₹
          {" " + sumWithInitial} </p>
      </h1>

      <div>

        {/* using i18n by using t variable */}

        <Link to="/paymentPage">
          <button style={{ marginLeft: "43%", width: "140px" }} className="cart-btn">{t("Buy_Now")}</button>
        </Link>

        {/*button for deleting the product from the cart  */}

        <button style={{ width: "140px" }} onClick={(e) => console.log(e)} className="cart-cross">{t("Delete_Product")}</button>

      </div>

      <Switch>

        <Route path="/paymentPage">
          <Pricing />
        </Route>

      </Switch>
      <Button />
    </>
  )

}

// exporting Cart to NavigationRoute
export default Cart

// code ends