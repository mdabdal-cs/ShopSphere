import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItem, backendUrl } = useContext(ShopContext);
  const [searchPharams, setSearchPharams] = useSearchParams();

  const success = searchPharams.get("success");
  const orderId = searchPharams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } },
      );

      if (response.data.success) {
        setCartItem({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return <div></div>;
};

export default Verify;
