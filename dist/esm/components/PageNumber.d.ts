import { FC } from 'react';
import "./css/page-number.css";
declare const PageNumber: FC<{
    value: number;
    text?: string | null;
    isActive?: boolean;
    onClick: (value: number) => void;
}>;
export default PageNumber;
