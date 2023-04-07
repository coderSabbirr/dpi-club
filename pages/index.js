import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DPI Mechanical Club</title>
        <meta
          name="description"
          content="Dhaka Polytechnic Institute Mechanical Department"
        />
        <meta name="description" content="Dhaka Polytechnic Institute" />
        <meta
          name="description"
          content="Dhaka Polytechnic Institute Mechanical Club"
        />
        <meta
          name="description"
          content="Dhaka Polytechnic Institute Mechanical "
        />
        <meta name="description" content="DPI Mechanical Club " />
        <meta
          name="Dhaka Polytechnic Institute"
          content="Dhaka Polytechnic Institute "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <div style={{ textAlign: "center" }}>
            <h2 className="under">We're Comming Soon ☺️</h2>
            <p>
              For any quiries please contact{" "}
              <a className="contect" href="mailto:sabbirnahid5817@gmail.com">
                sabbirnahid5817@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
