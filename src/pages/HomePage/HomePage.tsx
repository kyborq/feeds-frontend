import { Button } from "../../components/Button/Button";
import { Empty } from "../../components/Empty/Empty";
import { PostForm } from "../../components/Post/Form";
import { Recomendations } from "./components/Recomendations/Recomendations";

export const HomePage = () => {
  return (
    <>
      <PostForm />
      <Recomendations />
      <Empty text="Здесь твоя личная лента, однако сейчас она пустая. Вот что ты можешь сделать:">
        <Button label="Исследовать" icon="compass" primary />
      </Empty>
    </>
  );
};
