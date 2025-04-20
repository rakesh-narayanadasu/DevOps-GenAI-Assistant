export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white font-sans px-6 py-8">
      <header className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold">DevOps Shack</h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/interview" className="hover:underline">Interview Bot</a>
          <a href="/explain-code" className="hover:underline">Code Explainer</a>
          <a href="/devops-assistant" className="hover:underline">DevOps Assistant</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">{children}</main>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2025 GenAI Assistant · <span className="text-purple-400 font-semibold">DevOps Shack</span>
      </footer>
    </div>
  );
}

