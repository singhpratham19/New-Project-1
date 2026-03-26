import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface AISummaryProps {
  articleContent: string;
}

export default function AISummary({ articleContent }: AISummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert ESG consultant. Summarize the following article into 3 concise, actionable bullet points for C-level executives. Keep it professional and insightful. Do not include introductory or concluding text, just the bullet points.\n\nArticle text:\n${articleContent}`,
      });
      setSummary(response.text || 'No summary generated.');
    } catch (err) {
      console.error('Error generating summary:', err);
      setError('Unable to generate AI summary at this time.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-12 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-3 text-emerald-800">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Sparkles className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-lg font-bold font-serif">AI Executive Summary</h3>
        </div>
        {!summary && !loading && (
          <button 
            onClick={handleGenerate}
            className="text-sm bg-white border border-emerald-200 hover:border-emerald-600 hover:text-emerald-700 text-emerald-900 px-5 py-2.5 rounded-full transition-all font-medium shadow-sm hover:shadow flex items-center gap-2"
          >
            Generate Insights
          </button>
        )}
      </div>

      {!summary && !loading && !error && (
        <p className="text-slate-600 text-sm mt-2 sm:ml-14">
          Use our AI to instantly extract the most critical strategic takeaways from this insight.
        </p>
      )}

      {loading && (
        <div className="flex items-center gap-3 text-emerald-700 py-6 sm:ml-14">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm font-medium">Analyzing article and generating strategic insights...</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg text-sm mt-4 sm:ml-14">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {summary && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 sm:ml-14"
        >
          <ul className="space-y-4">
            {summary.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              
              // Clean up markdown bullets
              const cleanLine = trimmed.replace(/^[\*\-]\s*/, '');
              
              // Handle bold text **text**
              const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
              
              return (
                <li key={i} className="relative pl-6 text-slate-700 leading-relaxed text-base">
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
