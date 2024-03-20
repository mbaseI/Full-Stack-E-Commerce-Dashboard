import { useEffect, useState } from "react"

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false)
  const origin = "https://full-stack-e-commerce-dashboard.vercel.app/"
   
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return ""
  }

  return origin
}
