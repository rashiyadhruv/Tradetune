import styles from "./Tags.module.sass";
import ToolContext from "context/toolContext";
import { useContext } from "react";
type TagsProps = {
  tags: any;
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag: any, index: number) => (
        <div className={styles.tag} key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
