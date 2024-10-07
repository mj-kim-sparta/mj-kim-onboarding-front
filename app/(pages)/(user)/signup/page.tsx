import Signup from "@/app/components/user/signup";
import * as S from "@/app/components/style";

export default function SignupPage() {
  return (
    <S.Container>
      <S.Spacer height={100} />
      <Signup />
    </S.Container>
  );
}
