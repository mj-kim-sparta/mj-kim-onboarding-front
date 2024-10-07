'use client'
import * as S from "@/app/components/style";
import { useState, useEffect } from "react";
import { isValidEmail } from "../logics";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [error, setError] = useState<string>(' ');
    const router = useRouter();
    useEffect(() => {
        if (email === '') {
            setError('이메일을 입력해주세요.');
        }
        else if (!isValidEmail(email)) {
            setError('이메일 형식이 올바르지 않습니다.');
        }
        else if (password === '') {
            setError('비밀번호를 입력해주세요.');
        }
        else if (passwordConfirm !== password) {
            setError('비밀번호를 확인해주세요.');
        }
        else {
            setError('');
        }
    }, [email, password, passwordConfirm]);

    const handleSubmit = async () => {
        if (error !== '') {
            alert(error);
            return;
        }
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await response.json();
        if (data.ok === true) {
            alert("회원가입 성공");
            router.push('/login');
        }
        else {
            alert(data.message);
        }
    };

    return (
        <S.Container>
        <S.Title>회원가입</S.Title>
          <S.FormContainer>
            <S.FormInput type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <S.FormInput type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            <S.FormInput type="password" placeholder="비밀번호 확인" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
            {error !== '' && <>{error}</>}
          </S.FormContainer>
          <S.SubmitButton onClick={handleSubmit} error={error !== ''} disabled={error !== ''}>회원가입</S.SubmitButton>
      </S.Container>
    );
}