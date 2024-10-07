import * as S from "@/app/components/style";
// import Link from "next/link";
import Login from "@/app/components/user/login";
export default function LoginPage() {
  return (
    <S.Container>
      <S.Spacer height={100} />
      <Login />
    </S.Container>
  );
}
