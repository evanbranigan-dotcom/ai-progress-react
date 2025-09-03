import { useState } from 'react'
import './App.css'

interface Argument {
  title: string
  description: string
  source?: string
}

interface ProgressCategory {
  title: string
  description: string
  color: string
  arguments: Argument[]
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const progressData: ProgressCategory[] = [
    {
      title: "AI Progress is Accelerating",
      description: "Arguments supporting rapid advancement toward AGI by 2027",
      color: "#10b981", // green
      arguments: [
        {
          title: "AI-2027 Scenario",
          description: "Ex-OpenAI researcher's detailed forecast predicts AGI by 2027 through exponential convergence of compute, algorithms, and data generation reaching critical thresholds.",
          source: "AI Futures Project"
        },
        {
          title: "Self-Improvement Loop Potential",
          description: "AI coding agents are evolving to enhance their own development, potentially creating recursive improvement cycles that could lead to an intelligence explosion.",
          source: "AI-2027 Report"
        },
        {
          title: "Breakthrough Applications Ready",
          description: "AI systems are positioned to revolutionize drug discovery, materials science, energy management, and creative collaboration at unprecedented speeds by 2027.",
          source: "Medium AI Analysis"
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
          source: "Industry Analysis"
        },
        {
          title: "Balanced Scaling Approach",
          description: "Companies are finding sustainable ways to improve AI through methodical research and development rather than dramatic breakthroughs.",
          source: "Research Observations"
        },
        {
          title: "Market Maturation",
          description: "AI development is moving from experimental phase to practical applications, focusing on reliability and real-world deployment rather than raw capability gains.",
          source: "Technology Trends"
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
          source: "NeurIPS 2024"
        },
        {
          title: "Scaling Laws Showing Diminishing Returns",
          description: "Marc Andreessen reports current models are 'hitting the same ceiling on capabilities,' with pure scaling of data and compute facing significant walls.",
          source: "Industry Leaks, November 2024"
        },
        {
          title: "Resource and Energy Constraints",
          description: "GPU shortages, rising energy costs, and environmental impact concerns are creating significant barriers to continued AI scaling through 2026.",
          source: "Bain & Company, Guardian Reports"
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
              <h2 style={{ color: category.color }}>{category.title}</h2>
              <p className="category-description">{category.description}</p>
              
              {selectedCategory === category.title && (
                <div className="arguments">
                  {category.arguments.map((argument, argIndex) => (
                    <div key={argIndex} className="argument">
                      <h3>{argument.title}</h3>
                      <p>{argument.description}</p>
                      {argument.source && <span className="source">Source: {argument.source}</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
      <footer className="footer">
        <p>Click on each category to explore the arguments</p>
      </footer>
    </div>
  )
}

export default App
