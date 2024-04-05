import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode'


function App() {

  const [scanResult, setScan] = useState(null);

  useEffect(() => {

    function onScanSuccess(decodedText, decodedResult) {
      setScan(decodedText)
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    const formatsToSupport = [
      Html5QrcodeSupportedFormats.QR_CODE,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
      Html5QrcodeSupportedFormats.CODE_128,
    ];

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 400, height: 400 },
        formatsToSupport: formatsToSupport
      },
      false);
    html5QrcodeScanner.render(onScanSuccess);

  }, []);

  return (
    <div className='container-fluid'>
      <div className="row">
        <div id='reader'></div>
      </div>
      {scanResult ? "" : scanResult}
    </div>
  )
}

export default App