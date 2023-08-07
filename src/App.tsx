import Logo from "./assets/logo.svg";

import styles from "./App.module.css";
import { Button, Post } from "./components";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <Logo />
          <h1 className={styles.Title}>Feeds</h1>
        </div>

        <div className={styles.Navigation}>
          <Button label="Присоединиться" primary />
        </div>
      </div>

      <Post
        author="Киборг Убийца"
        image="https://sun9-19.userapi.com/impg/jECIcm6UXGL4DmiLwpG-j4-TQ8zAdz2p7En-hg/otp5t7qWZLo.jpg?size=553x528&quality=95&sign=503a9805d9dcd4c48a0351022ec59c39&type=album"
        timeStamp="6 августа, 8 часов назад"
      />
    </div>
  );
}

export default App;
