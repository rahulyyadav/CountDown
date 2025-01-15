import React, { useState, useEffect } from 'react';
import { Timer, Share2 } from 'lucide-react';

function App() {
  const [daysLeft, setDaysLeft] = useState(364);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Try to get start date from URL first
    const urlParams = new URLSearchParams(window.location.search);
    let start = urlParams.get('start');

    if (!start) {
      // If no start date in URL, create new one and update URL
      start = new Date().toISOString();
      const newUrl = `${window.location.pathname}?start=${start}`;
      window.history.replaceState({}, '', newUrl);
    }

    setStartDate(start);
    
    // Calculate days passed
    const startTime = new Date(start);
    const today = new Date();
    const daysPassed = Math.floor((today.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24));
    setDaysLeft(Math.max(364 - daysPassed, 0));

    // Update days left every day at midnight
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - today.getTime();

    const timer = setTimeout(() => {
      const newDaysPassed = Math.floor((new Date().getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(Math.max(364 - newDaysPassed, 0));
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  const shareUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white/20 w-full max-w-md">
        <div className="flex flex-col items-center space-y-6">
          <Timer className="w-16 h-16 md:w-24 md:h-24 text-white animate-pulse" />
          
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Countdown Timer
          </h1>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold text-white mb-2">
              {daysLeft}
            </div>
            <div className="text-xl md:text-2xl text-white/80">
              Days Remaining
            </div>
          </div>

          <div className="text-white/60 text-center text-sm md:text-base">
            Out of 364 days total
          </div>

          <div className="w-full bg-white/20 rounded-full h-4">
            <div 
              className="bg-white rounded-full h-4 transition-all duration-500"
              style={{ width: `${(daysLeft / 364) * 100}%` }}
            />
          </div>

          <button
            onClick={shareUrl}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white"
          >
            <Share2 className="w-4 h-4" />
            {copied ? 'Copied!' : 'Share countdown'}
          </button>

          {startDate && (
            <div className="text-white/60 text-xs text-center">
              Started: {new Date(startDate).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;