import { useState, FC } from 'react';
import PageNumber from './PageNumber';
import PageText from './PageText';

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
    const handleNumberClick = (value: number) => {
      setActive(value);
      handlePageNumber(value);
    }

    const handleNextPrevClick = (value: string) => {
      if (value === "next" && total > active) {
        setActive(active + 1);
        handlePageNumber(active + 1);
      }
      else if (value === "previous" && active > 1) {
        setActive(active - 1);
        handlePageNumber(active - 1);
      }
    }

    return (
      <div className="App">
        <PageText
          onClick={handleNextPrevClick}
          value={"previous"}
          text={previousLabel}
        />

        {Array.from(Array(pageRangeDisplayed), (e, i) => {
          if (i + 1 !== total) {
            return <PageNumber
              onClick={handleNumberClick}
              key={i + 1}
              isActive={active === i + 1}
              value={i + 1}
            />
          }

        })}
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
