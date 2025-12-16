import React, { useState } from 'react';
import ServiceCard1 from './ServiceCard';
import { 
  ChevronRight, 
  Users, 
  Globe, 
  Shield, 
  Brain, 
  TrendingUp, 
  Target,
  Zap,
  BarChart3,
  Dock,
  DollarSign,
  CheckCircle,
  Cloud,
  Smartphone,
  Database,
  Code,
  Palette,
  Landmark,
  UserRoundPlus,
  FolderLock,
  Bot,
  ChartNoAxesCombined
} from 'lucide-react';

const PitchDeck = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Introduction', icon: <Dock className="w-5 h-5" /> },
    { id: 'problem', label: 'Problem Statement', icon: <Target className="w-5 h-5" /> },
    { id: 'solution', label: 'Our Solution', icon: <Brain className="w-5 h-5" /> },
    { id: 'services', label: 'Our Services', icon: <Shield className="w-5 h-5" /> },
    { id: 'market', label: 'Market Size', icon: <Globe className="w-5 h-5" /> },
    { id: 'competition', label: 'Competition', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'advantages', label: 'Advantages', icon: <Zap className="w-5 h-5" /> },
    { id: 'insights', label: 'Key Insights', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'roadmap', label: 'Roadmap', icon: <ChevronRight className="w-5 h-5" /> },
    { id: 'funding', label: 'Use of Funds', icon: <Landmark className="w-5 h-5" /> },
    { id: 'team', label: 'Our Team', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-4 md:p-8">
      <nav className="sticky top-4 z-50 mb-12">
        <div className="glassmorphism max-w-6xl mx-auto rounded-2xl p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  activeSection === section.id
                    ? 'bg-green-800 text-white shadow-lg'
                    : 'glassmorphism-light hover:bg-white/50'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-green-900 bg-clip-text text-transparent">
              AgriDatum
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-Powered, Agricultural Data Platform Built on Cardano
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium">Cardano Blockchain</span>
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">AI Assistant</span>
            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium">Climate Smart</span>
            <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium">Farmer First</span>
          </div>
        </header>

        
        <div className="space-y-12">
        
          {activeSection === 'intro' && (
            <SectionCard>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Introduction</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    AgriDatum is revolutionizing African agriculture by giving farmers <span className="font-semibold text-green-800">digital ownership</span> of their harvest data. 
                    We combine <span className="font-semibold text-green-800">AI-driven insights</span> with <span className="font-semibold text-green-800">Cardano blockchain</span> storage and verification to create 
                    transparent, trustworthy agricultural ecosystems.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-800" />
                      <span>Mobile-first web app accessible via smartphone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-800" />
                      <span>50-100 pilot farmers already onboarded in Nigeria</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-800" />
                      <span>AI assistant fine-tuned for African agriculture</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="glassmorphism rounded-3xl p-8">
                    <div className="text-center">
                      <Smartphone className="w-24 h-24 mx-auto text-green-800 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Built for Rural Farmers</h3>
                      <p className="text-gray-600">No complex setup needed. Just a smartphone and desire for better farming.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          {activeSection === 'problem' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">The Critical Problem</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <ProblemCard
                  icon={<Database className="w-8 h-8" />}
                  title="Unverified Data"
                  description="Manual records, easily manipulated, leading to fraud and mistrust"
                  color="red"
                />
                <ProblemCard
                  icon={<Cloud className="w-8 h-8" />}
                  title="Climate Vulnerability"
                  description="Unpredictable weather, poor water management, crop losses"
                  color="amber"
                />
                <ProblemCard
                  icon={<DollarSign className="w-8 h-8" />}
                  title="Limited Access"
                  description="Difficulty accessing loans, grants, insurance, support from NGOs and fair markets"
                  color="blue"
                />
              </div>
              <div className="mt-8 p-6 bg-red-50 rounded-2xl">
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Result:</span> Smallholder farmers remain trapped in cycles of poverty while 
                  NGOs and buyers struggle with unreliable data, wasting millions in misallocated resources.
                </p>
              </div>
            </SectionCard>
          )}

          {activeSection === 'solution' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Innovative Solution</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <SolutionFeature
                  icon={<Shield className="w-10 h-10" />}
                  title="Blockchain Data Ownership"
                  description="Farmers record and own their immutable harvest records on Cardano"
                  features={['DID Verification', 'Immutable Storage', 'Transparent History']}
                />
                <SolutionFeature
                  icon={<Brain className="w-10 h-10" />}
                  title="AI Farming Assistant"
                  description="Gemini AI trained on African agriculture"
                  features={['Market Intelligence', 'Irrigation Guidance', 'Disease Alerts']}
                />
                <SolutionFeature
                  icon={<Users className="w-10 h-10" />}
                  title="Stakeholder Integration"
                  description="Connect farmers with NGOs, buyers & financiers"
                  features={['Smart Contracts', 'NGO Dashboards', 'Direct Market Access']}
                />
              </div>
            </SectionCard>
          )}

          
          {activeSection === 'services' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard1
                  title="Farmer Onboarding"
                  description="Simple registration with phone/ID"
                  icon = {UserRoundPlus}
                  gradient="from-green-800 to-green-800"
                />
                <ServiceCard1
                  title="Data Verification"
                  description="Cardano-backed immutable records"
                  icon={FolderLock}
                  gradient="from-green-800 to-green-800"
                />
                <ServiceCard1
                  title="AI Insights"
                  description="Personalized farming recommendations"
                  icon={Bot}
                  gradient="from-green-800 to-green-800"
                />
                <ServiceCard1
                  title="Market Access"
                  description="Direct connections with verified buyers"
                  icon={ChartNoAxesCombined}
                  gradient="from-green-800 to-green-800"
                />
              </div>
            </SectionCard>
          )}

          
          {activeSection === 'market' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Massive Market Opportunity</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <MarketStat
                  value="33M+"
                  label="Smallholder Farmers in Africa"
                  description="Primary user base ready for digitization"
                />
                <MarketStat
                  value="$560B"
                  label="African Agricultural Market"
                  description="Total addressable market value"
                />
                <MarketStat
                  value="200K+"
                  label="NGOs & Agribusinesses"
                  description="Potential B2B clients"
                />
              </div>
              <div className="mt-8 p-6 bg-emerald-50 rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">Revenue Streams</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {['Verification Fees', 'Data Subscriptions', 'API Licensing', 'Smart Contract Fees', 'Premium AI'].map((stream) => (
                    <div key={stream} className="text-center p-3 glassmorphism-light rounded-xl">
                      <span className="font-medium text-gray-700">{stream}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          )}

          
          {activeSection === 'competition' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Competitive Landscape</h2>
              <div className="space-y-6">
                <CompetitorCard
                  type="Direct"
                  name="Traditional Farm Management Apps"
                  weakness="No blockchain verification, limited AI, centralized control"
                />
                <CompetitorCard
                  type="Indirect"
                  name="Manual Record Keeping & Middlemen"
                  weakness="Prone to fraud, no transparency, inefficient"
                />
                <div className="mt-8 glassmorphism p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-green-800">Our Differentiator</h3>
                  <p className="text-lg">
                    AgriDatum uniquely combines <strong> cardano blockchain data ownership</strong> with <strong>AI-powered insights</strong> 
                    specifically designed for African agriculture, creating an <strong> unmatched trust layer</strong> that no competitor offers.
                  </p>
                </div>
              </div>
            </SectionCard>
          )}

          
          {activeSection === 'advantages' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Competitive Advantages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'First Mover', desc: 'First Cardano-based agri-data platform in Africa' },
                  { title: 'Farmer-Centric', desc: 'Designed with & for smallholder farmers' },
                  { title: 'Climate Smart', desc: 'Built-in irrigation & drainage intelligence' },
                  { title: 'Multi-Stakeholder', desc: 'Serves farmers, NGOs, buyers simultaneously' },
                ].map((adv) => (
                  <div key={adv.title} className="glassmorphism p-6 rounded-2xl">
                    <Zap className="w-8 h-8 text-green-800 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                    <p className="text-gray-600">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {activeSection === 'insights' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Ground Truth Insights</h2>
              <div className="space-y-6">
                <InsightCard
                  quote="Why should I put my data where I don't know who is using it?"
                  source="Farmer Interview, Akwa Ibom"
                  theme="Trust First"
                />
                <InsightCard
                  quote="If it connects us to markets or programs, I will enter it every day."
                  source="Young Farmer Feedback"
                  theme="Value-Driven Adoption"
                />
                <InsightCard
                  quote="We support farmers, but we don't always know their true challenges."
                  source="NGO Volunteer"
                  theme="Data Gap"
                />
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <h4 className="font-bold mb-1">Farmers Want</h4>
                  <p className="text-sm">Simplicity & immediate value</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold mb-1">NGOs Need</h4>
                  <p className="text-sm">Verified data for impact tracking</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-bold mb-1">Market Craves</h4>
                  <p className="text-sm">Transparent supply chains</p>
                </div>
              </div>
            </SectionCard>
          )}

          {activeSection === 'roadmap' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Strategic Roadmap</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our phased approach ensures steady growth while maintaining farmer-centric design 
                and technological excellence. We're building not just a product, but an ecosystem.
              </p>
              <div className="space-y-8">
                <RoadmapPhase
                  phase="Phase 1: MVP Launch"
                  timeframe="Completed (Hackathon)"
                  achievements={['Web App MVP', 'AI Assistant', '50-100 Pilot Farmers', 'Cardano Integration']}
                  status="completed"
                />
                <RoadmapPhase
                  phase="Phase 2: Ecosystem Growth"
                  timeframe="6-12 Months"
                  achievements={['Smart Contract Payments', 'NGO Dashboards', 'IoT Integration', 'API Layer']}
                  status="current"
                />
                <RoadmapPhase
                  phase="Phase 3: Continental Scale"
                  timeframe="18-24 Months"
                  achievements={['Multi-Country Expansion', 'Advanced Analytics', 'Hardware Integration', 'Policy Partnerships']}
                  status="future"
                />
              </div>
            </SectionCard>
          )}

          {activeSection === 'funding' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Strategic Use of Funds</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { percent: '40%', area: 'Product Development', desc: 'AI enhancement & feature expansion' },
                  { percent: '25%', area: 'Farmer Onboarding', desc: 'Training & pilot programs' },
                  { percent: '20%', area: 'Gas Fee Sponsorship', desc: 'All gas fees sponsored by Agridatum' },
                  { percent: '15%', area: 'Marketing & Partnerships', desc: 'NGO & buyer acquisition' },
                ].map((item) => (
                  <div key={item.area} className="text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">{item.percent}</div>
                    <h3 className="font-bold text-lg mb-1">{item.area}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {activeSection === 'team' && (
            <SectionCard>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Exceptional Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TeamMember
                  name="Dominion Ekpuk"
                  role="Frontend & Blockchain Lead"
                  expertise="Cardano Tooling, React.js"
                  icon={<Code className="w-6 h-6" />}
                />
                <TeamMember
                  name="Glory Archibong"
                  role="Project Manager"
                  expertise="Community Research, Strategy"
                  icon={<Users className="w-6 h-6" />}
                />
                <TeamMember
                  name="Favour Sunday"
                  role="Backend & Blockchain"
                  expertise="Node.js, BlockFrost"
                  icon={<Database className="w-6 h-6" />}
                />
                <TeamMember
                  name="Peace Essien"
                  role="UI/UX Designer"
                  expertise="Farmer-Centric Design"
                  icon={<Palette className="w-6 h-6" />}
                />
              </div>
              <div className="mt-8 p-6 glassmorphism rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">Why We'll Succeed</h3>
                <p className="text-lg">
                  We combine <strong>technical expertise</strong> with <strong>deep community understanding</strong>. 
                  Each team member has unique strengths that directly address the challenges we're solving. 
                  We've already validated our approach through ground truth research and built a working MVP.
                </p>
              </div>
            </SectionCard>
          )}
        </div>

        <footer className="mt-16 text-center">
          <div className="glassmorphism rounded-3xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join the Agricultural Revolution</h2>
            <p className="text-gray-600 mb-6">
              Help us empower millions of farmers with data ownership and AI-powered insights.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-green-800 text-white rounded-xl font-bold hover:bg-emerald-600 transition">
                Invest in AgriDatum
              </button>
              <button className="px-8 py-3 glassmorphism-light rounded-xl font-bold hover:bg-white/50 transition">
                Partner With Us
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-6">
              <span className="text-gray-500">Built for farmers, by innovators who care</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const SectionCard = ({ children }: { children: React.ReactNode }) => (
  <div className="glassmorphism rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
    {children}
  </div>
);

const ProblemCard = ({ icon, title, description, color }: any) => (
  <div className="glassmorphism-light p-6 rounded-2xl">
    <div className={`text-${color}-500 mb-4`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionFeature = ({ icon, title, description, features }: any) => (
  <div className="glassmorphism-light p-6 rounded-2xl">
    <div className="text-green-800 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-800" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

// const ServiceCard = ({ title, description, icon, gradient }: any) => (
//   <div className="glassmorphism-light p-6 rounded-2xl text-center">
//     <div className={`text-4xl mb-4 bg-linear-to-r ${gradient} bg-clip-text text-transparent`}>
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

const MarketStat = ({ value, label, description }: any) => (
  <div className="text-center">
    <div className="text-5xl font-bold text-green-800 mb-2">{value}</div>
    <h3 className="text-xl font-bold mb-1">{label}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CompetitorCard = ({ type, name, weakness }: any) => (
  <div className="glassmorphism-light p-6 rounded-2xl">
    <div className="flex justify-between items-start mb-3">
      <div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          type === 'Direct' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {type} Competitor
        </span>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
      </div>
    </div>
    <div className="p-3 bg-red-50 rounded-lg">
      <p className="text-red-700"><strong>Weakness:</strong> {weakness}</p>
    </div>
  </div>
);

const InsightCard = ({ quote, source, theme }: any) => (
  <div className="glassmorphism-light p-6 rounded-2xl">
    <p className="text-lg italic text-gray-700 mb-3">"{quote}"</p>
    <div className="flex justify-between items-center">
      <span className="text-gray-500">{source}</span>
      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
        {theme}
      </span>
    </div>
  </div>
);

const RoadmapPhase = ({ phase, timeframe, achievements, status }: any) => (
  <div className="relative pl-8 border-l-2 border-emerald-200">
    <div className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full ${
      status === 'completed' ? 'bg-green-800' :
      status === 'current' ? 'bg-green-700 animate-pulse' :
      'bg-green-600'
    }`} />
    <div className="flex flex-wrap justify-between items-start mb-4">
      <h3 className="text-2xl font-bold">{phase}</h3>
      <span className="px-3 py-1 bg-gray-100 rounded-full">{timeframe}</span>
    </div>
    <div className="grid md:grid-cols-2 gap-3">
      {achievements.map((a: string, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-800" />
          <span>{a}</span>
        </div>
      ))}
    </div>
  </div>
);

const TeamMember = ({ name, role, expertise, icon }: any) => (
  <div className="glassmorphism-light p-6 rounded-2xl text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-800 flex items-center justify-center text-white text-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-green-800 font-medium mb-2">{role}</p>
    <p className="text-sm text-gray-600">{expertise}</p>
  </div>
);

export default PitchDeck;