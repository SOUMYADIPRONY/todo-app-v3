import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  return (
    <>
      <p className={styles.welcome} style={{ color: "blue" }}>
        No tasks! Enjoy your day
      </p>
    </>
  );
};

export default WelcomeMessage;
