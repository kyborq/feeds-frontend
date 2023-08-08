import Logo from "./assets/logo.svg";

import styles from "./App.module.css";
import { Button, PostCard } from "./components";
import { Avatar } from "./components/Avatar/Avatar";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <Logo />
          <h1 className={styles.Title}>Feeds</h1>
        </div>

        <div className={styles.Navigation}>
          <Button compact icon="search" transparent />
          <Button label="Создать" primary />
          <Avatar avatar="https://sun9-79.userapi.com/impf/c844321/v844321699/14984/MZk-JQLfsS8.jpg?size=500x517&quality=96&sign=c6c9ff0d9122f1bb98f04d1509a3b2b8&type=album" />
        </div>
      </div>

      <div className={styles.Content}>
        <PostCard
          post={{
            author: {
              avatar: "",
              login: "",
              name: "",
            },
            picture:
              "https://sun9-52.userapi.com/impg/iD095IxxAZUKAFe_3YkWq48MF8wYIs4TyMFb-g/O0J3S-w1AQk.jpg?size=1144x710&quality=95&sign=7d769bc806687d1f995c0f091d223ec3&type=album",
            meta: {
              created: "12356",
              rating: 1000,
            },
          }}
        />
        <PostCard
          post={{
            author: {
              avatar:
                "https://sun9-79.userapi.com/impf/c844321/v844321699/14984/MZk-JQLfsS8.jpg?size=500x517&quality=96&sign=c6c9ff0d9122f1bb98f04d1509a3b2b8&type=album",
              login: "@johndoe",
              name: "John Doe",
            },
            picture:
              "https://sun9-13.userapi.com/impg/Q1lXYrj_RiuMe23XJhi5w8TVNQEqr2W645Wvgg/kq2cAIT32T8.jpg?size=564x564&quality=96&sign=5b4773166cf19944079f929622784676&type=album",
            meta: {
              created: "12356",
              rating: 1000,
            },
          }}
        />
        <PostCard
          post={{
            author: {
              avatar: "",
              login: "",
              name: "",
            },
            picture:
              "https://sun9-27.userapi.com/impg/0Up4RATsXeXnc9UYBBcOsAOyJOoezJK59tVzMg/LC17OOWyuuM.jpg?size=1038x1280&quality=96&sign=68fd661fe5025409cc51432568348ea8&type=album",
            meta: {
              created: "12356",
              rating: 1000,
            },
          }}
        />
        <Button label="Загрузить еще" />
      </div>
    </div>
  );
}

export default App;
