import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileJson, Send } from 'lucide-react';

export function InputPage() {
  const [jsonInput, setJsonInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/visualization', { 
      state: { jsonData: jsonInput }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-4">
              <FileJson className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Input JSON Data</h2>
            </div>
            
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-64 p-4 border border-gray-200 rounded-lg font-mono text-sm resize-y focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Paste your JSON data here..."
              required
            />

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                Visualize Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}