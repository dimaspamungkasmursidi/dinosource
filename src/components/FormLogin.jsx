import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      {/* Email */}
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
      />
      {/* Password */}
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <Button variant="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
