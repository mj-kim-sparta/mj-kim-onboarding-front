import * as S from "@/app/components/style";
import Link from "next/link";
// isLoggedIn일 경우 유저 아이콘 노출 isLoggedIn이 아닐 경우 로그인 버튼 노출
interface UserTabProps {
    isLoggedIn: boolean;
}
export default function UserTab({isLoggedIn}: UserTabProps) {
  return (
        isLoggedIn ? (
            <S.GnbWrapper>
                로그인됨
            </S.GnbWrapper>
        ):(
            <S.GnbWrapper>
                <Link href="/login">로그인</Link>
            </S.GnbWrapper>
        )
  )
}
