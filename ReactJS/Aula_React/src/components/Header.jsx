import style from "./Header.module.css";
import igniteLogo from "../assets/img/igniteLogo.svg";

export function Header() {
  return (
    <strong className={style.header}>
      <img src={igniteLogo} />
      Ignite Feed
    </strong>
  );
}
