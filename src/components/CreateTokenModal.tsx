
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tokenData: any) => void;
}

const CreateTokenModal = ({ isOpen, onClose, onSubmit }: CreateTokenModalProps) => {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = () => {
    onSubmit({
      name: tokenName,
      symbol: tokenSymbol,
      youtubeLink,
      walletAddress
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Make your Token FR</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div>
            <Label htmlFor="tokenName" className="text-gray-300">Token Name</Label>
            <Input
              id="tokenName"
              placeholder="Token Name"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-full"
            />
          </div>
          
          <div>
            <Label htmlFor="tokenSymbol" className="text-gray-300">Token Symbol</Label>
            <Input
              id="tokenSymbol"
              placeholder="Token Symbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-full"
            />
          </div>
          
          <div>
            <Label htmlFor="youtubeLink" className="text-gray-300">Link Youtube</Label>
            <Input
              id="youtubeLink"
              placeholder="Link Youtube"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-full"
            />
          </div>
          
          <div>
            <Label htmlFor="walletAddress" className="text-gray-300">Wallet Address</Label>
            <Input
              id="walletAddress"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-full"
            />
          </div>
          
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-6"
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTokenModal;
