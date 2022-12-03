import { FC } from 'react';
import "./page-number.css";
const PageNumber: FC<{
  value: number,
  text?: string | null,
  isActive?: boolean,
  onClick: (value: number) => void
}> = ({ value, onClick, isActive = false }) => {
  
  return (
    <button
      className={`page-number-component ${isActive ? 'active' : ''}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default PageNumber;
