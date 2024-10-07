'use client'
// import NotFound from './components/error/notFound'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function NotFoundPage() {
	const router = useRouter()
	useEffect(() => {
		router.push('/')
		alert('페이지 준비중입니다.')
	}, [])
	// return <NotFound />
}

export default NotFoundPage