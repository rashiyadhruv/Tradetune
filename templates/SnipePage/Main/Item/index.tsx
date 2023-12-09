import Link from "next/link";
import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Details from "../Details";

type MainProps = {
    item: any;
};

const Main = ({ item }: MainProps) => (
    <div className={styles.item}>
        <div className={styles.preview}>
            <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt="Main"
            />
        </div>
        <div className={styles.wrap} style={{ backgroundColor: item.color }}>
            <Details
                collection={item.collection}
                price={item.price}
                reserve={item.reserve}
            />
            <div className={cn("h1", styles.subtitle)}>{item.title}</div>
            <div className={styles.btns}>
                <Link href="/nft">
                    <a className={cn("button-stroke", styles.button)}>
                        <span>View NFT</span>
                        <Icon name="arrow-right" />
                    </a>
                </Link>
                <Link href="/place-a-bid">
                    <a className={cn("button", styles.button)}>place a bid</a>
                </Link>
            </div>
        </div>
    </div>
);

export default Main;
