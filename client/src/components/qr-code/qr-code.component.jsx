import QRCode from "qrcode";
import { useEffect, useState} from "react";

const QRCodeGenerate = ({link}) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(link).then((data) => {
      setSrc(data);
    })
  }, [])
  return (
    <div>
      QR Code Setup here
      <img src={src} />
    </div>
  )
}

export default QRCodeGenerate;