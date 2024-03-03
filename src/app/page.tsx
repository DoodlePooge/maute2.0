import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h1">
        Site is currently being worked on, come back later.
      </Typography>
      <Image
        src="/cat-keyboard.gif"
        alt="Cat typing"
        width={200}
        height={200}
        priority
      />
    </main>
  );
}
