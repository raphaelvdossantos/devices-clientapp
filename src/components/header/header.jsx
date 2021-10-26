import { ReactComponent as Logo } from "../../assets/Logo.svg";
import * as S from "./styles";

export default function Header() {
  return (
    <S.AppHeader>
      <Logo />
    </S.AppHeader>
  );
}
