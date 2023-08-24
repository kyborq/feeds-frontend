import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Empty } from "../../components/Empty/Empty";

export const EventsPage = () => {
  return (
    <>
      <Card title="Все уведомления" />
      <Empty text="Ю ноу блин, тут тоже ничего нет...">
        <Button icon="atSign" label="Эххх" />
        <Button icon="atSign" label="Эххх" />
        <Button icon="atSign" label="Эххх" />
      </Empty>
    </>
  );
};
