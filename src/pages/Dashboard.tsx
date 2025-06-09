
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { Search, Home, Coins, Wallet, LogOut, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Profile from '@/components/Profile';
import CreateTokenModal from '@/components/CreateTokenModal';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('TOKEN');
  const [showCreateToken, setShowCreateToken] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleLogout = () => {
    disconnect();
    localStorage.removeItem('userConnected');
    localStorage.removeItem('username');
    navigate('/');
  };

  const handleCreateToken = (tokenData: any) => {
    console.log('Creating token:', tokenData);
    // Here you would typically send this data to your backend
  };

  const username = localStorage.getItem('username') || 'User';

  const trendingTokens = [
    { name: 'TOL', price: '$1.25', change: '+5.2%' },
    { name: 'TOL', price: '$0.89', change: '+3.8%' },
    { name: 'TOL', price: '$2.15', change: '+7.1%' },
    { name: 'TOL', price: '$0.45', change: '+2.3%' },
    { name: 'TOL', price: '$1.78', change: '+4.6%' },
    { name: 'TOL', price: '$0.92', change: '+1.9%' },
    { name: 'TOL', price: '$3.21', change: '+8.4%' },
    { name: 'TOL', price: '$1.56', change: '+6.7%' },
  ];

  const videoContent = [
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '1.2K views', time: '2 hours ago' },
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '856 views', time: '4 hours ago' },
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '2.1K views', time: '6 hours ago' },
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '943 views', time: '8 hours ago' },
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '1.7K views', time: '10 hours ago' },
    { title: 'Bahasa Uang, Longevity, dan Kesehatan', views: '675 views', time: '12 hours ago' },
  ];

  const renderMainContent = () => {
    if (showProfile) {
      return <Profile username={username} onCreateToken={() => setShowCreateToken(true)} />;
    }

    switch (activeTab) {
      case 'TOKEN':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {videoContent.map((video, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-400 text-xs">{video.views} • {video.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'HOLDING':
        return (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-400">Your Token Holdings</h3>
            <p className="text-gray-500 mt-2">No tokens in your wallet yet</p>
          </div>
        );
      case 'POST':
        return (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-400">Your Posts</h3>
            <p className="text-gray-500 mt-2">No posts created yet</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="text-2xl font-bold text-blue-400">socion</div>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <ConnectButton />
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 bg-gray-900 border-r border-gray-800 p-4">
          <nav className="flex flex-col space-y-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${activeTab === 'TOKEN' ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-300`}
              onClick={() => {
                setActiveTab('TOKEN');
                setShowProfile(false);
              }}
            >
              <Home className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${activeTab === 'HOLDING' ? 'text-blue-400' : 'text-gray-400'} hover:text-white`}
              onClick={() => {
                setActiveTab('HOLDING');
                setShowProfile(false);
              }}
            >
              <Coins className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${activeTab === 'POST' ? 'text-blue-400' : 'text-gray-400'} hover:text-white`}
              onClick={() => {
                setActiveTab('POST');
                setShowProfile(false);
              }}
            >
              <Wallet className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${showProfile ? 'text-blue-400' : 'text-gray-400'} hover:text-white`}
              onClick={() => setShowProfile(true)}
            >
              <User className="w-6 h-6" />
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {!showProfile && (
            <div className="bg-gray-800 border-b border-gray-700">
              <div className="flex">
                <Button
                  variant="ghost"
                  className={`flex-1 py-4 rounded-none ${activeTab === 'TOKEN' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('TOKEN')}
                >
                  TOKEN
                </Button>
                <Button
                  variant="ghost"
                  className={`flex-1 py-4 rounded-none ${activeTab === 'HOLDING' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('HOLDING')}
                >
                  HOLDING
                </Button>
                <Button
                  variant="ghost"
                  className={`flex-1 py-4 rounded-none ${activeTab === 'POST' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('POST')}
                >
                  POST
                </Button>
              </div>
            </div>
          )}
          
          <div className="p-6">
            {renderMainContent()}
          </div>
        </main>

        {/* Trending Sidebar */}
        <aside className="w-80 bg-gray-900 border-l border-gray-800 p-6">
          <h2 className="text-xl font-bold text-blue-400 mb-6">Trending Token</h2>
          <div className="space-y-4">
            {trendingTokens.map((token, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{token.name}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{token.name}</div>
                      <div className="text-gray-400 text-xs">Token Name</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium text-sm">{token.price}</div>
                    <div className="text-green-400 text-xs">{token.change}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </aside>
      </div>

      <CreateTokenModal
        isOpen={showCreateToken}
        onClose={() => setShowCreateToken(false)}
        onSubmit={handleCreateToken}
      />
    </div>
  );
};

export default Dashboard;
