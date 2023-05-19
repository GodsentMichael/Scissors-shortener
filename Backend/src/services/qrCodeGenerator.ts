import QRCode from 'qrcode';


// With async/await
// export const generateQrCode = async (text: string) => {
//     try {
//       console.log(await QRCode.toDataURL('text', {errorCorrectionLevel: 'M'}))
//     } catch (err) {
//       console.error(err)
//     }
//   }

  export const generateQRCode = (text: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      QRCode.toBuffer(text, (error, buffer) => {
        if (error) {
          reject(error);
        } else {
          resolve(buffer);
        }
      });
    });
  };