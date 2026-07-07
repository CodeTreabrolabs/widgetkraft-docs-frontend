'use client';

import { Zap } from 'lucide-react';
import { DocsButton } from '@/comps/docs-ui';

export default function ConnectButton({ integrationName }) {
  const handleClick = () => {
    window.location.href = 'https://www.widgetkraft.com/signin';
  };

  return (
    <DocsButton variant="primary" className="w-full justify-center" onClick={handleClick}>
      <Zap size={16} />
      Connect {integrationName}
    </DocsButton>
  );
}
