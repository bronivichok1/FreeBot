import { useRef, useEffect, useState } from 'react';

export const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };