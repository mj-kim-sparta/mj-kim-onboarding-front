'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@teamsparta/design-system";
import * as S from '@/app/components/style'

export default function NotFound() {
    const router = useRouter()
	return (
        <S.Container>
            페이지 준비중입니다.
            <S.Spacer height={50} />
            <S.GnbSubContainer>
                <Button onClick={() => router.push('/')}>홈으로 가기</Button>
                <Button onClick={() => router.back()}>뒤로가기</Button>
            </S.GnbSubContainer>
        </S.Container>
    )
}