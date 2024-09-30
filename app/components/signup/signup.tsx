'use client'
import * as S from "@/app/components/style";

export default function Signup() {
	return (
		<S.Container>
			<S.Title>회원가입</S.Title>
            <S.FormContainer>
                <S.FormInput type="text" placeholder="아이디" />
                <S.FormInput type="password" placeholder="비밀번호" />
                <S.FormInput type="password" placeholder="비밀번호 확인" />
            </S.FormContainer>
            <S.SubmitButton>회원가입</S.SubmitButton>
		</S.Container>
	)
}