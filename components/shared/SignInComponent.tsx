'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { MdChat } from 'react-icons/md';
import { BiConversation } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function SignInPage() {

  const [signinLoading, setSigninLoading] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  const handleSignIn = async () => {
    setSigninLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.error('Failed to sign in:', error);
      setSigninLoading(false);
    }
  };

  const handleCreateAccount = async () => {
    setCreateAccount(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.error('Failed to sign in:', error);
      setCreateAccount(false);
    }
  };

  return (

    <div className='min-h screen'>
      <div className="flex min-h-screen bg-background">
        <div className="hidden md:flex md:w-1/2 bg-emerald-600 items-center justify-center p-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">Connect, Chat, Collaborate</h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white">
                <MdChat className="h-8 w-8" />
                <span className="text-xl">Instant messaging with friends</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <BiConversation className="h-8 w-8" />
                <span className="text-xl">Start new conversations anytime</span>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <FaHandsHelping className="h-8 w-8" />
                <span className="text-xl">Collaborate and share ideas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div>

              <Image src="/talko1.png" width={500} height={500} alt="logo" className='h-12 w-12' />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">See what&apos;s happening</h2>
              <p className="mt-2 text-sm text-muted-foreground">Join Talko today.</p>
            </div>
            <div className="space-y-4">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 w-full"
                onClick={handleCreateAccount}
                disabled={createAccount}
              >
                {createAccount ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted">
                  </span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-foreground border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 w-full"
                onClick={handleSignIn}
                disabled={signinLoading}
              >
                {signinLoading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
            <p className="text-sm text-muted-foreground text-center">By signing up, you agree to the <Link className='underline' href="/termsofservice">Terms of Service</Link> and <Link className='underline' href="/privacypolicy">Privacy Policy.</Link></p>
          </div>
        </div>
      </div>
    </div>

  )
}