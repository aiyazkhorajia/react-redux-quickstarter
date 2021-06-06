(self["webpackChunkreact_redux_starter"] = self["webpackChunkreact_redux_starter"] || []).push([["src_pages_SignIn_js"],{

/***/ "./src/components/SignInForm.js":
/*!**************************************!*\
  !*** ./src/components/SignInForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var Store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SignInForm = function SignInForm() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.signInData;
  }),
      loading = _useSelector.loading,
      error = _useSelector.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('eve.holt@reqres.in'),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('cityslicka'),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,Store_actions__WEBPACK_IMPORTED_MODULE_2__.signIn)({
      email: email,
      password: password
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "form-body",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "form-holder",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "form-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "form-items",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              children: "Sign In"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "Enter your email and password."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
              className: "requires-validation",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  className: "form-control",
                  name: "email",
                  placeholder: "E-mail Address",
                  value: email,
                  onChange: function onChange(e) {
                    return setEmail(e.target.value);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "valid-feedback",
                  children: "Email field is valid!"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "invalid-feedback",
                  children: "Email field cannot be blank!"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  className: "form-control",
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  value: password,
                  onChange: function onChange(e) {
                    return setPassword(e.target.value);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "valid-feedback",
                  children: "Password field is valid!"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "invalid-feedback",
                  children: "Password field cannot be blank!"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "form-button mt-3 d-inline-block",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  id: "submit",
                  type: "button",
                  className: "btn btn-primary",
                  onClick: function onClick(e) {
                    return handleSubmit(e);
                  },
                  children: "Sign In"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "signup-link d-inline-block m-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                  children: ["New User?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    to: "/signup",
                    type: "button",
                    className: "btn btn-link",
                    children: "Sign Up"
                  })]
                })
              }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "Verifying details..."
              }), !!error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "alert alert-danger",
                role: "alert",
                children: ["Error: ", error]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SignInForm);

/***/ }),

/***/ "./src/helpers/axios.js":
/*!******************************!*\
  !*** ./src/helpers/axios.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var axiosObj = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://reqres.in/",
  timeout: 10000
});
axiosObj.interceptors.request.use(function (config) {
  var token = localStorage.getItem('access-token');

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, function (error) {
  Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (axiosObj);
/** Generate new access-token using refresh-token  */
// axiosConfig.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       originalRequest.data &&
//       originalRequest.data.AuthFlow === 'USER_PASSWORD_AUTH'
//     ) {
//       return Promise.reject(error);
//     }
//     const refreshToken = storageService.getRefreshToken();
//     if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
//       originalRequest._retry = true;
//       return axiosAuthInstance
//         .post('/signin', {
//           AuthFlow: 'REFRESH_TOKEN',
//           AuthParameters: {
//             REFRESH_TOKEN: refreshToken
//           }
//         })
//         .then((res) => {
//           if (res.status === 200) {
//             storageService.saveAccessToken(
//               res.data.AuthenticationResult.AccessToken
//             );
//             originalRequest.headers.Authorization =
//               'Bearer ' + res.data.AuthenticationResult.AccessToken;
//             axios.defaults.headers.common['Authorization'] =
//               'Bearer ' + res.data.AuthenticationResult.AccessToken;
//             return axios(originalRequest);
//           }
//         });
//     } else {
//       window.location.href = '/sign-in';
//       //return Promise.reject(error);
//     }
//   }
// );

/***/ }),

/***/ "./src/pages/SignIn.js":
/*!*****************************!*\
  !*** ./src/pages/SignIn.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Components_SignInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/SignInForm */ "./src/components/SignInForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var SignIn = function SignIn() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.signInData;
  }),
      isAuthenticated = _useSelector.isAuthenticated;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isAuthenticated) {
      history.push('/home');
    }
  }, [history, isAuthenticated]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Components_SignInForm__WEBPACK_IMPORTED_MODULE_2__.default, {})
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/store/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/authActions.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUp": function() { return /* binding */ signUp; },
/* harmony export */   "signIn": function() { return /* binding */ signIn; },
/* harmony export */   "signOut": function() { return /* binding */ signOut; }
/* harmony export */ });
/* harmony import */ var Store_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Store/constants */ "./src/store/constants.js");
/* harmony import */ var Helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/axios */ "./src/helpers/axios.js");


function signUp(body) {
  return function (dispatch) {
    dispatch(request());
    return Helpers_axios__WEBPACK_IMPORTED_MODULE_1__.default.post("/api/register", body).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      dispatch(failure(error.response.data.error));
    });
  };

  function request() {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNUP_REQUEST
    };
  }

  function success(payload) {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNUP_REQUEST_SUCCESS,
      payload: payload
    };
  }

  function failure(error) {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNUP_REQUEST_FAILURE,
      error: error
    };
  }
}
function signIn(body) {
  return function (dispatch) {
    dispatch(request());
    return Helpers_axios__WEBPACK_IMPORTED_MODULE_1__.default.post("/api/login", body).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      dispatch(failure(error.response.data.error));
    });
  };

  function request() {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNIN_REQUEST
    };
  }

  function success(payload) {
    localStorage.setItem("access-token", payload.token);
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNIN_REQUEST_SUCCESS,
      payload: payload
    };
  }

  function failure(error) {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNIN_REQUEST_FAILURE,
      error: error
    };
  }
}
function signOut() {
  localStorage.removeItem('access-token');
  return function (dispatch) {
    dispatch({
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.SIGNOUT
    });
  };
}

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signIn": function() { return /* reexport safe */ _authActions__WEBPACK_IMPORTED_MODULE_0__.signIn; },
/* harmony export */   "signOut": function() { return /* reexport safe */ _authActions__WEBPACK_IMPORTED_MODULE_0__.signOut; },
/* harmony export */   "signUp": function() { return /* reexport safe */ _authActions__WEBPACK_IMPORTED_MODULE_0__.signUp; },
/* harmony export */   "fetchUsers": function() { return /* reexport safe */ _userActions__WEBPACK_IMPORTED_MODULE_1__.fetchUsers; }
/* harmony export */ });
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ "./src/store/actions/authActions.js");
/* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userActions */ "./src/store/actions/userActions.js");



/***/ }),

/***/ "./src/store/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/userActions.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": function() { return /* binding */ fetchUsers; }
/* harmony export */ });
/* harmony import */ var Store_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Store/constants */ "./src/store/constants.js");
/* harmony import */ var Helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/axios */ "./src/helpers/axios.js");


function fetchUsers(body) {
  return function (dispatch) {
    dispatch(request());
    return Helpers_axios__WEBPACK_IMPORTED_MODULE_1__.default.get("/api/users?page=1&per_page=8", body).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      dispatch(failure('Error Occurs'));
    });
  };

  function request() {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH_USER_REQUEST
    };
  }

  function success(payload) {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH_USER_REQUEST_SUCCESS,
      payload: payload
    };
  }

  function failure(error) {
    return {
      type: Store_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH_USER_REQUEST_FAILURE,
      error: error
    };
  }
}

/***/ })

}]);
//# sourceMappingURL=src_pages_SignIn_js.js.map