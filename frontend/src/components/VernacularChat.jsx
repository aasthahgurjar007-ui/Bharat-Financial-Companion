import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Bot, 
  Headphones 
} from 'lucide-react';
import { VERNACULAR_KNOWLEDGE_BASE } from '../data/mockData';

export default function VernacularChat({ customer, language, setLanguage }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: {
        en: `Namaste ${customer.name}! I am your Bharat Financial Companion. I am here to help you navigate your ${customer.activeGoal.title} safely. What would you like to ask?`,
        hi: `नमस्ते ${customer.name} जी! मैं आपका भारत फाइनेंशियल साथी हूँ। मैं आपके "${customer.activeGoal.title}" को बिना वित्तीय दबाव के पूरा करने में मदद के लिए उपलब्ध हूँ। आप क्या पूछना चाहते हैं?`,
        hinglish: `Namaste ${customer.name} ji! Main aapka Bharat Financial Saathi hoon. Aapke "${customer.activeGoal.title}" ko smoothly achieve karne ke liye kya sawal hai aapka?`
      },
      timestamp: 'Just now'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, language]);

  const handleSpeak = (text, messageId) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking && speakingMessageId === messageId) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setSpeakingMessageId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (language === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-IN';
    }
    
    utterance.rate = 0.95;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingMessageId(messageId);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingMessageId(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeakingMessageId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSendPrompt = (promptItem) => {
    const userQuery = promptItem.queries[language] || promptItem.queries.en;
    const aiResponse = promptItem.answer;

    const newMsgs = [
      ...messages,
      {
        id: Date.now(),
        sender: 'user',
        text: { en: userQuery, hi: userQuery, hinglish: userQuery },
        timestamp: 'Just now'
      },
      {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponse,
        timestamp: 'Just now'
      }
    ];

    setMessages(newMsgs);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    let matchedItem = VERNACULAR_KNOWLEDGE_BASE.find(item => 
      userText.toLowerCase().includes('moderate') || 
      userText.toLowerCase().includes('scooter') ||
      userText.toLowerCase().includes('why') ||
      userText.toLowerCase().includes('kyu') ||
      userText.toLowerCase().includes('लोन')
    );

    let reply = matchedItem 
      ? matchedItem.answer 
      : {
          en: `Regarding "${userText}": Based on ${customer.name}'s verified monthly surplus of ₹${customer.netSurplus.toLocaleString('en-IN')}, our primary guidance is to protect your liquid emergency reserve while accumulating down payment via the 6-Month Smart Goal RD. This keeps your loan obligation strictly within safe debt-to-income limits.`,
          hi: `आपके सवाल "${userText}" के संबंध में: मीना जी की मासिक सुरक्षित बचत ₹${customer.netSurplus.toLocaleString('en-IN')} को ध्यान में रखते हुए, हमारा सुझाव है कि अपनी आपातकालीन बचत को बिना छुए, 6 महीने की स्मार्ट आरडी से डाउन पेमेंट बनाएं ताकि बिना किसी वित्तीय तनाव के स्कूटर मिल सके।`,
          hinglish: `Aapke sawal "${userText}" par: Meena ji ke monthly surplus (₹${customer.netSurplus.toLocaleString('en-IN')}) ke hisab se, emergency fund ko touch kiye bina 6-month RD pathway lena sabse safe decision hoga. Isse monthly budget par koi load nahi aayega.`
        };

    const newMsgs = [
      ...messages,
      {
        id: Date.now(),
        sender: 'user',
        text: { en: userText, hi: userText, hinglish: userText },
        timestamp: 'Just now'
      },
      {
        id: Date.now() + 1,
        sender: 'ai',
        text: reply,
        timestamp: 'Just now'
      }
    ];

    setMessages(newMsgs);
  };

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Vernacular AI Assistant & Voice Guidance
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Module 09
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Plain-language financial coaching in Hindi, English & Hinglish with live audio narration.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          {[
            { id: 'en', label: 'English' },
            { id: 'hi', label: 'हिंदी (Hindi)' },
            { id: 'hinglish', label: 'Hinglish' }
          ].map((lang) => (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                language === lang.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col h-[600px] overflow-hidden">
        
        {/* Chat Header */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Bot className="w-5 h-5" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Bharat Saathi AI</span>
                <span className="text-[10px] font-normal text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Active</span>
              </h3>
              <p className="text-[11px] text-slate-400">Trained on RBI Responsible Lending & Bharat Cashflow Dynamics</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Headphones className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Click speaker for voice readout</span>
          </div>
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="p-3 bg-slate-950/40 border-b border-slate-800/60 overflow-x-auto flex items-center gap-2 text-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Suggested Prompts:
          </span>
          {VERNACULAR_KNOWLEDGE_BASE.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(item)}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700/70 shrink-0 text-xs transition-all hover:border-orange-500/40"
            >
              {item.queries[language] || item.queries.en}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isAI = msg.sender === 'ai';
            const displayText = isAI ? (msg.text[language] || msg.text.en) : (msg.text[language] || msg.text.en);
            const isCurrentlySpeaking = isSpeaking && speakingMessageId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[88%] sm:max-w-[78%] ${
                  isAI ? 'self-start mr-auto' : 'self-end ml-auto flex-row-reverse'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    isAI
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {isAI ? <Sparkles className="w-4 h-4" /> : customer.avatar}
                </div>

                <div className="space-y-1.5">
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAI
                        ? 'bg-slate-800/90 text-slate-100 border border-slate-700/80 rounded-tl-none shadow-md'
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-none shadow-md font-medium'
                    }`}
                  >
                    {displayText}
                  </div>

                  {isAI && (
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      <span>•</span>
                      <button
                        onClick={() => handleSpeak(displayText, msg.id)}
                        className={`flex items-center gap-1 hover:text-slate-200 transition-all ${
                          isCurrentlySpeaking ? 'text-orange-400 font-bold' : 'text-slate-400'
                        }`}
                      >
                        {isCurrentlySpeaking ? (
                          <>
                            <VolumeX className="w-3 h-3 text-orange-400" />
                            <span>Stop Audio</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span>Listen (आवाज़ में सुनें)</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCustomSubmit} className="p-3 sm:p-4 bg-slate-950/80 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                language === 'hi' 
                  ? 'अपना वित्तीय सवाल हिंदी में लिखें (जैसे: क्या मुझे अभी लोन लेना चाहिए?)...' 
                  : language === 'hinglish'
                  ? 'Apna financial sawal yahan type karein...'
                  : 'Ask a financial question (e.g. Why is my goal rated Moderate?)...'
              }
              className="flex-1 bg-slate-900 border border-slate-700/80 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/80 transition-all"
            />
            <button
              type="submit"
              className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold transition-all shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
