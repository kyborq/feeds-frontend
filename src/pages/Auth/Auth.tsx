import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Form/components/Input/Input";

export const Auth = () => {
  return (
    <Form>
      <Input icon="bookmark" placeholder="Логин" />
      <Input icon="bookmark" placeholder="Пароль" />
    </Form>
  );
};
