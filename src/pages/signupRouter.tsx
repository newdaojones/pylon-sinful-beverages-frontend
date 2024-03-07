import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { SinfulKYC } from "./kyc";
import { SinfulSignup } from "./singup";

export const SinfulSignupRouter = () => {
  const { user } = useCheckout()

  return <Routes>
    <Route path="/*" element={user ? <Navigate to={"../kyc"} replace /> : <SinfulSignup />} />
    <Route path="/kyc" element={!user ? <Navigate to={"../"} replace /> : <SinfulKYC />} />
  </Routes>
}