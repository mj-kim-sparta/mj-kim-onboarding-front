'use client'
import * as S from "@/app/components/style";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useAtom } from "jotai";
import { isLoggedIn, userName } from "@/app/components/user/state";
import { Suspense, useEffect } from "react";
import { getUser } from "@/app/components/logics";
// isLoggedIn일 경우 유저 아이콘 노출 isLoggedIn이 아닐 경우 로그인 버튼 노출

export default function UserTab() {
    const [loggedIn, setLoggedIn] = useAtom(isLoggedIn);
    const [name, setName] = useAtom(userName);
    useEffect(() => {
        if (getUser()) {
            setLoggedIn(true);
            setName(getUser());
        }
        else {
            setLoggedIn(false);
            setName(" ");
        }
    }, []);
    const pathname = usePathname()
    return (
        <Suspense fallback={<div>Loading...</div>}>
        {loggedIn ? (
            <S.GnbWrapper>
                {name}
            </S.GnbWrapper>
        ):(
            <S.GnbWrapper>
                {pathname === '/login' ? (
                    <Link href="/signup">회원가입</Link>
                ) : (
                    <Link href="/login">로그인</Link>
                    )}
                </S.GnbWrapper>
            )
        }
        </Suspense>
  )
}
