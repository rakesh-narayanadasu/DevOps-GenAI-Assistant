import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>GenAI Assistant | DevOps Shack</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-900 via-black to-blue-900 text-white font-sans">

        {/* Navbar */}
        <header className="flex items-center justify-between px-8 py-5 bg-[#0b0f19] shadow-md border-b border-gray-800">
          <h1 className="text-xl font-bold text-purple-300">DevOps Shack</h1>
          <nav className="space-x-6 text-sm">
            <Link href="/" className="hover:text-pink-400">Home</Link>
            <Link href="/interview" className="hover:text-pink-400">Interview Bot</Link>
            <Link href="/explain-code" className="hover:text-pink-400">Code Explainer</Link>
            <Link href="/devops-assistant" className="hover:text-pink-400">DevOps Assistant</Link>
          </nav>
          <div className="space-x-4">
            <a href="https://www.youtube.com/@devopsshack" target="_blank" rel="noopener noreferrer">
              <img src="/yt.svg" alt="YouTube" className="h-5 inline" />
            </a>
            <a href="https://www.linkedin.com/in/adityajaiswal7/" target="_blank" rel="noopener noreferrer">
              <img src="/li.svg" alt="LinkedIn" className="h-5 inline" />
            </a>
          </div>
        </header>

        {/* Main content grows to fill height */}
        <main className="flex-grow flex flex-col items-center text-center mt-20 px-4">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            GenAI Assistant
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg mb-16">
            An intelligent assistant to help you with <span className="text-pink-400">DevOps</span>, 
            <span className="text-purple-400"> code explanations</span>, and 
            <span className="text-blue-400"> interview prep</span> — powered by AI.
          </p>

          {/* Tool Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mb-12">
            <Link href="/interview">
              <div className="rounded-xl border border-pink-600 bg-[#1b1f2d] p-6 hover:scale-105 transition-transform duration-300 text-center cursor-pointer shadow-lg">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Interview Bot</h3>
                <p className="text-sm text-gray-400">Get expert answers to your interview questions instantly.</p>
              </div>
            </Link>
            <Link href="/explain-code">
              <div className="rounded-xl border border-purple-600 bg-[#1b1f2d] p-6 hover:scale-105 transition-transform duration-300 text-center cursor-pointer shadow-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Code Explainer</h3>
                <p className="text-sm text-gray-400">Paste code and receive AI-powered explanations.</p>
              </div>
            </Link>
            <Link href="/devops-assistant">
              <div className="rounded-xl border border-orange-500 bg-[#1b1f2d] p-6 hover:scale-105 transition-transform duration-300 text-center cursor-pointer shadow-lg">
                <h3 className="text-xl font-bold text-orange-400 mb-2">DevOps Assistant</h3>
                <p className="text-sm text-gray-400">Resolve DevOps issues with AI help.</p>
              </div>
            </Link>
          </div>
        </main>

        {/* Footer sticks to bottom */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
          © 2025 GenAI Assistant · <span className="text-purple-400">DevOps Shack</span>
        </footer>
      </div>
    </>
  );
}

