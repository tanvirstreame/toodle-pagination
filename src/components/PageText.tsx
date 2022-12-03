import { FC } from 'react';
import "./page-number.css";
const PageText: FC<{
  text: string,
  value: string,
  onClick: (value: string) => void
}> = ({ text, value, onClick }) => {
  
  return (
    <button onClick={() => onClick(value)} className="page-number-component">
      {text}
    </button>
  );
}

export default PageText;
