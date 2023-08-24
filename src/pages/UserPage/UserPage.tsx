// import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Empty } from "../../components/Empty/Empty";
import { ProfileHeader } from "./components/ProfileHeader";

export const UserPage = () => {
  // const { login } = useParams();

  const userNotFound = true;

  return (
    <>
      <ProfileHeader />

      {userNotFound && (
        <Empty text="Страница удалена либо ещё не создана">
          <Button icon="home" label="На главную" />
          <Button icon="user" label="Мой профиль" primary />
        </Empty>
      )}
    </>
  );
};
