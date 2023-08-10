import { Form } from "../../../components/Form/Form";
import { Input } from "../../../components/Form/components/Input/Input";
import { Button } from "../../../components";

import LogoIcon from "../../../assets/logo.svg";

export const RegisterForm = () => {
  return (
    <Form width={300}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LogoIcon />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Input icon="user" placeholder="Имя" />
        <Input icon="atSign" placeholder="Логин" />
        <Input icon="key" placeholder="Пароль" />
        <Input icon="key" placeholder="Повторите пароль" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <Button label="Войти" />
        <Button label="Регистрация" primary />
      </div>
    </Form>
  );
};
