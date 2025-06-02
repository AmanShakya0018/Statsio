"use client"
import Image from "next/image"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { BarChart3, Globe, Download, Loader2 } from "lucide-react"
import { useState } from "react"

export default function SignInPage() {
  const [signinLoading, setSigninLoading] = useState(false)
  const [createAccount, setCreateAccount] = useState(false)

  const handleSignIn = async () => {
    setSigninLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard/sites" })
    } catch (error) {
      console.error("Failed to sign in:", error)
      setSigninLoading(false)
    }
  }

  const handleCreateAccount = async () => {
    setCreateAccount(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard/sites" })
    } catch (error) {
      console.error("Failed to sign in:", error)
      setCreateAccount(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 right-32 w-16 h-16 border border-white/10 rounded-full"></div>
          </div>

          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-neutral-300 to-white bg-clip-text text-transparent">
                  Track, Analyze,
                </span>
                <span className="block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                  Optimize
                </span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-md">
                Get powerful insights into your website performance with real-time analytics
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-white/10 transition-colors">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-lg font-medium block text-white">Real-time Analytics</span>
                  <span className="text-neutral-400 text-sm">Monitor your website traffic instantly</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-lg font-medium block text-white">Detailed Analytics</span>
                  <span className="text-neutral-400 text-sm">Track country, device, OS, and browser data</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Download className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-lg font-medium block text-white">Export Data</span>
                  <span className="text-neutral-400 text-sm">Download your analytics as CSV files</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-black">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image src="/logo.png" width={500} height={500} alt="logo" className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                Welcome to Statsio
              </h2>
              <p className="mt-3 text-sm text-neutral-400">Start tracking your website analytics today</p>
            </div>

            <div className="space-y-4">
              <button
                className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white border border-neutral-700 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:from-neutral-700 hover:to-neutral-800 h-12 rounded-xl px-8 w-full overflow-hidden group"
                onClick={handleCreateAccount}
                disabled={createAccount}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center gap-2">
                  {createAccount ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" />
                      Creating Account...
                    </>
                  ) : (
                    <>Create Account</>
                  )}
                </div>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-neutral-800"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-4 text-neutral-500 font-medium">Or continue with</span>
                </div>
              </div>

              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 text-white border-2 border-neutral-800 bg-neutral-900/50 shadow-sm hover:bg-neutral-800/50 hover:border-neutral-700 hover:shadow-md h-12 rounded-xl px-8 w-full"
                onClick={handleSignIn}
                disabled={signinLoading}
              >
                {signinLoading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign in with Google
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-neutral-500 text-center leading-relaxed">
              By signing up, you agree to our{" "}
              <Link className="underline hover:text-neutral-300 transition-colors" href="/termsofservice">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="underline hover:text-neutral-300 transition-colors" href="/privacypolicy">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
