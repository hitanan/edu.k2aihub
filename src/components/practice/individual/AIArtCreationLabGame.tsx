'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Palette, Wand2, ImageIcon, CheckCircle, Star, Zap, Download, Share2 } from 'lucide-react';

interface AIArtCreationLabGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface ArtPrompt {
  id: string;
  title: string;
  description: string;
  category: 'portrait' | 'landscape' | 'abstract' | 'concept';
  difficulty: number;
  basePrompt: string;
  keywords: string[];
  points: number;
}

const artPrompts: ArtPrompt[] = [
  {
    id: 'cyberpunk-portrait',
    title: 'Cyberpunk Portrait',
    description: 'Tạo một chân dung phong cách cyberpunk với ánh sáng neon',
    category: 'portrait',
    difficulty: 2,
    basePrompt: 'cyberpunk portrait, neon lights, futuristic',
    keywords: ['cyberpunk', 'neon', 'portrait', 'futuristic', 'digital art'],
    points: 20
  },
  {
    id: 'fantasy-landscape',
    title: 'Fantasy Landscape',
    description: 'Phong cảnh fantasy với lâu đài và rồng',
    category: 'landscape',
    difficulty: 3,
    basePrompt: 'fantasy landscape, magical castle, dragon',
    keywords: ['fantasy', 'castle', 'dragon', 'magical', 'epic'],
    points: 30
  },
  {
    id: 'abstract-emotion',
    title: 'Abstract Emotion',
    description: 'Nghệ thuật trừu tượng thể hiện cảm xúc vui',
    category: 'abstract',
    difficulty: 4,
    basePrompt: 'abstract art representing joy and happiness',
    keywords: ['abstract', 'emotion', 'joy', 'colorful', 'expressive'],
    points: 40
  },
  {
    id: 'product-concept',
    title: 'Product Concept',
    description: 'Thiết kế concept cho smartphone tương lai',
    category: 'concept',
    difficulty: 5,
    basePrompt: 'futuristic smartphone concept design',
    keywords: ['concept', 'smartphone', 'futuristic', 'design', 'technology'],
    points: 50
  }
];

const aiTools = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI tạo ảnh chất lượng cao với phong cách nghệ thuật',
    strengths: ['artistic style', 'high quality', 'creative'],
    multiplier: 1.2
  },
  {
    id: 'dalle',
    name: 'DALL-E 3',
    description: 'AI tạo ảnh chính xác theo mô tả văn bản',
    strengths: ['text accuracy', 'realistic', 'detailed'],
    multiplier: 1.1
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'AI mã nguồn mở với khả năng tùy chỉnh cao',
    strengths: ['customizable', 'open source', 'fast'],
    multiplier: 1.0
  }
];

const styleModifiers = [
  { name: '4K resolution', modifier: ', 4k, high quality', points: 5 },
  { name: 'Professional lighting', modifier: ', professional lighting, studio quality', points: 10 },
  { name: 'Cinematic composition', modifier: ', cinematic composition, rule of thirds', points: 10 },
  { name: 'Detailed textures', modifier: ', highly detailed textures, photorealistic', points: 8 },
  { name: 'Vibrant colors', modifier: ', vibrant colors, saturated', points: 5 }
];

export default function AIArtCreationLabGame({
  onComplete,
  timeLeft,
  onRestart
}: AIArtCreationLabGameProps) {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedModifiers, setSelectedModifiers] = useState<string[]>([]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArt, setGeneratedArt] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [creativity, setCreativity] = useState(50);
  const [gameComplete, setGameComplete] = useState(false);

  const currentPromptData = artPrompts[currentPrompt];

  const handleToolSelect = useCallback((toolId: string) => {
    if (isGenerating || showResult) return;
    setSelectedTool(toolId);
  }, [isGenerating, showResult]);

  const handleModifierToggle = useCallback((modifierName: string) => {
    if (isGenerating || showResult) return;
    setSelectedModifiers(prev => 
      prev.includes(modifierName) 
        ? prev.filter(m => m !== modifierName)
        : [...prev, modifierName]
    );
  }, [isGenerating, showResult]);

  const generateFinalPrompt = useCallback(() => {
    const basePrompt = customPrompt || currentPromptData.basePrompt;
    const modifiers = selectedModifiers
      .map(modName => styleModifiers.find(mod => mod.name === modName)?.modifier)
      .filter(Boolean)
      .join('');
    
    return basePrompt + modifiers;
  }, [customPrompt, currentPromptData.basePrompt, selectedModifiers]);

  const handleGenerateArt = useCallback(async () => {
    if (!selectedTool || isGenerating) return;
    
    setIsGenerating(true);
    
    // Simulate AI art generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate a placeholder art description
    const finalPrompt = generateFinalPrompt();
    const tool = aiTools.find(t => t.id === selectedTool);
    const modifierPoints = selectedModifiers.reduce((sum, modName) => {
      const modifier = styleModifiers.find(m => m.name === modName);
      return sum + (modifier?.points || 0);
    }, 0);
    
    const baseScore = currentPromptData.points;
    const toolMultiplier = tool?.multiplier || 1;
    const creativityBonus = customPrompt ? 20 : 0;
    const finalScore = Math.round((baseScore + modifierPoints + creativityBonus) * toolMultiplier);
    
    setGeneratedArt(`Generated with ${tool?.name}: "${finalPrompt}"`);
    setTotalScore(prev => prev + finalScore);
    setCreativity(prev => Math.min(100, prev + (customPrompt ? 15 : 10)));
    setIsGenerating(false);
    setShowResult(true);
  }, [selectedTool, isGenerating, generateFinalPrompt, selectedModifiers, customPrompt, currentPromptData]);

  const handleNextPrompt = useCallback(() => {
    if (currentPrompt < artPrompts.length - 1) {
      setCurrentPrompt(prev => prev + 1);
      setSelectedTool('');
      setSelectedModifiers([]);
      setCustomPrompt('');
      setGeneratedArt('');
      setShowResult(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 200) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentPrompt, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 200) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 200) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Palette className="w-16 h-16 mx-auto mb-4 text-pink-400" />
          <h2 className="text-3xl font-bold mb-2">AI Art Portfolio Complete</h2>
          <div className="text-6xl font-bold text-pink-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Total Score: {totalScore} | Creativity Level: {creativity}/100
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-pink-400" />
              Artistic Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Master AI Artist - Exceptional prompt crafting</li>}
              {creativity >= 80 && <li>• Creative Genius - Original artistic vision</li>}
              {finalScore >= 60 && <li>• Skilled Prompter - Good technical knowledge</li>}
              {totalScore >= 100 && <li>• Style Expert - Great use of modifiers</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Wand2 className="w-5 h-5 mr-2 text-purple-400" />
              Next Level Skills
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Practice advanced prompt techniques</li>}
              {creativity < 60 && <li>• Experiment with more creative ideas</li>}
              <li>• Learn about negative prompts</li>
              <li>• Study different art movements and styles</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors"
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Create More Art
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Palette className="w-8 h-8 mr-3 text-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">AI Art Creation Lab</h2>
            <p className="text-pink-300">Project {currentPrompt + 1}/{artPrompts.length}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-pink-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Creativity: {creativity}/100
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentPrompt + (showResult ? 1 : 0)) / artPrompts.length) * 100}%` }}
        />
      </div>

      {/* Art Brief */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">
          {currentPromptData.title}
        </h3>
        <p className="text-gray-200 mb-4">{currentPromptData.description}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <ImageIcon className="w-4 h-4 mr-1 text-blue-300" />
            <span className="text-sm">{currentPromptData.category}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-300" />
            <span className="text-sm">Difficulty: {currentPromptData.difficulty}/5</span>
          </div>
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-1 text-green-300" />
            <span className="text-sm">Base Points: {currentPromptData.points}</span>
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Suggested keywords:</p>
          <div className="flex flex-wrap gap-2">
            {currentPromptData.keywords.map((keyword) => (
              <span key={keyword} className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Tool Selection */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">1. Choose AI Tool:</h4>
        <div className="grid gap-3">
          {aiTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => handleToolSelect(tool.id)}
              disabled={isGenerating || showResult}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedTool === tool.id
                  ? 'border-purple-500 bg-purple-900/30'
                  : 'border-gray-600 bg-white/5 hover:bg-white/10'
              } ${isGenerating || showResult ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold">{tool.name}</h5>
                  <p className="text-sm text-gray-300 mb-2">{tool.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.strengths.map((strength) => (
                      <span key={strength} className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-yellow-300">×{tool.multiplier}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Style Modifiers */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300">2. Add Style Modifiers:</h4>
        <div className="grid grid-cols-2 gap-3">
          {styleModifiers.map((modifier) => (
            <button
              key={modifier.name}
              onClick={() => handleModifierToggle(modifier.name)}
              disabled={isGenerating || showResult}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                selectedModifiers.includes(modifier.name)
                  ? 'border-green-500 bg-green-900/30'
                  : 'border-gray-600 bg-white/5 hover:bg-white/10'
              } ${isGenerating || showResult ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm">{modifier.name}</span>
                <span className="text-xs text-yellow-300">+{modifier.points}pt</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Prompt */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">3. Customize Prompt (Optional +20 creativity):</h4>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder={`Base prompt: ${currentPromptData.basePrompt}\nAdd your creative twist here...`}
          disabled={isGenerating || showResult}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none"
          rows={3}
        />
      </div>

      {/* Generated Art Display */}
      {generatedArt && (
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 mb-6 border border-purple-500">
          <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
            <ImageIcon className="w-5 h-5 mr-2" />
            Generated Artwork:
          </h4>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <p className="text-green-300 text-sm font-mono">{generatedArt}</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
              <Download className="w-4 h-4 inline mr-1" />
              Download
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-colors">
              <Share2 className="w-4 h-4 inline mr-1" />
              Share
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!showResult ? (
          <button
            onClick={handleGenerateArt}
            disabled={!selectedTool || isGenerating}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTool && !isGenerating
                ? 'bg-pink-600 hover:bg-pink-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isGenerating ? (
              <>
                <Wand2 className="w-4 h-4 inline mr-2 animate-spin" />
                Generating Art...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 inline mr-2" />
                Generate Art
              </>
            )}
          </button>
        ) : (
          <button
            onClick={handleNextPrompt}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentPrompt < artPrompts.length - 1 ? (
              <>
                <ImageIcon className="w-4 h-4 inline mr-2" />
                Next Art Project
              </>
            ) : (
              <>
                <Palette className="w-4 h-4 inline mr-2" />
                Complete Portfolio
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}