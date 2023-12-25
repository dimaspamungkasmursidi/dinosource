import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import AuthLayout from "../components/AuthLayout";

const Daftar = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Dont have an account?{" "}
        <Link
          to="/Register"
          className="font-bold text-blue-500 hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Daftar;
