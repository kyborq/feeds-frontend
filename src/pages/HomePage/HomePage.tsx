import { PostForm } from "../../components/Post/Form";
import { Button } from "../../components/Button/Button";
import { Empty } from "../../components/Empty/Empty";
import { Post } from "../../components/Post/Post";

export const HomePage = () => {
  return (
    <>
      <PostForm />
      <Post
        content="Lorem ipsum hello world"
        image="https://sun1-96.userapi.com/impg/5Kpe2ddz038Tl0S8_mxdUaLztVze1yUu9jflNA/C3uggc9NtKo.jpg?size=536x540&quality=95&sign=379279db89992047520b2247996b4082&c_uniq_tag=cxY4a-l9pamOgF0wLLYGGk3Djn1bc66P--ATiWouPqE&type=album"
        votes={1024}
        author={{ avatar: "", name: "" }}
        date="24.08.2023 16:06"
        yourVote={1}
      />
      <Empty text="Похоже, публикации закончились. Вот что ты можешь с этим поделать:">
        <Button label="Исследовать" icon="compass" primary />
        <Button label="Ничего" icon="compass" />
      </Empty>
    </>
  );
};
