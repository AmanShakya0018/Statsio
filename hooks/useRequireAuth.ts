import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const useRequireAuth = () => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin")
    }
  }, [status, router])
}

export default useRequireAuth