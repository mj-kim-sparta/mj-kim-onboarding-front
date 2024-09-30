import Link from "next/link";
import * as S from "@/app/components/style";
import UserTab from "./usertab";
import Newlogo from "@/public/images/logo/newLogo.svg";
export default function Navbar() {
  return (
    <S.Container>
      <S.GnbContainer>
        <S.GnbWrapper>
          <Link href="/"><Newlogo width={140} /></Link>
        </S.GnbWrapper>
      <S.GnbSubContainer>
        <S.GnbWrapper>
          <Link href="/api/a">전체강의</Link>
        </S.GnbWrapper>
        <S.GnbWrapper>
          <Link href="/api/a">부트캠프</Link>
        </S.GnbWrapper>
        <S.GnbWrapper>
          <Link href="/api/a">취업지원</Link>
        </S.GnbWrapper>
      </S.GnbSubContainer>
      <S.GnbWrapper>
        <UserTab isLoggedIn={false} />
      </S.GnbWrapper>
      </S.GnbContainer>
    </S.Container>
  );
}
