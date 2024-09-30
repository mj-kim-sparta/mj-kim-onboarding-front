'use client'
import * as S from "@/app/components/style";
import { useRouter } from "next/navigation";

const apply = () => {
    fetch('/api/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890'
        })
    })
}

export default function Cta() {
    const router = useRouter();
    return (
        <S.Cta onClick={() => {
            router.push('/signup')
        }}>
            지금 지원!
        </S.Cta>
    )
}