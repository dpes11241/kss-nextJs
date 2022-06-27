import React from 'react'
import { useRouter } from 'next/router'

const detail_page = () => {
    const router = useRouter()
    const { id } = router.query
  return (
    <div>detail_page {id} </div>
  )
}

export default detail_page
