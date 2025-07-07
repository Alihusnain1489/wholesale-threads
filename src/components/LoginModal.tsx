
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LoginForm from './LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const LoginModal = ({ isOpen, onOpenChange, onSuccess }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    onOpenChange(false);
    onSuccess?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 p-0 bg-transparent shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{isLogin ? 'Login' : 'Sign Up'}</DialogTitle>
        </DialogHeader>
        <LoginForm 
          isLogin={isLogin} 
          onToggle={handleToggle}
          onClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
