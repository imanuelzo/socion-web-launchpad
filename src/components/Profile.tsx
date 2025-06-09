
import { useState } from 'react';
import { User, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileProps {
  username: string;
  onCreateToken: () => void;
}

const Profile = ({ username, onCreateToken }: ProfileProps) => {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-pink-400 text-white">
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{username}</h2>
              <div className="text-gray-400 space-y-1">
                <div>Username</div>
                <div>Address</div>
                <div>Verification</div>
                <div>Follower</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Deskripsi</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Status */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-white">YOU DOESN'T HAVE ANY TOKEN</h3>
        <Button 
          onClick={onCreateToken}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Create Token
        </Button>
      </div>
    </div>
  );
};

export default Profile;
