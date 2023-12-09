import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Description.module.sass";
import Tags from "./Tags";
import Icon from "../Icon";
import Field from "../Field";
import ToolContext from "context/toolContext";
import { useState, useEffect, useContext } from "react";

type DescriptionProps = {
  exit?: boolean;
  image: string;
  content: any;
  addTags?: boolean;
  tags?: any;
  provenanceAction?: any;
  provenance?: any;
  captionHide?: boolean;
  title: string;
  date: string;
  children: React.ReactNode;
};

const Description = ({ content, addTags, tags }: DescriptionProps) => {
  const [newToken, setNewToken] = useState<any>([]);
  const { watchListTokens, setWatchListTokens } = useContext(ToolContext);

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.box}>
            {!addTags ? (
              <>
                <div className={cn("h4", styles.stage)}>Dashboard</div>
                <div className={styles.content}>{content}</div>{" "}
              </>
            ) : null}

            <div className={cn("h4", styles.stagee)}>
              {!addTags ? "Your owned tokens" : "Watchlist token"}
            </div>
            {addTags && (
              <>
                <Field
                  type="text"
                  value={newToken}
                  placeholder="Type Token abbreviation (Example-ETH)"
                  className={styles.field}
                  onChange={(e: any) => {
                    setNewToken(e.target.value);
                  }}
                ></Field>
                <button
                  className={cn(
                    "button-stroke-grey button-medium",
                    styles.button
                  )}
                >
                  <span
                    onClick={() => {
                      console.log("in");
                      watchListTokens.includes(newToken)
                        ? null
                        : setWatchListTokens([...watchListTokens, newToken]);
                    }}
                  >
                    Add tags
                  </span>
                  <Icon name="plus" />
                </button>
              </>
            )}
            {tags && <Tags tags={tags} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
