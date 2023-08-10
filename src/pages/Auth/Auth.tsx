import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

export const Auth = () => {
  const loginMode = false;

  if (loginMode) {
    return <LoginForm />;
  }

  return <RegisterForm />;
};
