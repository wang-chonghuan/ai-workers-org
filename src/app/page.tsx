'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import { Suspense } from 'react'
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        <main className="flex flex-col items-center justify-center h-screen p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">欢迎使用 Clerk 认证</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">请通过页面右上角的按钮登录后开始使用您的应用。</p>
        </main>
      </SignedOut>
      <SignedIn>
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center text-lg font-medium text-gray-700 dark:text-gray-300">应用加载中，请稍候...</div>}>
          <div className="flex h-screen bg-background/80">
            <Sidebar />
            <ChatArea />
          </div>
        </Suspense>
      </SignedIn>
    </>
  );
}
