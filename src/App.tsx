import { useState } from 'react'
import './App.css'

interface Argument {
  title: string
  description: string
  source?: string
  strength?: 'primary' | 'secondary'
  type?: 'data' | 'expert' | 'trend'
}

interface ProgressCategory {
  title: string
  description: string
  color: string
  arguments: Argument[]
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showSynthesis, setShowSynthesis] = useState(false)

  const progressData: ProgressCategory[] = [
    {
      title: "AI Progress is Accelerating",
      description: "Arguments supporting rapid advancement toward AGI by 2027",
      color: "#10b981", // green
      arguments: [
        {
          title: "AI-2027 Scenario",
          description: "Ex-OpenAI researcher's detailed forecast predicts AGI by 2027 through exponential convergence of compute, algorithms, and data generation reaching critical thresholds.",
          source: "AI Futures Project",
          strength: "primary",
          type: "expert"
        },
        {
          title: "Self-Improvement Loop Potential",
          description: "AI coding agents are evolving to enhance their own development, potentially creating recursive improvement cycles that could lead to an intelligence explosion.",
          source: "AI-2027 Report",
          strength: "primary",
          type: "trend"
        },
        {
          title: "Breakthrough Applications Ready",
          description: "AI systems are positioned to revolutionize drug discovery, materials science, energy management, and creative collaboration at unprecedented speeds by 2027.",
          source: "Medium AI Analysis",
          strength: "secondary",
          type: "trend"
        }
      ]
    },
    {
      title: "AI Progress Staying Same",
      description: "Arguments for steady, predictable advancement",
      color: "#6366f1", // indigo
      arguments: [
        {
          title: "Steady Incremental Gains",
          description: "Current models continue showing positive results on subject-specific benchmarks like math, code, and science, indicating consistent but measured progress.",
          source: "Industry Analysis",
          strength: "primary",
          type: "data"
        },
        {
          title: "Balanced Scaling Approach",
          description: "Companies are finding sustainable ways to improve AI through methodical research and development rather than dramatic breakthroughs.",
          source: "Research Observations",
          strength: "secondary",
          type: "trend"
        },
        {
          title: "Market Maturation",
          description: "AI development is moving from experimental phase to practical applications, focusing on reliability and real-world deployment rather than raw capability gains.",
          source: "Technology Trends",
          strength: "secondary",
          type: "trend"
        }
      ]
    },
    {
      title: "AI Progress is Decelerating",
      description: "Arguments supporting plateau theories and scaling limitations",
      color: "#ef4444", // red
      arguments: [
        {
          title: "Data Exhaustion Crisis",
          description: "OpenAI co-founder Ilya Sutskever states the industry has exhausted high-quality training data: 'Data is the fossil fuel of AI, and we used it all!'",
          source: "NeurIPS 2024",
          strength: "primary",
          type: "expert"
        },
        {
          title: "Scaling Laws Showing Diminishing Returns",
          description: "Marc Andreessen reports current models are 'hitting the same ceiling on capabilities,' with pure scaling of data and compute facing significant walls.",
          source: "Industry Leaks, November 2024",
          strength: "primary",
          type: "expert"
        },
        {
          title: "Resource and Energy Constraints",
          description: "GPU shortages, rising energy costs, and environmental impact concerns are creating significant barriers to continued AI scaling through 2026.",
          source: "Bain & Company, Guardian Reports",
          strength: "secondary",
          type: "data"
        }
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>AI Progress Tracker</h1>
        <p>Is artificial intelligence progress accelerating, staying the same, or decelerating?</p>
      </header>
      
      <main className="main">
        <div className="categories">
          {progressData.map((category, index) => (
            <div 
              key={index}
              className={`category ${selectedCategory === category.title ? 'selected' : ''}`}
              style={{ borderColor: category.color }}
              onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
            >
              <div className="category-header">
                <h2 style={{ color: category.color }}>{category.title}</h2>
                <div className="click-indicator">
                  {selectedCategory === category.title ? '−' : '+'}
                </div>
              </div>
              <p className="category-description">{category.description}</p>
              
              {selectedCategory === category.title && (
                <div className="arguments">
                  {category.arguments
                    .sort((a, b) => (a.strength === 'primary' ? -1 : 1))
                    .map((argument, argIndex) => (
                    <div key={argIndex} className={`argument ${argument.strength}`}>
                      <div className="argument-header">
                        <h3>{argument.title}</h3>
                        <div className="argument-meta">
                          <span className={`type-badge ${argument.type}`}>
                            {argument.type === 'expert' ? '👤' : argument.type === 'data' ? '📊' : '📈'}
                          </span>
                          {argument.strength === 'primary' && <span className="strength-badge">Key Argument</span>}
                        </div>
                      </div>
                      <p>{argument.description}</p>
                      {argument.source && (
                        <div className="source-container">
                          <span className="source-label">Source:</span>
                          <span className="source">{argument.source}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
      {(selectedCategory || showSynthesis) && (
        <div className="synthesis-section">
          <button 
            className="synthesis-toggle"
            onClick={() => setShowSynthesis(!showSynthesis)}
          >
            {showSynthesis ? 'Hide Synthesis' : 'Compare All Perspectives'}
          </button>
          
          {showSynthesis && (
            <div className="synthesis-content">
              <h3>Key Tensions in the AI Progress Debate</h3>
              <div className="synthesis-grid">
                <div className="synthesis-point">
                  <h4>🔥 Central Conflict: Data vs Innovation</h4>
                  <p><strong>Accelerating:</strong> New algorithmic breakthroughs (AI-2027 scenario) vs <strong>Decelerating:</strong> Training data exhaustion (Sutskever)</p>
                </div>
                <div className="synthesis-point">
                  <h4>⚖️ Scaling Laws Reality Check</h4>
                  <p><strong>Decelerating:</strong> Diminishing returns evident (Andreessen) vs <strong>Steady:</strong> Consistent benchmark improvements continue</p>
                </div>
                <div className="synthesis-point">
                  <h4>🔮 Timeline Predictions</h4>
                  <p><strong>Accelerating:</strong> AGI by 2027 through self-improvement vs <strong>Steady:</strong> Gradual, sustainable development path</p>
                </div>
              </div>
              <div className="synthesis-conclusion">
                <p><strong>The verdict may depend on:</strong> Whether AI systems achieve recursive self-improvement before hitting fundamental scaling limits.</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      <footer className="footer">
        <p>💡 <strong>Tip:</strong> Click categories above to explore detailed arguments</p>
      </footer>
    </div>
  )
}

export default App
