import QRCode from "qrcode";
import { useEffect, useState} from "react";

const QRCodeGenerate = ({link}) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(link).then((data) => {
      setSrc(data);
    })
  }, [link]);
  return (
    <div>
      QR Code:
      <img src={src} />
      Link: <br/>
      {link}
    </div>
  )
}

export default QRCodeGenerate;