import cn from "classnames";
import styles from "./Notifications.module.sass";
import Image from "@/components/Image";
import Spinner from "@/components/Spinner";

type ItemsType = {
  content: any;
  avatar: string;
  date: string;
  follow: boolean;
};

type NotificationsType = {
  month: string;
  items: ItemsType[];
};

type NotificationsProps = {
  items: NotificationsType[];
};

const Notifications = ({ items }: NotificationsProps) => (
  <div className={styles.notifications}>
    <div className={cn("h3", styles.title)}>Notification</div>
    <div className={styles.list}>
      {items.map((x, index) => (
        <div className={styles.box} key={index}>
          <div className={styles.month}>{x.month}</div>
          <div className={styles.group}>
            {x.items.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.avatar}>
                  <Image
                    src={item.avatar}
                    layout="fill"
                    objectFit="cover"
                    alt="Avatar"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.content}>{item.content}</div>
                  <div className={styles.date}>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Spinner />
  </div>
);

export default Notifications;
