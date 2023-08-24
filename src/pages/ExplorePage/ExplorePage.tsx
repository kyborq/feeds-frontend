import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Empty } from "../../components/Empty/Empty";

export const ExplorePage = () => {
  return (
    <>
      <Card title="Все публикации">
        <input />
      </Card>
      <Empty text="Ю ноу блин, тут тоже ничего нет...">
        <Button icon="atSign" label="Эххх" />
        <Button icon="atSign" label="Эххх" />
        <Button icon="atSign" label="Эххх" />
      </Empty>
    </>
  );
};
