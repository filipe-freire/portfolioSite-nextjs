import Link from "next/link";
import styles from "./RainbowCard.module.scss";

type cardProps = { title: string; path: string };

const RainbowCard = ({ title, path }: cardProps) => {
  return (
    <div className={styles.cardRainbow}>
      <Link href={path || "#"}>
        <a className={styles.card5}>
          <h3>{title || "This is a card"}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            non?
          </p>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>▶</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RainbowCard;
