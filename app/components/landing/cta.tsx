'use client'
import * as S from "./Cta.style";
import { sendRequest } from "../logics";
import { useAtomValue } from "jotai";
import { isLoggedIn } from "@/app/components/user/state";
import { useRouter } from "next/navigation";

const apply = async () => {
    const response = await sendRequest('/api/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        requireAuth: true,
    })
    if (response) {
        alert('지원 완료!');
    }
    else {
        alert('지원 실패');
    }
}

export default function Cta() {
    const loggedIn = useAtomValue(isLoggedIn);
    const router = useRouter();
    return (
        <S.Cta onClick={() => {
            if (loggedIn) {
                apply()
            }
            else {
                router.push('/login')
            }
        }}>
            지금 지원!
        </S.Cta>
    )
}