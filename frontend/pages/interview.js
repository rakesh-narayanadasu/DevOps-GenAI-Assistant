import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InterviewBot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const outputRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    setResponse('');
    setIsTyping(true);
    const form = new FormData();
    form.append('question', question);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/interview`, {
      method: 'POST',
      body: form,
    });
    const data = await res.json();
    animateText(data.response);
  };

  const animateText = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      setResponse((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  return (
    <>
      <Navbar />
      <div className="pt-28 min-h-screen flex flex-col items-center justify-start px-4 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 text-transparent bg-clip-text">
          Interview Bot
        </h1>
        <form onSubmit={submit} className="mt-8 w-full max-w-2xl">
          <textarea
            className="w-full p-5 rounded-lg text-white bg-gray-900 border border-pink-500 focus:ring-2 focus:ring-pink-600 min-h-[180px] resize-none shadow-md text-sm"
            placeholder="Ask your DevOps interview question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 text-lg font-semibold rounded-full shadow-md"
            >
              🎙️ Ask AI
            </button>
          </div>
        </form>

        {response && (
          <div
            ref={outputRef}
            className="mt-8 w-full max-w-3xl bg-gray-800 border-l-4 border-pink-500 p-6 rounded-lg shadow-xl text-green-300 whitespace-pre-wrap text-sm animate-fade-in"
          >
            {response}
          </div>
        )}
        {isTyping && (
          <div className="mt-4 text-sm text-gray-400 animate-pulse">Typing...</div>
        )}
      </div>
      <Footer />

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out both;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
}

