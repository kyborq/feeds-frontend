import { PostForm } from "../../components/Post/Form";
import { Button } from "../../components/Button/Button";
import { Empty } from "../../components/Empty/Empty";
import { Post } from "../../components/Post/Post";

export const HomePage = () => {
  return (
    <>
      <PostForm />
      <Post />
      <Empty text="Здесь твоя личная лента, однако сейчас она пустая. Вот что ты можешь сделать:">
        <Button label="Исследовать" icon="compass" primary />
      </Empty>
    </>
  );
};
