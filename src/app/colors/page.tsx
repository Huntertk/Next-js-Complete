"use client"

import { useRouter } from "next/navigation"

const ColorsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Colors Page</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default ColorsPage