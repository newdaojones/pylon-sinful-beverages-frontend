import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { Bp1Information } from "./info";
import { Bp1Payment } from "./payment";
import { Bp1Transaction } from "./transaction";

export const Bp1Request = () => {
  const {
    setRequestId,
    checkout,
  } = useCheckout()
  const navigate = useNavigate()
  const { checkoutRequestId } = useParams();
  const location = useLocation();
  useEffect(() => {
    setRequestId(checkoutRequestId)
  }, [checkoutRequestId, setRequestId])

  useEffect(() => {
    if (checkout && !location?.pathname?.includes('/transaction')) {
      setTimeout(() => {
        navigate('./transaction')
      }, 500)
    }
  }, [checkout, navigate, location])

  return <Routes>
    <Route path="/info" element={<Bp1Information />} />
    <Route path="/payment" element={<Bp1Payment />} />
    <Route path="/transaction" element={<Bp1Transaction />} />
    <Route
      path="/*"
      element={<Navigate to={"./info"} replace />}
    />
  </Routes>
}