import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { SinfulInformation } from "./info";
import { SinfulPayment } from "./payment";
import { SinfulTransaction } from "./transaction";

export const SinfulRequest = () => {
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
    <Route path="/info" element={<SinfulInformation />} />
    <Route path="/payment" element={<SinfulPayment />} />
    <Route path="/transaction" element={<SinfulTransaction />} />
    <Route
      path="/*"
      element={<Navigate to={"./info"} replace />}
    />
  </Routes>
}