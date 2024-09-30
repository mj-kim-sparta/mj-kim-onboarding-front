'use client'
import * as S from "@/app/components/style";
import Link from "next/link";

export default function Login() {
	return (
		<S.Container>
			<S.Title>로그인</S.Title>
            <S.FormContainer>
                <S.FormInput type="text" placeholder="아이디" />
                <S.FormInput type="password" placeholder="비밀번호" />
                <Link href="/signup">
                회원가입
                </Link>
            </S.FormContainer>
            <S.SubmitButton>로그인</S.SubmitButton>
		</S.Container>
	)
}