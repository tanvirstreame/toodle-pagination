import { FC } from 'react';
import './css/pagination.css';
declare const Pagination: FC<{
    pageRangeDisplayed?: number;
    total?: number;
    handlePageNumber: (value: number) => void;
    breakLabel?: string;
    nextLabel: string;
    previousLabel: string;
}>;
export default Pagination;
