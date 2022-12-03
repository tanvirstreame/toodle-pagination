import { useState, FC } from 'react';
import PageNumber from './PageNumber';
import PageText from './PageText';
import './css/pagination.css'

const Paginantion: FC<{
  pageRangeDisplayed?: number,
  total?: number,
  handlePageNumber: (value: number) => void,
  breakLabel?: string,
  nextLabel: string,
  previousLabel: string
}>
  =
  ({
    breakLabel = "...",
    pageRangeDisplayed = 10,
    total = 10,
    handlePageNumber,
    nextLabel = "Next",
    previousLabel = "Prevous"
  }) => {
    const [active, setActive] = useState(1);
    const [index, setIndex] = useState({
      start: 1, end: pageRangeDisplayed
    });
    const handleNumberClick = (value: number) => {
      setActive(value);
      handlePageNumber(value);
    }

    const handleNextPrevClick = (value: string) => {
      if (value === "next" && total > active) {
        setActive(active + 1);
        if (active + 1 > index.end) {
          setIndex({
            start: active + 1,
            end: index.end + pageRangeDisplayed
          })
        }
        handlePageNumber(active + 1);
      }
      else if (value === "previous" && active > 1) {
        setActive(active - 1);
        if (active === total) {
          setIndex({
            start: total - pageRangeDisplayed + 1,
            end: total
          })
        }
        else if (active - 1 < index.start) {
          setIndex({
            start: active - pageRangeDisplayed,
            end: index.end - pageRangeDisplayed
          })
        }
        handlePageNumber(active - 1);
      }
    }

    const itemNumber = () => {
      let divArray = [];
      for (let i = index.start; i < index.end + 1; i++) {
        if (i !== total) {
          divArray.push(
            <PageNumber
              onClick={handleNumberClick}
              key={i}
              isActive={active === i}
              value={i}
            />
          )
        }
      }
      return divArray;
    }

    return (
      <div className="pagination-component">
        <PageText
          onClick={handleNextPrevClick}
          value={"previous"}
          text={previousLabel}
        />
        {itemNumber()}
        {breakLabel} <PageNumber
          onClick={handleNumberClick}
          isActive={active === total}
          value={total}
        />
        <PageText
          onClick={handleNextPrevClick}
          value={"next"}
          text={nextLabel}
        />
      </div>
    );
  }

export default Paginantion;
