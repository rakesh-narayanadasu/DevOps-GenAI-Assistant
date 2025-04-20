import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-transparent bg-clip-text">
            DevOps Shack
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-white text-sm font-medium">
          <Link href="/interview" className="hover:text-pink-400">Interview Bot</Link>
          <Link href="/explain-code" className="hover:text-purple-400">Explain Code</Link>
          <Link href="/devops-assistant" className="hover:text-orange-400">DevOps Assistant</Link>
          <Link href="https://www.youtube.com/@devopsshack" target="_blank">
            <Image src="/yt.svg" alt="YouTube" width={20} height={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/adityajaiswal7/" target="_blank">
            <Image src="/li.svg" alt="LinkedIn" width={20} height={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

