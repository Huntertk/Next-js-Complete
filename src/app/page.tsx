"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/colors"}>Colors</Link>
      <button className="" onClick={() => router.replace("/about")}>about</button>
      <button className="" onClick={() => router.push("/login")}>Login</button>
      <button className="" onClick={() => window.location.reload()}>Reload</button>
    </div>
  )
}

export default Home