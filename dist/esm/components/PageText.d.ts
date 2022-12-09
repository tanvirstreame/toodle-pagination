import { FC } from 'react';
import "./css/page-number.css";
declare const PageText: FC<{
    text: string;
    value: string;
    onClick: (value: string) => void;
}>;
export default PageText;
