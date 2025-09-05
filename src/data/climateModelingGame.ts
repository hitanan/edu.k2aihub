import { EducationalGame } from './educationalGames';
import { ClimateModelingGameData } from './gameData';

export interface ExtendedClimateModelingGame extends EducationalGame {
  gameData: ClimateModelingGameData;
  environmentalFactors: string[];
  climateIndicators: string[];
  interventions: string[];
  scienceTopics: string[];
  realWorldConnections: string[];
}

export const climateModelingGame: ExtendedClimateModelingGame = {
  id: 'climate-modeling',
  title: 'Climate Modeling Simulator',
  description:
    'Interactive climate simulation exploring environmental factors, pollution impact, and green solutions over time.',
  category: ['simulation'],
  difficulty: 'Trung bình',
  estimatedTime: '30-45 phút',
  skills: ['Environmental Science', 'Data Analysis', 'Systems Thinking', 'Decision Making', 'Sustainability Planning'],
  moduleType: 'environmental',
  isInternal: true,
  points: 100,
  icon: '🌍',
  color: 'from-green-600 to-blue-600',
  relatedLessons: [
    {
      moduleId: 'green-technology',
      lessonId: 'renewable-energy-systems',
      title: 'Renewable Energy Systems',
      connection: 'Explore solar, wind, and hydroelectric solutions modeled in the simulation',
    },
    {
      moduleId: 'green-technology',
      lessonId: 'carbon-capture-storage',
      title: 'Carbon Capture & Storage',
      connection: 'Learn about advanced carbon reduction technologies featured in the game',
    },
    {
      moduleId: 'stem',
      lessonId: 'environmental-solutions',
      title: 'Environmental Solutions',
      connection: 'Apply STEM principles to environmental challenges simulated in the game',
    },
    {
      moduleId: 'data-science',
      lessonId: 'environmental-data-analysis',
      title: 'Environmental Data Analysis',
      connection: 'Understand data patterns and trends shown in climate modeling',
    },
    {
      moduleId: 'python',
      lessonId: 'data-visualization',
      title: 'Data Visualization with Python',
      connection: 'Learn to create charts similar to those in the climate dashboard',
    },
  ],
  gameData: {
    scenarios: [
      {
        name: 'Industrial Growth Scenario',
        parameters: { co2: 420, temperature: 1.2, seaLevel: 3.5 },
        effects: [
          'Increased global temperature by 1.2°C since pre-industrial times',
          'Sea level rise of 3.5mm per year',
          'More frequent extreme weather events',
          'Coral reef bleaching và ecosystem disruption',
        ],
        solutions: [
          'Transition to renewable energy sources',
          'Implement carbon pricing mechanisms',
          'Invest in carbon capture technology',
          'Promote electric vehicle adoption',
        ],
        quiz: {
          question: 'What is the primary cause of increased CO2 levels in this scenario?',
          options: [
            'Natural climate variations',
            'Industrial fossil fuel burning',
            'Volcanic activity',
            'Solar radiation changes',
          ],
          correct: 1,
        },
      },
      {
        name: 'Green Transition Scenario',
        parameters: { co2: 380, temperature: 0.8, seaLevel: 2.1 },
        effects: [
          'Stabilized global temperature increase',
          'Reduced rate of sea level rise',
          'Improved air quality in major cities',
          'Increased biodiversity recovery',
        ],
        solutions: [
          'Continue renewable energy expansion',
          'Implement reforestation programs',
          'Develop green transportation networks',
          'Support sustainable agriculture practices',
        ],
        quiz: {
          question: 'Which intervention would have the most immediate impact on CO2 reduction?',
          options: ['Planting trees', 'Reducing fossil fuel use', 'Ocean conservation', 'Recycling programs'],
          correct: 1,
        },
      },
    ],
  },
  environmentalFactors: [
    'CO2 Emissions từ fossil fuels',
    'Deforestation và land use changes',
    'Industrial pollution và waste',
    'Transportation emissions',
    'Agriculture và livestock impact',
    'Renewable energy adoption',
    'Carbon capture initiatives',
    'Reforestation programs',
  ],
  climateIndicators: [
    'Global Average Temperature',
    'Sea Level Rise',
    'Arctic Ice Coverage',
    'Extreme Weather Events',
    'Ocean pH Levels',
    'Air Quality Index',
    'Biodiversity Index',
    'Renewable Energy Percentage',
  ],
  interventions: [
    'Renewable Energy Investment',
    'Carbon Tax Implementation',
    'Electric Vehicle Incentives',
    'Reforestation Programs',
    'Industrial Regulation',
    'Green Building Standards',
    'Public Transportation Development',
    'Research & Development Funding',
  ],
  scienceTopics: [
    'Greenhouse Effect và Global Warming',
    'Carbon Cycle và Ecosystem Balance',
    'Renewable Energy Technologies',
    'Climate Data Analysis và Modeling',
    'Environmental Impact Assessment',
    'Sustainable Development Goals',
    'Green Technology Innovation',
    'Climate Adaptation Strategies',
  ],
  realWorldConnections: [
    'Paris Climate Agreement targets và implementation',
    'National renewable energy policies worldwide',
    'Corporate sustainability initiatives và green investments',
    'Climate science research và IPCC reports',
    'Environmental activism và policy advocacy',
    'Green technology startups và innovation',
    'International cooperation on climate action',
    'Local community sustainability projects',
  ],
};
