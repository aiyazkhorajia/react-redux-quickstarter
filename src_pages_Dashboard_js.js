(self["webpackChunkreact_redux_starter"] = self["webpackChunkreact_redux_starter"] || []).push([["src_pages_Dashboard_js"],{

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

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Dashboard = function Dashboard() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.usersData;
  }),
      loading = _useSelector.loading,
      data = _useSelector.data;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,Store_actions__WEBPACK_IMPORTED_MODULE_2__.fetchUsers)());
  }, [dispatch]);

  var handleSignOut = function handleSignOut() {
    dispatch((0,Store_actions__WEBPACK_IMPORTED_MODULE_2__.signOut)());
  };

  var membersView;

  if (loading) {
    membersView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: "Please wait..."
    });
  } else if (data && data.data) {
    membersView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4",
      children: data.data.map(function (member) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: member.avatar,
              className: "card-img-top",
              alt: member.first_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                className: "card-title",
                children: member.first_name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "card-text",
                children: member.email
              })]
            })]
          })
        }, member.id);
      })
    });
  } else {
    membersView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: "No member found!"
    });
  }

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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "d-inline-block",
                children: "Our Members"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                className: "btn btn-primary d-inline-block m-2",
                onClick: function onClick() {
                  return handleSignOut();
                },
                children: "Sign Out"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "List of members fetched from the API"
            }), membersView]
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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
//# sourceMappingURL=src_pages_Dashboard_js.js.map