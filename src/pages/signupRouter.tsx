import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { Bp1KYC } from "./kyc";
import { Bp1Signup } from "./singup";

export const Bp1SignupRouter = () => {
  const { user } = useCheckout()

  return <Routes>
    <Route path="/*" element={user ? <Navigate to={"../kyc"} replace /> : <Bp1Signup />} />
    <Route path="/kyc" element={!user ? <Navigate to={"../"} replace /> : <Bp1KYC />} />
  </Routes>
}