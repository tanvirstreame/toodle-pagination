import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./css/page-number.css";
var PageText = function (_a) {
    var text = _a.text, value = _a.value, onClick = _a.onClick;
    return (_jsx("button", __assign({ onClick: function () { return onClick(value); }, className: "page-number-component" }, { children: text })));
};
export default PageText;
//# sourceMappingURL=PageText.js.map