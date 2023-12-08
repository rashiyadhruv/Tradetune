import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
  className?: string;
  light?: boolean;
  onClick?: () => void;
};

const Logo = ({ className, light, onClick }: LogoProps) => (
  <Link href="/">
    <a
      className={cn(styles.logo, { [styles.light]: light }, className)}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="40"
        fill="#010101"
        viewBox="0 0 56 40"
      >
        <path
          fillRule="evenodd"
          d="M24 2.309a8 8 0 0 0-8 0L6.68 7.69a8 8 0 0 0-4 6.928v10.762a8 8 0 0 0 4 6.928L16 37.69a8 8 0 0 0 8 0l9.321-5.381a8 8 0 0 0 4-6.928V14.619a8 8 0 0 0-4-6.928L24 2.309zM20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        />
        <circle cx="19.999" cy="20" r="4.444" />
      </svg>
      <p>TRADETUNE</p>
    </a>
  </Link>
);

export default Logo;
