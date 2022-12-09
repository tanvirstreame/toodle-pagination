import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./css/page-number.css";
var PageNumber = function (_a) {
    var value = _a.value, onClick = _a.onClick, _b = _a.isActive, isActive = _b === void 0 ? false : _b;
    return (_jsx("button", __assign({ className: "page-number-component ".concat(isActive ? 'active' : ''), onClick: function () { return onClick(value); } }, { children: value })));
};
export default PageNumber;
//# sourceMappingURL=PageNumber.js.map