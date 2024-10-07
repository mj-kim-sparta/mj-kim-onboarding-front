'use client'
import * as S from "@/app/components/style";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isValidEmail } from "../logics";
import { useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { isLoggedIn, userName } from "./state";
import { getUser } from "../logics";

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(' ');
    const setLoggedIn = useSetAtom(isLoggedIn);
    const setName = useSetAtom(userName);
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
        else {
            setError('');
        }
    }, [email, password]);

    const handleSubmit = async () => {
        // console.log(JSON.stringify({ email, password }));
        if (error !== '') {
            alert(error);
            return;
        }
        const response = await fetch('api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
        const data = await response.json();
        if (data.ok === true) {
            // 쿠키에 accessToken, refreshToken 저장
            document.cookie = `accessToken=${data.accessToken}`;
            document.cookie = `refreshToken=${data.refreshToken}`;
            console.log("OK");
            setName(getUser());
            setLoggedIn(true);
            router.push("/");
        }
        else {
            alert(data.message);
        }
    };

    return (
        <S.Container>
        <S.Title>로그인</S.Title>
                <S.FormContainer>
                    <S.FormInput type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <S.FormInput type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error !== '' && <>{error}</>}
                    <Link href="/signup">
                    회원가입
                    </Link>
                </S.FormContainer>
                <S.SubmitButton onClick={handleSubmit} error={error !== ''} disabled={error !== ''}>로그인</S.SubmitButton>
        </S.Container>
    )
}