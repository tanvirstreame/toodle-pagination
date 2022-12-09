import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import PageNumber from './PageNumber';
import PageText from './PageText';
import './css/pagination.css';
var Pagination = function (_a) {
    var _b = _a.breakLabel, breakLabel = _b === void 0 ? "..." : _b, _c = _a.pageRangeDisplayed, pageRangeDisplayed = _c === void 0 ? 10 : _c, _d = _a.total, total = _d === void 0 ? 10 : _d, handlePageNumber = _a.handlePageNumber, _e = _a.nextLabel, nextLabel = _e === void 0 ? "Next" : _e, _f = _a.previousLabel, previousLabel = _f === void 0 ? "Prevous" : _f;
    var _g = useState(1), active = _g[0], setActive = _g[1];
    var _h = useState({
        start: 1, end: pageRangeDisplayed
    }), index = _h[0], setIndex = _h[1];
    var handleNumberClick = function (value) {
        setActive(value);
        handlePageNumber(value);
    };
    var handleNextPrevClick = function (value) {
        if (value === "next" && total > active) {
            setActive(active + 1);
            if (active + 1 > index.end) {
                setIndex({
                    start: active + 1,
                    end: index.end + pageRangeDisplayed
                });
            }
            handlePageNumber(active + 1);
        }
        else if (value === "previous" && active > 1) {
            setActive(active - 1);
            if (active === total) {
                setIndex({
                    start: total - pageRangeDisplayed + 1,
                    end: total
                });
            }
            else if (active - 1 < index.start) {
                setIndex({
                    start: active - pageRangeDisplayed,
                    end: index.end - pageRangeDisplayed
                });
            }
            handlePageNumber(active - 1);
        }
    };
    var itemNumber = function () {
        var divArray = [];
        for (var i = index.start; i < index.end + 1; i++) {
            if (i !== total) {
                divArray.push(_jsx(PageNumber, { onClick: handleNumberClick, isActive: active === i, value: i }, i));
            }
        }
        return divArray;
    };
    return (_jsxs("div", __assign({ className: "pagination-component" }, { children: [_jsx(PageText, { onClick: handleNextPrevClick, value: "previous", text: previousLabel }), itemNumber(), breakLabel, " ", _jsx(PageNumber, { onClick: handleNumberClick, isActive: active === total, value: total }), _jsx(PageText, { onClick: handleNextPrevClick, value: "next", text: nextLabel })] })));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map