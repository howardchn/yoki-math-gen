/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-chart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-chart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_scoreService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scoreService */ "./src/services/scoreService.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['userId'],
  data: function data() {
    return {
      ctx: null,
      chart: null,
      scores: null
    };
  },
  watch: {
    userId: function userId(val) {
      var _this = this;

      if (!val) return;
      _services_scoreService__WEBPACK_IMPORTED_MODULE_0__["query"].equalTo('userId', val);
      _services_scoreService__WEBPACK_IMPORTED_MODULE_0__["query"].find().then(function (r) {
        var dates = r.map(function (d) {
          return new Date(d.createdAt);
        });
        var values = r.map(function (d) {
          return d.attributes.score;
        });
        _this.chart = Highcharts.chart('container', {
          chart: {
            type: 'line'
          },
          title: {
            text: '测试曲线图'
          },
          xAxis: {
            categories: dates,
            type: 'datetime',
            labels: {
              format: '{value:%Y-%b-%e}'
            }
          },
          yAxis: {
            title: {
              text: 'Scores'
            }
          },
          series: [{
            name: 'Score',
            data: values
          }]
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-content.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conf */ "./src/conf.js");
/* harmony import */ var _timer_board_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer-board.vue */ "./src/components/timer-board.vue");
/* harmony import */ var _question_list_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-list.vue */ "./src/components/question-list.vue");
/* harmony import */ var _services_scoreService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scoreService */ "./src/services/scoreService.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/userService */ "./src/services/userService.js");
/* harmony import */ var _examsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../examsMenu */ "./src/examsMenu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







function getTitle(path) {
  var result = '';
  var menuItems = _examsMenu__WEBPACK_IMPORTED_MODULE_5__["default"].filter(function (m) {
    return m.href == path;
  });

  if (menuItems.length > 0) {
    result += ' - ' + menuItems[0].name;
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'question-list': _question_list_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'timer-board': _timer_board_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['method', 'type'],
  data: function data() {
    var questions = [];
    var questionCount = _conf__WEBPACK_IMPORTED_MODULE_0__["default"].getCount();

    for (var i = 0; i < questionCount; i++) {
      var question = this.method();
      question.id = i;
      questions.push(question);
    }

    return {
      user: null,
      current: 0,
      questions: questions,
      answer: '',
      mod: '',
      count: questionCount,
      finished: false,
      inChecking: false,
      submitted: false,
      score: 0,
      solveTimespan: 0,
      totalTimespan: 0,
      title: getTitle(this.$route.fullPath)
    };
  },
  computed: {
    currentQuestion: function currentQuestion() {
      return this.questions[this.current];
    }
  },
  mounted: function mounted() {
    this.$refs.timerView.start();
  },
  methods: {
    next: function next() {
      if (this.answer === null || this.answer === undefined || this.answer.trim() === '') {
        return;
      }

      var temp = this.questions[this.current];
      temp.actual = this.answer;
      temp.correct = temp.actual == temp.v;

      if (temp.requireMod) {
        temp.actualMod = this.mod || 0;
      }

      this.answer = '';
      this.mod = '';

      if (this.questions.filter(function (q) {
        return q.actual != undefined;
      }).length === this.count) {
        this.finished = true;
      }

      if (this.current < this.count - 1) {
        this.current++;
      }
    },
    done: function done() {
      var _this = this;

      this.$refs.timerView.stop();
      this.submitted = true;
      this.totalTimespan = this.$refs.timerView.elapsedSeconds;
      this.questions.forEach(function (q) {
        q.correct = q.actual == q.v;

        if (q.correct && q.requireMod) {
          q.correct = q.correct && q.actualMod == q.mod;
        }
      });
      this.score = this.questions.filter(function (q) {
        return q.correct;
      }).length * 100 / this.count;
      _services_userService__WEBPACK_IMPORTED_MODULE_4__["UserService"].verifyBySessionId().then(function (user) {
        var score = new _services_scoreService__WEBPACK_IMPORTED_MODULE_3__["Score"]();
        score.set('userId', user.id);
        score.set('count', _this.count);
        score.set('score', _this.score);
        score.set('type', _this.type);
        score.set('workingTimespan', _this.solveTimespan || _this.totalTimespan);
        score.set('totalTimespan', _this.totalTimespan);
        score.set('errorDetails', _this.questions.filter(function (q) {
          return !q.correct;
        }).map(function (q) {
          return q.expr + q.actual;
        }).join(';'));
        score.save();
      });
    },
    check: function check() {
      this.inChecking = true;
      this.solveTimespan = this.$refs.timerView.elapsedSeconds;
    },
    nextFocus: function nextFocus($event) {
      $event.target.nextElementSibling.forcus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_chart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-chart.vue */ "./src/components/app-chart.vue");
/* harmony import */ var _examsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examsMenu */ "./src/examsMenu.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/userService */ "./src/services/userService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app-main",
  components: {
    'app-chart': _app_chart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      items: _examsMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
      userId: null
    };
  },
  mounted: function mounted() {
    var that = this;
    _services_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"].verifyBySessionId().then(function (user) {
      that.userId = user.id;
    }, function (err) {
      that.$router.push({
        path: '/login'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userService */ "./src/services/userService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: 'howardch@outlook.com',
      password: 'ckeyhmon1',
      errorMsg: ''
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      _services_userService__WEBPACK_IMPORTED_MODULE_0__["User"].logIn(this.email, this.password).then(function (currentUser) {
        var token = currentUser._sessionToken;
        var account = currentUser.attributes.username;
        var email = currentUser.attributes.email;
        var userId = currentUser.id;

        _.toPairs({
          token: token,
          account: account,
          email: email,
          userId: userId
        }).forEach(function (item) {
          return document.cookie = item.join('=');
        });

        _this.$router.push({
          path: '/'
        });
      }, function (error) {
        _this.errorMsg = error.rawMessage;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/question-list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/question-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['questions', 'editing']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/signup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/signup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userService */ "./src/services/userService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: 'howardch@outlook.com',
      password: 'ckeyhmon1',
      passwordRepeat: 'ckeyhmon1',
      errorMsg: ''
    };
  },
  methods: {
    signUp: function signUp() {
      if (this.password != this.passwordRepeat) {
        errorMsg = 'Confirm your password';
        return;
      }

      var newUser = new _services_userService__WEBPACK_IMPORTED_MODULE_0__["User"]();
      newUser.setUsername(this.email);
      newUser.setEmail(this.email);
      newUser.setPassword(this.password);
      newUser.signUp().then(function (usr) {
        console.log(usr);
      }, function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/timer-board.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timer-board.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
var secondsPerHour = 3600;
var secondsPerMinute = 60;

function secondsToReadableTime(elapsedSeconds) {
  var hh = 0;
  var mm = 0;
  var ss = 0;
  var calcSeconds = elapsedSeconds;

  if (calcSeconds >= secondsPerHour) {
    hh = Math.floor(calcSeconds / secondsPerHour);
    calcSeconds -= secondsPerHour * hh;
  }

  if (calcSeconds >= secondsPerMinute) {
    mm = Math.floor(calcSeconds / secondsPerMinute);
    calcSeconds -= secondsPerMinute * mm;
  }

  ss = calcSeconds;
  var result = hh.toString().padStart(2, '0') + ' : ' + mm.toString().padStart(2, '0') + ' : ' + ss.toString().padStart(2, '0');
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      elapsedSeconds: 0,
      ticker: null
    };
  },
  computed: {
    elapsed: function elapsed() {
      return secondsToReadableTime(this.elapsedSeconds);
    }
  },
  methods: {
    start: function start() {
      var _this = this;

      if (this.ticker != null) {
        clearInterval(this.ticker);
      }

      this.ticker = setInterval(function () {
        _this.elapsedSeconds += 1;
      }, 1000);
    },
    stop: function stop() {
      if (this.ticker != null) {
        clearInterval(this.ticker);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-content.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.btn {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/leancloud-storage/dist/av-min.js":
/*!*******************************************************!*\
  !*** ./node_modules/leancloud-storage/dist/av-min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {!function (t, e) {
   true ? module.exports = e() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 15);
  }([function (t, e, n) {
    (function (t, n) {
      var r, i;
      !function () {
        var s = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {},
            o = s._,
            a = Array.prototype,
            u = Object.prototype,
            c = "undefined" != typeof Symbol ? Symbol.prototype : null,
            l = a.push,
            h = a.slice,
            f = u.toString,
            d = u.hasOwnProperty,
            p = Array.isArray,
            _ = Object.keys,
            v = Object.create,
            y = function () {},
            m = function (t) {
          return t instanceof m ? t : this instanceof m ? void (this._wrapped = t) : new m(t);
        };

        void 0 === e || e.nodeType ? s._ = m : (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = m), e._ = m), m.VERSION = "1.9.1";

        var g,
            b = function (t, e, n) {
          if (void 0 === e) return t;

          switch (null == n ? 3 : n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };

            case 3:
              return function (n, r, i) {
                return t.call(e, n, r, i);
              };

            case 4:
              return function (n, r, i, s) {
                return t.call(e, n, r, i, s);
              };
          }

          return function () {
            return t.apply(e, arguments);
          };
        },
            w = function (t, e, n) {
          return m.iteratee !== g ? m.iteratee(t, e) : null == t ? m.identity : m.isFunction(t) ? b(t, e, n) : m.isObject(t) && !m.isArray(t) ? m.matcher(t) : m.property(t);
        };

        m.iteratee = g = function (t, e) {
          return w(t, e, 1 / 0);
        };

        var O = function (t, e) {
          return e = null == e ? t.length - 1 : +e, function () {
            for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];

            switch (e) {
              case 0:
                return t.call(this, r);

              case 1:
                return t.call(this, arguments[0], r);

              case 2:
                return t.call(this, arguments[0], arguments[1], r);
            }

            var s = Array(e + 1);

            for (i = 0; i < e; i++) s[i] = arguments[i];

            return s[e] = r, t.apply(this, s);
          };
        },
            A = function (t) {
          if (!m.isObject(t)) return {};
          if (v) return v(t);
          y.prototype = t;
          var e = new y();
          return y.prototype = null, e;
        },
            S = function (t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        },
            C = function (t, e) {
          return null != t && d.call(t, e);
        },
            E = function (t, e) {
          for (var n = e.length, r = 0; r < n; r++) {
            if (null == t) return;
            t = t[e[r]];
          }

          return n ? t : void 0;
        },
            T = Math.pow(2, 53) - 1,
            N = S("length"),
            j = function (t) {
          var e = N(t);
          return "number" == typeof e && e >= 0 && e <= T;
        };

        m.each = m.forEach = function (t, e, n) {
          e = b(e, n);
          var r, i;
          if (j(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);else {
            var s = m.keys(t);

            for (r = 0, i = s.length; r < i; r++) e(t[s[r]], s[r], t);
          }
          return t;
        }, m.map = m.collect = function (t, e, n) {
          e = w(e, n);

          for (var r = !j(t) && m.keys(t), i = (r || t).length, s = Array(i), o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            s[o] = e(t[a], a, t);
          }

          return s;
        };

        var x = function (t) {
          var e = function (e, n, r, i) {
            var s = !j(e) && m.keys(e),
                o = (s || e).length,
                a = t > 0 ? 0 : o - 1;

            for (i || (r = e[s ? s[a] : a], a += t); a >= 0 && a < o; a += t) {
              var u = s ? s[a] : a;
              r = n(r, e[u], u, e);
            }

            return r;
          };

          return function (t, n, r, i) {
            var s = arguments.length >= 3;
            return e(t, b(n, i, 4), r, s);
          };
        };

        m.reduce = m.foldl = m.inject = x(1), m.reduceRight = m.foldr = x(-1), m.find = m.detect = function (t, e, n) {
          var r = j(t) ? m.findIndex : m.findKey,
              i = r(t, e, n);
          if (void 0 !== i && -1 !== i) return t[i];
        }, m.filter = m.select = function (t, e, n) {
          var r = [];
          return e = w(e, n), m.each(t, function (t, n, i) {
            e(t, n, i) && r.push(t);
          }), r;
        }, m.reject = function (t, e, n) {
          return m.filter(t, m.negate(w(e)), n);
        }, m.every = m.all = function (t, e, n) {
          e = w(e, n);

          for (var r = !j(t) && m.keys(t), i = (r || t).length, s = 0; s < i; s++) {
            var o = r ? r[s] : s;
            if (!e(t[o], o, t)) return !1;
          }

          return !0;
        }, m.some = m.any = function (t, e, n) {
          e = w(e, n);

          for (var r = !j(t) && m.keys(t), i = (r || t).length, s = 0; s < i; s++) {
            var o = r ? r[s] : s;
            if (e(t[o], o, t)) return !0;
          }

          return !1;
        }, m.contains = m.includes = m.include = function (t, e, n, r) {
          return j(t) || (t = m.values(t)), ("number" != typeof n || r) && (n = 0), m.indexOf(t, e, n) >= 0;
        }, m.invoke = O(function (t, e, n) {
          var r, i;
          return m.isFunction(e) ? i = e : m.isArray(e) && (r = e.slice(0, -1), e = e[e.length - 1]), m.map(t, function (t) {
            var s = i;

            if (!s) {
              if (r && r.length && (t = E(t, r)), null == t) return;
              s = t[e];
            }

            return null == s ? s : s.apply(t, n);
          });
        }), m.pluck = function (t, e) {
          return m.map(t, m.property(e));
        }, m.where = function (t, e) {
          return m.filter(t, m.matcher(e));
        }, m.findWhere = function (t, e) {
          return m.find(t, m.matcher(e));
        }, m.max = function (t, e, n) {
          var r,
              i,
              s = -1 / 0,
              o = -1 / 0;

          if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
            t = j(t) ? t : m.values(t);

            for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r > s && (s = r);
          } else e = w(e, n), m.each(t, function (t, n, r) {
            ((i = e(t, n, r)) > o || i === -1 / 0 && s === -1 / 0) && (s = t, o = i);
          });

          return s;
        }, m.min = function (t, e, n) {
          var r,
              i,
              s = 1 / 0,
              o = 1 / 0;

          if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
            t = j(t) ? t : m.values(t);

            for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r < s && (s = r);
          } else e = w(e, n), m.each(t, function (t, n, r) {
            ((i = e(t, n, r)) < o || i === 1 / 0 && s === 1 / 0) && (s = t, o = i);
          });

          return s;
        }, m.shuffle = function (t) {
          return m.sample(t, 1 / 0);
        }, m.sample = function (t, e, n) {
          if (null == e || n) return j(t) || (t = m.values(t)), t[m.random(t.length - 1)];
          var r = j(t) ? m.clone(t) : m.values(t),
              i = N(r);
          e = Math.max(Math.min(e, i), 0);

          for (var s = i - 1, o = 0; o < e; o++) {
            var a = m.random(o, s),
                u = r[o];
            r[o] = r[a], r[a] = u;
          }

          return r.slice(0, e);
        }, m.sortBy = function (t, e, n) {
          var r = 0;
          return e = w(e, n), m.pluck(m.map(t, function (t, n, i) {
            return {
              value: t,
              index: r++,
              criteria: e(t, n, i)
            };
          }).sort(function (t, e) {
            var n = t.criteria,
                r = e.criteria;

            if (n !== r) {
              if (n > r || void 0 === n) return 1;
              if (n < r || void 0 === r) return -1;
            }

            return t.index - e.index;
          }), "value");
        };

        var U = function (t, e) {
          return function (n, r, i) {
            var s = e ? [[], []] : {};
            return r = w(r, i), m.each(n, function (e, i) {
              var o = r(e, i, n);
              t(s, e, o);
            }), s;
          };
        };

        m.groupBy = U(function (t, e, n) {
          C(t, n) ? t[n].push(e) : t[n] = [e];
        }), m.indexBy = U(function (t, e, n) {
          t[n] = e;
        }), m.countBy = U(function (t, e, n) {
          C(t, n) ? t[n]++ : t[n] = 1;
        });
        var k = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        m.toArray = function (t) {
          return t ? m.isArray(t) ? h.call(t) : m.isString(t) ? t.match(k) : j(t) ? m.map(t, m.identity) : m.values(t) : [];
        }, m.size = function (t) {
          return null == t ? 0 : j(t) ? t.length : m.keys(t).length;
        }, m.partition = U(function (t, e, n) {
          t[n ? 0 : 1].push(e);
        }, !0), m.first = m.head = m.take = function (t, e, n) {
          return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : m.initial(t, t.length - e);
        }, m.initial = function (t, e, n) {
          return h.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
        }, m.last = function (t, e, n) {
          return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e));
        }, m.rest = m.tail = m.drop = function (t, e, n) {
          return h.call(t, null == e || n ? 1 : e);
        }, m.compact = function (t) {
          return m.filter(t, Boolean);
        };

        var I = function (t, e, n, r) {
          r = r || [];

          for (var i = r.length, s = 0, o = N(t); s < o; s++) {
            var a = t[s];
            if (j(a) && (m.isArray(a) || m.isArguments(a))) {
              if (e) for (var u = 0, c = a.length; u < c;) r[i++] = a[u++];else I(a, e, n, r), i = r.length;
            } else n || (r[i++] = a);
          }

          return r;
        };

        m.flatten = function (t, e) {
          return I(t, e, !1);
        }, m.without = O(function (t, e) {
          return m.difference(t, e);
        }), m.uniq = m.unique = function (t, e, n, r) {
          m.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = w(n, r));

          for (var i = [], s = [], o = 0, a = N(t); o < a; o++) {
            var u = t[o],
                c = n ? n(u, o, t) : u;
            e && !n ? (o && s === c || i.push(u), s = c) : n ? m.contains(s, c) || (s.push(c), i.push(u)) : m.contains(i, u) || i.push(u);
          }

          return i;
        }, m.union = O(function (t) {
          return m.uniq(I(t, !0, !0));
        }), m.intersection = function (t) {
          for (var e = [], n = arguments.length, r = 0, i = N(t); r < i; r++) {
            var s = t[r];

            if (!m.contains(e, s)) {
              var o;

              for (o = 1; o < n && m.contains(arguments[o], s); o++);

              o === n && e.push(s);
            }
          }

          return e;
        }, m.difference = O(function (t, e) {
          return e = I(e, !0, !0), m.filter(t, function (t) {
            return !m.contains(e, t);
          });
        }), m.unzip = function (t) {
          for (var e = t && m.max(t, N).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);

          return n;
        }, m.zip = O(m.unzip), m.object = function (t, e) {
          for (var n = {}, r = 0, i = N(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];

          return n;
        };

        var R = function (t) {
          return function (e, n, r) {
            n = w(n, r);

            for (var i = N(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t) if (n(e[s], s, e)) return s;

            return -1;
          };
        };

        m.findIndex = R(1), m.findLastIndex = R(-1), m.sortedIndex = function (t, e, n, r) {
          n = w(n, r, 1);

          for (var i = n(e), s = 0, o = N(t); s < o;) {
            var a = Math.floor((s + o) / 2);
            n(t[a]) < i ? s = a + 1 : o = a;
          }

          return s;
        };

        var D = function (t, e, n) {
          return function (r, i, s) {
            var o = 0,
                a = N(r);
            if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
            if (i !== i) return s = e(h.call(r, o, a), m.isNaN), s >= 0 ? s + o : -1;

            for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t) if (r[s] === i) return s;

            return -1;
          };
        };

        m.indexOf = D(1, m.findIndex, m.sortedIndex), m.lastIndexOf = D(-1, m.findLastIndex), m.range = function (t, e, n) {
          null == e && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);

          for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++, t += n) i[s] = t;

          return i;
        }, m.chunk = function (t, e) {
          if (null == e || e < 1) return [];

          for (var n = [], r = 0, i = t.length; r < i;) n.push(h.call(t, r, r += e));

          return n;
        };

        var P = function (t, e, n, r, i) {
          if (!(r instanceof e)) return t.apply(n, i);
          var s = A(t.prototype),
              o = t.apply(s, i);
          return m.isObject(o) ? o : s;
        };

        m.bind = O(function (t, e, n) {
          if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
          var r = O(function (i) {
            return P(t, r, e, this, n.concat(i));
          });
          return r;
        }), m.partial = O(function (t, e) {
          var n = m.partial.placeholder,
              r = function () {
            for (var i = 0, s = e.length, o = Array(s), a = 0; a < s; a++) o[a] = e[a] === n ? arguments[i++] : e[a];

            for (; i < arguments.length;) o.push(arguments[i++]);

            return P(t, r, this, this, o);
          };

          return r;
        }), m.partial.placeholder = m, m.bindAll = O(function (t, e) {
          e = I(e, !1, !1);
          var n = e.length;
          if (n < 1) throw new Error("bindAll must be passed function names");

          for (; n--;) {
            var r = e[n];
            t[r] = m.bind(t[r], t);
          }
        }), m.memoize = function (t, e) {
          var n = function (r) {
            var i = n.cache,
                s = "" + (e ? e.apply(this, arguments) : r);
            return C(i, s) || (i[s] = t.apply(this, arguments)), i[s];
          };

          return n.cache = {}, n;
        }, m.delay = O(function (t, e, n) {
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }), m.defer = m.partial(m.delay, m, 1), m.throttle = function (t, e, n) {
          var r,
              i,
              s,
              o,
              a = 0;
          n || (n = {});

          var u = function () {
            a = !1 === n.leading ? 0 : m.now(), r = null, o = t.apply(i, s), r || (i = s = null);
          },
              c = function () {
            var c = m.now();
            a || !1 !== n.leading || (a = c);
            var l = e - (c - a);
            return i = this, s = arguments, l <= 0 || l > e ? (r && (clearTimeout(r), r = null), a = c, o = t.apply(i, s), r || (i = s = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), o;
          };

          return c.cancel = function () {
            clearTimeout(r), a = 0, r = i = s = null;
          }, c;
        }, m.debounce = function (t, e, n) {
          var r,
              i,
              s = function (e, n) {
            r = null, n && (i = t.apply(e, n));
          },
              o = O(function (o) {
            if (r && clearTimeout(r), n) {
              var a = !r;
              r = setTimeout(s, e), a && (i = t.apply(this, o));
            } else r = m.delay(s, e, this, o);

            return i;
          });

          return o.cancel = function () {
            clearTimeout(r), r = null;
          }, o;
        }, m.wrap = function (t, e) {
          return m.partial(e, t);
        }, m.negate = function (t) {
          return function () {
            return !t.apply(this, arguments);
          };
        }, m.compose = function () {
          var t = arguments,
              e = t.length - 1;
          return function () {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);

            return r;
          };
        }, m.after = function (t, e) {
          return function () {
            if (--t < 1) return e.apply(this, arguments);
          };
        }, m.before = function (t, e) {
          var n;
          return function () {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
          };
        }, m.once = m.partial(m.before, 2), m.restArguments = O;

        var L = !{
          toString: null
        }.propertyIsEnumerable("toString"),
            F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            q = function (t, e) {
          var n = F.length,
              r = t.constructor,
              i = m.isFunction(r) && r.prototype || u,
              s = "constructor";

          for (C(t, s) && !m.contains(e, s) && e.push(s); n--;) (s = F[n]) in t && t[s] !== i[s] && !m.contains(e, s) && e.push(s);
        };

        m.keys = function (t) {
          if (!m.isObject(t)) return [];
          if (_) return _(t);
          var e = [];

          for (var n in t) C(t, n) && e.push(n);

          return L && q(t, e), e;
        }, m.allKeys = function (t) {
          if (!m.isObject(t)) return [];
          var e = [];

          for (var n in t) e.push(n);

          return L && q(t, e), e;
        }, m.values = function (t) {
          for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];

          return r;
        }, m.mapObject = function (t, e, n) {
          e = w(e, n);

          for (var r = m.keys(t), i = r.length, s = {}, o = 0; o < i; o++) {
            var a = r[o];
            s[a] = e(t[a], a, t);
          }

          return s;
        }, m.pairs = function (t) {
          for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];

          return r;
        }, m.invert = function (t) {
          for (var e = {}, n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];

          return e;
        }, m.functions = m.methods = function (t) {
          var e = [];

          for (var n in t) m.isFunction(t[n]) && e.push(n);

          return e.sort();
        };

        var M = function (t, e) {
          return function (n) {
            var r = arguments.length;
            if (e && (n = Object(n)), r < 2 || null == n) return n;

            for (var i = 1; i < r; i++) for (var s = arguments[i], o = t(s), a = o.length, u = 0; u < a; u++) {
              var c = o[u];
              e && void 0 !== n[c] || (n[c] = s[c]);
            }

            return n;
          };
        };

        m.extend = M(m.allKeys), m.extendOwn = m.assign = M(m.keys), m.findKey = function (t, e, n) {
          e = w(e, n);

          for (var r, i = m.keys(t), s = 0, o = i.length; s < o; s++) if (r = i[s], e(t[r], r, t)) return r;
        };

        var B = function (t, e, n) {
          return e in n;
        };

        m.pick = O(function (t, e) {
          var n = {},
              r = e[0];
          if (null == t) return n;
          m.isFunction(r) ? (e.length > 1 && (r = b(r, e[1])), e = m.allKeys(t)) : (r = B, e = I(e, !1, !1), t = Object(t));

          for (var i = 0, s = e.length; i < s; i++) {
            var o = e[i],
                a = t[o];
            r(a, o, t) && (n[o] = a);
          }

          return n;
        }), m.omit = O(function (t, e) {
          var n,
              r = e[0];
          return m.isFunction(r) ? (r = m.negate(r), e.length > 1 && (n = e[1])) : (e = m.map(I(e, !1, !1), String), r = function (t, n) {
            return !m.contains(e, n);
          }), m.pick(t, r, n);
        }), m.defaults = M(m.allKeys, !0), m.create = function (t, e) {
          var n = A(t);
          return e && m.extendOwn(n, e), n;
        }, m.clone = function (t) {
          return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({}, t) : t;
        }, m.tap = function (t, e) {
          return e(t), t;
        }, m.isMatch = function (t, e) {
          var n = m.keys(e),
              r = n.length;
          if (null == t) return !r;

          for (var i = Object(t), s = 0; s < r; s++) {
            var o = n[s];
            if (e[o] !== i[o] || !(o in i)) return !1;
          }

          return !0;
        };
        var W, J;
        W = function (t, e, n, r) {
          if (t === e) return 0 !== t || 1 / t == 1 / e;
          if (null == t || null == e) return !1;
          if (t !== t) return e !== e;
          var i = typeof t;
          return ("function" === i || "object" === i || "object" == typeof e) && J(t, e, n, r);
        }, J = function (t, e, n, r) {
          t instanceof m && (t = t._wrapped), e instanceof m && (e = e._wrapped);
          var i = f.call(t);
          if (i !== f.call(e)) return !1;

          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + t == "" + e;

            case "[object Number]":
              return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

            case "[object Date]":
            case "[object Boolean]":
              return +t == +e;

            case "[object Symbol]":
              return c.valueOf.call(t) === c.valueOf.call(e);
          }

          var s = "[object Array]" === i;

          if (!s) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
          }

          n = n || [], r = r || [];

          for (var u = n.length; u--;) if (n[u] === t) return r[u] === e;

          if (n.push(t), r.push(e), s) {
            if ((u = t.length) !== e.length) return !1;

            for (; u--;) if (!W(t[u], e[u], n, r)) return !1;
          } else {
            var l,
                h = m.keys(t);
            if (u = h.length, m.keys(e).length !== u) return !1;

            for (; u--;) if (l = h[u], !C(e, l) || !W(t[l], e[l], n, r)) return !1;
          }

          return n.pop(), r.pop(), !0;
        }, m.isEqual = function (t, e) {
          return W(t, e);
        }, m.isEmpty = function (t) {
          return null == t || (j(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length : 0 === m.keys(t).length);
        }, m.isElement = function (t) {
          return !(!t || 1 !== t.nodeType);
        }, m.isArray = p || function (t) {
          return "[object Array]" === f.call(t);
        }, m.isObject = function (t) {
          var e = typeof t;
          return "function" === e || "object" === e && !!t;
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
          m["is" + t] = function (e) {
            return f.call(e) === "[object " + t + "]";
          };
        }), m.isArguments(arguments) || (m.isArguments = function (t) {
          return C(t, "callee");
        });
        var Q = s.document && s.document.childNodes;
         true && "object" != typeof Int8Array && "function" != typeof Q && (m.isFunction = function (t) {
          return "function" == typeof t || !1;
        }), m.isFinite = function (t) {
          return !m.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t));
        }, m.isNaN = function (t) {
          return m.isNumber(t) && isNaN(t);
        }, m.isBoolean = function (t) {
          return !0 === t || !1 === t || "[object Boolean]" === f.call(t);
        }, m.isNull = function (t) {
          return null === t;
        }, m.isUndefined = function (t) {
          return void 0 === t;
        }, m.has = function (t, e) {
          if (!m.isArray(e)) return C(t, e);

          for (var n = e.length, r = 0; r < n; r++) {
            var i = e[r];
            if (null == t || !d.call(t, i)) return !1;
            t = t[i];
          }

          return !!n;
        }, m.noConflict = function () {
          return s._ = o, this;
        }, m.identity = function (t) {
          return t;
        }, m.constant = function (t) {
          return function () {
            return t;
          };
        }, m.noop = function () {}, m.property = function (t) {
          return m.isArray(t) ? function (e) {
            return E(e, t);
          } : S(t);
        }, m.propertyOf = function (t) {
          return null == t ? function () {} : function (e) {
            return m.isArray(e) ? E(t, e) : t[e];
          };
        }, m.matcher = m.matches = function (t) {
          return t = m.extendOwn({}, t), function (e) {
            return m.isMatch(e, t);
          };
        }, m.times = function (t, e, n) {
          var r = Array(Math.max(0, t));
          e = b(e, n, 1);

          for (var i = 0; i < t; i++) r[i] = e(i);

          return r;
        }, m.random = function (t, e) {
          return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
        }, m.now = Date.now || function () {
          return new Date().getTime();
        };

        var V = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
            K = m.invert(V),
            z = function (t) {
          var e = function (e) {
            return t[e];
          },
              n = "(?:" + m.keys(t).join("|") + ")",
              r = RegExp(n),
              i = RegExp(n, "g");

          return function (t) {
            return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t;
          };
        };

        m.escape = z(V), m.unescape = z(K), m.result = function (t, e, n) {
          m.isArray(e) || (e = [e]);
          var r = e.length;
          if (!r) return m.isFunction(n) ? n.call(t) : n;

          for (var i = 0; i < r; i++) {
            var s = null == t ? void 0 : t[e[i]];
            void 0 === s && (s = n, i = r), t = m.isFunction(s) ? s.call(t) : s;
          }

          return t;
        };
        var G = 0;
        m.uniqueId = function (t) {
          var e = ++G + "";
          return t ? t + e : e;
        }, m.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };

        var H = /(.)^/,
            $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
            X = /\\|'|\r|\n|\u2028|\u2029/g,
            Y = function (t) {
          return "\\" + $[t];
        };

        m.template = function (t, e, n) {
          !e && n && (e = n), e = m.defaults({}, e, m.templateSettings);
          var r = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
              i = 0,
              s = "__p+='";
          t.replace(r, function (e, n, r, o, a) {
            return s += t.slice(i, a).replace(X, Y), i = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e;
          }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
          var o;

          try {
            o = new Function(e.variable || "obj", "_", s);
          } catch (t) {
            throw t.source = s, t;
          }

          var a = function (t) {
            return o.call(this, t, m);
          };

          return a.source = "function(" + (e.variable || "obj") + "){\n" + s + "}", a;
        }, m.chain = function (t) {
          var e = m(t);
          return e._chain = !0, e;
        };

        var Z = function (t, e) {
          return t._chain ? m(e).chain() : e;
        };

        m.mixin = function (t) {
          return m.each(m.functions(t), function (e) {
            var n = m[e] = t[e];

            m.prototype[e] = function () {
              var t = [this._wrapped];
              return l.apply(t, arguments), Z(this, n.apply(m, t));
            };
          }), m;
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
          var e = a[t];

          m.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], Z(this, n);
          };
        }), m.each(["concat", "join", "slice"], function (t) {
          var e = a[t];

          m.prototype[t] = function () {
            return Z(this, e.apply(this._wrapped, arguments));
          };
        }), m.prototype.value = function () {
          return this._wrapped;
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
          return String(this._wrapped);
        }, r = [], void 0 !== (i = function () {
          return m;
        }.apply(e, r)) && (n.exports = i);
      }();
    }).call(e, n(7), n(17)(t));
  }, function (t, e, n) {
    "use strict";

    var r = n(29).Promise;
    r._continueWhile = function (t, e) {
      return t() ? e().then(function () {
        return r._continueWhile(t, e);
      }) : r.resolve();
    }, t.exports = r;
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(44),
        s = n(0),
        o = s.extend,
        a = n(1),
        u = n(5),
        c = n(3),
        l = c.getSessionToken,
        h = c.ajax,
        f = function (t, e) {
      var n = new Date().getTime(),
          r = i(n + t);
      return e ? r + "," + n + ",master" : r + "," + n;
    },
        d = function (t, e) {
      e ? t["X-LC-Sign"] = f(u.applicationKey) : t["X-LC-Key"] = u.applicationKey;
    },
        p = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments[1],
          n = {
        "X-LC-Id": u.applicationId,
        "Content-Type": "application/json;charset=UTF-8"
      },
          r = !1;
      return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? e ? n["X-LC-Sign"] = f(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, e)) : d(n, e), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, a.resolve().then(function () {
        var e = l(t);
        if (e) n["X-LC-Session"] = e;else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function (t) {
          return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n;
        });
        return n;
      });
    },
        _ = function (t) {
      var e = t.service,
          n = void 0 === e ? "api" : e,
          r = t.version,
          i = void 0 === r ? "1.1" : r,
          s = t.path,
          o = u._config.serverURLs[n];
      if (!o) throw new Error("undefined server URL for " + n);
      return "/" !== o.charAt(o.length - 1) && (o += "/"), o += i, s && (o += s), o;
    },
        v = function (t) {
      var e = t.service,
          n = t.version,
          i = t.method,
          s = t.path,
          o = t.query,
          a = t.data,
          c = t.authOptions,
          l = t.signKey,
          f = void 0 === l || l;
      if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");

      u._appRouter.refresh();

      var d = u._config.requestTimeout,
          v = _({
        service: e,
        path: s,
        version: n
      });

      return p(c, f).then(function (t) {
        return h({
          method: i,
          url: v,
          query: o,
          data: a,
          headers: t,
          timeout: d
        }).catch(function (t) {
          var e = {
            code: t.code || -1,
            error: t.message || t.responseText
          };
          if (t.response && t.response.code) e = t.response;else if (t.responseText) try {
            e = JSON.parse(t.responseText);
          } catch (t) {}
          e.rawMessage = e.rawMessage || e.error, u._sharedConfig.keepErrorRawMessage || (e.error += " [" + (t.statusCode || "N/A") + " " + i + " " + v + "]");
          var n = new Error(e.error);
          throw delete e.error, r.extend(n, e);
        });
      });
    },
        y = function (t, e, n, r, i, s, a) {
      var u = "";
      if (t && (u += "/" + t), e && (u += "/" + e), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
      if (i && i._where) throw new Error("_where should be in the query");
      return r && "get" === r.toLowerCase() && (a = o({}, a, i), i = null), v({
        method: r,
        path: u,
        query: a,
        data: i,
        authOptions: s
      });
    };

    u.request = v, t.exports = {
      _request: y,
      request: v
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
          n = e.exec(t);
      if (!n) return null;
      var r = n[1] || 0,
          i = (n[2] || 1) - 1,
          s = n[3] || 0,
          o = n[4] || 0,
          a = n[5] || 0,
          u = n[6] || 0,
          c = n[8] || 0;
      return new Date(Date.UTC(r, i, s, o, a, u, c));
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
        s = n(0),
        o = n(8),
        a = n(6),
        u = a("leancloud:request"),
        c = a("leancloud:request:error"),
        l = n(1),
        h = 0,
        f = function (t) {
      var e = t.method,
          n = t.url,
          r = t.query,
          s = t.data,
          f = t.headers,
          d = void 0 === f ? {} : f,
          p = t.onprogress,
          _ = t.timeout,
          v = {};
      if (r) for (var y in r) {
        var m = r[y];
        void 0 !== m && ("object" === (void 0 === m ? "undefined" : i(m)) ? v[y] = JSON.stringify(m) : v[y] = m);
      }
      var g = h++;
      return u("request(%d) %s %s %o %o %o", g, e, n, v, s, d), new l(function (t, i) {
        var l = o(e, n).set(d).query(v).send(s);
        p && l.on("progress", p), _ && l.timeout(_), l.end(function (o, l) {
          return o ? (l && (a.enabled("leancloud:request") || c("request(%d) %s %s %o %o %o", g, e, n, r, s, d), c("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), o.statusCode = l.status, o.responseText = l.text, o.response = l.body), i(o)) : (u("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), t(l.body));
        });
      });
    },
        d = function (t) {
      return s.isNull(t) || s.isUndefined(t);
    },
        p = function (t) {
      return s.isArray(t) ? t : void 0 === t || null === t ? [] : [t];
    },
        _ = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.keys,
          n = t.include,
          r = t.includeACL,
          i = {};
      return e && (i.keys = p(e).join(",")), n && (i.include = p(n).join(",")), r && (i.returnACL = r), i;
    },
        v = function (t) {
      return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0;
    },
        y = function (t) {
      return function (e) {
        return t(e), e;
      };
    },
        m = function () {},
        g = function (t, e, n) {
      var r;
      return r = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
        t.apply(this, arguments);
      }, s.extend(r, t), m.prototype = t.prototype, r.prototype = new m(), e && s.extend(r.prototype, e), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r;
    },
        b = function (t, e, n) {
      var r = e.split("."),
          i = r.pop(),
          s = t;
      return r.forEach(function (t) {
        void 0 === s[t] && (s[t] = {}), s = s[t];
      }), s[i] = n, t;
    },
        w = function (t, e) {
      for (var n = e.split("."), r = n[0], i = n.pop(), s = t, o = 0; o < n.length; o++) if (void 0 === (s = s[n[o]])) return [void 0, void 0, i];

      return [s[i], s, i, r];
    },
        O = function (t) {
      return s.isObject(t) && Object.getPrototypeOf(t) === Object.prototype;
    };

    t.exports = {
      ajax: f,
      isNullOrUndefined: d,
      ensureArray: p,
      transformFetchOptions: _,
      getSessionToken: v,
      tap: y,
      inherits: g,
      parseDate: r,
      setValue: b,
      findValue: w,
      isPlainObject: O
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = new Error(e);
      return n.code = t, n;
    }

    n(0).extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), t.exports = r;
  }, function (t, e, n) {
    "use strict";

    (function (e) {
      var r = n(0),
          i = n(9),
          s = n(20),
          o = n(3),
          a = o.inherits,
          u = o.parseDate,
          c = n(1),
          l = e.AV || {};
      l._config = {
        serverURLs: {},
        useMasterKey: !1,
        production: null,
        realtime: null,
        requestTimeout: null
      }, l._sharedConfig = {
        userAgent: s,
        liveQueryRealtime: null
      }, l._getAVPath = function (t) {
        if (!l.applicationId) throw new Error("You need to call AV.initialize before using AV.");
        if (t || (t = ""), !r.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === t[0] && (t = t.substring(1)), "AV/" + l.applicationId + "/" + t;
      }, l._installationId = null, l._getInstallationId = function () {
        if (l._installationId) return c.resolve(l._installationId);

        var t = l._getAVPath("installationId");

        return l.localStorage.getItemAsync(t).then(function (e) {
          return l._installationId = e, l._installationId ? e : (l._installationId = e = i(), l.localStorage.setItemAsync(t, e).then(function () {
            return e;
          }));
        });
      }, l._subscriptionId = null, l._refreshSubscriptionId = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l._getAVPath("subscriptionId"),
            e = l._subscriptionId = i();
        return l.localStorage.setItemAsync(t, e).then(function () {
          return e;
        });
      }, l._getSubscriptionId = function () {
        if (l._subscriptionId) return c.resolve(l._subscriptionId);

        var t = l._getAVPath("subscriptionId");

        return l.localStorage.getItemAsync(t).then(function (e) {
          return l._subscriptionId = e, l._subscriptionId || (e = l._refreshSubscriptionId(t)), e;
        });
      }, l._parseDate = u, l._extend = function (t, e) {
        var n = a(this, t, e);
        return n.extend = this.extend, n;
      }, l._encode = function (t, e, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];

        if (t instanceof l.Object) {
          if (n) throw new Error("AV.Objects not allowed here");
          return e && !r.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), i) : t._toPointer();
        }

        if (t instanceof l.ACL) return t.toJSON();
        if (r.isDate(t)) return i ? {
          __type: "Date",
          iso: t.toJSON()
        } : t.toJSON();
        if (t instanceof l.GeoPoint) return t.toJSON();
        if (r.isArray(t)) return r.map(t, function (t) {
          return l._encode(t, e, n, i);
        });
        if (r.isRegExp(t)) return t.source;
        if (t instanceof l.Relation) return t.toJSON();
        if (t instanceof l.Op) return t.toJSON();

        if (t instanceof l.File) {
          if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file.");
          return t._toFullJSON(e, i);
        }

        return r.isObject(t) ? r.mapObject(t, function (t, r) {
          return l._encode(t, e, n, i);
        }) : t;
      }, l._decode = function (t, e) {
        if (!r.isObject(t) || r.isDate(t)) return t;
        if (r.isArray(t)) return r.map(t, function (t) {
          return l._decode(t);
        });
        if (t instanceof l.Object) return t;
        if (t instanceof l.File) return t;
        if (t instanceof l.Op) return t;
        if (t instanceof l.GeoPoint) return t;
        if (t instanceof l.ACL) return t;
        if ("ACL" === e) return new l.ACL(t);
        if (t.__op) return l.Op._decode(t);
        var n;

        if ("Pointer" === t.__type) {
          n = t.className;

          var i = l.Object._create(n);

          if (Object.keys(t).length > 3) {
            var s = r.clone(t);
            delete s.__type, delete s.className, i._finishFetch(s, !0);
          } else i._finishFetch({
            objectId: t.objectId
          }, !1);

          return i;
        }

        if ("Object" === t.__type) {
          n = t.className;
          var o = r.clone(t);
          delete o.__type, delete o.className;

          var a = l.Object._create(n);

          return a._finishFetch(o, !0), a;
        }

        if ("Date" === t.__type) return l._parseDate(t.iso);
        if ("GeoPoint" === t.__type) return new l.GeoPoint({
          latitude: t.latitude,
          longitude: t.longitude
        });

        if ("Relation" === t.__type) {
          if (!e) throw new Error("key missing decoding a Relation");
          var u = new l.Relation(null, e);
          return u.targetClassName = t.className, u;
        }

        if ("File" === t.__type) {
          var c = new l.File(t.name),
              h = r.clone(t);
          return delete h.__type, c._finishFetch(h), c;
        }

        return r.mapObject(t, l._decode);
      }, l.parseJSON = l._decode, l._encodeObjectOrArray = function (t) {
        var e = function (t) {
          return t && t._toFullJSON && (t = t._toFullJSON([])), r.mapObject(t, function (t) {
            return l._encode(t, []);
          });
        };

        return r.isArray(t) ? t.map(function (t) {
          return e(t);
        }) : e(t);
      }, l._arrayEach = r.each, l._traverse = function (t, e, n) {
        if (t instanceof l.Object) {
          if (n = n || [], r.indexOf(n, t) >= 0) return;
          return n.push(t), l._traverse(t.attributes, e, n), e(t);
        }

        return t instanceof l.Relation || t instanceof l.File ? e(t) : r.isArray(t) ? (r.each(t, function (r, i) {
          var s = l._traverse(r, e, n);

          s && (t[i] = s);
        }), e(t)) : r.isObject(t) ? (l._each(t, function (r, i) {
          var s = l._traverse(r, e, n);

          s && (t[i] = s);
        }), e(t)) : e(t);
      }, l._objectEach = l._each = function (t, e) {
        r.isObject(t) ? r.each(r.keys(t), function (n) {
          e(t[n], n);
        }) : r.each(t, e);
      }, t.exports = l;
    }).call(e, n(7));
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    function i() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    function s(e) {
      if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
        var n = "color: " + this.color;
        e.splice(1, 0, n, "color: inherit");
        var r = 0,
            i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (r++, "%c" === t && (i = r));
        }), e.splice(i, 0, n);
      }
    }

    function o() {
      var t;
      return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (t = console).log.apply(t, arguments);
    }

    function a(t) {
      try {
        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
      } catch (t) {}
    }

    function u() {
      var t;

      try {
        t = e.storage.getItem("debug");
      } catch (t) {}

      return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t;
    }

    e.log = o, e.formatArgs = s, e.save = a, e.load = u, e.useColors = i, e.storage = function () {
      try {
        return localStorage;
      } catch (t) {}
    }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(27)(e), t.exports.formatters.j = function (t) {
      try {
        return JSON.stringify(t);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    };
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }

    t.exports = n;
  }, function (t, e, n) {
    function r() {}

    function i(t) {
      if (!_(t)) return t;
      var e = [];

      for (var n in t) s(e, n, t[n]);

      return e.join("&");
    }

    function s(t, e, n) {
      if (null != n) {
        if (Array.isArray(n)) n.forEach(function (n) {
          s(t, e, n);
        });else if (_(n)) for (var r in n) s(t, e + "[" + r + "]", n[r]);else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
      } else null === n && t.push(encodeURIComponent(e));
    }

    function o(t) {
      for (var e, n, r = {}, i = t.split("&"), s = 0, o = i.length; s < o; ++s) e = i[s], n = e.indexOf("="), -1 == n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));

      return r;
    }

    function a(t) {
      for (var e, n, r, i, s = t.split(/\r?\n/), o = {}, a = 0, u = s.length; a < u; ++a) n = s[a], -1 !== (e = n.indexOf(":")) && (r = n.slice(0, e).toLowerCase(), i = g(n.slice(e + 1)), o[r] = i);

      return o;
    }

    function u(t) {
      return /[\/+]json($|[^-\w])/.test(t);
    }

    function c(t) {
      this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
    }

    function l(t, e) {
      var n = this;
      this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
        var t = null,
            e = null;

        try {
          e = new c(n);
        } catch (e) {
          return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t);
        }

        n.emit("response", e);
        var r;

        try {
          n._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"));
        } catch (t) {
          r = t;
        }

        r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e);
      });
    }

    function h(t, e, n) {
      var r = m("DELETE", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
    }

    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);

    var d = n(22),
        p = n(23),
        _ = n(11),
        v = n(24),
        y = n(26),
        m = e = t.exports = function (t, n) {
      return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n);
    };

    e.Request = l, m.getXHR = function () {
      if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest();

      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}

      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (t) {}

      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (t) {}

      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (t) {}

      throw Error("Browser-only version of superagent could not find XHR");
    };
    var g = "".trim ? function (t) {
      return t.trim();
    } : function (t) {
      return t.replace(/(^\s*|\s*$)/g, "");
    };
    m.serializeObject = i, m.parseString = o, m.types = {
      html: "text/html",
      json: "application/json",
      xml: "text/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, m.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, m.parse = {
      "application/x-www-form-urlencoded": o,
      "application/json": JSON.parse
    }, v(c.prototype), c.prototype._parseBody = function (t) {
      var e = m.parse[this.type];
      return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = m.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null);
    }, c.prototype.toError = function () {
      var t = this.req,
          e = t.method,
          n = t.url,
          r = "cannot " + e + " " + n + " (" + this.status + ")",
          i = new Error(r);
      return i.status = this.status, i.method = e, i.url = n, i;
    }, m.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function (t) {
      return this.set("Content-Type", m.types[t] || t), this;
    }, l.prototype.accept = function (t) {
      return this.set("Accept", m.types[t] || t), this;
    }, l.prototype.auth = function (t, e, n) {
      1 === arguments.length && (e = ""), "object" == typeof e && null !== e && (n = e, e = ""), n || (n = {
        type: "function" == typeof btoa ? "basic" : "auto"
      });

      var r = function (t) {
        if ("function" == typeof btoa) return btoa(t);
        throw new Error("Cannot use basic auth, btoa is not a function");
      };

      return this._auth(t, e, n, r);
    }, l.prototype.query = function (t) {
      return "string" != typeof t && (t = i(t)), t && this._query.push(t), this;
    }, l.prototype.attach = function (t, e, n) {
      if (e) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");

        this._getFormData().append(t, e, n || e.name);
      }

      return this;
    }, l.prototype._getFormData = function () {
      return this._formData || (this._formData = new f.FormData()), this._formData;
    }, l.prototype.callback = function (t, e) {
      if (this._shouldRetry(t, e)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e);
    }, l.prototype.crossDomainError = function () {
      var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t);
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function () {
      return console.warn("This is not supported in browser version of superagent"), this;
    }, l.prototype.pipe = l.prototype.write = function () {
      throw Error("Streaming is not supported in browser version of superagent");
    }, l.prototype._isHost = function (t) {
      return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t);
    }, l.prototype.end = function (t) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || r, this._finalizeQueryString(), this._end();
    }, l.prototype._end = function () {
      var t = this,
          e = this.xhr = m.getXHR(),
          n = this._formData || this._data;
      this._setTimeouts(), e.onreadystatechange = function () {
        var n = e.readyState;

        if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == n) {
          var r;

          try {
            r = e.status;
          } catch (t) {
            r = 0;
          }

          if (!r) {
            if (t.timedout || t._aborted) return;
            return t.crossDomainError();
          }

          t.emit("end");
        }
      };

      var r = function (e, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n);
      };

      if (this.hasListeners("progress")) try {
        e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload"));
      } catch (t) {}

      try {
        this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0);
      } catch (t) {
        return this.callback(t);
      }

      if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
            s = this._serializer || m.serialize[i ? i.split(";")[0] : ""];
        !s && u(i) && (s = m.serialize["application/json"]), s && (n = s(n));
      }

      for (var o in this.header) null != this.header[o] && this.header.hasOwnProperty(o) && e.setRequestHeader(o, this.header[o]);

      return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 !== n ? n : null), this;
    }, m.agent = function () {
      return new y();
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (t) {
      y.prototype[t.toLowerCase()] = function (e, n) {
        var r = new m.Request(t, e);
        return this._setDefaults(r), n && r.end(n), r;
      };
    }), y.prototype.del = y.prototype.delete, m.get = function (t, e, n) {
      var r = m("GET", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r;
    }, m.head = function (t, e, n) {
      var r = m("HEAD", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r;
    }, m.options = function (t, e, n) {
      var r = m("OPTIONS", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
    }, m.del = h, m.delete = h, m.patch = function (t, e, n) {
      var r = m("PATCH", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
    }, m.post = function (t, e, n) {
      var r = m("POST", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
    }, m.put = function (t, e, n) {
      var r = m("PUT", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
    };
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = e && n || 0;
      "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null), t = t || {};
      var o = t.random || (t.rng || i)();
      if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) for (var a = 0; a < 16; ++a) e[r + a] = o[a];
      return e || s(o);
    }

    var i = n(18),
        s = n(19);
    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    t.exports = "3.11.1";
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return null !== t && "object" == typeof t;
    }

    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(1),
        s = n(31),
        o = ["getItem", "setItem", "removeItem", "clear"];
    s.async ? r(o).each(function (t) {
      "function" != typeof s[t] && (s[t] = function () {
        var e = new Error("Synchronous API [" + t + "] is not available in this runtime.");
        throw e.code = "SYNC_API_NOT_AVAILABLE", e;
      });
    }) : r(o).each(function (t) {
      "function" == typeof s[t] && (s[t + "Async"] = function () {
        return i.resolve(s[t].apply(s, arguments));
      });
    }), t.exports = s;
  }, function (t, e, n) {
    "use strict";

    var r = n(12),
        i = n(5),
        s = e.removeAsync = r.removeItemAsync.bind(r),
        o = function (t, e) {
      try {
        t = JSON.parse(t);
      } catch (t) {
        return null;
      }

      if (t) {
        return t.expiredAt && t.expiredAt < Date.now() ? s(e).then(function () {
          return null;
        }) : t.value;
      }

      return null;
    };

    e.getAsync = function (t) {
      return t = "AV/" + i.applicationId + "/" + t, r.getItemAsync(t).then(function (e) {
        return o(e, t);
      });
    }, e.setAsync = function (t, e, n) {
      var s = {
        value: e
      };
      return "number" == typeof n && (s.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + t, JSON.stringify(s));
    };
  }, function (t, e) {
    var n = {
      utf8: {
        stringToBytes: function (t) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
        },
        bytesToString: function (t) {
          return decodeURIComponent(escape(n.bin.bytesToString(t)));
        }
      },
      bin: {
        stringToBytes: function (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));

          return e;
        },
        bytesToString: function (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));

          return e.join("");
        }
      }
    };
    t.exports = n;
  }, function (t, e, n) {
    "use strict";
    /*!
    * LeanCloud JavaScript SDK
    * https://leancloud.cn
    *
    * Copyright 2016 LeanCloud.cn, Inc.
    * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
    */

    n(16);
    var r = n(0),
        i = n(5);
    i._ = r, i.version = n(10), i.Promise = n(1), i.localStorage = n(12), i.Cache = n(13), i.Error = n(4), n(33), n(35)(i), n(36)(i), n(37)(i), n(38)(i), n(39)(i), n(40)(i), n(48)(i), n(49)(i), n(50)(i), n(51)(i), n(52)(i), n(54)(i), n(55)(i), n(56)(i), n(57)(i), n(58)(i), n(59)(i), i.Conversation = n(60), n(61), t.exports = i;
  }, function (t, e, n) {
    "use strict";
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function () {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);

    if (n) {
      var r = new Uint8Array(16);

      t.exports = function () {
        return n(r), r;
      };
    } else {
      var i = new Array(16);

      t.exports = function () {
        for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;

        return i;
      };
    }
  }, function (t, e) {
    function n(t, e) {
      var n = e || 0,
          i = r;
      return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("");
    }

    for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    var r = n(10),
        i = ["Browser"].concat(n(21));
    t.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
  }, function (t, e, n) {
    "use strict";

    t.exports = [];
  }, function (t, e, n) {
    function r(t) {
      if (t) return i(t);
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];

      return t;
    }

    t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, r.prototype.once = function (t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments);
      }

      return n.fn = e, this.on(t, n), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + t];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;

      for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === e || r.fn === e) {
        n.splice(i, 1);
        break;
      }

      return this;
    }, r.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1),
          n = this._callbacks["$" + t];

      if (n) {
        n = n.slice(0);

        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e);
      }

      return this;
    }, r.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, r.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      if (t) return i(t);
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];

      return t;
    }

    var s = n(11);
    t.exports = r, r.prototype.clearTimeout = function () {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
    }, r.prototype.parse = function (t) {
      return this._parser = t, this;
    }, r.prototype.responseType = function (t) {
      return this._responseType = t, this;
    }, r.prototype.serialize = function (t) {
      return this._serializer = t, this;
    }, r.prototype.timeout = function (t) {
      if (!t || "object" != typeof t) return this._timeout = t, this._responseTimeout = 0, this;

      for (var e in t) switch (e) {
        case "deadline":
          this._timeout = t.deadline;
          break;

        case "response":
          this._responseTimeout = t.response;
          break;

        default:
          console.warn("Unknown timeout option", e);
      }

      return this;
    }, r.prototype.retry = function (t, e) {
      return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this;
    };
    var o = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function (t, e) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        var n = this._retryCallback(t, e);

        if (!0 === n) return !0;
        if (!1 === n) return !1;
      } catch (t) {
        console.error(t);
      }
      if (e && e.status && e.status >= 500 && 501 != e.status) return !0;

      if (t) {
        if (t.code && ~o.indexOf(t.code)) return !0;
        if (t.timeout && "ECONNABORTED" == t.code) return !0;
        if (t.crossDomain) return !0;
      }

      return !1;
    }, r.prototype._retry = function () {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
    }, r.prototype.then = function (t, e) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (t, e) {
          n.end(function (n, r) {
            n ? e(n) : t(r);
          });
        });
      }

      return this._fullfilledPromise.then(t, e);
    }, r.prototype.catch = function (t) {
      return this.then(void 0, t);
    }, r.prototype.use = function (t) {
      return t(this), this;
    }, r.prototype.ok = function (t) {
      if ("function" != typeof t) throw Error("Callback required");
      return this._okCallback = t, this;
    }, r.prototype._isResponseOK = function (t) {
      return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300);
    }, r.prototype.get = function (t) {
      return this._header[t.toLowerCase()];
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function (t, e) {
      if (s(t)) {
        for (var n in t) this.set(n, t[n]);

        return this;
      }

      return this._header[t.toLowerCase()] = e, this.header[t] = e, this;
    }, r.prototype.unset = function (t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this;
    }, r.prototype.field = function (t, e) {
      if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");

      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), s(t)) {
        for (var n in t) this.field(n, t[n]);

        return this;
      }

      if (Array.isArray(e)) {
        for (var r in e) this.field(t, e[r]);

        return this;
      }

      if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this;
    }, r.prototype.abort = function () {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
    }, r.prototype._auth = function (t, e, n, r) {
      switch (n.type) {
        case "basic":
          this.set("Authorization", "Basic " + r(t + ":" + e));
          break;

        case "auto":
          this.username = t, this.password = e;
          break;

        case "bearer":
          this.set("Authorization", "Bearer " + t);
      }

      return this;
    }, r.prototype.withCredentials = function (t) {
      return void 0 == t && (t = !0), this._withCredentials = t, this;
    }, r.prototype.redirects = function (t) {
      return this._maxRedirects = t, this;
    }, r.prototype.maxResponseSize = function (t) {
      if ("number" != typeof t) throw TypeError("Invalid argument");
      return this._maxResponseSize = t, this;
    }, r.prototype.toJSON = function () {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      };
    }, r.prototype.send = function (t) {
      var e = s(t),
          n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (e && s(this._data)) for (var r in t) this._data[r] = t[r];else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t;
      return !e || this._isHost(t) ? this : (n || this.type("json"), this);
    }, r.prototype.sortQuery = function (t) {
      return this._sort = void 0 === t || t, this;
    }, r.prototype._finalizeQueryString = function () {
      var t = this._query.join("&");

      if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
        var e = this.url.indexOf("?");

        if (e >= 0) {
          var n = this.url.substring(e + 1).split("&");
          "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&");
        }
      }
    }, r.prototype._appendQueryString = function () {
      console.trace("Unsupported");
    }, r.prototype._timeoutError = function (t, e, n) {
      if (!this._aborted) {
        var r = new Error(t + e + "ms exceeded");
        r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r);
      }
    }, r.prototype._setTimeouts = function () {
      var t = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function () {
        t._timeoutError("Timeout of ", t._timeout, "ETIME");
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
        t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT");
      }, this._responseTimeout));
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      if (t) return i(t);
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];

      return t;
    }

    var s = n(25);
    t.exports = r, r.prototype.get = function (t) {
      return this.header[t.toLowerCase()];
    }, r.prototype._setHeaderProperties = function (t) {
      var e = t["content-type"] || "";
      this.type = s.type(e);
      var n = s.params(e);

      for (var r in n) this[r] = n[r];

      this.links = {};

      try {
        t.link && (this.links = s.parseLinks(t.link));
      } catch (t) {}
    }, r.prototype._setStatusProperties = function (t) {
      var e = t / 100 | 0;
      this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.created = 201 == t, this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t, this.unprocessableEntity = 422 == t;
    };
  }, function (t, e, n) {
    "use strict";

    e.type = function (t) {
      return t.split(/ *; */).shift();
    }, e.params = function (t) {
      return t.split(/ *; */).reduce(function (t, e) {
        var n = e.split(/ *= */),
            r = n.shift(),
            i = n.shift();
        return r && i && (t[r] = i), t;
      }, {});
    }, e.parseLinks = function (t) {
      return t.split(/ *, */).reduce(function (t, e) {
        var n = e.split(/ *; */),
            r = n[0].slice(1, -1);
        return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t;
      }, {});
    }, e.cleanHeader = function (t, e) {
      return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t;
    };
  }, function (t, e) {
    function n() {
      this._defaults = [];
    }

    ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (t) {
      n.prototype[t] = function () {
        return this._defaults.push({
          fn: t,
          arguments: arguments
        }), this;
      };
    }), n.prototype._setDefaults = function (t) {
      this._defaults.forEach(function (e) {
        t[e.fn].apply(t, e.arguments);
      });
    }, t.exports = n;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      function e(t) {
        for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;

        return r.colors[Math.abs(e) % r.colors.length];
      }

      function r(t) {
        function n() {
          if (n.enabled) {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];

            var s = n,
                a = Number(new Date()),
                u = a - (o || a);
            s.diff = u, s.prev = o, s.curr = a, o = a, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
            var c = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, function (t, n) {
              if ("%%" === t) return t;
              c++;
              var i = r.formatters[n];

              if ("function" == typeof i) {
                var o = e[c];
                t = i.call(s, o), e.splice(c, 1), c--;
              }

              return t;
            }), r.formatArgs.call(s, e);
            (s.log || r.log).apply(s, e);
          }
        }

        var o;
        return n.namespace = t, n.enabled = r.enabled(t), n.useColors = r.useColors(), n.color = e(t), n.destroy = i, n.extend = s, "function" == typeof r.init && r.init(n), r.instances.push(n), n;
      }

      function i() {
        var t = r.instances.indexOf(this);
        return -1 !== t && (r.instances.splice(t, 1), !0);
      }

      function s(t, e) {
        return r(this.namespace + (void 0 === e ? ":" : e) + t);
      }

      function o(t) {
        r.save(t), r.names = [], r.skips = [];
        var e,
            n = ("string" == typeof t ? t : "").split(/[\s,]+/),
            i = n.length;

        for (e = 0; e < i; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")));

        for (e = 0; e < r.instances.length; e++) {
          var s = r.instances[e];
          s.enabled = r.enabled(s.namespace);
        }
      }

      function a() {
        r.enable("");
      }

      function u(t) {
        if ("*" === t[t.length - 1]) return !0;
        var e, n;

        for (e = 0, n = r.skips.length; e < n; e++) if (r.skips[e].test(t)) return !1;

        for (e = 0, n = r.names.length; e < n; e++) if (r.names[e].test(t)) return !0;

        return !1;
      }

      function c(t) {
        return t instanceof Error ? t.stack || t.message : t;
      }

      return r.debug = r, r.default = r, r.coerce = c, r.disable = a, r.enable = o, r.enabled = u, r.humanize = n(28), Object.keys(t).forEach(function (e) {
        r[e] = t[e];
      }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = e, r.enable(r.load()), r;
    }

    t.exports = r;
  }, function (t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);

        if (e) {
          var n = parseFloat(e[1]);

          switch ((e[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * h;

            case "weeks":
            case "week":
            case "w":
              return n * l;

            case "days":
            case "day":
            case "d":
              return n * c;

            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;

            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;

            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * o;

            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;

            default:
              return;
          }
        }
      }
    }

    function r(t) {
      var e = Math.abs(t);
      return e >= c ? Math.round(t / c) + "d" : e >= u ? Math.round(t / u) + "h" : e >= a ? Math.round(t / a) + "m" : e >= o ? Math.round(t / o) + "s" : t + "ms";
    }

    function i(t) {
      var e = Math.abs(t);
      return e >= c ? s(t, e, c, "day") : e >= u ? s(t, e, u, "hour") : e >= a ? s(t, e, a, "minute") : e >= o ? s(t, e, o, "second") : t + " ms";
    }

    function s(t, e, n, r) {
      var i = e >= 1.5 * n;
      return Math.round(t / n) + " " + r + (i ? "s" : "");
    }

    var o = 1e3,
        a = 60 * o,
        u = 60 * a,
        c = 24 * u,
        l = 7 * c,
        h = 365.25 * c;

    t.exports = function (t, e) {
      e = e || {};
      var s = typeof t;
      if ("string" === s && t.length > 0) return n(t);
      if ("number" === s && !1 === isNaN(t)) return e.long ? i(t) : r(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, n) {
    (function (e) {
      /*!
      * @overview es6-promise - a tiny implementation of Promises/A+.
      * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
      * @license   Licensed under MIT license
      *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
      * @version   v4.2.3+b33f4734
      */
      !function (e, n) {
        t.exports = n();
      }(0, function () {
        "use strict";

        function t(t) {
          var e = typeof t;
          return null !== t && ("object" === e || "function" === e);
        }

        function r(t) {
          return "function" == typeof t;
        }

        function i(t) {
          B = t;
        }

        function s(t) {
          W = t;
        }

        function o() {
          return void 0 !== M ? function () {
            M(u);
          } : a();
        }

        function a() {
          var t = setTimeout;
          return function () {
            return t(u, 1);
          };
        }

        function u() {
          for (var t = 0; t < q; t += 2) {
            (0, G[t])(G[t + 1]), G[t] = void 0, G[t + 1] = void 0;
          }

          q = 0;
        }

        function c(t, e) {
          var n = this,
              r = new this.constructor(h);
          void 0 === r[$] && j(r);
          var i = n._state;

          if (i) {
            var s = arguments[i - 1];
            W(function () {
              return E(i, r, s, n._result);
            });
          } else A(n, r, t, e);

          return r;
        }

        function l(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e) return t;
          var n = new e(h);
          return g(n, t), n;
        }

        function h() {}

        function f() {
          return new TypeError("You cannot resolve a promise with itself");
        }

        function d() {
          return new TypeError("A promises callback cannot return that same promise.");
        }

        function p(t) {
          try {
            return t.then;
          } catch (t) {
            return tt.error = t, tt;
          }
        }

        function _(t, e, n, r) {
          try {
            t.call(e, n, r);
          } catch (t) {
            return t;
          }
        }

        function v(t, e, n) {
          W(function (t) {
            var r = !1,
                i = _(n, e, function (n) {
              r || (r = !0, e !== n ? g(t, n) : w(t, n));
            }, function (e) {
              r || (r = !0, O(t, e));
            }, "Settle: " + (t._label || " unknown promise"));

            !r && i && (r = !0, O(t, i));
          }, t);
        }

        function y(t, e) {
          e._state === Y ? w(t, e._result) : e._state === Z ? O(t, e._result) : A(e, void 0, function (e) {
            return g(t, e);
          }, function (e) {
            return O(t, e);
          });
        }

        function m(t, e, n) {
          e.constructor === t.constructor && n === c && e.constructor.resolve === l ? y(t, e) : n === tt ? (O(t, tt.error), tt.error = null) : void 0 === n ? w(t, e) : r(n) ? v(t, e, n) : w(t, e);
        }

        function g(e, n) {
          e === n ? O(e, f()) : t(n) ? m(e, n, p(n)) : w(e, n);
        }

        function b(t) {
          t._onerror && t._onerror(t._result), S(t);
        }

        function w(t, e) {
          t._state === X && (t._result = e, t._state = Y, 0 !== t._subscribers.length && W(S, t));
        }

        function O(t, e) {
          t._state === X && (t._state = Z, t._result = e, W(b, t));
        }

        function A(t, e, n, r) {
          var i = t._subscribers,
              s = i.length;
          t._onerror = null, i[s] = e, i[s + Y] = n, i[s + Z] = r, 0 === s && t._state && W(S, t);
        }

        function S(t) {
          var e = t._subscribers,
              n = t._state;

          if (0 !== e.length) {
            for (var r = void 0, i = void 0, s = t._result, o = 0; o < e.length; o += 3) r = e[o], i = e[o + n], r ? E(n, r, i, s) : i(s);

            t._subscribers.length = 0;
          }
        }

        function C(t, e) {
          try {
            return t(e);
          } catch (t) {
            return tt.error = t, tt;
          }
        }

        function E(t, e, n, i) {
          var s = r(n),
              o = void 0,
              a = void 0,
              u = void 0,
              c = void 0;

          if (s) {
            if (o = C(n, i), o === tt ? (c = !0, a = o.error, o.error = null) : u = !0, e === o) return void O(e, d());
          } else o = i, u = !0;

          e._state !== X || (s && u ? g(e, o) : c ? O(e, a) : t === Y ? w(e, o) : t === Z && O(e, o));
        }

        function T(t, e) {
          try {
            e(function (e) {
              g(t, e);
            }, function (e) {
              O(t, e);
            });
          } catch (e) {
            O(t, e);
          }
        }

        function N() {
          return et++;
        }

        function j(t) {
          t[$] = et++, t._state = void 0, t._result = void 0, t._subscribers = [];
        }

        function x() {
          return new Error("Array Methods must be provided an Array");
        }

        function U(t) {
          return new nt(this, t).promise;
        }

        function k(t) {
          var e = this;
          return new e(F(t) ? function (n, r) {
            for (var i = t.length, s = 0; s < i; s++) e.resolve(t[s]).then(n, r);
          } : function (t, e) {
            return e(new TypeError("You must pass an array to race."));
          });
        }

        function I(t) {
          var e = this,
              n = new e(h);
          return O(n, t), n;
        }

        function R() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }

        function D() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }

        function P() {
          var t = void 0;
          if (void 0 !== e) t = e;else if ("undefined" != typeof self) t = self;else try {
            t = Function("return this")();
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
          var n = t.Promise;

          if (n) {
            var r = null;

            try {
              r = Object.prototype.toString.call(n.resolve());
            } catch (t) {}

            if ("[object Promise]" === r && !n.cast) return;
          }

          t.Promise = rt;
        }

        var L = void 0;
        L = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        };

        var F = L,
            q = 0,
            M = void 0,
            B = void 0,
            W = function (t, e) {
          G[q] = t, G[q + 1] = e, 2 === (q += 2) && (B ? B(u) : H());
        },
            J = "undefined" != typeof window ? window : void 0,
            Q = J || {},
            V = Q.MutationObserver || Q.WebKitMutationObserver,
            K = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            G = new Array(1e3),
            H = void 0;

        H = K ? function () {
          return function () {
            return process.nextTick(u);
          };
        }() : V ? function () {
          var t = 0,
              e = new V(u),
              n = document.createTextNode("");
          return e.observe(n, {
            characterData: !0
          }), function () {
            n.data = t = ++t % 2;
          };
        }() : z ? function () {
          var t = new MessageChannel();
          return t.port1.onmessage = u, function () {
            return t.port2.postMessage(0);
          };
        }() : void 0 === J ? function () {
          try {
            var t = n(30);
            return M = t.runOnLoop || t.runOnContext, o();
          } catch (t) {
            return a();
          }
        }() : a();

        var $ = Math.random().toString(36).substring(2),
            X = void 0,
            Y = 1,
            Z = 2,
            tt = {
          error: null
        },
            et = 0,
            nt = function () {
          function t(t, e) {
            this._instanceConstructor = t, this.promise = new t(h), this.promise[$] || j(this.promise), F(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : O(this.promise, x());
          }

          return t.prototype._enumerate = function (t) {
            for (var e = 0; this._state === X && e < t.length; e++) this._eachEntry(t[e], e);
          }, t.prototype._eachEntry = function (t, e) {
            var n = this._instanceConstructor,
                r = n.resolve;

            if (r === l) {
              var i = p(t);
              if (i === c && t._state !== X) this._settledAt(t._state, e, t._result);else if ("function" != typeof i) this._remaining--, this._result[e] = t;else if (n === rt) {
                var s = new n(h);
                m(s, t, i), this._willSettleAt(s, e);
              } else this._willSettleAt(new n(function (e) {
                return e(t);
              }), e);
            } else this._willSettleAt(r(t), e);
          }, t.prototype._settledAt = function (t, e, n) {
            var r = this.promise;
            r._state === X && (this._remaining--, t === Z ? O(r, n) : this._result[e] = n), 0 === this._remaining && w(r, this._result);
          }, t.prototype._willSettleAt = function (t, e) {
            var n = this;
            A(t, void 0, function (t) {
              return n._settledAt(Y, e, t);
            }, function (t) {
              return n._settledAt(Z, e, t);
            });
          }, t;
        }(),
            rt = function () {
          function t(e) {
            this[$] = N(), this._result = this._state = void 0, this._subscribers = [], h !== e && ("function" != typeof e && R(), this instanceof t ? T(this, e) : D());
          }

          return t.prototype.catch = function (t) {
            return this.then(null, t);
          }, t.prototype.finally = function (t) {
            var e = this,
                n = e.constructor;
            return e.then(function (e) {
              return n.resolve(t()).then(function () {
                return e;
              });
            }, function (e) {
              return n.resolve(t()).then(function () {
                throw e;
              });
            });
          }, t;
        }();

        return rt.prototype.then = c, rt.all = U, rt.race = k, rt.resolve = l, rt.reject = I, rt._setScheduler = i, rt._setAsap = s, rt._asap = W, rt.polyfill = P, rt.Promise = rt, rt;
      });
    }).call(e, n(7));
  }, function (t, e) {}, function (t, e, n) {
    "use strict";

    (function (e) {
      var r = n(0),
          i = {},
          s = ["getItem", "setItem", "removeItem", "clear"],
          o = e.localStorage;

      try {
        var a = "__storejs__";
        if (o.setItem(a, a), o.getItem(a) != a) throw new Error();
        o.removeItem(a);
      } catch (t) {
        o = n(32);
      }

      r(s).each(function (t) {
        i[t] = function () {
          return o[t].apply(o, arguments);
        };
      }), i.async = !1, t.exports = i;
    }).call(e, n(7));
  }, function (t, e, n) {
    !function (e) {
      var n = {},
          r = {};
      n.length = 0, n.getItem = function (t) {
        return t in r ? r[t] : null;
      }, n.setItem = function (t, e) {
        void 0 === e ? n.removeItem(t) : (r.hasOwnProperty(t) || n.length++, r[t] = "" + e);
      }, n.removeItem = function (t) {
        r.hasOwnProperty(t) && (delete r[t], n.length--);
      }, n.key = function (t) {
        return Object.keys(r)[t] || null;
      }, n.clear = function () {
        r = {}, n.length = 0;
      }, t.exports = n;
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = void 0,
          n = t.slice(0, 8).toLowerCase();

      switch (t.slice(-9)) {
        case "-9Nh9j0Va":
          e = "lncldapi.com";
          break;

        case "-MdYXbMMI":
          e = "lncldglobal.com";
          break;

        default:
          e = "lncld.net";
      }

      return {
        push: "https://" + n + ".push." + e,
        stats: "https://" + n + ".stats." + e,
        engine: "https://" + n + ".engine." + e,
        api: "https://" + n + ".api." + e
      };
    }

    var i = n(5),
        s = n(34),
        o = n(3),
        a = o.isNullOrUndefined,
        u = n(0),
        c = u.extend,
        l = u.isObject,
        h = function (t) {
      return {
        push: t,
        stats: t,
        engine: t,
        api: t
      };
    },
        f = !1;

    i.init = function (t) {
      if (!l(t)) return i.init({
        appId: t,
        appKey: arguments.length <= 1 ? void 0 : arguments[1],
        masterKey: arguments.length <= 2 ? void 0 : arguments[2]
      });
      var e = t.appId,
          n = t.appKey,
          o = t.masterKey,
          a = (t.hookKey, t.serverURLs),
          u = t.disableCurrentUser,
          d = t.production,
          p = t.realtime;
      if (i.applicationId) throw new Error("SDK is already initialized.");
      if (!e) throw new TypeError("appId must be a string");
      if (!n) throw new TypeError("appKey must be a string");
      o && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = e, i._config.applicationKey = n, i._config.masterKey = o, void 0 !== d && (i._config.production = d), void 0 !== u && (i._config.disableCurrentUser = u), i._appRouter = new s(i);

      var _ = f || void 0 !== a;

      i._setServerURLs(c({}, r(e), i._config.serverURLs, "string" == typeof a ? h(a) : a), _), p ? i._config.realtime = p : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
        appId: e,
        appKey: n
      }));
    }, i.setProduction = function (t) {
      a(t) ? i._config.production = null : i._config.production = t ? 1 : 0;
    }, i._setServerURLs = function (t) {
      var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "string" != typeof t ? c(i._config.serverURLs, t) : i._config.serverURLs = h(t), e && (i._appRouter ? i._appRouter.disable() : f = !0);
    }, i.setServerURLs = function (t) {
      return i._setServerURLs(t);
    }, i.keepErrorRawMessage = function (t) {
      i._sharedConfig.keepErrorRawMessage = t;
    }, i.setRequestTimeout = function (t) {
      i._config.requestTimeout = t;
    }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function (t) {
      return Object.defineProperty(i, t, {
        get: function () {
          return i._config[t];
        },
        set: function (e) {
          i._config[t] = e;
        }
      });
    });
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = this;
      this.AV = t, this.lockedUntil = 0, o.getAsync("serverURLs").then(function (t) {
        if (!e.disabled) {
          if (!t) return e.lock(0);
          var n = t.serverURLs,
              r = t.lockedUntil;
          e.AV._setServerURLs(n, !1), e.lockedUntil = r;
        }
      }).catch(function () {
        return e.lock(0);
      });
    }

    var i = n(3),
        s = i.ajax,
        o = n(13);
    r.prototype.disable = function () {
      this.disabled = !0;
    }, r.prototype.lock = function (t) {
      this.lockedUntil = Date.now() + t;
    }, r.prototype.refresh = function () {
      var t = this;

      if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);
        return s({
          method: "get",
          url: "https://app-router.leancloud.cn/2/route",
          query: {
            appId: this.AV.applicationId
          }
        }).then(function (e) {
          if (!t.disabled) {
            var n = e.ttl;
            if (!n) throw new Error("missing ttl");
            n *= 1e3;
            var r = {
              push: "https://" + e.push_server,
              stats: "https://" + e.stats_server,
              engine: "https://" + e.engine_server,
              api: "https://" + e.api_server
            };
            return t.AV._setServerURLs(r, !1), t.lock(n), o.setAsync("serverURLs", {
              serverURLs: r,
              lockedUntil: t.lockedUntil
            }, n);
          }
        }).catch(function (e) {
          console.warn("refresh server URLs failed: " + e.message), t.lock(600);
        });
      }
    }, t.exports = r;
  }, function (t, e, n) {
    "use strict";

    var r = n(0);

    t.exports = function (t) {
      var e = /\s+/,
          n = Array.prototype.slice;
      t.Events = {
        on: function (t, n, r) {
          var i, s, o, a, u;
          if (!n) return this;

          for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), s = t.shift(); s;) u = i[s], o = u ? u.tail : {}, o.next = a = {}, o.context = r, o.callback = n, i[s] = {
            tail: a,
            next: u ? u.next : o
          }, s = t.shift();

          return this;
        },
        off: function (t, n, i) {
          var s, o, a, u, c, l;

          if (o = this._callbacks) {
            if (!(t || n || i)) return delete this._callbacks, this;

            for (t = t ? t.split(e) : r.keys(o), s = t.shift(); s;) if (a = o[s], delete o[s], a && (n || i)) {
              for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(s, c, l), a = a.next;

              s = t.shift();
            }

            return this;
          }
        },
        trigger: function (t) {
          var r, i, s, o, a, u, c;
          if (!(s = this._callbacks)) return this;

          for (u = s.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
            if (i = s[r]) for (o = i.tail; (i = i.next) !== o;) i.callback.apply(i.context || this, c);
            if (i = u) for (o = i.tail, a = [r].concat(c); (i = i.next) !== o;) i.callback.apply(i.context || this, a);
            r = t.shift();
          }

          return this;
        }
      }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(1);

    t.exports = function (t) {
      t.GeoPoint = function (e, n) {
        r.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : r.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : r.isNumber(e) && r.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
          return i._latitude;
        }), this.__defineGetter__("longitude", function () {
          return i._longitude;
        }), this.__defineSetter__("latitude", function (e) {
          t.GeoPoint._validate(e, i.longitude), i._latitude = e;
        }), this.__defineSetter__("longitude", function (e) {
          t.GeoPoint._validate(i.latitude, e), i._longitude = e;
        }));
      }, t.GeoPoint._validate = function (t, e) {
        if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
        if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
        if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
        if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.");
      }, t.GeoPoint.current = function () {
        return new i(function (e, n) {
          navigator.geolocation.getCurrentPosition(function (n) {
            e(new t.GeoPoint({
              latitude: n.coords.latitude,
              longitude: n.coords.longitude
            }));
          }, n);
        });
      }, r.extend(t.GeoPoint.prototype, {
        toJSON: function () {
          return t.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          };
        },
        radiansTo: function (t) {
          var e = Math.PI / 180,
              n = this.latitude * e,
              r = this.longitude * e,
              i = t.latitude * e,
              s = t.longitude * e,
              o = n - i,
              a = r - s,
              u = Math.sin(o / 2),
              c = Math.sin(a / 2),
              l = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l));
        },
        kilometersTo: function (t) {
          return 6371 * this.radiansTo(t);
        },
        milesTo: function (t) {
          return 3958.8 * this.radiansTo(t);
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0);

    t.exports = function (t) {
      t.ACL = function (e) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(e)) if (e instanceof t.User) n.setReadAccess(e, !0), n.setWriteAccess(e, !0);else {
          if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");

          t._objectEach(e, function (e, i) {
            if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
            n.permissionsById[i] = {}, t._objectEach(e, function (t, e) {
              if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type.");
              if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
              n.permissionsById[i][e] = t;
            });
          });
        }
      }, t.ACL.prototype.toJSON = function () {
        return r.clone(this.permissionsById);
      }, t.ACL.prototype._setAccess = function (e, n, i) {
        if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
        if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
        var s = this.permissionsById[n];

        if (!s) {
          if (!i) return;
          s = {}, this.permissionsById[n] = s;
        }

        i ? this.permissionsById[n][e] = !0 : (delete s[e], r.isEmpty(s) && delete this.permissionsById[n]);
      }, t.ACL.prototype._getAccess = function (e, n) {
        n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[e];
      }, t.ACL.prototype.setReadAccess = function (t, e) {
        this._setAccess("read", t, e);
      }, t.ACL.prototype.getReadAccess = function (t) {
        return this._getAccess("read", t);
      }, t.ACL.prototype.setWriteAccess = function (t, e) {
        this._setAccess("write", t, e);
      }, t.ACL.prototype.getWriteAccess = function (t) {
        return this._getAccess("write", t);
      }, t.ACL.prototype.setPublicReadAccess = function (t) {
        this.setReadAccess("*", t);
      }, t.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess("*");
      }, t.ACL.prototype.setPublicWriteAccess = function (t) {
        this.setWriteAccess("*", t);
      }, t.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess("*");
      }, t.ACL.prototype.getRoleReadAccess = function (e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String");
      }, t.ACL.prototype.getRoleWriteAccess = function (e) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e);
        throw new Error("role must be a AV.Role or a String");
      }, t.ACL.prototype.setRoleReadAccess = function (e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String");
      }, t.ACL.prototype.setRoleWriteAccess = function (e, n) {
        if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n);
        throw new Error("role must be a AV.Role or a String");
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0);

    t.exports = function (t) {
      t.Op = function () {
        this._initialize.apply(this, arguments);
      }, r.extend(t.Op.prototype, {
        _initialize: function () {}
      }), r.extend(t.Op, {
        _extend: t._extend,
        _opDecoderMap: {},
        _registerDecoder: function (e, n) {
          t.Op._opDecoderMap[e] = n;
        },
        _decode: function (e) {
          var n = t.Op._opDecoderMap[e.__op];
          return n ? n(e) : void 0;
        }
      }), t.Op._registerDecoder("Batch", function (e) {
        var n = null;
        return t._arrayEach(e.ops, function (e) {
          e = t.Op._decode(e), n = e._mergeWithPrevious(n);
        }), n;
      }), t.Op.Set = t.Op._extend({
        _initialize: function (t) {
          this._value = t;
        },
        value: function () {
          return this._value;
        },
        toJSON: function () {
          return t._encode(this.value());
        },
        _mergeWithPrevious: function (t) {
          return this;
        },
        _estimate: function (t) {
          return this.value();
        }
      }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
        toJSON: function () {
          return {
            __op: "Delete"
          };
        },
        _mergeWithPrevious: function (t) {
          return this;
        },
        _estimate: function (e) {
          return t.Op._UNSET;
        }
      }), t.Op._registerDecoder("Delete", function (e) {
        return new t.Op.Unset();
      }), t.Op.Increment = t.Op._extend({
        _initialize: function (t) {
          this._amount = t;
        },
        amount: function () {
          return this._amount;
        },
        toJSON: function () {
          return {
            __op: "Increment",
            amount: this._amount
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
            if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (t) {
          return t ? t + this.amount() : this.amount();
        }
      }), t.Op._registerDecoder("Increment", function (e) {
        return new t.Op.Increment(e.amount);
      }), t.Op.BitAnd = t.Op._extend({
        _initialize: function (t) {
          this._value = t;
        },
        value: function () {
          return this._value;
        },
        toJSON: function () {
          return {
            __op: "BitAnd",
            value: this.value()
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(0);
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() & this.value());
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (t) {
          return t & this.value();
        }
      }), t.Op._registerDecoder("BitAnd", function (e) {
        return new t.Op.BitAnd(e.value);
      }), t.Op.BitOr = t.Op._extend({
        _initialize: function (t) {
          this._value = t;
        },
        value: function () {
          return this._value;
        },
        toJSON: function () {
          return {
            __op: "BitOr",
            value: this.value()
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() | this.value());
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (t) {
          return t | this.value();
        }
      }), t.Op._registerDecoder("BitOr", function (e) {
        return new t.Op.BitOr(e.value);
      }), t.Op.BitXor = t.Op._extend({
        _initialize: function (t) {
          this._value = t;
        },
        value: function () {
          return this._value;
        },
        toJSON: function () {
          return {
            __op: "BitXor",
            value: this.value()
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
            if (e instanceof t.Op.Set) return new t.Op.Set(e.value() ^ this.value());
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (t) {
          return t ^ this.value();
        }
      }), t.Op._registerDecoder("BitXor", function (e) {
        return new t.Op.BitXor(e.value);
      }), t.Op.Add = t.Op._extend({
        _initialize: function (t) {
          this._objects = t;
        },
        objects: function () {
          return this._objects;
        },
        toJSON: function () {
          return {
            __op: "Add",
            objects: t._encode(this.objects())
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (t) {
          return t ? t.concat(this.objects()) : r.clone(this.objects());
        }
      }), t.Op._registerDecoder("Add", function (e) {
        return new t.Op.Add(t._decode(e.objects));
      }), t.Op.AddUnique = t.Op._extend({
        _initialize: function (t) {
          this._objects = r.uniq(t);
        },
        objects: function () {
          return this._objects;
        },
        toJSON: function () {
          return {
            __op: "AddUnique",
            objects: t._encode(this.objects())
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (e) {
          if (e) {
            var n = r.clone(e);
            return t._arrayEach(this.objects(), function (e) {
              if (e instanceof t.Object && e.id) {
                var i = r.find(n, function (n) {
                  return n instanceof t.Object && n.id === e.id;
                });

                if (i) {
                  var s = r.indexOf(n, i);
                  n[s] = e;
                } else n.push(e);
              } else r.contains(n, e) || n.push(e);
            }), n;
          }

          return r.clone(this.objects());
        }
      }), t.Op._registerDecoder("AddUnique", function (e) {
        return new t.Op.AddUnique(t._decode(e.objects));
      }), t.Op.Remove = t.Op._extend({
        _initialize: function (t) {
          this._objects = r.uniq(t);
        },
        objects: function () {
          return this._objects;
        },
        toJSON: function () {
          return {
            __op: "Remove",
            objects: t._encode(this.objects())
          };
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) return e;
            if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
            if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (e) {
          if (e) {
            var n = r.difference(e, this.objects());
            return t._arrayEach(this.objects(), function (e) {
              e instanceof t.Object && e.id && (n = r.reject(n, function (n) {
                return n instanceof t.Object && n.id === e.id;
              }));
            }), n;
          }

          return [];
        }
      }), t.Op._registerDecoder("Remove", function (e) {
        return new t.Op.Remove(t._decode(e.objects));
      }), t.Op.Relation = t.Op._extend({
        _initialize: function (e, n) {
          this._targetClassName = null;

          var i = this,
              s = function (e) {
            if (e instanceof t.Object) {
              if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
              if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
              return e.id;
            }

            return e;
          };

          this.relationsToAdd = r.uniq(r.map(e, s)), this.relationsToRemove = r.uniq(r.map(n, s));
        },
        added: function () {
          var e = this;
          return r.map(this.relationsToAdd, function (n) {
            var r = t.Object._create(e._targetClassName);

            return r.id = n, r;
          });
        },
        removed: function () {
          var e = this;
          return r.map(this.relationsToRemove, function (n) {
            var r = t.Object._create(e._targetClassName);

            return r.id = n, r;
          });
        },
        toJSON: function () {
          var t = null,
              e = null,
              n = this,
              i = function (t) {
            return {
              __type: "Pointer",
              className: n._targetClassName,
              objectId: t
            };
          },
              s = null;

          return this.relationsToAdd.length > 0 && (s = r.map(this.relationsToAdd, i), t = {
            __op: "AddRelation",
            objects: s
          }), this.relationsToRemove.length > 0 && (s = r.map(this.relationsToRemove, i), e = {
            __op: "RemoveRelation",
            objects: s
          }), t && e ? {
            __op: "Batch",
            ops: [t, e]
          } : t || e || {};
        },
        _mergeWithPrevious: function (e) {
          if (e) {
            if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it.");

            if (e instanceof t.Op.Relation) {
              if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                  i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                  s = new t.Op.Relation(n, i);
              return s._targetClassName = this._targetClassName, s;
            }

            throw new Error("Op is invalid after previous op.");
          }

          return this;
        },
        _estimate: function (e, n, r) {
          if (e) {
            if (e instanceof t.Relation) {
              if (this._targetClassName) if (e.targetClassName) {
                if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.");
              } else e.targetClassName = this._targetClassName;
              return e;
            }

            throw new Error("Op is invalid after previous op.");
          }

          new t.Relation(n, r).targetClassName = this._targetClassName;
        }
      }), t.Op._registerDecoder("AddRelation", function (e) {
        return new t.Op.Relation(t._decode(e.objects), []);
      }), t.Op._registerDecoder("RemoveRelation", function (e) {
        return new t.Op.Relation([], t._decode(e.objects));
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0);

    t.exports = function (t) {
      t.Relation = function (t, e) {
        if (!r.isString(e)) throw new TypeError("key must be a string");
        this.parent = t, this.key = e, this.targetClassName = null;
      }, t.Relation.reverseQuery = function (e, n, r) {
        var i = new t.Query(e);
        return i.equalTo(n, r._toPointer()), i;
      }, r.extend(t.Relation.prototype, {
        _ensureParentAndKey: function (t, e) {
          if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.");
        },
        add: function (e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation(e, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
        },
        remove: function (e) {
          r.isArray(e) || (e = [e]);
          var n = new t.Op.Relation([], e);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
        },
        toJSON: function () {
          return {
            __type: "Relation",
            className: this.targetClassName
          };
        },
        query: function () {
          var e, n;
          return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n;
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(41),
        s = n(42),
        o = n(43),
        a = n(4),
        u = n(2)._request,
        c = n(1),
        l = n(3),
        h = l.tap,
        f = l.transformFetchOptions,
        d = n(6)("leancloud:file"),
        p = n(47);

    t.exports = function (t) {
      var e = function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      },
          n = function (t) {
        return r.isString(t) ? t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : "";
      },
          l = function (t) {
        if (t < 26) return String.fromCharCode(65 + t);
        if (t < 52) return String.fromCharCode(t - 26 + 97);
        if (t < 62) return String.fromCharCode(t - 52 + 48);
        if (62 === t) return "+";
        if (63 === t) return "/";
        throw new Error("Tried to encode large digit " + t + " in base64.");
      },
          _ = function (t) {
        var e = [];
        return e.length = Math.ceil(t.length / 3), r.times(e.length, function (n) {
          var r = t[3 * n],
              i = t[3 * n + 1] || 0,
              s = t[3 * n + 2] || 0,
              o = 3 * n + 1 < t.length,
              a = 3 * n + 2 < t.length;
          e[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), o ? l(i << 2 & 60 | s >> 6 & 3) : "=", a ? l(63 & s) : "="].join("");
        }), e.join("");
      };

      t.File = function (e, i, s) {
        if (this.attributes = {
          name: e,
          url: "",
          metaData: {},
          base64: ""
        }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
          base64: _(i)
        }), this._extName = "", this._data = i, this._uploadHeaders = {}, "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = n(i.name)));
        var o = void 0;
        if (i && i.owner) o = i.owner;else if (!t._config.disableCurrentUser) try {
          o = t.User.current();
        } catch (t) {
          if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t;
        }
        this.attributes.metaData.owner = o ? o.id : "unknown", this.set("mime_type", s);
      }, t.File.withURL = function (e, n, r, i) {
        if (!e || !n) throw new Error("Please provide file name and url");
        var s = new t.File(e, null, i);
        if (r) for (var o in r) s.attributes.metaData[o] || (s.attributes.metaData[o] = r[o]);
        return s.attributes.url = n, s.attributes.metaData.__source = "external", s;
      }, t.File.createWithoutData = function (e) {
        var n = new t.File();
        return n.id = e, n;
      }, r.extend(t.File.prototype, {
        className: "_File",
        _toFullJSON: function (e) {
          var n = this,
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              s = r.clone(this.attributes);
          return t._objectEach(s, function (n, r) {
            s[r] = t._encode(n, e, void 0, i);
          }), t._objectEach(this._operations, function (t, e) {
            s[e] = t;
          }), r.has(this, "id") && (s.objectId = this.id), r(["createdAt", "updatedAt"]).each(function (t) {
            if (r.has(n, t)) {
              var e = n[t];
              s[t] = r.isDate(e) ? e.toJSON() : e;
            }
          }), i && (s.__type = "File"), s;
        },
        toFullJSON: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(t);
        },
        toJSON: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
          return this._toFullJSON(n, !1);
        },
        _toPointer: function () {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          };
        },
        getACL: function () {
          return this._acl;
        },
        setACL: function (e) {
          if (!(e instanceof t.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
          this._acl = e;
        },
        name: function () {
          return this.get("name");
        },
        url: function () {
          return this.get("url");
        },
        get: function (t) {
          switch (t) {
            case "objectId":
              return this.id;

            case "url":
            case "name":
            case "mime_type":
            case "metaData":
            case "createdAt":
            case "updatedAt":
              return this.attributes[t];

            default:
              return this.attributes.metaData[t];
          }
        },
        set: function () {
          for (var t = this, e = function (e, n) {
            switch (e) {
              case "name":
              case "url":
              case "mime_type":
              case "base64":
              case "metaData":
                t.attributes[e] = n;
                break;

              default:
                t.attributes.metaData[e] = n;
            }
          }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];

          switch (r.length) {
            case 1:
              for (var s in r[0]) e(s, r[0][s]);

              break;

            case 2:
              e(r[0], r[1]);
          }
        },
        setUploadHeader: function (t, e) {
          return this._uploadHeaders[t] = e, this;
        },
        metaData: function (t, e) {
          return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData;
        },
        thumbnailURL: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
              r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png",
              s = this.attributes.url;
          if (!s) throw new Error("Invalid url.");
          if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value.");
          if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
          return s + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i;
        },
        size: function () {
          return this.metaData().size;
        },
        ownerId: function () {
          return this.metaData().owner;
        },
        destroy: function (t) {
          return this.id ? u("files", null, this.id, "DELETE", null, t) : c.reject(new Error("The file id does not eixst."));
        },
        _fileToken: function (t, r) {
          var i = this.attributes.name,
              s = n(i);
          !s && this._extName && (i += this._extName, s = this._extName);
          var o = e() + e() + e() + e() + e() + s,
              a = {
            key: o,
            name: i,
            ACL: this._acl,
            mime_type: t,
            metaData: this.attributes.metaData
          };
          return this._qiniu_key = o, u("fileTokens", null, null, "POST", a, r);
        },
        save: function () {
          var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave) if (this._data) {
            var n = this.get("mime_type");
            this._previousSave = this._fileToken(n, e).then(function (a) {
              return a.mime_type && (n = a.mime_type, t.set("mime_type", n)), t._token = a.token, c.resolve().then(function () {
                var e = t._data;
                if (e && e.base64) return p(e.base64, n);
                if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), e.blob;
                if ("undefined" != typeof Blob && e instanceof Blob) return e;
                throw new TypeError("malformed file data");
              }).then(function (n) {
                var u = r.extend({}, e);

                switch (e.onprogress && (u.onprogress = function (t) {
                  if ("download" !== t.direction) return e.onprogress(t);
                }), a.provider) {
                  case "s3":
                    return o(a, n, t, u);

                  case "qcloud":
                    return i(a, n, t, u);

                  case "qiniu":
                  default:
                    return s(a, n, t, u);
                }
              }).then(h(function () {
                return t._callback(!0);
              }), function (e) {
                throw t._callback(!1), e;
              });
            });
          } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var a = {
              name: this.attributes.name,
              ACL: this._acl,
              metaData: this.attributes.metaData,
              mime_type: this.mimeType,
              url: this.attributes.url
            };
            this._previousSave = u("files", this.attributes.name, null, "post", a, e).then(function (e) {
              return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t;
            });
          }
          return this._previousSave;
        },
        _callback: function (t) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: t
          }).catch(d), delete this._token, delete this._data;
        },
        fetch: function (t, e) {
          return u("files", null, this.id, "GET", f(t), e).then(this._finishFetch.bind(this));
        },
        _finishFetch: function (e) {
          var n = t.Object.prototype.parse(e);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this;
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(8),
        i = n(6)("cos"),
        s = n(1);

    t.exports = function (t, e, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.upload_url + "?sign=" + encodeURIComponent(t.token);
      return new s(function (t, s) {
        var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", e, n.attributes.name).field("op", "upload");
        o.onprogress && u.on("progress", o.onprogress), u.end(function (e, r) {
          if (r && i(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), s(e);
          t(n);
        });
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(8),
        i = n(1),
        s = n(6)("qiniu");

    t.exports = function (t, e, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
      var a = t.token,
          u = t.upload_url || "https://upload.qiniup.com";
      return new i(function (t, i) {
        var c = r("POST", u).set(n._uploadHeaders).attach("file", e, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        o.onprogress && c.on("progress", o.onprogress), c.end(function (e, r) {
          if (r && s(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), i(e);
          t(n);
        });
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(8),
        i = n(1),
        s = function (t, e) {
      return e && (t.statusCode = e.status, t.responseText = e.text, t.response = e.body), t;
    };

    t.exports = function (t, e, n) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, new i(function (i, a) {
        var u = r("PUT", t.upload_url).set(Object.assign({
          "Content-Type": n.get("mime_type"),
          "Cache-Control": "public, max-age=31536000"
        }, n._uploadHeaders));
        o.onprogress && u.on("progress", o.onprogress), u.on("response", function (t) {
          if (t.ok) return i(n);
          a(s(t.error, t));
        }), u.on("error", function (t, e) {
          return a(s(t, e));
        }), u.send(e).end();
      });
    };
  }, function (t, e, n) {
    !function () {
      var e = n(45),
          r = n(14).utf8,
          i = n(46),
          s = n(14).bin,
          o = function (t, n) {
        t.constructor == String ? t = n && "binary" === n.encoding ? s.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());

        for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);

        a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;

        for (var p = o._ff, _ = o._gg, v = o._hh, y = o._ii, d = 0; d < a.length; d += 16) {
          var m = c,
              g = l,
              b = h,
              w = f;
          c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = y(c, l, h, f, a[d + 0], 6, -198630844), f = y(f, c, l, h, a[d + 7], 10, 1126891415), h = y(h, f, c, l, a[d + 14], 15, -1416354905), l = y(l, h, f, c, a[d + 5], 21, -57434055), c = y(c, l, h, f, a[d + 12], 6, 1700485571), f = y(f, c, l, h, a[d + 3], 10, -1894986606), h = y(h, f, c, l, a[d + 10], 15, -1051523), l = y(l, h, f, c, a[d + 1], 21, -2054922799), c = y(c, l, h, f, a[d + 8], 6, 1873313359), f = y(f, c, l, h, a[d + 15], 10, -30611744), h = y(h, f, c, l, a[d + 6], 15, -1560198380), l = y(l, h, f, c, a[d + 13], 21, 1309151649), c = y(c, l, h, f, a[d + 4], 6, -145523070), f = y(f, c, l, h, a[d + 11], 10, -1120210379), h = y(h, f, c, l, a[d + 2], 15, 718787259), l = y(l, h, f, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0;
        }

        return e.endian([c, l, h, f]);
      };

      o._ff = function (t, e, n, r, i, s, o) {
        var a = t + (e & n | ~e & r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e;
      }, o._gg = function (t, e, n, r, i, s, o) {
        var a = t + (e & r | n & ~r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e;
      }, o._hh = function (t, e, n, r, i, s, o) {
        var a = t + (e ^ n ^ r) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e;
      }, o._ii = function (t, e, n, r, i, s, o) {
        var a = t + (n ^ (e | ~r)) + (i >>> 0) + o;
        return (a << s | a >>> 32 - s) + e;
      }, o._blocksize = 16, o._digestsize = 16, t.exports = function (t, n) {
        if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
        var r = e.wordsToBytes(o(t, n));
        return n && n.asBytes ? r : n && n.asString ? s.bytesToString(r) : e.bytesToHex(r);
      };
    }();
  }, function (t, e) {
    !function () {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = {
        rotl: function (t, e) {
          return t << e | t >>> 32 - e;
        },
        rotr: function (t, e) {
          return t << 32 - e | t >>> e;
        },
        endian: function (t) {
          if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);

          for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);

          return t;
        },
        randomBytes: function (t) {
          for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));

          return e;
        },
        bytesToWords: function (t) {
          for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;

          return e;
        },
        wordsToBytes: function (t) {
          for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);

          return e;
        },
        bytesToHex: function (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));

          return e.join("");
        },
        hexToBytes: function (t) {
          for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));

          return e;
        },
        bytesToBase64: function (t) {
          for (var n = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], s = 0; s < 4; s++) 8 * r + 6 * s <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - s) & 63)) : n.push("=");

          return n.join("");
        },
        base64ToBytes: function (t) {
          t = t.replace(/[^A-Z0-9+\/]/gi, "");

          for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);

          return n;
        }
      };
      t.exports = n;
    }();
  }, function (t, e) {
    function n(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
    }

    function r(t) {
      return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0));
    }
    /*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <https://feross.org>
    * @license  MIT
    */


    t.exports = function (t) {
      return null != t && (n(t) || r(t) || !!t._isBuffer);
    };
  }, function (t, e, n) {
    "use strict";

    var r = function (t, e) {
      var n;
      t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);

      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);

      return new Blob([r], {
        type: e
      });
    };

    t.exports = r;
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      return t && t[e] ? s.isFunction(t[e]) ? t[e]() : t[e] : null;
    }

    var i = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            i = !1,
            s = void 0;

        try {
          for (var o, a = t[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
        } catch (t) {
          i = !0, s = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (i) throw s;
          }
        }

        return n;
      }

      return function (e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        s = n(0),
        o = n(4),
        a = n(1),
        u = n(2),
        c = u._request,
        l = n(3),
        h = l.isNullOrUndefined,
        f = l.ensureArray,
        d = l.transformFetchOptions,
        p = l.setValue,
        _ = l.findValue,
        v = l.isPlainObject,
        y = function t(e) {
      return s.isArray(e) ? e.map(t) : v(e) ? s.mapObject(e, t) : s.isObject(e) && e._toPointer ? e._toPointer() : e;
    },
        m = ["objectId", "createdAt", "updatedAt"],
        g = function (t) {
      if (-1 !== m.indexOf(t)) throw new Error("key[" + t + "] is reserved");
    },
        b = function (t) {
      var e = s.find(t, function (t) {
        return t instanceof Error;
      });
      if (!e) return t;
      var n = new o(e.code, e.message);
      throw n.results = t, n;
    };

    t.exports = function (t) {
      t.Object = function (e, n) {
        if (s.isString(e)) return t.Object._create.apply(this, arguments);
        e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
        var i = r(this, "defaults");
        i && (e = s.extend({}, i, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
          silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments);
      }, t.Object.saveAll = function (e, n) {
        return t.Object._deepSaveAsync(e, null, n);
      }, t.Object.fetchAll = function (t, e) {
        return a.resolve().then(function () {
          return c("batch", null, null, "POST", {
            requests: s.map(t, function (t) {
              if (!t.className) throw new Error("object must have className to fetch");
              if (!t.id) throw new Error("object must have id to fetch");
              if (t.dirty()) throw new Error("object is modified but not saved");
              return {
                method: "GET",
                path: "/1.1/classes/" + t.className + "/" + t.id
              };
            })
          }, e);
        }).then(function (e) {
          var n = s.map(t, function (t, n) {
            if (e[n].success) {
              var r = t.parse(e[n].success);
              return t._cleanupUnsetKeys(r), t._finishFetch(r), t;
            }

            return null === e[n].success ? new o(o.OBJECT_NOT_FOUND, "Object not found.") : new o(e[n].error.code, e[n].error.error);
          });
          return b(n);
        });
      }, s.extend(t.Object.prototype, t.Events, {
        _fetchWhenSave: !1,
        initialize: function () {},
        fetchWhenSave: function (t) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !s.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = t;
        },
        getObjectId: function () {
          return this.id;
        },
        getCreatedAt: function () {
          return this.createdAt || this.get("createdAt");
        },
        getUpdatedAt: function () {
          return this.updatedAt || this.get("updatedAt");
        },
        toJSON: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return this._toFullJSON(n, !1);
        },
        toFullJSON: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(t);
        },
        _toFullJSON: function (e) {
          var n = this,
              r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              i = s.clone(this.attributes);
          if (s.isArray(e)) var o = e.concat(this);
          return t._objectEach(i, function (e, n) {
            i[n] = t._encode(e, o, void 0, r);
          }), t._objectEach(this._operations, function (t, e) {
            i[e] = t;
          }), s.has(this, "id") && (i.objectId = this.id), s(["createdAt", "updatedAt"]).each(function (t) {
            if (s.has(n, t)) {
              var e = n[t];
              i[t] = s.isDate(e) ? e.toJSON() : e;
            }
          }), r && (i.__type = "Object", s.isArray(e) && e.length && (i.__type = "Pointer"), i.className = this.className), i;
        },
        _refreshCache: function () {
          var e = this;
          e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function (n, r) {
            n instanceof t.Object ? n._refreshCache() : s.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), {
              silent: !0
            });
          }), delete e._refreshingCache);
        },
        dirty: function (t) {
          this._refreshCache();

          var e = s.last(this._opSetQueue);
          return t ? !!e[t] : !this.id || s.keys(e).length > 0;
        },
        _toPointer: function () {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          };
        },
        get: function (t) {
          switch (t) {
            case "objectId":
              return this.id;

            case "createdAt":
            case "updatedAt":
              return this[t];

            default:
              return this.attributes[t];
          }
        },
        relation: function (e) {
          var n = this.get(e);

          if (n) {
            if (!(n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e);
            return n._ensureParentAndKey(this, e), n;
          }

          return new t.Relation(this, e);
        },
        escape: function (t) {
          var e = this._escapedAttributes[t];
          if (e) return e;
          var n,
              r = this.attributes[t];
          return n = h(r) ? "" : s.escape(r.toString()), this._escapedAttributes[t] = n, n;
        },
        has: function (t) {
          return !h(this.attributes[t]);
        },
        _mergeMagicFields: function (e) {
          var n = this,
              r = ["objectId", "createdAt", "updatedAt"];
          return t._arrayEach(r, function (r) {
            e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || s.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r]);
          }), e;
        },
        _startSave: function () {
          this._opSetQueue.push({});
        },
        _cancelSave: function () {
          var e = s.first(this._opSetQueue);
          this._opSetQueue = s.rest(this._opSetQueue);
          var n = s.first(this._opSetQueue);
          t._objectEach(e, function (t, r) {
            var i = e[r],
                s = n[r];
            i && s ? n[r] = s._mergeWithPrevious(i) : i && (n[r] = i);
          }), this._saving = this._saving - 1;
        },
        _finishSave: function (e) {
          var n = {};

          t._traverse(this.attributes, function (e) {
            e instanceof t.Object && e.id && e._hasData && (n[e.id] = e);
          });

          var r = s.first(this._opSetQueue);
          this._opSetQueue = s.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
          var i = this;
          t._objectEach(e, function (e, r) {
            i._serverData[r] = t._decode(e, r);

            var s = t._traverse(i._serverData[r], function (e) {
              if (e instanceof t.Object && n[e.id]) return n[e.id];
            });

            s && (i._serverData[r] = s);
          }), this._rebuildAllEstimatedData();

          var o = this._opSetQueue.map(s.clone);

          this._refreshCache(), this._opSetQueue = o, this._saving = this._saving - 1;
        },
        _finishFetch: function (e, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(e);
          var r = this;
          t._objectEach(e, function (e, n) {
            r._serverData[n] = t._decode(e, n);
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n;
        },
        _applyOpSet: function (e, n) {
          var r = this;

          t._objectEach(e, function (e, s) {
            var o = _(n, s),
                a = i(o, 3),
                u = a[0],
                c = a[1],
                l = a[2];

            p(n, s, e._estimate(u, r, s)), c && c[l] === t.Op._UNSET && delete c[l];
          });
        },
        _resetCacheForKey: function (e) {
          var n = this.attributes[e];

          if (s.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
            var r = JSON.stringify(y(n));

            if (this._hashedJSON[e] !== r) {
              var i = !!this._hashedJSON[e];
              return this._hashedJSON[e] = r, i;
            }
          }

          return !1;
        },
        _rebuildEstimatedDataForKey: function (e) {
          var n = this;
          delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function (r) {
            var s = r[e];

            if (s) {
              var o = _(n.attributes, e),
                  a = i(o, 4),
                  u = a[0],
                  c = a[1],
                  l = a[2],
                  h = a[3];

              p(n.attributes, e, s._estimate(u, n, e)), c && c[l] === t.Op._UNSET && delete c[l], n._resetCacheForKey(h);
            }
          });
        },
        _rebuildAllEstimatedData: function () {
          var e = this,
              n = s.clone(this.attributes);
          this.attributes = s.clone(this._serverData), t._arrayEach(this._opSetQueue, function (n) {
            e._applyOpSet(n, e.attributes), t._objectEach(n, function (t, n) {
              e._resetCacheForKey(n);
            });
          }), t._objectEach(n, function (t, n) {
            e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {});
          }), t._objectEach(this.attributes, function (t, r) {
            s.has(n, r) || e.trigger("change:" + r, e, t, {});
          });
        },
        set: function (e, n, r) {
          var i;
          if (s.isObject(e) || h(e) ? (i = s.mapObject(e, function (e, n) {
            return g(n), t._decode(e, n);
          }), r = n) : (i = {}, g(e), i[e] = t._decode(n, e)), r = r || {}, !i) return this;
          i instanceof t.Object && (i = i.attributes), r.unset && t._objectEach(i, function (e, n) {
            i[n] = new t.Op.Unset();
          });
          var o = s.clone(i),
              a = this;
          t._objectEach(o, function (e, n) {
            e instanceof t.Op && (o[n] = e._estimate(a.attributes[n], a, n), o[n] === t.Op._UNSET && delete o[n]);
          }), this._validate(i, r), r.changes = {};
          var u = this._escapedAttributes;
          return t._arrayEach(s.keys(i), function (e) {
            var n = i[e];
            n instanceof t.Relation && (n.parent = a), n instanceof t.Op || (n = new t.Op.Set(n));
            var o = !0;
            n instanceof t.Op.Set && s.isEqual(a.attributes[e], n.value) && (o = !1), o && (delete u[e], r.silent ? a._silent[e] = !0 : r.changes[e] = !0);
            var c = s.last(a._opSetQueue);
            c[e] = n._mergeWithPrevious(c[e]), a._rebuildEstimatedDataForKey(e), o ? (a.changed[e] = a.attributes[e], r.silent || (a._pending[e] = !0)) : (delete a.changed[e], delete a._pending[e]);
          }), r.silent || this.change(r), this;
        },
        unset: function (t, e) {
          return e = e || {}, e.unset = !0, this.set(t, null, e);
        },
        increment: function (e, n) {
          return (s.isUndefined(n) || s.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n));
        },
        add: function (e, n) {
          return this.set(e, new t.Op.Add(f(n)));
        },
        addUnique: function (e, n) {
          return this.set(e, new t.Op.AddUnique(f(n)));
        },
        remove: function (e, n) {
          return this.set(e, new t.Op.Remove(f(n)));
        },
        bitAnd: function (e, n) {
          return this.set(e, new t.Op.BitAnd(n));
        },
        bitOr: function (e, n) {
          return this.set(e, new t.Op.BitOr(n));
        },
        bitXor: function (e, n) {
          return this.set(e, new t.Op.BitXor(n));
        },
        op: function (t) {
          return s.last(this._opSetQueue)[t];
        },
        clear: function (t) {
          t = t || {}, t.unset = !0;
          var e = s.extend(this.attributes, this._operations);
          return this.set(e, t);
        },
        _getSaveJSON: function () {
          var e = s.clone(s.first(this._opSetQueue));
          return t._objectEach(e, function (t, n) {
            e[n] = t.toJSON();
          }), e;
        },
        _canBeSerialized: function () {
          return t.Object._canBeSerializedAsValue(this.attributes);
        },
        fetch: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = arguments[1],
              n = this;
          return c("classes", this.className, this.id, "GET", d(t), e).then(function (e) {
            var r = n.parse(e);
            return t.keys || n._cleanupUnsetKeys(r), n._finishFetch(r, !0), n;
          });
        },
        _cleanupUnsetKeys: function (e) {
          var n = this;

          t._objectEach(this._serverData, function (t, r) {
            void 0 === e[r] && delete n._serverData[r];
          });
        },
        save: function (e, n, r) {
          var i, o, u;
          s.isObject(e) || h(e) ? (i = e, u = n) : (i = {}, i[e] = n, u = r), u = s.clone(u) || {}, u.wait && (o = s.clone(this.attributes));
          var l = s.clone(u) || {};
          l.wait && (l.silent = !0), i && this.set(i, l);
          var f = this,
              d = [],
              p = [];
          return t.Object._findUnsavedChildren(f, d, p), d.length + p.length > 1 ? t.Object._deepSaveAsync(this, f, u) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || a.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (t) {}).then(function () {
            var t = f.id ? "PUT" : "POST",
                e = f._getSaveJSON(),
                n = {};

            if ((f._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u._failOnNotExist && (n.failOnNotExist = "true"), u.query) {
              var r;

              if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), !n.where) {
                throw new Error("options.query is not an AV.Query");
              }
            }

            s.extend(e, f._flags);
            var a = "classes",
                h = f.className;
            "_User" !== f.className || f.id || (a = "users", h = null);
            var d = u._makeRequest || c,
                p = d(a, h, f.id, t, e, u, n);
            return p = p.then(function (t) {
              var e = f.parse(t);
              return u.wait && (e = s.extend(i || {}, e)), f._finishSave(e), u.wait && f.set(o, l), f;
            }, function (t) {
              throw f._cancelSave(), t;
            });
          }), this._allPreviousSaves);
        },
        destroy: function (t) {
          t = t || {};

          var e = this,
              n = function () {
            e.trigger("destroy", e, e.collection, t);
          };

          return this.id ? (t.wait || n(), c("classes", this.className, this.id, "DELETE", this._flags, t).then(function () {
            return t.wait && n(), e;
          })) : n();
        },
        parse: function (e) {
          var n = s.clone(e);
          return s(["createdAt", "updatedAt"]).each(function (e) {
            n[e] && (n[e] = t._parseDate(n[e]));
          }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n;
        },
        clone: function () {
          return new this.constructor(this.attributes);
        },
        isNew: function () {
          return !this.id;
        },
        change: function (e) {
          e = e || {};
          var n = this._changing;
          this._changing = !0;
          var r = this;

          t._objectEach(this._silent, function (t) {
            r._pending[t] = !0;
          });

          var i = s.extend({}, e.changes, this._silent);
          if (this._silent = {}, t._objectEach(i, function (t, n) {
            r.trigger("change:" + n, r, r.get(n), e);
          }), n) return this;

          for (var o = function (t, e) {
            r._pending[e] || r._silent[e] || delete r.changed[e];
          }; !s.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, o), r._previousAttributes = s.clone(this.attributes);

          return this._changing = !1, this;
        },
        hasChanged: function (t) {
          return arguments.length ? this.changed && s.has(this.changed, t) : !s.isEmpty(this.changed);
        },
        changedAttributes: function (e) {
          if (!e) return !!this.hasChanged() && s.clone(this.changed);
          var n = {},
              r = this._previousAttributes;
          return t._objectEach(e, function (t, e) {
            s.isEqual(r[e], t) || (n[e] = t);
          }), n;
        },
        previous: function (t) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function () {
          return s.clone(this._previousAttributes);
        },
        isValid: function () {
          try {
            this.validate(this.attributes);
          } catch (t) {
            return !1;
          }

          return !0;
        },
        validate: function (e) {
          if (s.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new o(o.OTHER_CAUSE, "ACL must be a AV.ACL.");
        },
        _validate: function (t, e) {
          !e.silent && this.validate && (t = s.extend({}, this.attributes, t), this.validate(t));
        },
        getACL: function () {
          return this.get("ACL");
        },
        setACL: function (t, e) {
          return this.set("ACL", t, e);
        },
        disableBeforeHook: function () {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
        },
        disableAfterHook: function () {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
        },
        ignoreHook: function (e) {
          s.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e) || console.trace("Unsupported hookName: " + e), t.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e);
        }
      }), t.Object.createWithoutData = function (e, n, r) {
        var i = new t.Object(e);
        return i.id = n, i._hasData = r, i;
      }, t.Object.destroyAll = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || 0 === t.length) return a.resolve();
        var n = s.groupBy(t, function (t) {
          return JSON.stringify({
            className: t.className,
            flags: t._flags
          });
        }),
            r = {
          requests: s.map(n, function (t) {
            var e = s.map(t, "id").join(",");
            return {
              method: "DELETE",
              path: "/1.1/classes/" + t[0].className + "/" + e,
              body: t[0]._flags
            };
          })
        };
        return c("batch", null, null, "POST", r, e).then(function (t) {
          var e = s.find(t, function (t) {
            return !t.success;
          });
          if (e) throw new o(e.error.code, e.error.error);
        });
      }, t.Object._getSubclass = function (e) {
        if (!s.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = t.Object._classMap[e];
        return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n;
      }, t.Object._create = function (e, n, r) {
        return new (t.Object._getSubclass(e))(n, r);
      }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function (e, n) {
        return new t.Object(e, n);
      }, t.Object.extend = function (e, n, r) {
        if (!s.isString(e)) {
          if (e && s.has(e, "className")) return t.Object.extend(e.className, e, n);
          throw new Error("AV.Object.extend's first argument should be the className.");
        }

        "User" === e && (e = "_User");
        var i = null;

        if (s.has(t.Object._classMap, e)) {
          var o = t.Object._classMap[e];
          if (!n && !r) return o;
          i = o._extend(n, r);
        } else n = n || {}, n._className = e, i = this._extend(n, r);

        return i.extend = function (n) {
          if (s.isString(n) || n && s.has(n, "className")) return t.Object.extend.apply(i, arguments);
          var r = [e].concat(s.toArray(arguments));
          return t.Object.extend.apply(i, r);
        }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(t.Object, "query")), i.new = function (t, e) {
          return new i(t, e);
        }, t.Object._classMap[e] = i, i;
      }, Object.defineProperty(t.Object.prototype, "className", {
        get: function () {
          var t = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === t ? "_User" : t;
        }
      }), t.Object.register = function (e, n) {
        if (!(e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object");
        var r = n || e.name;
        if (!r.length) throw new Error("registered class must be named");
        n && (e._LCClassName = n), t.Object._classMap[r] = e;
      }, Object.defineProperty(t.Object, "query", {
        get: function () {
          return new t.Query(this.prototype.className);
        }
      }), t.Object._findUnsavedChildren = function (e, n, r) {
        t._traverse(e, function (e) {
          return e instanceof t.Object ? void (e.dirty() && n.push(e)) : e instanceof t.File ? void (e.id || r.push(e)) : void 0;
        });
      }, t.Object._canBeSerializedAsValue = function (e) {
        var n = !0;
        return e instanceof t.Object || e instanceof t.File ? n = !!e.id : s.isArray(e) ? t._arrayEach(e, function (e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1);
        }) : s.isObject(e) && t._objectEach(e, function (e) {
          t.Object._canBeSerializedAsValue(e) || (n = !1);
        }), n;
      }, t.Object._deepSaveAsync = function (e, n, r) {
        var i = [],
            u = [];

        t.Object._findUnsavedChildren(e, i, u);

        var l = a.resolve();
        s.each(u, function (t) {
          l = l.then(function () {
            return t.save();
          });
        });
        var h = s.uniq(i),
            f = s.uniq(h);
        return l.then(function () {
          return a._continueWhile(function () {
            return f.length > 0;
          }, function () {
            var e = [],
                n = [];
            if (t._arrayEach(f, function (t) {
              if (e.length > 20) return void n.push(t);
              t._canBeSerialized() ? e.push(t) : n.push(t);
            }), f = n, 0 === e.length) return a.reject(new o(o.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var i = a.resolve(s.map(e, function (t) {
              return t._allPreviousSaves || a.resolve();
            })),
                u = i.then(function () {
              return c("batch", null, null, "POST", {
                requests: s.map(e, function (t) {
                  var e = t.id ? "PUT" : "POST",
                      n = t._getSaveJSON();

                  s.extend(n, t._flags);
                  var r = t.className,
                      i = "/classes/" + r;
                  "_User" !== t.className || t.id || (i = "/users");
                  var i = "/1.1" + i;
                  return t.id && (i = i + "/" + t.id), t._startSave(), {
                    method: e,
                    path: i,
                    body: n
                  };
                })
              }, r).then(function (t) {
                var n = s.map(e, function (e, n) {
                  return t[n].success ? (e._finishSave(e.parse(t[n].success)), e) : (e._cancelSave(), new o(t[n].error.code, t[n].error.error));
                });
                return b(n);
              });
            });
            return t._arrayEach(e, function (t) {
              t._allPreviousSaves = u;
            }), u;
          });
        }).then(function () {
          return e;
        });
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(4);

    t.exports = function (t) {
      t.Role = t.Object.extend("_Role", {
        constructor: function (e, n) {
          if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) {
            if (!(n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n);
          }
        },
        getName: function () {
          return this.get("name");
        },
        setName: function (t, e) {
          return this.set("name", t, e);
        },
        getUsers: function () {
          return this.relation("users");
        },
        getRoles: function () {
          return this.relation("roles");
        },
        validate: function (e, n) {
          if ("name" in e && e.name !== this.getName()) {
            var s = e.name;
            if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(s)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(s)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
          }

          return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n);
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var i = n(0),
        s = n(9),
        o = n(4),
        a = n(2),
        u = a._request,
        c = a.request,
        l = n(1),
        h = function () {
      if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
      return new l(function (t, e) {
        wx.login({
          success: function (n) {
            var r = n.code,
                i = n.errMsg;
            r ? t(r) : e(new Error(i));
          },
          fail: function () {
            return e(new Error("wx.login 失败"));
          }
        });
      });
    },
        f = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.unionIdPlatform,
          s = void 0 === r ? "weixin" : r,
          a = n.asMainAccount,
          u = void 0 !== a && a;
      if ("string" != typeof e) throw new o(o.OTHER_CAUSE, "unionId is not a string");
      if ("string" != typeof s) throw new o(o.OTHER_CAUSE, "unionIdPlatform is not a string");
      return i.extend({}, t, {
        platform: s,
        unionid: e,
        main_account: Boolean(u)
      });
    };

    t.exports = function (t) {
      t.User = t.Object.extend("_User", {
        _isCurrentUser: !1,
        _mergeMagicFields: function (e) {
          return e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e);
        },
        _cleanupAuthData: function () {
          if (this.isCurrent()) {
            var e = this.get("authData");
            e && t._objectEach(this.get("authData"), function (t, n) {
              e[n] || delete e[n];
            });
          }
        },
        _synchronizeAllAuthData: function () {
          if (this.get("authData")) {
            var e = this;

            t._objectEach(this.get("authData"), function (t, n) {
              e._synchronizeAuthData(n);
            });
          }
        },
        _synchronizeAuthData: function (e) {
          if (this.isCurrent()) {
            var n;
            i.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
            var r = this.get("authData");

            if (r && e) {
              e.restoreAuthentication(r[n]) || this.dissociateAuthData(e);
            }
          }
        },
        _handleSaveResult: function (e) {
          return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? l.resolve() : l.resolve(t.User._saveCurrentUser(this));
        },
        _linkWith: function (e, n) {
          var s,
              o = this,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              u = a.failOnNotExist,
              c = void 0 !== u && u;
          return i.isString(e) ? (s = e, e = t.User._authProviders[e]) : s = e.getAuthType(), n ? this.save({
            authData: r({}, s, n)
          }, {
            fetchWhenSave: !!this.get("authData"),
            _failOnNotExist: c
          }).then(function (t) {
            return t._handleSaveResult(!0).then(function () {
              return t;
            });
          }) : e.authenticate().then(function (t) {
            return o._linkWith(e, t);
          });
        },
        associateWithAuthData: function (t, e) {
          return this._linkWith(e, t);
        },
        associateWithAuthDataAndUnionId: function (t, e, n, r) {
          return this._linkWith(e, f(t, n, r));
        },
        linkWithWeapp: function () {
          var t = this;
          return h().then(function (e) {
            return t._linkWith("lc_weapp", {
              code: e
            });
          });
        },
        dissociateAuthData: function (t) {
          return this.unset("authData." + t), this.save().then(function (t) {
            return t._handleSaveResult(!0).then(function () {
              return t;
            });
          });
        },
        _unlinkFrom: function (t) {
          return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(t);
        },
        _isLinked: function (t) {
          var e;
          return e = i.isString(t) ? t : t.getAuthType(), !!(this.get("authData") || {})[e];
        },
        isAnonymous: function () {
          return this._isLinked("anonymous");
        },
        logOut: function () {
          this._logOutWithAll(), this._isCurrentUser = !1;
        },
        _logOutWithAll: function () {
          if (this.get("authData")) {
            var e = this;

            t._objectEach(this.get("authData"), function (t, n) {
              e._logOutWith(n);
            });
          }
        },
        _logOutWith: function (e) {
          this.isCurrent() && (i.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate());
        },
        signUp: function (t, e) {
          var n = t && t.username || this.get("username");
          if (!n || "" === n) throw new o(o.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var r = t && t.password || this.get("password");
          if (!r || "" === r) throw new o(o.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(t, e).then(function (t) {
            return t.isAnonymous() && (t.unset("authData.anonymous"), t._opSetQueue = [{}]), t._handleSaveResult(!0).then(function () {
              return t;
            });
          });
        },
        signUpOrlogInWithMobilePhone: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!n || "" === n) throw new o(o.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var r = t && t.smsCode || this.get("smsCode");
          if (!r || "" === r) throw new o(o.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return e._makeRequest = function (t, e, n, r, i) {
            return u("usersByMobilePhone", null, null, "POST", i);
          }, this.save(t, e).then(function (t) {
            return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function () {
              return t;
            });
          });
        },
        loginWithAuthData: function (t, e, n) {
          return this._linkWith(e, t, n);
        },
        loginWithAuthDataAndUnionId: function (t, e, n, r) {
          return this.loginWithAuthData(f(t, n, r), e, r);
        },
        loginWithWeapp: function (t) {
          var e = this;
          return h().then(function (n) {
            return e.loginWithAuthData({
              code: n
            }, "lc_weapp", t);
          });
        },
        logIn: function () {
          var t = this;
          return u("login", null, null, "POST", this.toJSON()).then(function (e) {
            var n = t.parse(e);
            return t._finishFetch(n), t._handleSaveResult(!0).then(function () {
              return n.smsCode || delete t.attributes.smsCode, t;
            });
          });
        },
        save: function (e, n, r) {
          var s, o;
          return i.isObject(e) || i.isNull(e) || i.isUndefined(e) ? (s = e, o = n) : (s = {}, s[e] = n, o = r), o = o || {}, t.Object.prototype.save.call(this, s, o).then(function (t) {
            return t._handleSaveResult(!1).then(function () {
              return t;
            });
          });
        },
        follow: function (e, n) {
          if (!this.id) throw new Error("Please signin.");
          var r = void 0,
              s = void 0;
          e.user ? (r = e.user, s = e.attributes) : r = e;
          var o = i.isString(r) ? r : r.id;
          if (!o) throw new Error("Invalid target user.");
          var a = "users/" + this.id + "/friendship/" + o;
          return u(a, null, null, "POST", t._encode(s), n);
        },
        unfollow: function (t, e) {
          if (!this.id) throw new Error("Please signin.");
          var n = void 0;
          n = t.user ? t.user : t;
          var r = i.isString(n) ? n : n.id;
          if (!r) throw new Error("Invalid target user.");
          var s = "users/" + this.id + "/friendship/" + r;
          return u(s, null, null, "DELETE", null, e);
        },
        followerQuery: function () {
          return t.User.followerQuery(this.id);
        },
        followeeQuery: function () {
          return t.User.followeeQuery(this.id);
        },
        fetch: function (e, n) {
          return t.Object.prototype.fetch.call(this, e, n).then(function (t) {
            return t._handleSaveResult(!1).then(function () {
              return t;
            });
          });
        },
        updatePassword: function (t, e, n) {
          var r = "users/" + this.id + "/updatePassword";
          return u(r, null, null, "PUT", {
            old_password: t,
            new_password: e
          }, n);
        },
        isCurrent: function () {
          return this._isCurrentUser;
        },
        getUsername: function () {
          return this.get("username");
        },
        getMobilePhoneNumber: function () {
          return this.get("mobilePhoneNumber");
        },
        setMobilePhoneNumber: function (t, e) {
          return this.set("mobilePhoneNumber", t, e);
        },
        setUsername: function (t, e) {
          return this.set("username", t, e);
        },
        setPassword: function (t, e) {
          return this.set("password", t, e);
        },
        getEmail: function () {
          return this.get("email");
        },
        setEmail: function (t, e) {
          return this.set("email", t, e);
        },
        authenticated: function () {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id;
        },
        isAuthenticated: function () {
          var e = this;
          return l.resolve().then(function () {
            return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function () {
              return !0;
            }, function (t) {
              if (211 === t.code) return !1;
              throw t;
            });
          });
        },
        getSessionToken: function () {
          return this._sessionToken;
        },
        refreshSessionToken: function (t) {
          var e = this;
          return u("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function (t) {
            return e._finishFetch(t), e._handleSaveResult(!0).then(function () {
              return e;
            });
          });
        },
        getRoles: function (e) {
          return t.Relation.reverseQuery("_Role", "users", this).find(e);
        }
      }, {
        _currentUser: null,
        _currentUserMatchesDisk: !1,
        _CURRENT_USER_KEY: "currentUser",
        _authProviders: {},
        signUp: function (e, n, r, i) {
          return r = r || {}, r.username = e, r.password = n, t.Object._create("_User").signUp(r, i);
        },
        logIn: function (e, n) {
          var r = t.Object._create("_User");

          return r._finishFetch({
            username: e,
            password: n
          }), r.logIn();
        },
        become: function (t) {
          return this._fetchUserBySessionToken(t).then(function (t) {
            return t._handleSaveResult(!0).then(function () {
              return t;
            });
          });
        },
        _fetchUserBySessionToken: function (e) {
          var n = t.Object._create("_User");

          return c({
            method: "GET",
            path: "/users/me",
            authOptions: {
              sessionToken: e
            }
          }).then(function (t) {
            var e = n.parse(t);
            return n._finishFetch(e), n;
          });
        },
        logInWithMobilePhoneSmsCode: function (e, n) {
          var r = t.Object._create("_User");

          return r._finishFetch({
            mobilePhoneNumber: e,
            smsCode: n
          }), r.logIn();
        },
        signUpOrlogInWithMobilePhone: function (e, n, r, i) {
          return r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n, t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
        },
        logInWithMobilePhone: function (e, n) {
          var r = t.Object._create("_User");

          return r._finishFetch({
            mobilePhoneNumber: e,
            password: n
          }), r.logIn();
        },
        loginWithAuthData: function (e, n, r) {
          return t.User._logInWith(n, e, r);
        },
        signUpOrlogInWithAuthData: function () {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments);
        },
        loginWithAuthDataAndUnionId: function (t, e, n, r) {
          return this.loginWithAuthData(f(t, n, r), e, r);
        },
        signUpOrlogInWithAuthDataAndUnionId: function () {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments);
        },
        loginWithWeapp: function (t) {
          var e = this;
          return h().then(function (n) {
            return e.loginWithAuthData({
              code: n
            }, "lc_weapp", t);
          });
        },
        loginAnonymously: function () {
          return this.loginWithAuthData({
            id: s()
          }, "anonymous");
        },
        associateWithAuthData: function (t, e, n) {
          return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), t._linkWith(e, n);
        },
        logOut: function () {
          return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function () {
            return t._refreshSubscriptionId();
          }));
        },
        followerQuery: function (e) {
          if (!e || !i.isString(e)) throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Follower");
          return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n;
        },
        followeeQuery: function (e) {
          if (!e || !i.isString(e)) throw new Error("Invalid user object id.");
          var n = new t.FriendShipQuery("_Followee");
          return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n;
        },
        requestPasswordReset: function (t) {
          return u("requestPasswordReset", null, null, "POST", {
            email: t
          });
        },
        requestEmailVerify: function (t) {
          return u("requestEmailVerify", null, null, "POST", {
            email: t
          });
        },
        requestMobilePhoneVerify: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
            mobilePhoneNumber: t
          };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestMobilePhoneVerify", null, null, "POST", n, e);
        },
        requestPasswordResetBySmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
            mobilePhoneNumber: t
          };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestPasswordResetBySmsCode", null, null, "POST", n, e);
        },
        resetPasswordBySmsCode: function (t, e) {
          return u("resetPasswordBySmsCode", null, t, "PUT", {
            password: e
          });
        },
        verifyMobilePhone: function (t) {
          return u("verifyMobilePhone", null, t, "POST", null);
        },
        requestLoginSmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
            mobilePhoneNumber: t
          };
          return e.validateToken && (n.validate_token = e.validateToken), u("requestLoginSmsCode", null, null, "POST", n, e);
        },
        currentAsync: function () {
          return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : t.User._currentUser ? l.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? l.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function (e) {
            if (!e) return null;
            t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(e);
            return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser;
          });
        },
        current: function () {
          if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
          if (t.User._currentUser) return t.User._currentUser;
          if (t.User._currentUserMatchesDisk) return t.User._currentUser;
          t.User._currentUserMatchesDisk = !0;
          var e = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
          if (!e) return null;
          t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
          var n = JSON.parse(e);
          return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser;
        },
        _saveCurrentUser: function (e) {
          var n;
          return n = t.User._currentUser !== e ? t.User.logOut() : l.resolve(), n.then(function () {
            e._isCurrentUser = !0, t.User._currentUser = e;

            var n = e._toFullJSON();

            return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function () {
              return t.User._currentUserMatchesDisk = !0, t._refreshSubscriptionId();
            });
          });
        },
        _registerAuthenticationProvider: function (e) {
          t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType());
        },
        _logInWith: function (e, n, r) {
          return t.Object._create("_User")._linkWith(e, n, r);
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(6)("leancloud:query"),
        s = n(1),
        o = n(4),
        a = n(2),
        u = a._request,
        c = a.request,
        l = n(3),
        h = l.ensureArray,
        f = l.transformFetchOptions,
        d = function (t, e) {
      if (void 0 === t) throw new Error(e);
    };

    t.exports = function (t) {
      t.Query = function (e) {
        r.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {};
      }, t.Query.or = function () {
        var e = r.toArray(arguments),
            n = null;

        t._arrayEach(e, function (t) {
          if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class");
        });

        var i = new t.Query(n);
        return i._orQuery(e), i;
      }, t.Query.and = function () {
        var e = r.toArray(arguments),
            n = null;

        t._arrayEach(e, function (t) {
          if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class");
        });

        var i = new t.Query(n);
        return i._andQuery(e), i;
      }, t.Query.doCloudQuery = function (e, n, i) {
        var s = {
          cql: e
        };
        return r.isArray(n) ? s.pvalues = n : i = n, u("cloudQuery", null, null, "GET", s, i).then(function (e) {
          var n = new t.Query(e.className);
          return {
            results: r.map(e.results, function (t) {
              var r = n._newObject(e);

              return r._finishFetch && r._finishFetch(n._processResult(t), !0), r;
            }),
            count: e.count,
            className: e.className
          };
        });
      }, t.Query._extend = t._extend, r.extend(t.Query.prototype, {
        _processResult: function (t) {
          return t;
        },
        get: function (t, e) {
          if (!t) {
            throw new o(o.OBJECT_NOT_FOUND, "Object not found.");
          }

          var n = this._newObject();

          n.id = t;
          var i = this.toJSON(),
              s = {};
          return i.keys && (s.keys = i.keys), i.include && (s.include = i.include), i.includeACL && (s.includeACL = i.includeACL), u("classes", this.className, t, "GET", f(s), e).then(function (t) {
            if (r.isEmpty(t)) throw new o(o.OBJECT_NOT_FOUND, "Object not found.");
            return n._finishFetch(n.parse(t), !0), n;
          });
        },
        toJSON: function () {
          var e = {
            where: this._where
          };
          return this._include.length > 0 && (e.include = this._include.join(",")), this._select.length > 0 && (e.keys = this._select.join(",")), void 0 !== this._includeACL && (e.returnACL = this._includeACL), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order), t._objectEach(this._extraOptions, function (t, n) {
            e[n] = t;
          }), e;
        },
        _newObject: function (e) {
          return e && e.className ? new t.Object(e.className) : new this.objectClass();
        },
        _createRequest: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
              e = arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;

          if (encodeURIComponent(JSON.stringify(t)).length > 2e3) {
            return c({
              path: "/batch",
              method: "POST",
              data: {
                requests: [{
                  method: "GET",
                  path: "/1.1" + n,
                  params: t
                }]
              },
              authOptions: e
            }).then(function (t) {
              var e = t[0];
              if (e.success) return e.success;
              var n = new Error(e.error.error || "Unknown batch error");
              throw n.code = e.error.code, n;
            });
          }

          return c({
            method: "GET",
            path: n,
            query: t,
            authOptions: e
          });
        },
        _parseResponse: function (t) {
          var e = this;
          return r.map(t.results, function (n) {
            var r = e._newObject(t);

            return r._finishFetch && r._finishFetch(e._processResult(n), !0), r;
          });
        },
        find: function (t) {
          return this._createRequest(void 0, t).then(this._parseResponse.bind(this));
        },
        scan: function () {
          var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.orderedBy,
              o = e.batchSize,
              a = arguments[1],
              c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), o && (c.limit = o);
          var l = s.resolve([]),
              h = void 0,
              f = !1;
          return {
            next: function () {
              return l = l.then(function (e) {
                return f ? [] : e.length > 1 ? e : h || 0 === e.length ? u("scan/classes", t.className, null, "GET", h ? r.extend({}, c, {
                  cursor: h
                }) : c, a).then(function (e) {
                  return h = e.cursor, t._parseResponse(e);
                }).then(function (t) {
                  return t.length || (f = !0), e.concat(t);
                }) : (f = !0, e);
              }), l.then(function (t) {
                return t.shift();
              }).then(function (t) {
                return {
                  value: t,
                  done: f
                };
              });
            }
          };
        },
        destroyAll: function (e) {
          return this.find(e).then(function (n) {
            return t.Object.destroyAll(n, e);
          });
        },
        count: function (t) {
          var e = this.toJSON();
          return e.limit = 0, e.count = 1, this._createRequest(e, t).then(function (t) {
            return t.count;
          });
        },
        first: function (t) {
          var e = this,
              n = this.toJSON();
          return n.limit = 1, this._createRequest(n, t).then(function (t) {
            return r.map(t.results, function (t) {
              var n = e._newObject();

              return n._finishFetch && n._finishFetch(e._processResult(t), !0), n;
            })[0];
          });
        },
        skip: function (t) {
          return d(t, "undefined is not a valid skip value"), this._skip = t, this;
        },
        limit: function (t) {
          return d(t, "undefined is not a valid limit value"), this._limit = t, this;
        },
        equalTo: function (e, n) {
          return d(e, "undefined is not a valid key"), d(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this;
        },
        _addCondition: function (e, n, r) {
          return d(e, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), d(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this;
        },
        sizeEqualTo: function (t, e) {
          return this._addCondition(t, "$size", e), this;
        },
        notEqualTo: function (t, e) {
          return this._addCondition(t, "$ne", e), this;
        },
        lessThan: function (t, e) {
          return this._addCondition(t, "$lt", e), this;
        },
        greaterThan: function (t, e) {
          return this._addCondition(t, "$gt", e), this;
        },
        lessThanOrEqualTo: function (t, e) {
          return this._addCondition(t, "$lte", e), this;
        },
        greaterThanOrEqualTo: function (t, e) {
          return this._addCondition(t, "$gte", e), this;
        },
        containedIn: function (t, e) {
          return this._addCondition(t, "$in", e), this;
        },
        notContainedIn: function (t, e) {
          return this._addCondition(t, "$nin", e), this;
        },
        containsAll: function (t, e) {
          return this._addCondition(t, "$all", e), this;
        },
        exists: function (t) {
          return this._addCondition(t, "$exists", !0), this;
        },
        doesNotExist: function (t) {
          return this._addCondition(t, "$exists", !1), this;
        },
        matches: function (t, e, n) {
          return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this;
        },
        matchesQuery: function (t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$inQuery", n), this;
        },
        doesNotMatchQuery: function (t, e) {
          var n = e.toJSON();
          return n.className = e.className, this._addCondition(t, "$notInQuery", n), this;
        },
        matchesKeyInQuery: function (t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$select", {
            key: e,
            query: r
          }), this;
        },
        doesNotMatchKeyInQuery: function (t, e, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(t, "$dontSelect", {
            key: e,
            query: r
          }), this;
        },
        _orQuery: function (t) {
          var e = r.map(t, function (t) {
            return t.toJSON().where;
          });
          return this._where.$or = e, this;
        },
        _andQuery: function (t) {
          var e = r.map(t, function (t) {
            return t.toJSON().where;
          });
          return this._where.$and = e, this;
        },
        _quote: function (t) {
          return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E";
        },
        contains: function (t, e) {
          return this._addCondition(t, "$regex", this._quote(e)), this;
        },
        startsWith: function (t, e) {
          return this._addCondition(t, "$regex", "^" + this._quote(e)), this;
        },
        endsWith: function (t, e) {
          return this._addCondition(t, "$regex", this._quote(e) + "$"), this;
        },
        ascending: function (t) {
          return d(t, "undefined is not a valid key"), this._order = t, this;
        },
        addAscending: function (t) {
          return d(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this;
        },
        descending: function (t) {
          return d(t, "undefined is not a valid key"), this._order = "-" + t, this;
        },
        addDescending: function (t) {
          return d(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this;
        },
        near: function (e, n) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this;
        },
        withinRadians: function (t, e, n) {
          return this.near(t, e), this._addCondition(t, "$maxDistance", n), this;
        },
        withinMiles: function (t, e, n) {
          return this.withinRadians(t, e, n / 3958.8);
        },
        withinKilometers: function (t, e, n) {
          return this.withinRadians(t, e, n / 6371);
        },
        withinGeoBox: function (e, n, r) {
          return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", {
            $box: [n, r]
          }), this;
        },
        include: function (t) {
          var e = this;
          return d(t, "undefined is not a valid key"), r(arguments).forEach(function (t) {
            e._include = e._include.concat(h(t));
          }), this;
        },
        includeACL: function () {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = t, this;
        },
        select: function (t) {
          var e = this;
          return d(t, "undefined is not a valid key"), r(arguments).forEach(function (t) {
            e._select = e._select.concat(h(t));
          }), this;
        },
        each: function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return s.reject(i);
          }

          var o = new t.Query(this.objectClass);
          o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), o.ascending("objectId");
          var a = !1;
          return s._continueWhile(function () {
            return !a;
          }, function () {
            return o.find(n).then(function (t) {
              var n = s.resolve();
              return r.each(t, function (t) {
                n = n.then(function () {
                  return e(t);
                });
              }), n.then(function () {
                t.length >= o._limit ? o.greaterThan("objectId", t[t.length - 1].id) : a = !0;
              });
            });
          });
        },
        subscribe: function (e) {
          return t.LiveQuery.init(this, e);
        }
      }), t.FriendShipQuery = t.Query._extend({
        _objectClass: t.User,
        _newObject: function () {
          return new t.User();
        },
        _processResult: function (t) {
          if (t && t[this._friendshipTag]) {
            var e = t[this._friendshipTag];
            return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e;
          }

          return null;
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(53),
        s = n(1),
        o = n(3),
        a = o.inherits,
        u = n(2),
        c = u.request,
        l = function (t, e) {
      return c({
        method: "POST",
        path: "/LiveQuery/subscribe",
        data: {
          query: t,
          id: e
        }
      });
    };

    t.exports = function (t) {
      var e = function () {
        if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
      };

      t.LiveQuery = a(i, {
        constructor: function (t, e, n, r) {
          var s = this;
          i.apply(this), this.id = t, this._client = e, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function () {
            l(s._queryJSON, s._subscriptionId).catch(function (t) {
              return console.error("LiveQuery resubscribe error: " + t.message);
            });
          }, e.on("message", this._onMessage), e.on("reconnect", this._onReconnect);
        },
        _dispatch: function (e) {
          var n = this;
          e.forEach(function (e) {
            var i = e.op,
                s = e.object,
                o = e.query_id,
                a = e.updatedKeys;

            if (o === n.id) {
              var u = t.parseJSON(r.extend({
                __type: "_File" === s.className ? "File" : "Object"
              }, s));
              a ? n.emit(i, u, a) : n.emit(i, u);
            }
          });
        },
        unsubscribe: function () {
          var t = this._client;
          return t.off("message", this._onMessage), t.off("reconnect", this._onReconnect), t.deregister(this), c({
            method: "POST",
            path: "/LiveQuery/unsubscribe",
            data: {
              id: t.id,
              query_id: this.id
            }
          });
        }
      }, {
        init: function (n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = r.subscriptionId,
              o = void 0 === i ? t._getSubscriptionId() : i;
          if (e(), !(n instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query");
          return s.resolve(o).then(function (e) {
            return t._config.realtime.createLiveQueryClient(e).then(function (r) {
              var i = n.toJSON(),
                  s = i.where,
                  o = i.keys,
                  a = i.returnACL,
                  u = {
                where: s,
                keys: o,
                returnACL: a,
                className: n.className
              },
                  c = l(u, e).then(function (n) {
                var i = n.query_id;
                return new t.LiveQuery(i, r, u, e);
              }).finally(function () {
                r.deregister(c);
              });
              return r.register(c), c;
            });
          });
        },
        pause: function () {
          return e(), t._config.realtime.pause();
        },
        resume: function () {
          return e(), t._config.realtime.resume();
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    function r() {}

    function i(t, e, n) {
      this.fn = t, this.context = e, this.once = n || !1;
    }

    function s() {
      this._events = new r(), this._eventsCount = 0;
    }

    var o = Object.prototype.hasOwnProperty,
        a = "~";
    Object.create && (r.prototype = Object.create(null), new r().__proto__ || (a = !1)), s.prototype.eventNames = function () {
      var t,
          e,
          n = [];
      if (0 === this._eventsCount) return n;

      for (e in t = this._events) o.call(t, e) && n.push(a ? e.slice(1) : e);

      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
    }, s.prototype.listeners = function (t, e) {
      var n = a ? a + t : t,
          r = this._events[n];
      if (e) return !!r;
      if (!r) return [];
      if (r.fn) return [r.fn];

      for (var i = 0, s = r.length, o = new Array(s); i < s; i++) o[i] = r[i].fn;

      return o;
    }, s.prototype.emit = function (t, e, n, r, i, s) {
      var o = a ? a + t : t;
      if (!this._events[o]) return !1;
      var u,
          c,
          l = this._events[o],
          h = arguments.length;

      if (l.fn) {
        switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
          case 1:
            return l.fn.call(l.context), !0;

          case 2:
            return l.fn.call(l.context, e), !0;

          case 3:
            return l.fn.call(l.context, e, n), !0;

          case 4:
            return l.fn.call(l.context, e, n, r), !0;

          case 5:
            return l.fn.call(l.context, e, n, r, i), !0;

          case 6:
            return l.fn.call(l.context, e, n, r, i, s), !0;
        }

        for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];

        l.fn.apply(l.context, u);
      } else {
        var f,
            d = l.length;

        for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h) {
          case 1:
            l[c].fn.call(l[c].context);
            break;

          case 2:
            l[c].fn.call(l[c].context, e);
            break;

          case 3:
            l[c].fn.call(l[c].context, e, n);
            break;

          case 4:
            l[c].fn.call(l[c].context, e, n, r);
            break;

          default:
            if (!u) for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
            l[c].fn.apply(l[c].context, u);
        }
      }

      return !0;
    }, s.prototype.on = function (t, e, n) {
      var r = new i(e, n || this),
          s = a ? a + t : t;
      return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this;
    }, s.prototype.once = function (t, e, n) {
      var r = new i(e, n || this, !0),
          s = a ? a + t : t;
      return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this;
    }, s.prototype.removeListener = function (t, e, n, i) {
      var s = a ? a + t : t;
      if (!this._events[s]) return this;
      if (!e) return 0 == --this._eventsCount ? this._events = new r() : delete this._events[s], this;
      var o = this._events[s];
      if (o.fn) o.fn !== e || i && !o.once || n && o.context !== n || (0 == --this._eventsCount ? this._events = new r() : delete this._events[s]);else {
        for (var u = 0, c = [], l = o.length; u < l; u++) (o[u].fn !== e || i && !o[u].once || n && o[u].context !== n) && c.push(o[u]);

        c.length ? this._events[s] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r() : delete this._events[s];
      }
      return this;
    }, s.prototype.removeAllListeners = function (t) {
      var e;
      return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r() : delete this._events[e])) : (this._events = new r(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function () {
      return this;
    }, s.prefixed = a, s.EventEmitter = s, t.exports = s;
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(3),
        s = i.tap;

    t.exports = function (t) {
      t.Captcha = function (t, e) {
        this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0;
      }, t.Captcha.prototype.refresh = function () {
        var e = this;
        return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function (t) {
          var n = t.captchaToken,
              i = t.url;
          return r.extend(e, {
            captchaToken: n,
            url: i
          }), i;
        });
      }, t.Captcha.prototype.verify = function (e) {
        var n = this;
        return t.Cloud.verifyCaptcha(e, this.captchaToken).then(s(function (t) {
          return n.validateToken = t;
        }));
      }, t.Captcha.prototype.bind = function (t, e) {
        var n = this,
            r = t.textInput,
            i = t.image,
            s = t.verifyButton,
            o = e.success,
            a = e.error;
        if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found");
        if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found");
        if ("string" == typeof s && !(s = document.getElementById(s))) throw new Error("verifyButton with id " + s + " not found");
        this.__refresh = function () {
          return n.refresh().then(function (t) {
            i.src = t, r && (r.value = "", r.focus());
          }).catch(function (t) {
            return console.warn("refresh captcha fail: " + t.message);
          });
        }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function () {
          var t = r.value;
          n.verify(t).catch(function (t) {
            throw n.__refresh(), t;
          }).then(o, a).catch(function (t) {
            return console.warn("verify captcha fail: " + t.message);
          });
        }, r && s && (this.__verifyButton = s, s.addEventListener("click", this.__verify));
      }, t.Captcha.prototype.unbind = function () {
        this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify);
      }, t.Captcha.request = function (e, n) {
        var r = new t.Captcha(e, n);
        return r.refresh().then(function () {
          return r;
        });
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(2),
        s = i._request,
        o = i.request,
        a = n(1);

    t.exports = function (t) {
      t.Cloud = t.Cloud || {}, r.extend(t.Cloud, {
        run: function (e, n, r) {
          return o({
            service: "engine",
            method: "POST",
            path: "/functions/" + e,
            data: t._encode(n, null, !0),
            authOptions: r
          }).then(function (e) {
            return t._decode(e).result;
          });
        },
        rpc: function (e, n, i) {
          return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : o({
            service: "engine",
            method: "POST",
            path: "/call/" + e,
            data: t._encodeObjectOrArray(n),
            authOptions: i
          }).then(function (e) {
            return t._decode(e).result;
          });
        },
        getServerDate: function () {
          return s("date", null, null, "GET").then(function (e) {
            return t._decode(e);
          });
        },
        requestSmsCode: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(t) && (t = {
            mobilePhoneNumber: t
          }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
          return e.validateToken && (t = r.extend({}, t, {
            validate_token: e.validateToken
          })), s("requestSmsCode", null, null, "POST", t, e);
        },
        verifySmsCode: function (t, e) {
          if (!t) throw new Error("Missing sms code.");
          var n = {};
          return r.isString(e) && (n.mobilePhoneNumber = e), s("verifySmsCode", t, null, "POST", n);
        },
        _requestCaptcha: function (t, e) {
          return s("requestCaptcha", null, null, "GET", t, e).then(function (t) {
            var e = t.captcha_url;
            return {
              captchaToken: t.captcha_token,
              url: e
            };
          });
        },
        requestCaptcha: t.Captcha.request,
        verifyCaptcha: function (t, e) {
          return s("verifyCaptcha", null, null, "POST", {
            captcha_code: t,
            captcha_token: e
          }).then(function (t) {
            return t.validate_token;
          });
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(2).request;

    t.exports = function (t) {
      t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (t, e) {
        if (t.where && (t.where = t.where.toJSON().where), t.where && t.cql) throw new Error("Both where and cql can't be set");
        if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
        return r({
          service: "push",
          method: "POST",
          path: "/push",
          data: t,
          authOptions: e
        });
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
        i = n(0),
        s = n(1),
        o = n(2)._request,
        a = n(3),
        u = a.getSessionToken;

    t.exports = function (t) {
      var e = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return u(e) ? t.User._fetchUserBySessionToken(u(e)) : t.User.currentAsync();
      },
          n = function (n) {
        return e(n).then(function (e) {
          return t.Object.createWithoutData("_User", e.id)._toPointer();
        });
      };

      t.Status = function (t, e) {
        return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === (void 0 === t ? "undefined" : r(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this;
      }, i.extend(t.Status.prototype, {
        get: function (t) {
          return this.data[t];
        },
        set: function (t, e) {
          return this.data[t] = e, this;
        },
        destroy: function (t) {
          return this.id ? o("statuses", null, this.id, "DELETE", t) : s.reject(new Error("The status id is not exists."));
        },
        toObject: function () {
          return this.id ? t.Object.createWithoutData("_Status", this.id) : null;
        },
        _getDataJSON: function () {
          var e = i.clone(this.data);
          return t._encode(e);
        },
        send: function () {
          var e = this,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u(r) && !t.User.current()) throw new Error("Please signin an user.");
          return this.query ? n(r).then(function (t) {
            var n = e.query.toJSON();
            n.className = e.query.className;
            var i = {};
            return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", o("statuses", null, null, "POST", i, r);
          }).then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
          }) : t.Status.sendStatusToFollowers(this, r);
        },
        _finishFetch: function (e) {
          this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e);
        }
      }), t.Status.sendStatusToFollowers = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!u(r) && !t.User.current()) throw new Error("Please signin an user.");
        return n(r).then(function (n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {
            user: n
          };
          var s = {};
          return s.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, s.data = e._getDataJSON(), s.inboxType = e.inboxType || "default", o("statuses", null, null, "POST", s, r).then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
          });
        });
      }, t.Status.sendPrivateStatus = function (e, r) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!u(s) && !t.User.current()) throw new Error("Please signin an user.");
        if (!r) throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a) throw new Error("Invalid target user.");
        return n(s).then(function (n) {
          var r = {};
          r.className = "_User", r.where = {
            objectId: a
          };
          var i = {};
          return i.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, i.data = e._getDataJSON(), i.inboxType = "private", e.inboxType = "private", o("statuses", null, null, "POST", i, s).then(function (n) {
            return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
          });
        });
      }, t.Status.countUnreadStatuses = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return s.resolve(n || e(a)).then(function (e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), o("subscribe/statuses/count", null, null, "GET", n, a);
        });
      }, t.Status.resetUnreadCount = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return s.resolve(n || e(a)).then(function (e) {
          var n = {};
          return n.inboxType = t._encode(r), n.owner = t._encode(e), o("subscribe/statuses/resetUnreadCount", null, null, "POST", n, a);
        });
      }, t.Status.statusQuery = function (e) {
        var n = new t.Query("_Status");
        return e && n.equalTo("source", e), n;
      }, t.InboxQuery = t.Query._extend({
        _objectClass: t.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function () {
          return new t.Status();
        },
        _createRequest: function (e, n) {
          return t.InboxQuery.__super__._createRequest.call(this, e, n, "/subscribe/statuses");
        },
        sinceId: function (t) {
          return this._sinceId = t, this;
        },
        maxId: function (t) {
          return this._maxId = t, this;
        },
        owner: function (t) {
          return this._owner = t, this;
        },
        inboxType: function (t) {
          return this._inboxType = t, this;
        },
        toJSON: function () {
          var e = t.InboxQuery.__super__.toJSON.call(this);

          return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e;
        }
      }), t.Status.inboxQuery = function (e, n) {
        var r = new t.InboxQuery(t.Status);
        return e && (r._owner = e), n && (r._inboxType = n), r;
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(2)._request;

    t.exports = function (t) {
      t.SearchSortBuilder = function () {
        this._sortFields = [];
      }, r.extend(t.SearchSortBuilder.prototype, {
        _addField: function (t, e, n, r) {
          var i = {};
          return i[t] = {
            order: e || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this;
        },
        ascending: function (t, e, n) {
          return this._addField(t, "asc", e, n);
        },
        descending: function (t, e, n) {
          return this._addField(t, "desc", e, n);
        },
        whereNear: function (t, e, n) {
          n = n || {};
          var r = {},
              i = {
            lat: e.latitude,
            lon: e.longitude
          },
              s = {
            order: n.order || "asc",
            mode: n.mode || "avg",
            unit: n.unit || "km"
          };
          return s[t] = i, r._geo_distance = s, this._sortFields.push(r), this;
        },
        build: function () {
          return JSON.stringify(t._encode(this._sortFields));
        }
      }), t.SearchQuery = t.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function (t, e) {
          return i("search/select", null, null, "GET", t || this.toJSON(), e);
        },
        sid: function (t) {
          return this._sid = t, this;
        },
        queryString: function (t) {
          return this._queryString = t, this;
        },
        highlights: function (t) {
          var e;
          return e = t && r.isString(t) ? arguments : t, this._highlights = e, this;
        },
        sortBy: function (t) {
          return this._sortBuilder = t, this;
        },
        hits: function () {
          return this._hits || (this._hits = 0), this._hits;
        },
        _processResult: function (t) {
          return delete t.className, delete t._app_url, delete t._deeplink, t;
        },
        hasMore: function () {
          return !this._hitEnd;
        },
        reset: function () {
          this._hitEnd = !1, this._sid = null, this._hits = 0;
        },
        find: function () {
          var t = this;
          return this._createRequest().then(function (e) {
            return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, r.map(e.results, function (n) {
              n.className && (e.className = n.className);

              var r = t._newObject(e);

              return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r;
            });
          });
        },
        toJSON: function () {
          var e = t.SearchQuery.__super__.toJSON.call(this);

          if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
          if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (e.sort = this._sortBuilder.build()), e;
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(4),
        s = n(2),
        o = s.request,
        a = n(1);

    t.exports = function (t) {
      t.Insight = t.Insight || {}, r.extend(t.Insight, {
        startJob: function (e, n) {
          if (!e || !e.sql) throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: e,
            appId: t.applicationId
          };
          return o({
            path: "/bigquery/jobs",
            method: "POST",
            data: t._encode(r, null, !0),
            authOptions: n,
            signKey: !1
          }).then(function (e) {
            return t._decode(e).id;
          });
        },
        on: function (t, e) {}
      }), t.Insight.JobQuery = function (t, e) {
        if (!t) throw new Error("Please provide the job id.");
        this.id = t, this.className = e, this._skip = 0, this._limit = 100;
      }, r.extend(t.Insight.JobQuery.prototype, {
        skip: function (t) {
          return this._skip = t, this;
        },
        limit: function (t) {
          return this._limit = t, this;
        },
        find: function (t) {
          var e = {
            skip: this._skip,
            limit: this._limit
          };
          return o({
            path: "/bigquery/jobs/" + this.id,
            method: "GET",
            query: e,
            authOptions: t,
            signKey: !1
          }).then(function (t) {
            return t.error ? a.reject(new i(t.code, t.error)) : a.resolve(t);
          });
        }
      });
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = n(2),
        s = i._request,
        o = n(5),
        a = function (t) {
      return "string" == typeof t ? t : "function" == typeof t.getPayload ? JSON.stringify(t.getPayload()) : JSON.stringify(t);
    };

    t.exports = o.Object.extend("_Conversation", {
      constructor: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient);
      },
      getCreator: function () {
        return this.get("c");
      },
      getLastMessageAt: function () {
        return this.get("lm");
      },
      getMembers: function () {
        return this.get("m");
      },
      addMember: function (t) {
        return this.add("m", t);
      },
      getMutedMembers: function () {
        return this.get("mu");
      },
      getName: function () {
        return this.get("name");
      },
      isTransient: function () {
        return this.get("tr");
      },
      isSystem: function () {
        return this.get("sys");
      },
      send: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = {
          from_peer: t,
          conv_id: this.id,
          transient: !1,
          message: a(e)
        };
        return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), s("rtm", "messages", null, "POST", i, r);
      },
      broadcast: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = {
          from_peer: t,
          conv_id: this.id,
          message: a(e)
        };

        if (void 0 !== n.pushData && (o.push = n.pushData), void 0 !== n.validTill) {
          var u = n.validTill;
          r.isDate(u) && (u = u.getTime()), n.valid_till = u;
        }

        return s("rtm", "broadcast", null, "POST", o, i);
      }
    });
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      var e = t.name,
          n = t.value,
          r = t.version;
      this.name = e, this.value = n, this.version = r;
    }

    var i = n(0),
        s = n(1),
        o = n(2),
        a = o.request,
        u = n(3),
        c = u.ensureArray,
        l = u.parseDate,
        h = n(5);
    h.LeaderboardVersionChangeInterval = {
      NEVER: "never",
      DAY: "day",
      WEEK: "week",
      MONTH: "month"
    }, h.LeaderboardOrder = {
      ASCENDING: "ascending",
      DESCENDING: "descending"
    }, h.LeaderboardUpdateStrategy = {
      BETTER: "better",
      LAST: "last",
      SUM: "sum"
    };

    var f = function (t) {
      var e = h._decode(t);

      return new r({
        name: e.statisticName,
        value: e.statisticValue,
        version: e.version
      });
    };

    h.Leaderboard = function (t) {
      this.statisticName = t, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0;
    };

    var d = h.Leaderboard;
    h.Leaderboard.createWithoutData = function (t) {
      return new d(t);
    }, h.Leaderboard.createLeaderboard = function (t, e) {
      var n = t.statisticName,
          r = t.order,
          i = t.versionChangeInterval,
          s = t.updateStrategy;
      return a({
        method: "POST",
        path: "/leaderboard/leaderboards",
        data: {
          statisticName: n,
          order: r,
          versionChangeInterval: i,
          updateStrategy: s
        },
        authOptions: e
      }).then(function (t) {
        return new d(n)._finishFetch(t);
      });
    }, h.Leaderboard.getLeaderboard = function (t, e) {
      return d.createWithoutData(t).fetch(e);
    }, h.Leaderboard.getStatistics = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.statisticNames,
          r = arguments[2];
      return s.resolve().then(function () {
        if (!t || !t.id) throw new Error("user must be an AV.User");
        return a({
          method: "GET",
          path: "/leaderboard/users/" + t.id + "/statistics",
          query: {
            statistics: n ? c(n).join(",") : void 0
          },
          authOptions: r
        }).then(function (t) {
          return t.results.map(f);
        });
      });
    }, h.Leaderboard.updateStatistics = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return s.resolve().then(function () {
        if (!t || !t.id) throw new Error("user must be an AV.User");
        var r = i.map(e, function (t, e) {
          return {
            statisticName: e,
            statisticValue: t
          };
        }),
            s = n.overwrite;
        return a({
          method: "POST",
          path: "/leaderboard/users/" + t.id + "/statistics",
          query: {
            overwrite: s ? 1 : void 0
          },
          data: r,
          authOptions: n
        }).then(function (t) {
          return t.results.map(f);
        });
      });
    }, h.Leaderboard.deleteStatistics = function (t, e, n) {
      return s.resolve().then(function () {
        if (!t || !t.id) throw new Error("user must be an AV.User");
        return a({
          method: "DELETE",
          path: "/leaderboard/users/" + t.id + "/statistics",
          query: {
            statistics: c(e).join(",")
          },
          authOptions: n
        }).then(function () {});
      });
    }, i.extend(d.prototype, {
      _finishFetch: function (t) {
        var e = this;
        return i.forEach(t, function (t, n) {
          "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (t = l(t)), t && "Date" === t.__type && (t = l(t.iso)), e[n] = t);
        }), this;
      },
      fetch: function (t) {
        var e = this;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: t
        }).then(function (t) {
          return e._finishFetch(t);
        });
      },
      _getResults: function (t, e, n) {
        var r = t.skip,
            i = t.limit,
            s = t.selectUserKeys,
            o = t.includeStatistics,
            u = t.version;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
          query: {
            skip: r,
            limit: i,
            includeUser: s ? c(s).join(",") : void 0,
            includeStatistics: o ? c(o).join(",") : void 0,
            version: u
          },
          authOptions: e
        }).then(function (t) {
          return t.results.map(function (t) {
            var e = h._decode(t),
                n = e.user,
                r = e.statisticValue,
                i = e.rank,
                s = e.statistics;

            return {
              user: n,
              value: r,
              rank: i,
              includedStatistics: (void 0 === s ? [] : s).map(f)
            };
          });
        });
      },
      getResults: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.skip,
            n = t.limit,
            r = t.selectUserKeys,
            i = t.includeStatistics,
            s = t.version,
            o = arguments[1];
        return this._getResults({
          skip: e,
          limit: n,
          selectUserKeys: r,
          includeStatistics: i,
          version: s
        }, o);
      },
      getResultsAroundUser: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments[2];
        if (t && "string" != typeof t.id) return this.getResultsAroundUser(void 0, t, e);
        var r = e.limit,
            i = e.selectUserKeys,
            s = e.includeStatistics,
            o = e.version;
        return this._getResults({
          limit: r,
          selectUserKeys: i,
          includeStatistics: s,
          version: o
        }, n, t ? t.id : "self");
      },
      _update: function (t, e) {
        var n = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          data: t,
          authOptions: e
        }).then(function (t) {
          return n._finishFetch(t);
        });
      },
      updateVersionChangeInterval: function (t, e) {
        return this._update({
          versionChangeInterval: t
        }, e);
      },
      updateUpdateStrategy: function (t, e) {
        return this._update({
          updateStrategy: t
        }, e);
      },
      reset: function (t) {
        var e = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
          authOptions: t
        }).then(function (t) {
          return e._finishFetch(t);
        });
      },
      destroy: function (t) {
        return h.request({
          method: "DELETE",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: t
        }).then(function () {});
      },
      getArchives: function () {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.skip,
            r = e.limit,
            i = arguments[1];
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
          query: {
            skip: n,
            limit: r
          },
          authOptions: i
        }).then(function (e) {
          return e.results.map(function (e) {
            var n = e.version,
                r = e.status,
                i = e.url,
                s = e.activatedAt,
                o = e.deactivatedAt;
            return {
              statisticName: t.statisticName,
              version: n,
              status: r,
              url: i,
              activatedAt: l(s.iso),
              deactivatedAt: l(o.iso)
            };
          });
        });
      }
    });
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-chart.vue?vue&type=template&id=559d2f5c&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-chart.vue?vue&type=template&id=559d2f5c& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", {
        staticStyle: { width: "100%", height: "400px" },
        attrs: { id: "container" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=template&id=b1998f26&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-content.vue?vue&type=template&id=b1998f26& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container text-center" },
    [
      [
        _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "breadcrumb-item active",
                attrs: { "aria-current": "page" }
              },
              [
                _vm._v(
                  "\n                    试题 " + _vm._s(_vm.title) + " ("
                ),
                _c("timer-board", { ref: "timerView" }),
                _vm._v(")\n                ")
              ],
              1
            )
          ])
        ])
      ],
      _vm._v(" "),
      _vm.submitted
        ? [
            _c("h2", { staticClass: "title" }, [
              _vm._v("当前得分："),
              _c("span", { staticStyle: { color: "red" } }, [
                _vm._v(_vm._s(Math.round(_vm.score, 0)))
              ])
            ]),
            _vm._v(" "),
            _c("question-list", {
              attrs: { questions: _vm.questions, editing: false }
            })
          ]
        : _vm.inChecking
        ? [
            _c("h2", { staticClass: "title" }, [
              _vm._v("请认真检查，确保正确后再提交哦！")
            ]),
            _vm._v(" "),
            _c("question-list", {
              attrs: { questions: _vm.questions, editing: true }
            }),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: { click: _vm.done }
                },
                [_vm._v("提交")]
              )
            ])
          ]
        : _vm.finished
        ? [
            _c("h2", { staticClass: "title" }, [
              _vm._v("恭喜，您已经完成 "),
              _c("span", { staticStyle: { color: "green" } }, [
                _vm._v(_vm._s(_vm.count))
              ]),
              _vm._v(" 道练习")
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  attrs: { type: "button" },
                  on: { click: _vm.check }
                },
                [_vm._v("检查")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: { click: _vm.done }
                },
                [_vm._v("提交")]
              )
            ])
          ]
        : [
            _c("div", { staticClass: "form-group" }, [
              _c("h1", [
                _c("label", { attrs: { for: "questionLabel" } }, [
                  _vm._v(_vm._s(_vm.currentQuestion.expr))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "offset-sm-3 col-sm-6" },
                [
                  _vm.currentQuestion.requireMod
                    ? _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-7",
                            staticStyle: { "padding-right": "5px" }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.answer,
                                  expression: "answer"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                id: "questionLabel",
                                placeholder: "答案是？"
                              },
                              domProps: { value: _vm.answer },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.nextFocus($event)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.answer = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.mod,
                              expression: "mod"
                            }
                          ],
                          staticClass: "form-control col-5",
                          attrs: { type: "number", placeholder: "余数是？" },
                          domProps: { value: _vm.mod },
                          on: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.next($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.mod = $event.target.value
                            }
                          }
                        })
                      ])
                    : [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.answer,
                              expression: "answer"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            id: "questionLabel",
                            placeholder: "答案是？"
                          },
                          domProps: { value: _vm.answer },
                          on: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.next($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.answer = $event.target.value
                            }
                          }
                        })
                      ]
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                attrs: { type: "button" },
                on: { click: _vm.next }
              },
              [_vm._v("下一题")]
            ),
            _vm._v(" "),
            !_vm.finished
              ? _c("p", { staticStyle: { "margin-top": "20px" } }, [
                  _c("span", [
                    _vm._v(
                      "当前 " +
                        _vm._s(_vm.current + 1) +
                        " / " +
                        _vm._s(_vm.count)
                    )
                  ])
                ])
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "./" } }, [_vm._v("主菜单")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-main.vue?vue&type=template&id=1c0b2b75&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-main.vue?vue&type=template&id=1c0b2b75& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { staticClass: "title", staticStyle: { "margin-top": "40px" } }, [
      _vm._v("Yoki's 数学练习本")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6 col-sm-12" }, [
        _c(
          "div",
          { staticClass: "list-group", staticStyle: { "margin-top": "40px" } },
          _vm._l(_vm.items, function(item) {
            return _c(
              "router-link",
              {
                key: item.id,
                staticClass: "list-group-item list-group-item-action",
                attrs: { to: item.href }
              },
              [_vm._v(_vm._s(item.name))]
            )
          }),
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-12" },
        [
          _c("app-chart", {
            staticStyle: { height: "400px" },
            attrs: { userId: _vm.userId }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/login.vue?vue&type=template&id=10d9df09&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/login.vue?vue&type=template&id=10d9df09& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
        _vm._v("Email address")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp",
          placeholder: "Enter email"
        },
        domProps: { value: _vm.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "small",
        { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
        [_vm._v("We'll never share your email with anyone else.")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputPassword1" } }, [
        _vm._v("Password")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password,
            expression: "password"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "exampleInputPassword1",
          placeholder: "Password"
        },
        domProps: { value: _vm.password },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "submit" },
            on: { click: _vm.login }
          },
          [_vm._v("Submit")]
        ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "./signup" } }, [
          _vm._v("Don't have an account, create one")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.errorMsg
      ? _c("div", { staticClass: "alert alert-warning" }, [
          _vm._v(_vm._s(_vm.errorMsg))
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox", id: "exampleCheck1" }
      }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "form-check-label", attrs: { for: "exampleCheck1" } },
        [_vm._v("Remember me")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/question-list.vue?vue&type=template&id=748e3fc5&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/question-list.vue?vue&type=template&id=748e3fc5& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      staticClass: "container",
      staticStyle: { "padding-inline-start": "0px" }
    },
    _vm._l(_vm.questions, function(item) {
      return _c("li", { key: item.id, staticClass: "row result-row" }, [
        _c("div", { staticClass: "col-6 text-right" }, [
          _vm._v(_vm._s(item.expr))
        ]),
        _vm._v(" "),
        _vm.editing
          ? _c(
              "div",
              {
                staticClass: "col-6 text-left",
                staticStyle: { "padding-left": "0px" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: item.actual,
                      expression: "item.actual"
                    }
                  ],
                  staticClass: "check-input",
                  domProps: { value: item.actual },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(item, "actual", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                item.requireMod
                  ? [
                      _c("span", [_vm._v("......")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.actualMod,
                            expression: "item.actualMod"
                          }
                        ],
                        staticClass: "check-input",
                        domProps: { value: item.actualMod },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(item, "actualMod", $event.target.value)
                          }
                        }
                      })
                    ]
                  : _vm._e()
              ],
              2
            )
          : _c(
              "div",
              {
                staticClass: "col-6 text-left",
                staticStyle: { "padding-left": "0px" }
              },
              [
                _c(
                  "span",
                  { staticStyle: { display: "inline-block", width: "80px" } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.actual) +
                        " \n                "
                    ),
                    item.requireMod
                      ? _c("span", [_vm._v("...... " + _vm._s(item.actualMod))])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                item.correct
                  ? _c("span", { staticStyle: { color: "green" } }, [
                      _vm._v("✔")
                    ])
                  : _c("span", { staticStyle: { color: "red" } }, [_vm._v("✘")])
              ]
            )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/signup.vue?vue&type=template&id=56bbef28&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/signup.vue?vue&type=template&id=56bbef28& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
        _vm._v("Email address")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp",
          placeholder: "Enter email"
        },
        domProps: { value: _vm.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "small",
        { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
        [_vm._v("We'll never share your email with anyone else.")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
        _vm._v("Email address")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "email",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp",
          placeholder: "Enter email"
        },
        domProps: { value: _vm.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "small",
        { staticClass: "form-text text-muted", attrs: { id: "emailHelp" } },
        [_vm._v("We'll never share your email with anyone else.")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputPassword1" } }, [
        _vm._v("Password")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password,
            expression: "password"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "exampleInputPassword1",
          placeholder: "Password"
        },
        domProps: { value: _vm.password },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleInputPassword1" } }, [
        _vm._v("Password")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.passwordRepeat,
            expression: "passwordRepeat"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "Password Confirm" },
        domProps: { value: _vm.passwordRepeat },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.passwordRepeat = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "submit" },
            on: { click: _vm.signUp }
          },
          [_vm._v("Submit")]
        ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "./login" } }, [
          _vm._v("Has an account")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.errorMsg
      ? _c("div", { staticClass: "alert alert-warning" }, [
          _vm._v(_vm._s(_vm.errorMsg))
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/timer-board.vue?vue&type=template&id=02182d04&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/timer-board.vue?vue&type=template&id=02182d04& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", [_vm._v(_vm._s(_vm.elapsed))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */

/*  */
function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;
    data.routerView = true; // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots

    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {}); // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.

    var depth = 0;
    var inactive = false;

    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }

      if (parent._inactive) {
        inactive = true;
      }

      parent = parent.$parent;
    }

    data.routerViewDepth = depth; // render previous view if the tree is inactive and kept-alive

    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth]; // render empty node if no matched route

    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name]; // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks

    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];

      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    } // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;

    (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    }; // resolve props


    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);

    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass); // pass non-declared props as attrs

      var attrs = data.attrs = data.attrs || {};

      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config) {
    case 'undefined':
      return;

    case 'object':
      return config;

    case 'function':
      return config(route);

    case 'boolean':
      return config ? route.params : undefined;

    default:
      if (true) {
        warn(false, "props in \"" + route.path + "\" is a " + typeof config + ", " + "expecting an object, function or boolean.");
      }

  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }

  return to;
}
/*  */


var encodeReserveRE = /[!'()*]/g;

var encodeReserveReplacer = function (c) {
  return '%' + c.charCodeAt(0).toString(16);
};

var commaRE = /%2C/g; // fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas

var encode = function (str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};
  var parse = _parseQuery || parseQuery;
  var parsedQuery;

  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }

  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }

  return parsedQuery;
}

function parseQuery(query) {
  var res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }

        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}
/*  */


var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var query = location.query || {};

  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };

  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }

  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && typeof value === 'object') {
    var res = {};

    for (var key in value) {
      res[key] = clone(value[key]);
    }

    return res;
  } else {
    return value;
  }
} // the starting route that represents the initial state


var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];

  while (record) {
    res.unshift(record);
    record = record.parent;
  }

  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;
  if (query === void 0) query = {};
  var hash = ref.hash;
  if (hash === void 0) hash = '';
  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {}; // handle null value #1566

  if (!a || !b) {
    return a === b;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key]; // check nested equality

    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal);
    }

    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }

  return true;
}
/*  */
// work around weird flow bug


var toTypes = [String, Object];
var eventTypes = [String, Array];
var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;
    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass; // Support global empty active class

    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;
    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = {
      click: guardEvent
    };

    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = {
        href: href
      };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);

      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  } // don't redirect when preventDefault called


  if (e.defaultPrevented) {
    return;
  } // don't redirect on right click


  if (e.button !== undefined && e.button !== 0) {
    return;
  } // don't redirect if `target="_blank"`


  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');

    if (/\b_blank\b/i.test(target)) {
      return;
    }
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) {
    e.preventDefault();
  }

  return true;
}

function findAnchor(children) {
  if (children) {
    var child;

    for (var i = 0; i < children.length; i++) {
      child = children[i];

      if (child.tag === 'a') {
        return child;
      }

      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }

  install.installed = true;
  _Vue = Vue;

  var isDef = function (v) {
    return v !== undefined;
  };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;

    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;

        this._router.init(this);

        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }

      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });
  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });
  Vue.component('router-view', View);
  Vue.component('router-link', Link);
  var strats = Vue.config.optionMergeStrategies; // use the same hook merging strategy for route hooks

  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}
/*  */


var inBrowser = typeof window !== 'undefined';
/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);

  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/'); // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)

  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  } // resolve relative path


  var segments = relative.replace(/^\//, '').split('/');

  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];

    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  } // ensure leading slash


  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';
  var hashIndex = path.indexOf('#');

  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');

  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};
/**
 * Expose `pathToRegexp`.
 */


var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */


function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys);
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = ''; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter; // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".

  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path,
    /** @type {!Array} */
    keys);
  }

  if (isarray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path,
    /** @type {!Array} */
    keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path,
  /** @type {!Array} */
  keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/*  */
// $flow-disable-line

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, {
      pretty: true
    });
  } catch (e) {
    if (true) {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }

    return '';
  }
}
/*  */


function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || []; // $flow-disable-line

  var pathMap = oldPathMap || Object.create(null); // $flow-disable-line

  var nameMap = oldNameMap || Object.create(null);
  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  }); // ensure wildcard routes are always at the end

  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;

  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || {
      default: route.component
    },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : {
      default: route.props
    }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return /^\/?$/.test(child.path);
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }

    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);

  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }

  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }

  if (path[0] === '/') {
    return path;
  }

  if (parent == null) {
    return path;
  }

  return cleanPath(parent.path + "/" + path);
}
/*  */


function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? {
    path: raw
  } : raw; // named target

  if (next.name || next._normalized) {
    return next;
  } // relative params


  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);

    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }

    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
  var hash = next.hash || parsedPath.hash;

  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }

  return a;
}
/*  */


function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];

      if (true) {
        warn(record, "Route with name '" + name + "' does not exist");
      }

      if (!record) {
        return _createRoute(null, location);
      }

      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};

      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];

        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    } // no match


    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = {
        path: redirect
      };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }

      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];

      if (true) {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }

      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record); // 2. resolve params

      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\""); // 3. rematch with existing query and hash

      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (true) {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }

      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });

    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }

    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }

    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }

    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];

    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}
/*  */


var positionStore = Object.create(null);

function setupScroll() {
  // Fix for #1585 for Firefox
  window.history.replaceState({
    key: getStateKey()
  }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();

    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;

  if (!behavior) {
    return;
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  } // wait until re-render finishes before scrolling


  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();

  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();

  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

function scrollToPosition(shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';

  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);

    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}
/*  */


var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}(); // use User Timing api (if present) for more accurate key precision


var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition(); // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls

  var history = window.history;

  try {
    if (replace) {
      history.replaceState({
        key: _key
      }, '', url);
    } else {
      _key = genKey();
      history.pushState({
        key: _key
      }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}
/*  */


function runQueue(queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };

  step(0);
}
/*  */


function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;
    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;
        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          } // save resolved on async factory in case it's used elsewhere


          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;

          if (pending <= 0) {
            next();
          }
        });
        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);

          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });
        var res;

        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }

        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;

            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
} // in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.


function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    if (called) {
      return;
    }

    called = true;
    return fn.apply(this, args);
  };
}
/*  */


var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base); // start with a route object that stands for "nowhere"

  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);

    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;
  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL(); // fire ready cbs once

    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }

    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;
  var current = this.current;

  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }

    onAbort && onAbort(err);
  };

  if (isSameRoute(route, current) && // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;
  var queue = [].concat( // in-component leave guards
  extractLeaveGuards(deactivated), // global before hooks
  this.router.beforeHooks, // in-component update hooks
  extractUpdateHooks(updated), // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }), // async components
  resolveAsyncComponents(activated));
  this.pending = route;

  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }

    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();

          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];

    var isValid = function () {
      return this$1.current === route;
    }; // wait until async components are resolved before
    // extracting in-component enter guards


    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }

      this$1.pending = null;
      onComplete(route);

      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/'; // strip full URL origin

      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  } // make sure there's the starting slash


  if (base.charAt(0) !== '/') {
    base = '/' + base;
  } // remove trailing slash


  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);

  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }

  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);

    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }

  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);

      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}
/*  */


var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;
    History$$1.call(this, router, base);
    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current; // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.

      var location = getLocation(this$1.base);

      if (this$1.current === START && location === initLocation) {
        return;
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;

  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
}
/*  */


var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base); // check history fallback deeplinking

    if (fallback && checkFallback(this.base)) {
      return;
    }

    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory; // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early

  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;
    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;

      if (!ensureSlash()) {
        return;
      }

      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }

        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;

    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);

  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();

  if (path.charAt(0) === '/') {
    return true;
  }

  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}
/*  */


var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;
    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;
    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;
    var targetIndex = this.index + n;

    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }

    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {// noop
  };

  return AbstractHistory;
}(History);
/*  */


var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};
  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);
  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;

  if (this.fallback) {
    mode = 'hash';
  }

  if (!inBrowser) {
    mode = 'abstract';
  }

  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;

    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;

    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;

    default:
      if (true) {
        assert(false, "invalid mode: " + mode);
      }

  }
};

var prototypeAccessors = {
  currentRoute: {
    configurable: true
  }
};

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app
/* Vue component instance */
) {
  var this$1 = this;
   true && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");
  this.apps.push(app); // main app already initialized.

  if (this.app) {
    return;
  }

  this.app = app;
  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };

    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;

  if (!route) {
    return [];
  }

  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);

  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);

    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/app-content.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./app-content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("78b00b2d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.7
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Generate a string containing static keys from compiler modules.
 */


function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeLetters = 'a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD';
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeLetters + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = '__proto__' in {}; // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set =
  /*@__PURE__*/
  function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeLetters + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res)) {
      // issue #9511
      // reassign to res to avoid catch triggering multiple times when nested calls
      res = res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      });
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */


var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var isStable = slots ? !!slots.$stable : true;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && Object.keys(normalSlots).length === 0) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && res.length === 0 ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);

        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + camelizedKey] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  var owner = currentRenderingInstance;

  if (isDef(factory.owners)) {
    // already pending
    factory.owners.push(owner);
  } else {
    var owners = factory.owners = [owner];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.

if (inBrowser && getNow() > document.createEvent('Event').timeStamp) {
  // if the low-res timestamp which is bigger than the event timestamp
  // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
  // and we need to use the hi-res version for event listeners as well.
  getNow = function () {
    return performance.now();
  };
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.7';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = function (tag) {
  return tag === 'pre';
};

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps =
/*#__PURE__*/
Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) {
        inRegex = false;
      }
    } else if (c === 0x7C && // pipe
    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5B:
          square++;
          break;
        // [

        case 0x5D:
          square--;
          break;
        // ]

        case 0x7B:
          curly++;
          break;
        // {

        case 0x7D:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);

          if (p !== ' ') {
            break;
          }
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');

  if (i < 0) {
    // _f: resolveFilter
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
  }
}
/*  */

/* eslint-disable no-unused-vars */


function baseWarn(msg, range) {
  console.error("[Vue compiler]: " + msg);
}
/* eslint-enable no-unused-vars */


function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}

function addProp(el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({
    name: name,
    value: value,
    dynamic: dynamic
  }, range));
  el.plain = false;
}

function addAttr(el, name, value, range, dynamic) {
  var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
  attrs.push(rangeSetItem({
    name: name,
    value: value,
    dynamic: dynamic
  }, range));
  el.plain = false;
} // add a raw attr (use this in preTransforms)


function addRawAttr(el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({
    name: name,
    value: value
  }, range));
}

function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker(symbol, name, dynamic) {
  return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
}

function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
  modifiers = modifiers || emptyObject; // warn prevent and passive modifier

  /* istanbul ignore if */

  if ( true && warn && modifiers.prevent && modifiers.passive) {
    warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
  } // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.


  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  } // check capture modifier


  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }

  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */


  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;

  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({
    value: value.trim(),
    dynamic: dynamic
  }, range);

  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */

  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr(el, name) {
  return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);

    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
} // note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.


function getAndRemoveAttr(el, name, removeFromMap) {
  var val;

  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;

    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }

  if (removeFromMap) {
    delete el.attrsMap[name];
  }

  return val;
}

function getAndRemoveAttrByRegex(el, name) {
  var list = el.attrsList;

  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];

    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr;
    }
  }
}

function rangeSetItem(item, range) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }

    if (range.end != null) {
      item.end = range.end;
    }
  }

  return item;
}
/*  */

/**
 * Cross-platform code generation for component v-model
 */


function genComponentModel(el, value, modifiers) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;
  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;

  if (trim) {
    valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
  }

  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var assignment = genAssignmentCode(value, valueExpression);
  el.model = {
    value: "(" + value + ")",
    expression: JSON.stringify(value),
    callback: "function (" + baseValueExpression + ") {" + assignment + "}"
  };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


function genAssignmentCode(value, assignment) {
  var res = parseModel(value);

  if (res.key === null) {
    return value + "=" + assignment;
  } else {
    return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
  }
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */


var len, str, chr, index$1, expressionPos, expressionEndPos;

function parseModel(val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');

    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      };
    } else {
      return {
        exp: val,
        key: null
      };
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */

    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index$1);
}

function eof() {
  return index$1 >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index$1;

  while (!eof()) {
    chr = next();

    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }

    if (chr === 0x5B) {
      inBracket++;
    }

    if (chr === 0x5D) {
      inBracket--;
    }

    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;

  while (!eof()) {
    chr = next();

    if (chr === stringQuote) {
      break;
    }
  }
}
/*  */


var warn$1; // in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model(el, dir, _warn) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

    return false;
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

    return false;
  } else if (true) {
    warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
  } // ensure runtime directive metadata


  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
  addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";
  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type

  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
  var valueExpression = '$event.target.value';

  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }

  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);

  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', "(" + value + ")");
  addHandler(el, event, code, null, true);

  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.


function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // #9462 bail for iOS 9 bug: event.timeStamp is 0 after history.pushState
      e.timeStamp === 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

  if (!tagRE.test(text)) {
    return;
  }

  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;

  while (match = tagRE.exec(text)) {
    index = match.index; // push text token

    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    } // tag token


    var exp = parseFilters(match[1].trim());
    tokens.push("_s(" + exp + ")");
    rawTokens.push({
      '@binding': exp
    });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }

  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  };
}
/*  */


function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');

  if ( true && staticClass) {
    var res = parseText(staticClass, options.delimiters);

    if (res) {
      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
    }
  }

  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }

  var classBinding = getBindingAttr(el, 'class', false
  /* getStatic */
  );

  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData(el) {
  var data = '';

  if (el.staticClass) {
    data += "staticClass:" + el.staticClass + ",";
  }

  if (el.classBinding) {
    data += "class:" + el.classBinding + ",";
  }

  return data;
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};
/*  */

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');

  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);

      if (res) {
        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
      }
    }

    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false
  /* getStatic */
  );

  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1(el) {
  var data = '';

  if (el.staticStyle) {
    data += "staticStyle:" + el.staticStyle + ",";
  }

  if (el.styleBinding) {
    data += "style:(" + el.styleBinding + "),";
  }

  return data;
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};
/*  */

var decoder;
var he = {
  decode: function decode(html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent;
  }
};
/*  */

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
// (and which close themselves)

var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
/**
 * Not type-checking this file because it's mostly vendor code.
 */
// Regular Expressions for parsing tags and attributes

var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeLetters + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp("^<" + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being pased as HTML comment when inlined in page

var comment = /^<!\--/;
var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};
var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

var isIgnoreNewlineTag = makeMap('pre,textarea', true);

var shouldIgnoreFirstNewline = function (tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;

  while (html) {
    last = html; // Make sure we're not in a plaintext content element like script/style

    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');

      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }

            advance(commentEnd + 3);
            continue;
          }
        } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        } // Doctype:


        var doctypeMatch = html.match(doctype);

        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        } // End tag:


        var endTagMatch = html.match(endTag);

        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        } // Start tag:


        var startTagMatch = parseStartTag();

        if (startTagMatch) {
          handleStartTag(startTagMatch);

          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }

          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;

      if (textEnd >= 0) {
        rest = html.slice(textEnd);

        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);

          if (next < 0) {
            break;
          }

          textEnd += next;
          rest = html.slice(textEnd);
        }

        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;

        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
          .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }

        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }

        if (options.chars) {
          options.chars(text);
        }

        return '';
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);

      if ( true && !stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
          start: index + html.length
        });
      }

      break;
    }
  } // Clean up any remaining tags


  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);

    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;

      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }

      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }

      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;
    var l = match.attrs.length;
    var attrs = new Array(l);

    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };

      if ( true && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({
        tag: tagName,
        lowerCasedTag: tagName.toLowerCase(),
        attrs: attrs,
        start: match.start,
        end: match.end
      });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;

    if (start == null) {
      start = index;
    }

    if (end == null) {
      end = index;
    } // Find the closest opened tag of the same type


    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();

      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
            start: stack[i].start
          });
        }

        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }

      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}
/*  */


var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.]+/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he.decode);
var emptySlotScopeToken = "_empty_"; // configurable state

var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  };
}
/**
 * Convert HTML string to AST.
 */


function parse(template, options) {
  warn$2 = options.warn || baseWarn;
  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;

  maybeComponent = function (el) {
    return !!el.component || !isReservedTag(el.tag);
  };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;
  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement(element) {
    trimEndingWhitespace(element);

    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    } // tree management


    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (true) {
          checkRootConstraints(element);
        }

        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (true) {
        warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
          start: element.start
        });
      }
    }

    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"';
          (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }

        currentParent.children.push(element);
        element.parent = currentParent;
      }
    } // final children cleanup
    // filter out scoped slots


    element.children = element.children.filter(function (c) {
      return !c.slotScope;
    }); // remove trailing whitespace node again

    trimEndingWhitespace(element); // check pre state

    if (element.pre) {
      inVPre = false;
    }

    if (platformIsPreTag(element.tag)) {
      inPre = false;
    } // apply post-transforms


    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace(el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;

      while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints(el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', {
        start: el.start
      });
    }

    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start(tag, attrs, unary, start$1) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

      /* istanbul ignore if */

      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);

      if (ns) {
        element.ns = ns;
      }

      if (true) {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated;
          }, {});
        }

        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
              start: attr.start + attr.name.indexOf("["),
              end: attr.start + attr.name.length
            });
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
         true && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', {
          start: element.start
        });
      } // apply pre-transforms


      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);

        if (element.pre) {
          inVPre = true;
        }
      }

      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }

      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;

        if (true) {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },
    end: function end(tag, start, end$1) {
      var element = stack[stack.length - 1]; // pop stack

      stack.length -= 1;
      currentParent = stack[stack.length - 1];

      if ( true && options.outputSourceRange) {
        element.end = end$1;
      }

      closeElement(element);
    },
    chars: function chars(text, start, end) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.', {
              start: start
            });
          } else if (text = text.trim()) {
            warnOnce("text \"" + text + "\" outside root element will be ignored.", {
              start: start
            });
          }
        }

        return;
      } // IE textarea placeholder bug

      /* istanbul ignore if */


      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }

      var children = currentParent.children;

      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }

      if (text) {
        if (whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }

        var res;
        var child;

        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }

        if (child) {
          if ( true && options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }

          children.push(child);
        }
      }
    },
    comment: function comment(text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };

        if ( true && options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }

        currentParent.children.push(child);
      }
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var list = el.attrsList;
  var len = list.length;

  if (len) {
    var attrs = el.attrs = new Array(len);

    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };

      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement(element, options) {
  processKey(element); // determine whether this is a plain element after
  // removing structural attributes

  element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);

  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }

  processAttrs(element);
  return element;
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');

  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
      }

      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;

        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
          /* tip */
          );
        }
      }
    }

    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');

  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;

  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var res = parseFor(exp);

    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
    }
  }
}

function parseFor(exp) {
  var inMatch = exp.match(forAliasRE);

  if (!inMatch) {
    return;
  }

  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);

  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();

    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }

  return res;
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');

  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }

    var elseif = getAndRemoveAttr(el, 'v-else-if');

    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);

  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
  }
}

function findPrevElement(children) {
  var i = children.length;

  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if ( true && children[i].text !== ' ') {
        warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
      }

      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }

  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');

  if (once$$1 != null) {
    el.once = true;
  }
} // handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">


function processSlotContent(el) {
  var slotScope;

  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */

    if ( true && slotScope) {
      warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
    }

    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
    /* istanbul ignore if */
    if ( true && el.attrsMap['v-for']) {
      warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
    }

    el.slotScope = slotScope;
  } // slot="xxx"


  var slotTarget = getBindingAttr(el, 'slot');

  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.

    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  } // 2.6 v-slot syntax


  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

      if (slotBinding) {
        if (true) {
          if (el.slotTarget || el.slotScope) {
            warn$2("Unexpected mixed usage of different slot syntaxes.", el);
          }

          if (el.parent && !maybeComponent(el.parent)) {
            warn$2("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
          }
        }

        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);

      if (slotBinding$1) {
        if (true) {
          if (!maybeComponent(el)) {
            warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
          }

          if (el.slotScope || el.slotTarget) {
            warn$2("Unexpected mixed usage of different slot syntaxes.", el);
          }

          if (el.scopedSlots) {
            warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
          }
        } // add the component's children to its default slot


        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true;
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

        el.children = []; // mark el non-plain so data gets generated

        el.plain = false;
      }
    }
  }
}

function getSlotName(binding) {
  var name = binding.name.replace(slotRE, '');

  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (true) {
      warn$2("v-slot shorthand syntax requires a slot name.", binding);
    }
  }

  return dynamicArgRE.test(name) // dynamic [name]
  ? {
    name: name.slice(1, -1),
    dynamic: true // static name

  } : {
    name: "\"" + name + "\"",
    dynamic: false
  };
} // handle <slot/> outlets


function processSlotOutlet(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');

    if ( true && el.key) {
      warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
    }
  }
}

function processComponent(el) {
  var binding;

  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }

  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;

    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true; // modifiers

      modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

      if (modifiers) {
        name = name.replace(modifierRE, '');
      }

      if (bindRE.test(name)) {
        // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);

        if (isDynamic) {
          name = name.slice(1, -1);
        }

        if ( true && value.trim().length === 0) {
          warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
        }

        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);

            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }

          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }

          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");

            if (!isDynamic) {
              addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);

              if (hyphenate(name) !== camelize(name)) {
                addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
              }
            } else {
              // handler w/ dynamic event name
              addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
              );
            }
          }
        }

        if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) {
        // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);

        if (isDynamic) {
          name = name.slice(1, -1);
        }

        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else {
        // normal directives
        name = name.replace(dirRE, ''); // parse arg

        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;

        if (arg) {
          name = name.slice(0, -(arg.length + 1));

          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }

        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

        if ( true && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);

        if (res) {
          warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
        }
      }

      addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation

      if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor(el) {
  var parent = el;

  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }

    parent = parent.parent;
  }

  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);

  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};

  for (var i = 0, l = attrs.length; i < l; i++) {
    if ( true && map[attrs[i].name] && !isIE && !isEdge) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }

    map[attrs[i].name] = attrs[i].value;
  }

  return map;
} // for script (e.g. type="x/template") or style, do not decode content


function isTextTag(el) {
  return el.tag === 'script' || el.tag === 'style';
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */

function guardIESVGBug(attrs) {
  var res = [];

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }

  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;

  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
    }

    _el = _el.parent;
  }
}
/*  */


function preTransformNode(el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;

    if (!map['v-model']) {
      return;
    }

    var typeBinding;

    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }

    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + map['v-bind'] + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

      var branch0 = cloneASTElement(el); // process for on the main node

      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed

      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      }); // 2. add radio else-if condition

      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      }); // 3. other

      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0;
    }
  }
}

function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}

var model$1 = {
  preTransformNode: preTransformNode
};
var modules$1 = [klass$1, style$1, model$1];
/*  */

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
  }
}
/*  */


function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};
/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};
/*  */

var isStaticKey;
var isPlatformReservedTag;
var genStaticKeysCached = cached(genStaticKeys$1);
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */

function optimize(root, options) {
  if (!root) {
    return;
  }

  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.

  markStatic$1(root); // second pass: mark static roots.

  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
}

function markStatic$1(node) {
  node.static = isStatic(node);

  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
      return;
    }

    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);

      if (!child.static) {
        node.static = false;
      }
    }

    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);

        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    } // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.


    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }

    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }

    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    // expression
    return false;
  }

  if (node.type === 3) {
    // text
    return true;
  }

  return !!(node.pre || !node.hasBindings && // no dynamic bindings
  !node.if && !node.for && // not v-if or v-for or v-else
  !isBuiltInTag(node.tag) && // not a built-in
  isPlatformReservedTag(node.tag) && // not a component
  !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;

    if (node.tag !== 'template') {
      return false;
    }

    if (node.for) {
      return true;
    }
  }

  return false;
}
/*  */


var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
}; // KeyboardEvent.key aliases

var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
}; // #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once

var genGuard = function (condition) {
  return "if(" + condition + ")return null;";
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers(events, isNative) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";

  for (var name in events) {
    var handlerCode = genHandler(events[name]);

    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }

  staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";

  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
  } else {
    return prefix + staticHandlers;
  }
}

function genHandler(handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[" + handler.map(function (handler) {
      return genHandler(handler);
    }).join(',') + "]";
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value;
    }

    return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];

    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key]; // left/right

        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = handler.modifiers;
        genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
          return !modifiers[keyModifier];
        }).map(function (keyModifier) {
          return "$event." + keyModifier + "Key";
        }).join('||'));
      } else {
        keys.push(key);
      }
    }

    if (keys.length) {
      code += genKeyFilter(keys);
    } // Make sure modifiers like prevent and stop get executed after key filtering


    if (genModifierCode) {
      code += genModifierCode;
    }

    var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
    return "function($event){" + code + handlerCode + "}";
  }
}

function genKeyFilter(keys) {
  return (// make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
  );
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);

  if (keyVal) {
    return "$event.keyCode!==" + keyVal;
  }

  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
}
/*  */


function on(el, dir) {
  if ( true && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }

  el.wrapListeners = function (code) {
    return "_g(" + code + "," + dir.value + ")";
  };
}
/*  */


function bind$1(el, dir) {
  el.wrapData = function (code) {
    return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
  };
}
/*  */


var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};
/*  */

var CodegenState = function CodegenState(options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;

  this.maybeComponent = function (el) {
    return !!el.component || !isReservedTag(el.tag);
  };

  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};

function generate(ast, options) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: state.staticRenderFns
  };
}

function genElement(el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el, state);
  } else {
    // component or element
    var code;

    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;

      if (!el.plain || el.pre && state.maybeComponent(el)) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
    } // module transforms


    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }

    return code;
  }
} // hoist static sub-trees out


function genStatic(el, state) {
  el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.

  var originalPreState = state.pre;

  if (el.pre) {
    state.pre = el.pre;
  }

  state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
  state.pre = originalPreState;
  return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
} // v-once


function genOnce(el, state) {
  el.onceProcessed = true;

  if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;

    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }

      parent = parent.parent;
    }

    if (!key) {
       true && state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
      return genElement(el, state);
    }

    return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
  } else {
    return genStatic(el, state);
  }
}

function genIf(el, state, altGen, altEmpty) {
  el.ifProcessed = true; // avoid recursion

  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}

function genIfConditions(conditions, state, altGen, altEmpty) {
  if (!conditions.length) {
    return altEmpty || '_e()';
  }

  var condition = conditions.shift();

  if (condition.exp) {
    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
  } else {
    return "" + genTernaryExp(condition.block);
  } // v-if with v-once should generate code like (a)?_m(0):_m(1)


  function genTernaryExp(el) {
    return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
  }
}

function genFor(el, state, altGen, altHelper) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

  if ( true && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
    state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
    /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion

  return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
}

function genData$2(el, state) {
  var data = '{'; // directives first.
  // directives may mutate the el's other properties before they are generated.

  var dirs = genDirectives(el, state);

  if (dirs) {
    data += dirs + ',';
  } // key


  if (el.key) {
    data += "key:" + el.key + ",";
  } // ref


  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }

  if (el.refInFor) {
    data += "refInFor:true,";
  } // pre


  if (el.pre) {
    data += "pre:true,";
  } // record original tag name for components using "is" attribute


  if (el.component) {
    data += "tag:\"" + el.tag + "\",";
  } // module data generation functions


  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  } // attributes


  if (el.attrs) {
    data += "attrs:" + genProps(el.attrs) + ",";
  } // DOM props


  if (el.props) {
    data += "domProps:" + genProps(el.props) + ",";
  } // event handlers


  if (el.events) {
    data += genHandlers(el.events, false) + ",";
  }

  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true) + ",";
  } // slot target
  // only for non-scoped slots


  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + el.slotTarget + ",";
  } // scoped slots


  if (el.scopedSlots) {
    data += genScopedSlots(el, el.scopedSlots, state) + ",";
  } // component v-model


  if (el.model) {
    data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
  } // inline-template


  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);

    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }

  data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.

  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
  } // v-bind data wrap


  if (el.wrapData) {
    data = el.wrapData(data);
  } // v-on data wrap


  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }

  return data;
}

function genDirectives(el, state) {
  var dirs = el.directives;

  if (!dirs) {
    return;
  }

  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;

  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];

    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }

    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
    }
  }

  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el, state) {
  var ast = el.children[0];

  if ( true && (el.children.length !== 1 || ast.type !== 1)) {
    state.warn('Inline-template components must have exactly one child element.', {
      start: el.start
    });
  }

  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){" + code + "}";
    }).join(',') + "]}";
  }
}

function genScopedSlots(el, slots, state) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    ;
  }); // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.

  var needsKey = !!el.if; // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.

  if (!needsForceUpdate) {
    var parent = el.parent;

    while (parent) {
      if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
        needsForceUpdate = true;
        break;
      }

      if (parent.if) {
        needsKey = true;
      }

      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots).map(function (key) {
    return genScopedSlot(slots[key], state);
  }).join(',');
  return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
}

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

function containsSlotChild(el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true;
    }

    return el.children.some(containsSlotChild);
  }

  return false;
}

function genScopedSlot(el, state) {
  var isLegacySyntax = el.attrsMap['slot-scope'];

  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null");
  }

  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot);
  }

  var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
  var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}"; // reverse proxy v-slot without scope on this.$slots

  var reverseProxy = slotScope ? "" : ",proxy:true";
  return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
}

function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
  var children = el.children;

  if (children.length) {
    var el$1 = children[0]; // optimize single v-for

    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
      var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
      return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
    }

    var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
    var gen = altGenNode || genNode;
    return "[" + children.map(function (c) {
      return gen(c, state);
    }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
  }
} // determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed


function getNormalizationType(children, maybeComponent) {
  var res = 0;

  for (var i = 0; i < children.length; i++) {
    var el = children[i];

    if (el.type !== 1) {
      continue;
    }

    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }

    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }

  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  } else if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
  : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
}

function genComment(comment) {
  return "_e(" + JSON.stringify(comment.text) + ")";
}

function genSlot(el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? "," + children : '');
  var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
    return {
      // slot props are camelized
      name: camelize(attr.name),
      value: attr.value,
      dynamic: attr.dynamic
    };
  })) : null;
  var bind$$1 = el.attrsMap['v-bind'];

  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }

  if (attrs) {
    res += "," + attrs;
  }

  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }

  return res + ')';
} // componentName is el.component, take it as argument to shun flow's pessimistic refinement


function genComponent(componentName, el, state) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
}

function genProps(props) {
  var staticProps = "";
  var dynamicProps = "";

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);

    if (prop.dynamic) {
      dynamicProps += prop.name + "," + value + ",";
    } else {
      staticProps += "\"" + prop.name + "\":" + value + ",";
    }
  }

  staticProps = "{" + staticProps.slice(0, -1) + "}";

  if (dynamicProps) {
    return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
  } else {
    return staticProps;
  }
} // #3895, #4268


function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
/*  */
// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

function detectErrors(ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode(node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];

        if (value) {
          var range = node.rawAttrsMap[name];

          if (name === 'v-for') {
            checkFor(node, "v-for=\"" + value + "\"", warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, name + "=\"" + value + "\"", warn, range);
          } else {
            checkExpression(value, name + "=\"" + value + "\"", warn, range);
          }
        }
      }
    }

    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent(exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);

  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
  }

  checkExpression(exp, text, warn, range);
}

function checkFor(node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier(ident, type, text, warn, range) {
  if (typeof ident === 'string') {
    try {
      new Function("var " + ident + "=_");
    } catch (e) {
      warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
    }
  }
}

function checkExpression(exp, text, warn, range) {
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
    } else {
      warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
    }
  }
}
/*  */


var range = 2;

function generateCodeFrame(source, start, end) {
  if (start === void 0) start = 0;
  if (end === void 0) end = source.length;
  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) {
          continue;
        }

        res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
        var lineLength = lines[j].length;

        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}

function repeat$1(str, n) {
  var result = '';

  if (n > 0) {
    while (true) {
      // eslint-disable-line
      if (n & 1) {
        result += str;
      }

      n >>>= 1;

      if (n <= 0) {
        break;
      }

      str += str;
    }
  }

  return result;
}
/*  */


function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({
      err: err,
      code: code
    });
    return noop;
  }
}

function createCompileToFunctionFn(compile) {
  var cache = Object.create(null);
  return function compileToFunctions(template, options, vm) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;
    /* istanbul ignore if */

    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    } // check cache


    var key = options.delimiters ? String(options.delimiters) + template : template;

    if (cache[key]) {
      return cache[key];
    } // compile


    var compiled = compile(template, options); // check compilation errors/tips

    if (true) {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
          });
        } else {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
      }

      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) {
            return tip(e.msg, vm);
          });
        } else {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }
    } // turn code into functions


    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors);
    }); // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use

    /* istanbul ignore if */

    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
          var err = ref.err;
          var code = ref.code;
          return err.toString() + " in\n\n" + code + "\n";
        }).join('\n'), vm);
      }
    }

    return cache[key] = res;
  };
}
/*  */


function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    function compile(template, options) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if ( true && options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = {
              msg: msg
            };

            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }

              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }

            (tip ? tips : errors).push(data);
          };
        } // merge custom modules


        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        } // merge custom directives


        if (options.directives) {
          finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
        } // copy other options


        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;
      var compiled = baseCompile(template.trim(), finalOptions);

      if (true) {
        detectErrors(compiled.ast, warn);
      }

      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    };
  };
}
/*  */
// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.


var createCompiler = createCompilerCreator(function baseCompile(template, options) {
  var ast = parse(template.trim(), options);

  if (options.optimize !== false) {
    optimize(ast, options);
  }

  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});
/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;
/*  */
// check whether current browser encodes a char inside attribute values

var div;

function getShouldDecode(href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0;
} // #3663: IE encodes newlines inside attribute values while other browsers don't


var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false; // #6828: chrome encodes content in a[href]

var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML;
});
var mount = Vue.prototype.$mount;

Vue.prototype.$mount = function (el, hydrating) {
  el = el && query(el);
  /* istanbul ignore if */

  if (el === document.body || el === document.documentElement) {
     true && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
    return this;
  }

  var options = this.$options; // resolve template/el and convert to render function

  if (!options.render) {
    var template = options.template;

    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */

          if ( true && !template) {
            warn("Template element not found or is empty: " + options.template, this);
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }

        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }

    if (template) {
      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      /* istanbul ignore if */

      if ( true && config.performance && mark) {
        mark('compile end');
        measure("vue " + this._name + " compile", 'compile', 'compile end');
      }
    }
  }

  return mount.call(this, el, hydrating);
};
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */


function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

Vue.compile = compileToFunctions;
/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes.js");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#examApp',
  template: '<router-view></router-view>',
  router: new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
    routes: _routes__WEBPACK_IMPORTED_MODULE_2__["default"]
  })
});

/***/ }),

/***/ "./src/components/app-chart.vue":
/*!**************************************!*\
  !*** ./src/components/app-chart.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-chart.vue?vue&type=template&id=559d2f5c& */ "./src/components/app-chart.vue?vue&type=template&id=559d2f5c&");
/* harmony import */ var _app_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-chart.vue?vue&type=script&lang=js& */ "./src/components/app-chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/app-chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/app-chart.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/app-chart.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./app-chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/app-chart.vue?vue&type=template&id=559d2f5c&":
/*!*********************************************************************!*\
  !*** ./src/components/app-chart.vue?vue&type=template&id=559d2f5c& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app-chart.vue?vue&type=template&id=559d2f5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-chart.vue?vue&type=template&id=559d2f5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_chart_vue_vue_type_template_id_559d2f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/app-content.vue":
/*!****************************************!*\
  !*** ./src/components/app-content.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-content.vue?vue&type=template&id=b1998f26& */ "./src/components/app-content.vue?vue&type=template&id=b1998f26&");
/* harmony import */ var _app_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-content.vue?vue&type=script&lang=js& */ "./src/components/app-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-content.vue?vue&type=style&index=0&lang=css& */ "./src/components/app-content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/app-content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/app-content.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/app-content.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./app-content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/app-content.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./src/components/app-content.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./app-content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/app-content.vue?vue&type=template&id=b1998f26&":
/*!***********************************************************************!*\
  !*** ./src/components/app-content.vue?vue&type=template&id=b1998f26& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app-content.vue?vue&type=template&id=b1998f26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-content.vue?vue&type=template&id=b1998f26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_template_id_b1998f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/app-main.vue":
/*!*************************************!*\
  !*** ./src/components/app-main.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-main.vue?vue&type=template&id=1c0b2b75& */ "./src/components/app-main.vue?vue&type=template&id=1c0b2b75&");
/* harmony import */ var _app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-main.vue?vue&type=script&lang=js& */ "./src/components/app-main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/app-main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/app-main.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/app-main.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./app-main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app-main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/app-main.vue?vue&type=template&id=1c0b2b75&":
/*!********************************************************************!*\
  !*** ./src/components/app-main.vue?vue&type=template&id=1c0b2b75& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app-main.vue?vue&type=template&id=1c0b2b75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/app-main.vue?vue&type=template&id=1c0b2b75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_1c0b2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/login.vue":
/*!**********************************!*\
  !*** ./src/components/login.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=10d9df09& */ "./src/components/login.vue?vue&type=template&id=10d9df09&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./src/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/login.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/login.vue?vue&type=template&id=10d9df09&":
/*!*****************************************************************!*\
  !*** ./src/components/login.vue?vue&type=template&id=10d9df09& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=10d9df09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/login.vue?vue&type=template&id=10d9df09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_10d9df09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/question-list.vue":
/*!******************************************!*\
  !*** ./src/components/question-list.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-list.vue?vue&type=template&id=748e3fc5& */ "./src/components/question-list.vue?vue&type=template&id=748e3fc5&");
/* harmony import */ var _question_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-list.vue?vue&type=script&lang=js& */ "./src/components/question-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _question_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/question-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/question-list.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/question-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_question_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./question-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/question-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_question_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/question-list.vue?vue&type=template&id=748e3fc5&":
/*!*************************************************************************!*\
  !*** ./src/components/question-list.vue?vue&type=template&id=748e3fc5& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./question-list.vue?vue&type=template&id=748e3fc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/question-list.vue?vue&type=template&id=748e3fc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_list_vue_vue_type_template_id_748e3fc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/signup.vue":
/*!***********************************!*\
  !*** ./src/components/signup.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.vue?vue&type=template&id=56bbef28& */ "./src/components/signup.vue?vue&type=template&id=56bbef28&");
/* harmony import */ var _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.vue?vue&type=script&lang=js& */ "./src/components/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/signup.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/signup.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/signup.vue?vue&type=template&id=56bbef28&":
/*!******************************************************************!*\
  !*** ./src/components/signup.vue?vue&type=template&id=56bbef28& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./signup.vue?vue&type=template&id=56bbef28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/signup.vue?vue&type=template&id=56bbef28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_56bbef28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/timer-board.vue":
/*!****************************************!*\
  !*** ./src/components/timer-board.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-board.vue?vue&type=template&id=02182d04& */ "./src/components/timer-board.vue?vue&type=template&id=02182d04&");
/* harmony import */ var _timer_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer-board.vue?vue&type=script&lang=js& */ "./src/components/timer-board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _timer_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/timer-board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/timer-board.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/timer-board.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_timer_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./timer-board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/timer-board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_timer_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/timer-board.vue?vue&type=template&id=02182d04&":
/*!***********************************************************************!*\
  !*** ./src/components/timer-board.vue?vue&type=template&id=02182d04& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./timer-board.vue?vue&type=template&id=02182d04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/timer-board.vue?vue&type=template&id=02182d04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timer_board_vue_vue_type_template_id_02182d04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/conf.js":
/*!*********************!*\
  !*** ./src/conf.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leancloud-storage */ "./node_modules/leancloud-storage/dist/av-min.js");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.init('vSpBIzidVtTr2HLkkSHcx5JG-gzGzoHsz', '71PEcWjlRMzHoHDus1PzLLtD');
var count = 20;

var getCount = function getCount() {
  var count = localStorage.getItem('count') || this.count;
  return count;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  count: count,
  AV: leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a,
  getCount: getCount
});

/***/ }),

/***/ "./src/examsGen.js":
/*!*************************!*\
  !*** ./src/examsGen.js ***!
  \*************************/
/*! exports provided: randomMultipleLv1, randomPlusMinusExamLv2, randomDivideLv1, randomMixedMultiAndDivideLv1, randomDivideWithModLv1, randomMix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomMultipleLv1", function() { return randomMultipleLv1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomPlusMinusExamLv2", function() { return randomPlusMinusExamLv2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDivideLv1", function() { return randomDivideLv1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomMixedMultiAndDivideLv1", function() { return randomMixedMultiAndDivideLv1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDivideWithModLv1", function() { return randomDivideWithModLv1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomMix", function() { return randomMix; });
var ops = ['+', '-', '-'];

function randomLess10() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var number = Math.floor(Math.random() * max) || 1;

  while (number < min) {
    number = randomLess10(max, min);
  }

  return number;
}

function genLv2() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  var qs = [];

  for (var i = 0; i < count; i++) {
    var n1 = randomLess10();
    var n2 = randomLess10();
    var expr = "".concat(n1, " * ").concat(n2, " = *");
    qs.push(expr);
  }

  return qs;
}

function randomMultipleLv1() {
  var n1 = randomLess10();
  var n2 = randomLess10();
  var expr = "".concat(n1, " * ").concat(n2, " = ");
  var v = n1 * n2;
  return {
    expr: expr,
    v: v
  };
}

function randomDivideLv1() {
  var n1 = randomLess10();
  var n2 = randomLess10();
  var v = n1 * n2;
  var expr = "".concat(v, " \xF7 ").concat(n1, " = ");
  return {
    expr: expr,
    v: n2
  };
}

function randomDivideWithModLv1() {
  var n1 = randomLess10(10, 2);
  var n2 = randomLess10();
  var mod = randomLess10(n1);
  var v = n1 * n2 + mod;
  var expr = "".concat(v, " \xF7 ").concat(n1, " = ");
  return {
    expr: expr,
    v: n2,
    mod: mod,
    requireMod: true
  };
}

function randomMixedMultiAndDivideLv1() {
  var n = randomNumber() % 2;

  switch (n) {
    case 1:
      return randomMultipleLv1();

    case 0:
      return randomDivideLv1();
  }

  if (n === 0) {
    return randomMultipleLv1();
  }
}

function sanitizeParams(params) {
  params = params || {};
  params.max = params.max || 100;
  params.min = params.min || 67;
  return params;
}

function randomQPositive(count, params) {
  params = sanitizeParams(params);
  var base, v;
  base = v = randomNumber(params.min, params.max);
  var expr = base.toString();

  while (count > 0) {
    var tempExpr = undefined;
    ;

    while ((v = eval(tempExpr = expr + randomNext(undefined, params.max))) < 0) {}

    expr = tempExpr;
    count--;
  }

  expr += ' =';
  return {
    expr: expr,
    v: v
  };
}

function randomNext() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var c = randomNumber(min, max);
  var op1 = ops[Math.round(Math.random() * (ops.length - 1))];
  return " ".concat(op1, " ").concat(c);
}

function randomNumber(min) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var c = parseInt(Math.random() * max);

  if (min !== undefined) {
    while (c < min) {
      c = parseInt(Math.random() * max);
    }
  }

  return c;
} // random plus minus exam


function randomPlusMinusExamLv2() {
  var q = randomQPositive(2, {
    max: 1000,
    min: 500
  });
  return {
    expr: q.expr,
    v: q.v
  };
}

function randomMix() {
  var gens = [randomPlusMinusExamLv2, randomDivideWithModLv1, randomDivideLv1, randomMultipleLv1];
  var randomIndex = randomNumber(0, gens.length);
  return gens[randomIndex]();
}



/***/ }),

/***/ "./src/examsMenu.js":
/*!**************************!*\
  !*** ./src/examsMenu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examsGen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examsGen */ "./src/examsGen.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: '基础乘法练习',
  href: '/multi-simple',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomMultipleLv1"]
}, {
  id: 3,
  name: '基本除法练习',
  href: '/devide-simple',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomDivideLv1"]
}, {
  id: 5,
  name: '基本除法练习（带余数）',
  href: '/devide-simple-mod',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomDivideWithModLv1"]
}, {
  id: 4,
  name: '基本乘法除法混合练习',
  href: '/multi-devide-simple',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomMixedMultiAndDivideLv1"]
}, {
  id: 2,
  name: '1000以下加减混合练习',
  href: '/addmin-b1k',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomPlusMinusExamLv2"]
}, {
  id: 100,
  name: '综合混合练习',
  href: '/mix-latest',
  gen: _examsGen__WEBPACK_IMPORTED_MODULE_0__["randomMix"]
}]);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-main.vue */ "./src/components/app-main.vue");
/* harmony import */ var _components_app_content_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app-content.vue */ "./src/components/app-content.vue");
/* harmony import */ var _components_login_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login.vue */ "./src/components/login.vue");
/* harmony import */ var _components_signup_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup.vue */ "./src/components/signup.vue");
/* harmony import */ var _examsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examsMenu */ "./src/examsMenu.js");






var getQuestionTemplate = function getQuestionTemplate(type, method) {
  return {
    template: '<app-content v-bind:method="method" v-bind:type="type"></app-content>',
    components: {
      'app-content': _components_app_content_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data: function data() {
      return {
        type: type,
        method: method
      };
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  component: _components_app_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/login',
  component: _components_login_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/signup',
  component: _components_signup_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}].concat(_examsMenu__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (ex) {
  return {
    path: ex.href,
    component: getQuestionTemplate(ex.id, ex.gen)
  };
})));

/***/ }),

/***/ "./src/services/scoreService.js":
/*!**************************************!*\
  !*** ./src/services/scoreService.js ***!
  \**************************************/
/*! exports provided: Score, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conf */ "./src/conf.js");

var AV = _conf__WEBPACK_IMPORTED_MODULE_0__["default"].AV;
var Score = AV.Object.extend('Score');
var query = new AV.Query('Score');


/***/ }),

/***/ "./src/services/userService.js":
/*!*************************************!*\
  !*** ./src/services/userService.js ***!
  \*************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../conf */ "./src/conf.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var User = _conf__WEBPACK_IMPORTED_MODULE_0__["default"].AV.User;

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, null, [{
    key: "verifyBySessionId",
    value: function verifyBySessionId() {
      return new Promise(function (res, rej) {
        var token = UserService._getSessionToken();

        if (!token) {
          rej('token not found');
        }

        User.become(token).then(function (v) {
          res(v);
        }, function (err) {
          return rej(err);
        });
      });
    }
  }, {
    key: "_getSessionToken",
    value: function _getSessionToken() {
      var cookieStr = document.cookie;
      var cookieItems = cookieStr.split(';').map(function (item) {
        return item.trim();
      }).map(function (item) {
        var segs = item.split('=');
        return {
          key: segs[0],
          val: segs[1]
        };
      }).filter(function (item) {
        return item.key === 'token';
      });

      if (cookieItems.length === 0) {
        return null;
      } else {
        return cookieItems[0].val;
      }
    }
  }]);

  return UserService;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map