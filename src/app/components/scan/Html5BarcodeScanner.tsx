// components/Html5BarcodeScanner.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import React from 'react';

interface Props {
  onScanSuccess: (decodedText: string) => void;
  onScanFailure?: (error: string) => void;
}

export default function Html5BarcodeScanner({ onScanSuccess, onScanFailure }: Props) {
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const scanner = new Html5QrcodeScanner(
      'html5qr-code-full-region',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA], // ✅ Fix here
      },
      false
    );

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
        scanner.clear(); // stop scanning after success
      },
      (error) => {
        if (onScanFailure) onScanFailure(error);
      }
    );

    return () => {
      scanner.clear().catch((err) => console.error('Failed to clear scanner', err));
    };
  }, []);

  return <div id="html5qr-code-full-region" ref={scannerRef} />;
}
