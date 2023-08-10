import { Form } from "../../../components/Form/Form";
import { Input } from "../../../components/Form/components/Input/Input";
import { Button } from "../../../components";

import LogoIcon from "../../../assets/logo.svg";

export const LoginForm = () => {
  return (
    <Form width={300}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LogoIcon />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Input icon="atSign" placeholder="Логин" />
        <Input icon="key" placeholder="Пароль" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <Button label="Войти" primary />
        <Button label="Регистрация" />
      </div>
    </Form>
  );
};
