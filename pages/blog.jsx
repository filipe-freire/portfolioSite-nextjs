import styles from "../styles/Blog.module.scss";
import RainbowCard from "../components/RainbowCard/RainbowCard";

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      {/* blog cards container */}
      <section className={styles.blogCardContainer}>
        <RainbowCard title="Blog1" path="#" />
        <RainbowCard title="Blog2" path="#" />
        <RainbowCard title="Blog3" path="#" />
        <RainbowCard title="Blog4" path="#" />
        <RainbowCard title="Blog5" path="#" />
      </section>
    </div>
  );
};

export default Blog;
