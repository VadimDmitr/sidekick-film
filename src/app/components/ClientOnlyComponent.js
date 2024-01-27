"use client"

import { useState, useEffect } from 'react';

export default function ClientOnlyComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>;
}
