webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/NavMenu.js":
/*!*******************************!*\
  !*** ./components/NavMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\Furkat\\Documents\\Next JS Projects\\frugalhood\\components\\NavMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "jh6ki71urbtb",
  accessToken: "hn4AWf-zvXNukRQrQt7jA_orP06WfFEERnm98loN-DU"
});

var ListMenuItem = function ListMenuItem(props) {
  var menuItem = props.menuItem;

  collapseDropdown = function collapseDropdown() {
    document.querySelector('#burger').classList.toggle('is-active');
    document.querySelector('#navMenu').classList.toggle('is-active');
  };

  if (menuItem.fields.hasChildMenuItem) {
    return __jsx("div", {
      className: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/[menuSlug]',
        query: {
          slug: menuItem.fields.slug,
          id: menuItem.sys.id,
          name: menuItem.fields.name
        }
      },
      as: "/" + menuItem.fields.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, menuItem.fields.name)), __jsx("div", {
      className: "navbar-dropdown is-hidden-touch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, menuItem.fields.subMenuItems.map(function (subMenuItem) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: subMenuItem.fields.slug,
        href: {
          pathname: '/[menuSlug]',
          query: {
            slug: subMenuItem.fields.slug,
            id: subMenuItem.sys.id,
            name: subMenuItem.fields.name
          }
        },
        as: "/" + subMenuItem.fields.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-item",
        onClick: _this.collapseDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, subMenuItem.fields.name));
    })));
  } else {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/[menuSlug]',
        query: {
          slug: menuItem.fields.slug,
          id: menuItem.sys.id,
          name: menuItem.fields.name
        }
      },
      as: "/" + menuItem.fields.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, menuItem.fields.name));
  }
};

var NavMenu = function NavMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      menuItems = _useState[0],
      setMenuItems = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getMenuItems() {
      return _getMenuItems.apply(this, arguments);
    }

    function _getMenuItems() {
      _getMenuItems = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var contentType, allMenuItems;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return client.getContentType("menuItem");

              case 2:
                contentType = _context.sent;
                _context.next = 5;
                return client.getEntries({
                  content_type: contentType.sys.id,
                  'fields.hasParentMenuItem[nin]': true,
                  order: 'fields.orderNumber'
                });

              case 5:
                allMenuItems = _context.sent;
                setMenuItems(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allMenuItems.items));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getMenuItems.apply(this, arguments);
    }

    getMenuItems();
  }, []);
  return __jsx("div", {
    id: "navMenu",
    className: "navbar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "navbar-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, menuItems.length > 0 ? menuItems.map(function (i) {
    return __jsx(ListMenuItem, {
      key: i.fields.slug,
      menuItem: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  }) : null, __jsx("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("button", {
    className: "button is-primary is-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Newsletter"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ })

})
//# sourceMappingURL=_app.js.5da21c52cad4c0ab4427.hot-update.js.map