import Link from "next/link";
import cn from "classnames";
import styles from "./Dream.module.sass";
import Image from "@/components/Image";
import Modal from "@/components/Modal";
import { useRef, useState } from "react";
import Arrow from "@/components/Arrow";
import Logo from "@/components/Logo";
import Information from "./FormModal/Information";
import FormModal from "./FormModal/FormModal";
type DreamProps = {};

const Dream = ({}: DreamProps) => {
  const handleClose = () => {
    setShowmodal(false);
  };
  const [showmodal, setShowmodal] = useState(false);
  return (
    <div className={styles.dream}>
      <div className={styles.wrap}>
        <div className={styles.details}>
          <div className={styles.item}>
            <div className={styles.avatar}>
              <Image
                src="/images/artists/artist-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Avatar"
              />
            </div>
            @randomdash
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <Image
                src="/images/escape.jpg"
                layout="fill"
                objectFit="cover"
                alt="Avatar"
              />
            </div>
            Escape
          </div>
        </div>
        <div className={cn("h2", styles.title)}>
          Lets start sniping for riches.
        </div>
        <div className={styles.line}>
          <div className={styles.box}>
            <div className={cn("h3", styles.crypto)}>Easy to use</div>
            <div className={cn("h4", styles.price)}>
              Set time of sniping after liquidty pool is made
            </div>
            <div className={styles.pricee}>
              let snipe do its thing and relax{" "}
            </div>
          </div>

          <div
            className={cn("button-white", styles.button)}
            onClick={() => {
              setShowmodal(true);
            }}
          >
            START SNIPING
          </div>
        </div>
      </div>
      <div className={styles.preview}>
        <Image
          src="/images/balls.jpg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="Avatar"
        />
      </div>
      <Modal
        className={styles.modal}
        closeClassName={styles.close}
        visible={showmodal}
        onClose={() => setShowmodal(false)}
      >
        <FormModal onSuccess={() => setShowmodal(false)} />
      </Modal>
    </div>
  );
};

export default Dream;
