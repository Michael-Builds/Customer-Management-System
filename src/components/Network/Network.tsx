import styles from "./page.module.css";

const NoInternetConnection = () => {
  return (
    <div className={styles.noInternet}>
      <div className={styles.container}>
        <div className={styles.icon}>⚠️</div>
        <div className={styles.errorMessage}>No Internet Connection</div>
        <p>Please check your connection and try again.</p>
      </div>
    </div>
  );
};

export default NoInternetConnection;
