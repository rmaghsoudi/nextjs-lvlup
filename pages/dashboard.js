import Head from "next/head";
import LvlupSection from "../components/dashboard/LvlupSection";
import EntryList from "../components/dashboard/EntryList";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LvlupSection></LvlupSection>
      <EntryList></EntryList>
    </div>
  );
}
