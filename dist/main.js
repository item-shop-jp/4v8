'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default["default"];

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v17.0.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
	if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
	function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;reactIs_production_min$1.ContextConsumer=h;reactIs_production_min$1.ContextProvider=z;reactIs_production_min$1.Element=A;reactIs_production_min$1.ForwardRef=B;reactIs_production_min$1.Fragment=C;reactIs_production_min$1.Lazy=D;reactIs_production_min$1.Memo=E;reactIs_production_min$1.Portal=F;reactIs_production_min$1.Profiler=G;reactIs_production_min$1.StrictMode=H;
	reactIs_production_min$1.Suspense=I;reactIs_production_min$1.isAsyncMode=function(){return !1};reactIs_production_min$1.isConcurrentMode=function(){return !1};reactIs_production_min$1.isContextConsumer=function(a){return y(a)===h};reactIs_production_min$1.isContextProvider=function(a){return y(a)===g};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min$1.isForwardRef=function(a){return y(a)===k};reactIs_production_min$1.isFragment=function(a){return y(a)===d};reactIs_production_min$1.isLazy=function(a){return y(a)===p};reactIs_production_min$1.isMemo=function(a){return y(a)===n};
	reactIs_production_min$1.isPortal=function(a){return y(a)===c};reactIs_production_min$1.isProfiler=function(a){return y(a)===f};reactIs_production_min$1.isStrictMode=function(a){return y(a)===e};reactIs_production_min$1.isSuspense=function(a){return y(a)===l};reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
	reactIs_production_min$1.typeOf=y;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v17.0.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = 0xeac7;
	var REACT_PORTAL_TYPE = 0xeaca;
	var REACT_FRAGMENT_TYPE = 0xeacb;
	var REACT_STRICT_MODE_TYPE = 0xeacc;
	var REACT_PROFILER_TYPE = 0xead2;
	var REACT_PROVIDER_TYPE = 0xeacd;
	var REACT_CONTEXT_TYPE = 0xeace;
	var REACT_FORWARD_REF_TYPE = 0xead0;
	var REACT_SUSPENSE_TYPE = 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = 0xead8;
	var REACT_MEMO_TYPE = 0xead3;
	var REACT_LAZY_TYPE = 0xead4;
	var REACT_BLOCK_TYPE = 0xead9;
	var REACT_SERVER_BLOCK_TYPE = 0xeada;
	var REACT_FUNDAMENTAL_TYPE = 0xead5;
	var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
	var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

	if (typeof Symbol === 'function' && Symbol.for) {
	  var symbolFor = Symbol.for;
	  REACT_ELEMENT_TYPE = symbolFor('react.element');
	  REACT_PORTAL_TYPE = symbolFor('react.portal');
	  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
	  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
	  REACT_PROFILER_TYPE = symbolFor('react.profiler');
	  REACT_PROVIDER_TYPE = symbolFor('react.provider');
	  REACT_CONTEXT_TYPE = symbolFor('react.context');
	  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
	  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
	  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
	  REACT_MEMO_TYPE = symbolFor('react.memo');
	  REACT_LAZY_TYPE = symbolFor('react.lazy');
	  REACT_BLOCK_TYPE = symbolFor('react.block');
	  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
	  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
	  symbolFor('react.scope');
	  symbolFor('react.opaque.id');
	  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
	  symbolFor('react.offscreen');
	  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
	}

	// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

	var enableScopeAPI = false; // Experimental Create Event Handle API.

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min$1();
	} else {
	  module.exports = requireReactIs_development$1();
	}
} (reactIs$2));

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs$1));

var reactIs = reactIs$1.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v(){return (v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$2.exports.typeOf(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return "function"==typeof e}function _(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",I="undefined"!=typeof window&&"HTMLElement"in window,P$1=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),R="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e);},G="style["+A+'][data-styled-version="5.3.5"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},q=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.5");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P$1},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return (Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return !1}return !0}var oe=ne("5.3.5"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f;}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new stylis_min(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=React__default["default"].createContext();ue.Consumer;var de=React__default["default"].createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return React.useContext(ue)||he}function me(){return React.useContext(de)||pe}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return "-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return "";if(N(e))return "."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$2.exports.isElement(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},React.useRef(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n));}catch(e){Ie.test(e.message)&&Pe.delete(n);}finally{console.error=r;}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a);}return e}var Ge=React__default["default"].createContext();Ge.Consumer;var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.5"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Re(t,React.useContext(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&React.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,React.createElement(_,C)}(C,e,t,P)};return O.displayName=f,(C=React__default["default"].forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(f,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!reactIs$2.exports.isValidElementType(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e);}));function Ue(e){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        return (clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

function errorContext(cb) {
    {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

function refCount() {
    return operate(function (source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = createOperatorSubscriber(subscriber, undefined, undefined, undefined, function () {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}

((function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (hasLift(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function () {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function () {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(createOperatorSubscriber(subject_1, undefined, function () {
                _this._teardown();
                subject_1.complete();
            }, function (err) {
                _this._teardown();
                subject_1.error(err);
            }, function () { return _this._teardown(); })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount()(this);
    };
    return ConnectableObservable;
})(Observable));

var performanceTimestampProvider = {
    now: function () {
        return (performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined,
};

var animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var handle = request(function (timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription(function () { return cancel === null || cancel === void 0 ? void 0 : cancel(handle); });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined,
};

function animationFramesFactory(timestampProvider) {
    var schedule = animationFrameProvider.schedule;
    return new Observable(function (subscriber) {
        var subscription = new Subscription();
        var provider = timestampProvider || performanceTimestampProvider;
        var start = provider.now();
        var run = function (timestamp) {
            var now = provider.now();
            subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start,
            });
            if (!subscriber.closed) {
                subscription.add(schedule(run));
            }
        };
        subscription.add(schedule(run));
        return subscription;
    });
}
animationFramesFactory();

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

((function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
})(Subject));

var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};

((function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) { _bufferSize = Infinity; }
        if (_windowTime === void 0) { _windowTime = Infinity; }
        if (_timestampProvider === void 0) { _timestampProvider = dateTimestampProvider; }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function (value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function () {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
})(Subject));

((function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
})(Subject));

var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        return this;
    };
    return Action;
}(Subscription));

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        return (clearInterval)(handle);
    },
    delegate: undefined,
};

var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};

var setImmediate = Immediate.setImmediate, clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function (handle) {
        return (clearImmediate)(handle);
    },
    delegate: undefined,
};

var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (!scheduler.actions.some(function (action) { return action.id === id; })) {
            immediateProvider.clearImmediate(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction));

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler));

new AsapScheduler(AsapAction);

new AsyncScheduler(AsyncAction);

var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction));

var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler));

new QueueScheduler(QueueAction);

var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function () { return scheduler.flush(undefined); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (!scheduler.actions.some(function (action) { return action.id === id; })) {
            animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction));

var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler));

new AnimationFrameScheduler(AnimationFrameAction);

((function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) { schedulerActionCtor = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Infinity; }
        var _this = _super.call(this, schedulerActionCtor, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        }
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
})(AsyncScheduler));
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = (scheduler.index += 1); }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction));

new Observable(function (subscriber) { return subscriber.complete(); });

var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));

createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });

createErrorClass(function (_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});

createErrorClass(function (_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});

createErrorClass(function (_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});

createErrorClass(function (_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) { info = null; }
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

new Observable(noop);

function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}

var lodash_isequal = {exports: {}};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    asyncTag = '[object AsyncFunction]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    nullTag = '[object Null]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    proxyTag = '[object Proxy]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    undefinedTag = '[object Undefined]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = isEqual;
} (lodash_isequal, lodash_isequal.exports));

var isEqual = lodash_isequal.exports;

const KeyCodes = {
    ESC: 'Escape',
    ENTER: 'Enter',
    NUMPAD_ENTER: 'NumpadEnter',
    TAB: 'Tab',
    A: 'KeyA',
    B: 'KeyB',
    C: 'KeyC',
    D: 'KeyD',
    E: 'KeyE',
    F: 'KeyF',
    G: 'KeyG',
    H: 'KeyH',
    I: 'KeyI',
    J: 'KeyJ',
    K: 'KeyK',
    L: 'KeyL',
    M: 'KeyM',
    N: 'KeyN',
    O: 'KeyO',
    P: 'KeyP',
    Q: 'KeyQ',
    R: 'KeyR',
    S: 'KeyS',
    T: 'KeyT',
    U: 'KeyU',
    V: 'KeyV',
    W: 'KeyW',
    X: 'KeyX',
    Y: 'KeyY',
    Z: 'KeyZ',
    SPACE: 'Space',
    BACKSPACE: 'Backspace',
    DEL: 'Delete',
    ARROW_UP: 'ArrowUp',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
};
const EditorEvents = {
    EVENT_EDITOR_CREATE: 'editor-create',
    EVENT_EDITOR_HISTORY_PUSH: 'editor-history-push',
    EVENT_EDITOR_CHANGED: 'editor-changed',
    EVENT_BLOCK_RERENDER: 'block-rerender',
    EVENT_BLOCK_RERENDER_FORCE: 'block-rerender-force',
    EVENT_BLOCK_SELECTED: 'block-selected',
    EVENT_SELECTION_CHANGE: 'selection-change',
    EVENT_LINK_CLICK: 'button-clicked',
    EVENT_LOG_INFO: 'log-info',
    EVENT_LOG_WARNING: 'log-warning',
    EVENT_LOG_ERROR: 'log-error',
};
const HistoryType = {
    UPDATE_CONTENTS: 'update_contents',
    ADD_BLOCK: 'add_block',
    REMOVE_BLOCK: 'remove_block',
};
const EventSources = {
    SILENT: 'silent',
    USER: 'user',
    COLLABORATOR: 'collaborator',
};
const LogLevels = {
    NONE: 0,
    ERROR: 1,
    WARNING: 2,
    INFO: 3,
};

function copyObject(object) {
    const json = JSON.stringify(object);
    return JSON.parse(json);
}

function useBlockRenderer({ blockId, editor }) {
    const [block, setBlock] = React__namespace.useState(null);
    React__namespace.useEffect(() => {
        const currentBlock = editor.getBlock(blockId);
        const eventEmitter = editor.getEventEmitter();
        if (currentBlock) {
            setBlock(currentBlock);
        }
        const subs = new Subscription();
        subs.add(eventEmitter
            .select(EditorEvents.EVENT_BLOCK_RERENDER)
            .pipe(filter((affectedIds) => affectedIds.includes(blockId)))
            .subscribe(() => {
            const currentBlock = editor.getBlock(blockId);
            if (currentBlock) {
                setBlock((prev) => {
                    if (currentBlock.contents.length > 0 && isEqual(currentBlock, prev)) {
                        setTimeout(() => setBlock(currentBlock));
                        return Object.assign(Object.assign({}, currentBlock), { contents: [] });
                    }
                    return copyObject(currentBlock);
                });
            }
        }));
        subs.add(eventEmitter
            .select(EditorEvents.EVENT_BLOCK_RERENDER_FORCE)
            .pipe(filter((affectedIds) => affectedIds.includes(blockId)))
            .subscribe(() => {
            const currentBlock = editor.getBlock(blockId);
            if (currentBlock) {
                setBlock((prev) => {
                    setTimeout(() => setBlock(currentBlock));
                    return Object.assign(Object.assign({}, currentBlock), { contents: [] });
                });
            }
        }));
        return () => {
            subs.unsubscribe();
        };
    }, [blockId]);
    return block;
}

const InlineContainer = (_a) => {
    var { contents, formats, editor } = _a, props = __rest(_a, ["contents", "formats", "editor"]);
    return (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: contents.map((content) => {
            let Container;
            const inlineFormat = `inline/${content.type.toLocaleLowerCase()}`;
            if (!formats[inlineFormat]) {
                // defalut block format
                Container = formats['inline/text'];
            }
            else {
                Container = formats[inlineFormat];
            }
            return (jsxRuntime.exports.jsx(Container, Object.assign({ formats: formats, editor: editor, "data-inline-id": content.id, "data-format": inlineFormat, "data-attributes": JSON.stringify(content.attributes), inline: content }, props), content.id));
        }) }));
};

Ue `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Outer = He.div `
  position: relative;
`;
const Overlay = He.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  pointer-events: none;
  background-color: rgba(46, 170, 220, 0.2);
`;
const BlockContainer = React__namespace.memo((_a) => {
    var _b, _c, _d;
    var { blockId, editor, selected, readOnly = false, scrollContainer, formats } = _a, props = __rest(_a, ["blockId", "editor", "selected", "readOnly", "scrollContainer", "formats"]);
    const block = useBlockRenderer({ blockId, editor });
    const memoContents = React__namespace.useMemo(() => {
        var _a;
        return InlineContainer({ contents: (_a = block === null || block === void 0 ? void 0 : block.contents) !== null && _a !== void 0 ? _a : [], formats, editor, scrollContainer });
    }, [block === null || block === void 0 ? void 0 : block.contents, formats]);
    const blockFormat = `block/${block === null || block === void 0 ? void 0 : block.type.toLocaleLowerCase()}`;
    const Container = (_b = formats[blockFormat]) !== null && _b !== void 0 ? _b : formats['block/paragraph'];
    return (jsxRuntime.exports.jsxs(Outer, Object.assign({ "data-id": blockId, style: { '--indent': `${(_d = (_c = block === null || block === void 0 ? void 0 : block.attributes) === null || _c === void 0 ? void 0 : _c.indent) !== null && _d !== void 0 ? _d : 0}` } }, { children: [jsxRuntime.exports.jsx(Container, Object.assign({ suppressContentEditableWarning: true, className: 'notranslate', contentEditable: !readOnly, blockId: blockId, "data-block-id": blockId, "data-attributes": JSON.stringify(block === null || block === void 0 ? void 0 : block.attributes), "data-metas": JSON.stringify(block === null || block === void 0 ? void 0 : block.meta), "data-format": blockFormat, formats: formats, attributes: block === null || block === void 0 ? void 0 : block.attributes, meta: block === null || block === void 0 ? void 0 : block.meta, contents: memoContents, editor: editor, selected: selected }, props)), selected && jsxRuntime.exports.jsx(Overlay, {})] })));
});

function useMutationObserver(ref, callback, options = {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true,
}) {
    React__namespace.useEffect(() => {
        if (!ref.current)
            return;
        const observer = new MutationObserver(callback);
        observer.observe(ref.current, options);
        return () => observer.disconnect();
    }, []);
}

const Header$2 = He.h1 `
  font-size: 24px;
  outline: 0;
  padding: 2px 12px;
  box-sizing: border-box;
  padding-left: calc(12px + 1.5em * var(--indent));
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;
const Header1 = React__namespace.memo((_a) => {
    var { blockId, contents, placeholder = 'Header 1', attributes, editor } = _a, props = __rest(_a, ["blockId", "contents", "placeholder", "attributes", "editor"]);
    const headerRef = React__namespace.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React__namespace.useState(false);
    const handleChangeElement = React__namespace.useCallback(() => {
        if (!headerRef.current)
            return;
        const innerText = headerRef.current.innerText.replaceAll(/\uFEFF/gi, '');
        setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);
    React__namespace.useEffect(() => {
        handleChangeElement();
    }, []);
    return (jsxRuntime.exports.jsx(Header$2, Object.assign({ ref: headerRef, placeholder: showPlaceholder ? placeholder : '' }, props, { children: contents })));
});

const Header$1 = He.h2 `
  font-size: 20px;
  outline: 0;
  padding: 2px 12px;
  box-sizing: border-box;
  padding-left: calc(12px + 1.5em * var(--indent));
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;
const Header2 = React__namespace.memo((_a) => {
    var { blockId, contents, placeholder = 'Header 2', attributes, editor } = _a, props = __rest(_a, ["blockId", "contents", "placeholder", "attributes", "editor"]);
    const headerRef = React__namespace.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React__namespace.useState(false);
    const handleChangeElement = React__namespace.useCallback(() => {
        if (!headerRef.current)
            return;
        const innerText = headerRef.current.innerText.replaceAll(/\uFEFF/gi, '');
        setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);
    React__namespace.useEffect(() => {
        handleChangeElement();
    }, []);
    return (jsxRuntime.exports.jsx(Header$1, Object.assign({ ref: headerRef, placeholder: showPlaceholder ? placeholder : '' }, props, { children: contents })));
});

const Header = He.h3 `
  font-size: 16px;
  outline: 0;
  padding: 2px 12px;
  box-sizing: border-box;
  padding-left: calc(12px + 1.5em * var(--indent));
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;
const Header3 = React__namespace.memo((_a) => {
    var { blockId, contents, placeholder = 'Header 3', attributes, editor } = _a, props = __rest(_a, ["blockId", "contents", "placeholder", "attributes", "editor"]);
    const headerRef = React__namespace.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React__namespace.useState(false);
    const handleChangeElement = React__namespace.useCallback(() => {
        if (!headerRef.current)
            return;
        const innerText = headerRef.current.innerText.replaceAll(/\uFEFF/gi, '');
        setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);
    React__namespace.useEffect(() => {
        handleChangeElement();
    }, []);
    return (jsxRuntime.exports.jsx(Header, Object.assign({ ref: headerRef, placeholder: showPlaceholder ? placeholder : '' }, props, { children: contents })));
});

function decimalToRoman(num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['m', 'cm', 'd', 'cd', 'c', 'xc', 'l', 'xl', 'x', 'ix', 'v', 'iv', 'i'];
    let dest = '';
    for (let i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            dest += roman[i];
            num -= decimal[i];
        }
    }
    return dest;
}
function decimalToAlphabet(num) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    let dest = '';
    /* eslint-disable-next-line */
    while (true) {
        const remainder = --num % alphabet.length;
        dest = alphabet[remainder] + dest;
        if (num < alphabet.length)
            break;
        num = Math.floor(num / alphabet.length);
    }
    return dest;
}

const ListItem$1 = He.div `
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  box-sizing: border-box;
  position: relative;
  padding-left: calc(40px + 1.5em * var(--indent));
  ::before {
    position: absolute;
    height: 1em;
    left: calc(8px + 1.5em * (var(--indent) - 1));
    width: 3em;
    text-align: right;
    content: var(--content);
  }
  ${({ placeholder }) => {
    return (placeholder &&
        Ce `
        ::after {
          opacity: 0.3;
          content: attr(placeholder);
        }
      `);
}}
`;
const OrderedList = React__namespace.memo((_a) => {
    var { blockId, contents, placeholder = 'List', attributes, editor, meta } = _a, props = __rest(_a, ["blockId", "contents", "placeholder", "attributes", "editor", "meta"]);
    const headerRef = React__namespace.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React__namespace.useState(false);
    const handleChangeElement = React__namespace.useCallback(() => {
        if (!headerRef.current)
            return;
        const innerText = headerRef.current.innerText.replaceAll(/\uFEFF/gi, '');
        setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);
    const memoStyle = React__namespace.useMemo(() => {
        var _a, _b;
        const numberType = ((_a = attributes === null || attributes === void 0 ? void 0 : attributes.indent) !== null && _a !== void 0 ? _a : 0) % 3;
        const listNumber = (_b = meta === null || meta === void 0 ? void 0 : meta.listNumber) !== null && _b !== void 0 ? _b : 1;
        if (listNumber < 1) {
            return {};
        }
        let content = '';
        switch (numberType) {
            case 1:
                content = decimalToAlphabet(listNumber);
                break;
            case 2:
                content = decimalToRoman(listNumber);
                break;
            default:
                content = listNumber;
                break;
        }
        return { '--content': `'${content}.'` };
    }, [meta === null || meta === void 0 ? void 0 : meta.listNumber, attributes === null || attributes === void 0 ? void 0 : attributes.indent]);
    React__namespace.useEffect(() => {
        handleChangeElement();
    }, []);
    return (jsxRuntime.exports.jsx(ListItem$1, Object.assign({ ref: headerRef, style: memoStyle, placeholder: showPlaceholder ? placeholder : '' }, props, { children: contents })));
});

const ListItem = He.div `
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  padding-left: calc(40px + 1.5em * var(--indent));
  box-sizing: border-box;
  position: relative;
  ::before {
    position: absolute;
    font-family: Arial;
    font-size: 1.5em;
    line-height: 1;
    top: 3px;
    content: var(--content);
    left: calc(18px + 1em * var(--indent));
  }
  ${({ placeholder }) => {
    return (placeholder &&
        Ce `
        ::after {
          opacity: 0.3;
          content: attr(placeholder);
        }
      `);
}}
`;
const BulletList = React__namespace.memo((_a) => {
    var { blockId, contents, placeholder = 'List', attributes, editor } = _a, props = __rest(_a, ["blockId", "contents", "placeholder", "attributes", "editor"]);
    const headerRef = React__namespace.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React__namespace.useState(false);
    const handleChangeElement = React__namespace.useCallback(() => {
        if (!headerRef.current)
            return;
        const innerText = headerRef.current.innerText.replaceAll(/\uFEFF/gi, '');
        setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);
    React__namespace.useEffect(() => {
        handleChangeElement();
    }, []);
    const memoStyle = React__namespace.useMemo(() => {
        var _a;
        const numberType = ((_a = attributes === null || attributes === void 0 ? void 0 : attributes.indent) !== null && _a !== void 0 ? _a : 0) % 3;
        let content = '';
        switch (numberType) {
            case 1:
                content = '◦';
                break;
            case 2:
                content = '▪';
                break;
            default:
                content = '•';
                break;
        }
        return { '--content': `'${content}'` };
    }, [attributes === null || attributes === void 0 ? void 0 : attributes.indent]);
    return (jsxRuntime.exports.jsx(ListItem, Object.assign({ ref: headerRef, style: memoStyle, placeholder: showPlaceholder ? placeholder : '' }, props, { children: contents })));
});

const Container$5 = He.blockquote `
  outline: 0;
  margin: 0 0 0 12px;
  padding: 2px 12px;
  box-sizing: border-box;
  border-left: 3px solid #ccc;
  padding-left: calc(12px + 1.5em * var(--indent));
`;
const Blockquote = React__namespace.memo((_a) => {
    var { blockId, contents, editor } = _a, props = __rest(_a, ["blockId", "contents", "editor"]);
    return jsxRuntime.exports.jsx(Container$5, Object.assign({}, props, { children: contents }));
});

const P = He.p `
  width: 100%;
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px;
  box-sizing: border-box;
  padding-left: calc(12px + 1.5em * var(--indent));
`;
const Paragraph = React__namespace.memo((_a) => {
    var { blockId, formats, editor, contents } = _a, props = __rest(_a, ["blockId", "formats", "editor", "contents"]);
    return jsxRuntime.exports.jsx(P, Object.assign({}, props, { children: contents }));
});

var getDefaultStyle = function (visible) { return ({
    display: visible ? 'flex' : 'none',
}); };

var DEFAULT_COLOR = '#4fa94d';
var DEFAULT_WAI_ARIA_ATTRIBUTE = {
    'aria-busy': true,
    role: 'status',
};

var __assign$v = (undefined && undefined.__assign) || function () {
    __assign$v = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$v.apply(this, arguments);
};

var __assign$u = (undefined && undefined.__assign) || function () {
    __assign$u = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$u.apply(this, arguments);
};

var __assign$t = (undefined && undefined.__assign) || function () {
    __assign$t = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$t.apply(this, arguments);
};

var __assign$s = (undefined && undefined.__assign) || function () {
    __assign$s = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$s.apply(this, arguments);
};

var __assign$r = (undefined && undefined.__assign) || function () {
    __assign$r = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$r.apply(this, arguments);
};

var __assign$q = (undefined && undefined.__assign) || function () {
    __assign$q = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$q.apply(this, arguments);
};

var __assign$p = (undefined && undefined.__assign) || function () {
    __assign$p = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$p.apply(this, arguments);
};

var __makeTemplateObject$2 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var len = 242.776657104492;
var time = 1.6;
var anim = Ue(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), len * 0.14, len, len * 0.11, len * 0.35, len, len * 0.35, len * 0.01, len, len * 0.99);
He.path(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject$2(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), len * 0.01, len, anim, time);
var templateObject_1$2, templateObject_2$2;

var __assign$o = (undefined && undefined.__assign) || function () {
    __assign$o = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$o.apply(this, arguments);
};

var __assign$n = (undefined && undefined.__assign) || function () {
    __assign$n = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$n.apply(this, arguments);
};
var MutatingDots = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 90 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 12.5 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.secondaryColor, secondaryColor = _f === void 0 ? DEFAULT_COLOR : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? 'mutating-dots-loading' : _g, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _h = _a.visible, visible = _h === void 0 ? true : _h;
    return (React__default["default"].createElement("div", __assign$n({ style: __assign$n(__assign$n({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "mutating-dots-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
        React__default["default"].createElement("svg", { id: "goo-loader", width: width, height: height, "data-testid": "mutating-dots-svg" },
            React__default["default"].createElement("filter", { id: "fancy-goo" },
                React__default["default"].createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "6", result: "blur" }),
                React__default["default"].createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", result: "goo" }),
                React__default["default"].createElement("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" })),
            React__default["default"].createElement("g", { filter: "url(#fancy-goo)" },
                React__default["default"].createElement("animateTransform", { id: "mainAnim", attributeName: "transform", attributeType: "XML", type: "rotate", from: "0 50 50", to: "359 50 50", dur: "1.2s", repeatCount: "indefinite" }),
                React__default["default"].createElement("circle", { cx: "50%", cy: "40", r: radius, fill: color },
                    React__default["default"].createElement("animate", { id: "cAnim1", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0;cAnim1.end+0.2s", calcMode: "spline", values: "40;20;40", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" })),
                React__default["default"].createElement("circle", { cx: "50%", cy: "60", r: radius, fill: secondaryColor },
                    React__default["default"].createElement("animate", { id: "cAnim2", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0.4s;cAnim2.end+0.2s", calcMode: "spline", values: "60;80;60", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" }))))));
};

var __assign$m = (undefined && undefined.__assign) || function () {
    __assign$m = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$m.apply(this, arguments);
};

var __assign$l = (undefined && undefined.__assign) || function () {
    __assign$l = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$l.apply(this, arguments);
};

var __assign$k = (undefined && undefined.__assign) || function () {
    __assign$k = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$k.apply(this, arguments);
};

var __assign$j = (undefined && undefined.__assign) || function () {
    __assign$j = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$j.apply(this, arguments);
};

var __assign$i = (undefined && undefined.__assign) || function () {
    __assign$i = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$i.apply(this, arguments);
};

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * import styled from "styled-components";
 * import { prop } from "styled-tools";
 *
 * const Button = styled.button`
 *   color: ${prop("color", "red")};
 * `;
 */
var prop = function prop(path, defaultValue) {
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (typeof props[path] !== "undefined") {
      return props[path];
    }

    if (path && path.indexOf(".") > 0) {
      var paths = path.split(".");
      var length = paths.length;
      var object = props[paths[0]];
      var index = 1;

      while (object != null && index < length) {
        object = object[paths[index]];
        index += 1;
      }

      if (typeof object !== "undefined") {
        return object;
      }
    }

    return defaultValue;
  };
};

var __makeTemplateObject$1 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign$h = (undefined && undefined.__assign) || function () {
    __assign$h = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$h.apply(this, arguments);
};
var spin = Ue(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
var POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
var Svg = He.svg(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject$1(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), spin, prop('speed', '0.75'));
var Polyline = He.polyline(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject$1(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), function (props) { return props.width; });
function RotatingLines(_a) {
    var _b = _a.strokeColor, strokeColor = _b === void 0 ? DEFAULT_COLOR : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? '5' : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? '0.75' : _d, _e = _a.width, width = _e === void 0 ? '96' : _e, _f = _a.visible, visible = _f === void 0 ? true : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? 'rotating-lines-loading' : _g;
    var lines = React.useCallback(function () {
        return POINTS.map(function (point) { return (React__default["default"].createElement(Polyline, { key: point, points: "24,12 24,4", width: strokeWidth, transform: "rotate(".concat(point, ", 24, 24)") })); });
    }, [strokeWidth]);
    return !visible ? null : (React__default["default"].createElement(Svg, __assign$h({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: width, stroke: strokeColor, speed: animationDuration, "data-testid": "rotating-lines-svg", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE), lines()));
}
var templateObject_1$1, templateObject_2$1, templateObject_3$1;

var __assign$g = (undefined && undefined.__assign) || function () {
    __assign$g = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$g.apply(this, arguments);
};

var __assign$f = (undefined && undefined.__assign) || function () {
    __assign$f = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$f.apply(this, arguments);
};

var __assign$e = (undefined && undefined.__assign) || function () {
    __assign$e = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$e.apply(this, arguments);
};

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign$d = (undefined && undefined.__assign) || function () {
    __assign$d = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$d.apply(this, arguments);
};
var dash = Ue(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
He.polygon(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), dash);
He.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

var __assign$c = (undefined && undefined.__assign) || function () {
    __assign$c = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$c.apply(this, arguments);
};

var __assign$b = (undefined && undefined.__assign) || function () {
    __assign$b = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$b.apply(this, arguments);
};

var __assign$a = (undefined && undefined.__assign) || function () {
    __assign$a = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$a.apply(this, arguments);
};

var __assign$9 = (undefined && undefined.__assign) || function () {
    __assign$9 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$9.apply(this, arguments);
};

var __assign$8 = (undefined && undefined.__assign) || function () {
    __assign$8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$8.apply(this, arguments);
};

var __assign$7 = (undefined && undefined.__assign) || function () {
    __assign$7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$7.apply(this, arguments);
};

var __assign$6 = (undefined && undefined.__assign) || function () {
    __assign$6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$6.apply(this, arguments);
};

var __assign$5 = (undefined && undefined.__assign) || function () {
    __assign$5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$5.apply(this, arguments);
};

var __assign$4 = (undefined && undefined.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};

var __assign$3 = (undefined && undefined.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

const Container$4 = He.div `
  outline: none;
  display: flex;
  margin: 4px 0;
  justify-content: center;
  img {
    max-width: 100%;
    user-select: none;
    vertical-align: bottom;
  }
`;
const Inner$2 = He.div `
  position: relative;
`;
const Loading$1 = He.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageResizer = He.div `
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 1;
  cursor: col-resize;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftImageResizer = He(ImageResizer) `
  left: 0;
`;
const RightImageResizer = He(ImageResizer) `
  right: 0;
`;
const ResizeHandler = He.div `
  pointer-events: none;
  transition: opacity 0.3s;
  opacity: ${({ opacity }) => opacity};
  border-radius: 20px;
  background: rgba(15, 15, 15, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.9);
  width: 6px;
  height: 48px;
  max-height: 50%;
`;
const Image$1 = React__namespace.memo((_a) => {
    var { blockId, contents, attributes: { thumbnail, original, width }, meta: { isUploading = false }, editor } = _a, props = __rest(_a, ["blockId", "contents", "attributes", "meta", "editor"]);
    const imageRef = React__namespace.useRef(null);
    const [displayResizer, setDisplayResizer] = React__namespace.useState(false);
    const [dragParams, setDragParams] = React__namespace.useState();
    const [imageWidth, setImageWidth] = React__namespace.useState(width !== null && width !== void 0 ? width : 'auto');
    const handleClick = React__namespace.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleMouseEnter = React__namespace.useCallback((e) => {
        setDisplayResizer(true);
    }, []);
    const handleMouseLeave = React__namespace.useCallback((e) => {
        setDisplayResizer(false);
    }, []);
    const handleMouseDown = React__namespace.useCallback((type) => (e) => {
        if (!imageRef.current)
            return;
        e.preventDefault();
        e.stopPropagation();
        const rect = imageRef.current.getBoundingClientRect();
        setDragParams({
            type,
            left: e.clientX,
            width: width !== null && width !== void 0 ? width : (rect.width < 100 ? 100 : rect.width),
        });
    }, []);
    React__namespace.useEffect(() => {
        setImageWidth(width !== null && width !== void 0 ? width : 'auto');
    }, [width]);
    React__namespace.useEffect(() => {
        if (!editor || !dragParams)
            return;
        const handleMouseMove = (e) => {
            if (!dragParams.type)
                return;
            let width = 0;
            if (dragParams.type === 'left') {
                if (e.clientX < dragParams.left) {
                    width = dragParams.width - (e.clientX - dragParams.left) * 2;
                }
                else {
                    width = dragParams.width + (dragParams.left - e.clientX) * 2;
                }
            }
            else if (dragParams.type === 'right') {
                if (e.clientX > dragParams.left) {
                    width = dragParams.width + (e.clientX - dragParams.left) * 2;
                }
                else {
                    width = dragParams.width - (dragParams.left - e.clientX) * 2;
                }
            }
            if (width < 100) {
                width = 100;
            }
            setImageWidth(width);
        };
        const handleMouseUp = (e) => {
            setDragParams(undefined);
            if (imageRef.current && typeof imageRef.current.width === 'number') {
                const currentBlock = editor.getBlock(blockId);
                if (!currentBlock)
                    return;
                editor.updateBlock(Object.assign(Object.assign({}, currentBlock), { attributes: Object.assign(Object.assign({}, currentBlock.attributes), { width: imageRef.current.width }) }));
                editor.render([blockId]);
            }
        };
        window.addEventListener('mousemove', handleMouseMove, true);
        window.addEventListener('mouseup', handleMouseUp, true);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove, true);
            window.removeEventListener('mouseup', handleMouseUp, true);
        };
    }, [dragParams]);
    return (jsxRuntime.exports.jsx(Container$4, Object.assign({}, props, { contentEditable: false, draggable: "false" }, { children: jsxRuntime.exports.jsxs(Inner$2, Object.assign({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, { children: [jsxRuntime.exports.jsx("img", { src: thumbnail, onClick: handleClick, ref: imageRef, width: imageWidth, draggable: "false" }), isUploading ? (jsxRuntime.exports.jsx(Loading$1, { children: jsxRuntime.exports.jsx(MutatingDots, { height: "100", width: "100", color: "#4fa94d", secondaryColor: "#4fa94d", radius: "12.5", ariaLabel: "mutating-dots-loading", visible: true }) })) : (jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx(LeftImageResizer, Object.assign({ onMouseDown: handleMouseDown('left') }, { children: jsxRuntime.exports.jsx(ResizeHandler, { opacity: displayResizer ? 1 : 0 }) })), jsxRuntime.exports.jsx(RightImageResizer, Object.assign({ onMouseDown: handleMouseDown('right') }, { children: jsxRuntime.exports.jsx(ResizeHandler, { opacity: displayResizer ? 1 : 0 }) }))] }))] })) })));
});

const BYTE_UNITS = [
	'B',
	'kB',
	'MB',
	'GB',
	'TB',
	'PB',
	'EB',
	'ZB',
	'YB',
];

const BIBYTE_UNITS = [
	'B',
	'kiB',
	'MiB',
	'GiB',
	'TiB',
	'PiB',
	'EiB',
	'ZiB',
	'YiB',
];

const BIT_UNITS = [
	'b',
	'kbit',
	'Mbit',
	'Gbit',
	'Tbit',
	'Pbit',
	'Ebit',
	'Zbit',
	'Ybit',
];

const BIBIT_UNITS = [
	'b',
	'kibit',
	'Mibit',
	'Gibit',
	'Tibit',
	'Pibit',
	'Eibit',
	'Zibit',
	'Yibit',
];

/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/
const toLocaleString = (number, locale, options) => {
	let result = number;
	if (typeof locale === 'string' || Array.isArray(locale)) {
		result = number.toLocaleString(locale, options);
	} else if (locale === true || options !== undefined) {
		result = number.toLocaleString(undefined, options);
	}

	return result;
};

function prettyBytes(number, options) {
	if (!Number.isFinite(number)) {
		throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
	}

	options = {
		bits: false,
		binary: false,
		...options,
	};

	const UNITS = options.bits
		? (options.binary ? BIBIT_UNITS : BIT_UNITS)
		: (options.binary ? BIBYTE_UNITS : BYTE_UNITS);

	if (options.signed && number === 0) {
		return ` 0 ${UNITS[0]}`;
	}

	const isNegative = number < 0;
	const prefix = isNegative ? '-' : (options.signed ? '+' : '');

	if (isNegative) {
		number = -number;
	}

	let localeOptions;

	if (options.minimumFractionDigits !== undefined) {
		localeOptions = {minimumFractionDigits: options.minimumFractionDigits};
	}

	if (options.maximumFractionDigits !== undefined) {
		localeOptions = {maximumFractionDigits: options.maximumFractionDigits, ...localeOptions};
	}

	if (number < 1) {
		const numberString = toLocaleString(number, options.locale, localeOptions);
		return prefix + numberString + ' ' + UNITS[0];
	}

	const exponent = Math.min(Math.floor(options.binary ? Math.log(number) / Math.log(1024) : Math.log10(number) / 3), UNITS.length - 1);
	number /= (options.binary ? 1024 : 1000) ** exponent;

	if (!localeOptions) {
		number = number.toPrecision(3);
	}

	const numberString = toLocaleString(Number(number), options.locale, localeOptions);

	const unit = UNITS[exponent];

	return prefix + numberString + ' ' + unit;
}

const Container$3 = He.div `
  outline: none;
  display: flex;
  padding: 0 12px;
  background: #eee;
  border-radius: 8px;
  margin: 4px 12px;
`;
const IconContainer = He.div `
  display: flex;
  flex-shrink: 0;
  width: 50px;
  justify-content: center;
  align-items: center;
`;
const Inner$1 = He.div `
  flex-shrink: 1;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;
He.div `
  display: flex;
  flex-shrink: 0;
  width: 50px;
`;
const FileName = He.div `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Size = He.div `
  font-size: 12px;
  color: #999;
  display: flex;
`;
const Loading = He.div `
  margin-left: 8px;
`;
const File = React__namespace.memo((_a) => {
    var { blockId, contents, attributes: { fileName, original, size }, meta: { isUploading = false }, editor } = _a, props = __rest(_a, ["blockId", "contents", "attributes", "meta", "editor"]);
    const imageRef = React__namespace.useRef(null);
    React__namespace.useCallback((e) => { }, []);
    React__namespace.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    return (jsxRuntime.exports.jsxs(Container$3, Object.assign({ ref: imageRef }, props, { contentEditable: false }, { children: [jsxRuntime.exports.jsx(IconContainer, { children: jsxRuntime.exports.jsxs("svg", Object.assign({ width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.exports.jsx("path", { d: "M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19", stroke: "#666666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.exports.jsx("path", { d: "M12 11V17M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z", stroke: "#666666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.exports.jsx("path", { d: "M9.5 13.5L12 11L14.5 13.5", stroke: "#666666", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) }), jsxRuntime.exports.jsxs(Inner$1, { children: [jsxRuntime.exports.jsx(FileName, { children: fileName }), jsxRuntime.exports.jsxs(Size, { children: [prettyBytes(size), isUploading && (jsxRuntime.exports.jsx(Loading, { children: jsxRuntime.exports.jsx(RotatingLines, { strokeColor: "grey", strokeWidth: "5", animationDuration: "0.75", width: "18", visible: true }) }))] })] }), jsxRuntime.exports.jsx(IconContainer, {})] })));
});

/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var twemoji=function(){var twemoji={base:"https://twemoji.maxcdn.com/v/14.0.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,false),this);}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D=String.fromCharCode(8205),rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return "".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(nodeType===3){allText.push(subnode);}else if(nodeType===1&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText);}}return allText}function grabTheRightIcon(rawText){return toCodePoint(rawText.indexOf(U200D)<0?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=false;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),true));}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname]);}}img.className=options.className;img.alt=rawText;img.src=src;modified=true;fragment.appendChild(img);}if(!img)fragment.appendChild(createText(rawText,false));img=null;}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),true));}subnode.parentNode.replaceChild(fragment,subnode);}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat('class="',options.className,'" ','draggable="false" ','alt="',rawText,'"',' src="',src,'"');attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&ret.indexOf(" "+attrname+"=")===-1){ret=ret.concat(" ",attrname,'="',escapeHTML(attrib[attrname]),'"');}}ret=ret.concat("/>");}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return typeof value==="number"?value+"x"+value:value}function fromCodePoint(codepoint){var code=typeof codepoint==="string"?parseInt(codepoint,16):codepoint;if(code<65536){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(code&1023))}function parse(what,how){if(!how||typeof how==="function"){how={callback:how};}return (typeof what==="string"?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:typeof how.attributes==="function"?how.attributes:returnNull,base:typeof how.base==="string"?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return String(text).replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0;}else if(55296<=c&&c<=56319){p=c;}else {r.push(c.toString(16));}}return r.join(sep||"-")}}();

const Text$1 = He.span `
  &::selection {
    background: rgba(46, 170, 220, 0.2);
  }
  img.emoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
    &::selection {
      background: rgba(46, 170, 220, 0.2);
    }
  }
  ${({ attributes, formats }) => {
    return Object.keys(attributes).map((key) => {
        const styleFormat = `inline/style/${key}`;
        if (attributes[key] && formats[styleFormat]) {
            return formats[styleFormat](attributes[key]);
        }
        return;
    });
}}
`;
const Link$2 = He.a `
  ${({ attributes, formats }) => {
    return Object.keys(attributes).map((key) => {
        const styleFormat = `inline/style/${key}`;
        if (attributes[key] && formats[styleFormat]) {
            return formats[styleFormat](attributes[key]);
        }
        return;
    });
}}
`;
const InlineText = (_a) => {
    var { inline, formats, editor, scrollContainer } = _a, props = __rest(_a, ["inline", "formats", "editor", "scrollContainer"]);
    const memoInnerHTML = React__namespace.useMemo(() => {
        const text = inline.text.replaceAll('\n', '<br>');
        return {
            __html: twemoji.parse(text, {
                folder: 'svg',
                ext: '.svg',
            }),
        };
    }, [inline]);
    const handleClickLink = () => {
        const caretPosition = editor.getCaretPosition();
        const eventEmitter = editor.getEventEmitter();
        eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
            mode: 'openPreview',
            inline,
            caretPosition,
        });
    };
    return (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: inline.attributes['link'] ? (jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsx(Link$2, Object.assign({ href: inline.attributes['link'], target: "_blank", dangerouslySetInnerHTML: memoInnerHTML, formats: formats, attributes: inline.attributes, onClick: handleClickLink }, props)) })) : (jsxRuntime.exports.jsx(Text$1, Object.assign({ dangerouslySetInnerHTML: memoInnerHTML, formats: formats, attributes: inline.attributes }, props))) }));
};

const Bold = () => Ce `
  font-weight: bold;
`;

const Underline = () => Ce `
  border-bottom: 0.05em solid;
`;

const Strike = () => Ce `
  text-decoration: line-through;
`;

const InlineCode = () => Ce `
  background: rgba(135, 131, 120, 0.15);
  color: #eb5757;
  border-radius: 3px;
  font-size: 85%;
  padding: 0.2em 0.4em;
`;

const Italic = () => Ce `
  transform: skewX(-20deg);
  display: inline-block;
`;

const Color = (color) => Ce `
  ${color && `color: ${color};`}
`;

const Link$1 = () => Ce `
  cursor: pointer;
`;

const Container$2 = He.div `
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
`;
const Button$2 = He.a `
  margin: 8px;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 4px;
`;
const GlobalToolbar = React__namespace.memo((_a) => {
    var { editor } = _a, props = __rest(_a, ["editor"]);
    const [formats, setFormats] = React__namespace.useState({});
    const [isDisplay, setDisplay] = React__namespace.useState(false);
    const handleHeader1 = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('HEADER1');
    }, [formats]);
    const handleBlockquote = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('BLOCKQUOTE');
    }, [formats]);
    const handleOrderedList = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('ORDEREDLIST');
    }, [formats]);
    const handleBulletList = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('BULLETLIST');
    }, [formats]);
    React__namespace.useEffect(() => {
        const subs = new Subscription();
        const eventEmitter = editor.getEventEmitter();
        subs.add(eventEmitter.select(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
            const caret = editor.getCaretPosition();
            if (!caret || !editor.hasFocus()) {
                setDisplay(false);
                return;
            }
            setDisplay(true);
            setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
        }));
        return () => {
            subs.unsubscribe();
        };
    });
    return ReactDOM__default["default"].createPortal(jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: isDisplay && (jsxRuntime.exports.jsxs(Container$2, Object.assign({}, props, { children: [jsxRuntime.exports.jsx(Button$2, Object.assign({ href: "#", onClick: handleHeader1 }, { children: "H1" })), jsxRuntime.exports.jsx(Button$2, Object.assign({ href: "#", onClick: handleBlockquote }, { children: "\u5F15\u7528" })), jsxRuntime.exports.jsx(Button$2, Object.assign({ href: "#", onClick: handleOrderedList }, { children: "\u756A\u53F7\u30EA\u30B9\u30C8" })), jsxRuntime.exports.jsx(Button$2, Object.assign({ href: "#", onClick: handleBulletList }, { children: "\u30EA\u30B9\u30C8" }))] }))) }), document.body);
});

function getScrollContainer(scrollContainer) {
    if (!scrollContainer) {
        return null;
    }
    if (typeof scrollContainer === 'string') {
        return document.querySelector(scrollContainer);
    }
    return scrollContainer !== null && scrollContainer !== void 0 ? scrollContainer : null;
}

const Container$1 = He.div `
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  transform: translateY(-100%);
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
const Button$1 = He.a `
  display: inline-block;
  padding: 2px 8px;
  text-decoration: none;
  border-radius: 8px;
  margin: 0 4px;
  ${({ active }) => active && 'background-color: #e3def3'};
  &:hover {
    background-color: #e3def3;
  }
`;
const BubbleToolbar = React__namespace.memo((_a) => {
    var _b, _c, _d;
    var { editor, scrollContainer } = _a, props = __rest(_a, ["editor", "scrollContainer"]);
    const [formats, setFormats] = React__namespace.useState({});
    const [position, setPosition] = React__namespace.useState();
    const [blockType, setBlockType] = React__namespace.useState();
    const [collapsed, setCollapsed] = React__namespace.useState(true);
    const [currentCaretPosition, setCurrentCaretPosition] = React__namespace.useState();
    const handleBold = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ bold: !(formats === null || formats === void 0 ? void 0 : formats.bold) });
    }, [formats]);
    const handleUnderline = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ underline: !(formats === null || formats === void 0 ? void 0 : formats.underline) });
    }, [formats]);
    const handleStrike = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ strike: !(formats === null || formats === void 0 ? void 0 : formats.strike) });
    }, [formats]);
    const handleLink = React__namespace.useCallback((event) => {
        event.preventDefault();
        const eventEmitter = editor.getEventEmitter();
        eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
            mode: 'openEnterLink',
            caretPosition: currentCaretPosition,
        });
    }, [formats, currentCaretPosition]);
    const handleInlineCode = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ code: !(formats === null || formats === void 0 ? void 0 : formats.code) });
    }, [formats]);
    const handleHeader1 = React__namespace.useCallback((event) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('HEADER1');
    }, [formats]);
    const handleColor = React__namespace.useCallback((event) => {
        event.preventDefault();
        if (formats === null || formats === void 0 ? void 0 : formats.color) {
            editor.getModule('toolbar').formatInline({ color: false });
        }
        else {
            editor.getModule('toolbar').formatInline({ color: 'red' });
        }
    }, [formats]);
    React__namespace.useEffect(() => {
        const subs = new Subscription();
        const eventEmitter = editor.getEventEmitter();
        subs.add(eventEmitter.select(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
            var _a, _b, _c, _d;
            const caret = editor.getCaretPosition();
            const blockLength = (_b = editor.getBlockLength((_a = caret === null || caret === void 0 ? void 0 : caret.blockId) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : 0;
            if (!caret || !editor.hasFocus() || blockLength < 1) {
                setPosition(undefined);
                setCollapsed(true);
                return;
            }
            const container = getScrollContainer(scrollContainer);
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const top = ((_c = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _c !== void 0 ? _c : 0) + caret.rect.top - containerRect.top;
                const left = caret.rect.left - containerRect.left;
                setPosition({ top, left });
            }
            else {
                const scrollEl = document.scrollingElement;
                const top = scrollEl.scrollTop + caret.rect.top;
                const left = caret.rect.left;
                setPosition({ top, left });
            }
            setCollapsed(caret.collapsed);
            setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
            setBlockType((_d = editor.getBlock(caret.blockId)) === null || _d === void 0 ? void 0 : _d.type);
        }));
        return () => {
            subs.unsubscribe();
        };
    }, [editor, scrollContainer]);
    return ReactDOM__default["default"].createPortal(jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: !collapsed && (jsxRuntime.exports.jsxs(Container$1, Object.assign({ top: (_b = position === null || position === void 0 ? void 0 : position.top) !== null && _b !== void 0 ? _b : 0, left: (_c = position === null || position === void 0 ? void 0 : position.left) !== null && _c !== void 0 ? _c : 0 }, props, { children: [jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleHeader1, active: blockType === 'HEADER1' }, { children: "H1" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleBold, active: !!(formats === null || formats === void 0 ? void 0 : formats.bold) }, { children: "B" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleUnderline, active: !!(formats === null || formats === void 0 ? void 0 : formats.underline) }, { children: "U" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleStrike, active: !!(formats === null || formats === void 0 ? void 0 : formats.strike) }, { children: "S" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleInlineCode, active: !!(formats === null || formats === void 0 ? void 0 : formats.code) }, { children: "code" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleColor, active: !!(formats === null || formats === void 0 ? void 0 : formats.color) }, { children: "color" })), jsxRuntime.exports.jsx(Button$1, Object.assign({ href: "#", onClick: handleLink, active: !!(formats === null || formats === void 0 ? void 0 : formats.link) }, { children: "L" }))] }))) }), (_d = getScrollContainer(scrollContainer)) !== null && _d !== void 0 ? _d : document.body);
});

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

var diffMatchPatch = {exports: {}};

/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (module) {
	/**
	 * @fileoverview Computes the difference between two texts to create a patch.
	 * Applies the patch onto another text, allowing for errors.
	 * @author fraser@google.com (Neil Fraser)
	 */

	/**
	 * Class containing the diff, match and patch methods.
	 * @constructor
	 */
	var diff_match_patch = function() {

	  // Defaults.
	  // Redefine these in your program to override the defaults.

	  // Number of seconds to map a diff before giving up (0 for infinity).
	  this.Diff_Timeout = 1.0;
	  // Cost of an empty edit operation in terms of edit characters.
	  this.Diff_EditCost = 4;
	  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
	  this.Match_Threshold = 0.5;
	  // How far to search for a match (0 = exact location, 1000+ = broad match).
	  // A match this many characters away from the expected location will add
	  // 1.0 to the score (0.0 is a perfect match).
	  this.Match_Distance = 1000;
	  // When deleting a large block of text (over ~64 characters), how close do
	  // the contents have to be to match the expected contents. (0.0 = perfection,
	  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
	  // end points of a delete need to match.
	  this.Patch_DeleteThreshold = 0.5;
	  // Chunk size for context length.
	  this.Patch_Margin = 4;

	  // The number of bits in an int.
	  this.Match_MaxBits = 32;
	};


	//  DIFF FUNCTIONS


	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;

	/**
	 * Class representing one diff tuple.
	 * ~Attempts to look like a two-element array (which is what this used to be).~
	 * Constructor returns an actual two-element array, to allow destructing @JackuB
	 * See https://github.com/JackuB/diff-match-patch/issues/14 for details
	 * @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
	 * @param {string} text Text to be deleted, inserted, or retained.
	 * @constructor
	 */
	diff_match_patch.Diff = function(op, text) {
	  return [op, text];
	};

	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
	 *     then don't run a line-level diff first to identify the changed areas.
	 *     Defaults to true, which does a faster, slightly less optimal diff.
	 * @param {number=} opt_deadline Optional time when the diff should be complete
	 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
	 *     instead.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
	    opt_deadline) {
	  // Set a deadline by which time the diff must be complete.
	  if (typeof opt_deadline == 'undefined') {
	    if (this.Diff_Timeout <= 0) {
	      opt_deadline = Number.MAX_VALUE;
	    } else {
	      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
	    }
	  }
	  var deadline = opt_deadline;

	  // Check for null inputs.
	  if (text1 == null || text2 == null) {
	    throw new Error('Null input. (diff_main)');
	  }

	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [new diff_match_patch.Diff(DIFF_EQUAL, text1)];
	    }
	    return [];
	  }

	  if (typeof opt_checklines == 'undefined') {
	    opt_checklines = true;
	  }
	  var checklines = opt_checklines;

	  // Trim off common prefix (speedup).
	  var commonlength = this.diff_commonPrefix(text1, text2);
	  var commonprefix = text1.substring(0, commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);

	  // Trim off common suffix (speedup).
	  commonlength = this.diff_commonSuffix(text1, text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0, text1.length - commonlength);
	  text2 = text2.substring(0, text2.length - commonlength);

	  // Compute the diff on the middle block.
	  var diffs = this.diff_compute_(text1, text2, checklines, deadline);

	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, commonprefix));
	  }
	  if (commonsuffix) {
	    diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, commonsuffix));
	  }
	  this.diff_cleanupMerge(diffs);
	  return diffs;
	};


	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean} checklines Speedup flag.  If false, then don't run a
	 *     line-level diff first to identify the changed areas.
	 *     If true, then run a faster, slightly less optimal diff.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
	    deadline) {
	  var diffs;

	  if (!text1) {
	    // Just add some text (speedup).
	    return [new diff_match_patch.Diff(DIFF_INSERT, text2)];
	  }

	  if (!text2) {
	    // Just delete some text (speedup).
	    return [new diff_match_patch.Diff(DIFF_DELETE, text1)];
	  }

	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [new diff_match_patch.Diff(DIFF_INSERT, longtext.substring(0, i)),
	             new diff_match_patch.Diff(DIFF_EQUAL, shorttext),
	             new diff_match_patch.Diff(DIFF_INSERT,
	                 longtext.substring(i + shorttext.length))];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }

	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedup, the character can't be an equality.
	    return [new diff_match_patch.Diff(DIFF_DELETE, text1),
	            new diff_match_patch.Diff(DIFF_INSERT, text2)];
	  }

	  // Check to see if the problem can be split in two.
	  var hm = this.diff_halfMatch_(text1, text2);
	  if (hm) {
	    // A half-match was found, sort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
	    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
	    // Merge the results.
	    return diffs_a.concat([new diff_match_patch.Diff(DIFF_EQUAL, mid_common)],
	                          diffs_b);
	  }

	  if (checklines && text1.length > 100 && text2.length > 100) {
	    return this.diff_lineMode_(text1, text2, deadline);
	  }

	  return this.diff_bisect_(text1, text2, deadline);
	};


	/**
	 * Do a quick line-level diff on both strings, then rediff the parts for
	 * greater accuracy.
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
	  // Scan the text on a line-by-line basis first.
	  var a = this.diff_linesToChars_(text1, text2);
	  text1 = a.chars1;
	  text2 = a.chars2;
	  var linearray = a.lineArray;

	  var diffs = this.diff_main(text1, text2, false, deadline);

	  // Convert the diff back to original text.
	  this.diff_charsToLines_(diffs, linearray);
	  // Eliminate freak matches (e.g. blank lines)
	  this.diff_cleanupSemantic(diffs);

	  // Rediff any replacement blocks, this time character-by-character.
	  // Add a dummy entry at the end.
	  diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ''));
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete >= 1 && count_insert >= 1) {
	          // Delete the offending records and add the merged ones.
	          diffs.splice(pointer - count_delete - count_insert,
	                       count_delete + count_insert);
	          pointer = pointer - count_delete - count_insert;
	          var subDiff =
	              this.diff_main(text_delete, text_insert, false, deadline);
	          for (var j = subDiff.length - 1; j >= 0; j--) {
	            diffs.splice(pointer, 0, subDiff[j]);
	          }
	          pointer = pointer + subDiff.length;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	    pointer++;
	  }
	  diffs.pop();  // Remove the dummy entry at the end.

	  return diffs;
	};


	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is odd, then the front path will collide
	  // with the reverse path.
	  var front = (delta % 2 != 0);
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Bail out if deadline is reached.
	    if ((new Date()).getTime() > deadline) {
	      break;
	    }

	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length &&
	             text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }

	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length &&
	             text1.charAt(text1_length - x2 - 1) ==
	             text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of characters, no commonality at all.
	  return [new diff_match_patch.Diff(DIFF_DELETE, text1),
	          new diff_match_patch.Diff(DIFF_INSERT, text2)];
	};


	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
	    deadline) {
	  var text1a = text1.substring(0, x);
	  var text2a = text2.substring(0, y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);

	  // Compute both diffs serially.
	  var diffs = this.diff_main(text1a, text2a, false, deadline);
	  var diffsb = this.diff_main(text1b, text2b, false, deadline);

	  return diffs.concat(diffsb);
	};


	/**
	 * Split two texts into an array of strings.  Reduce the texts to a string of
	 * hashes where each Unicode character represents one line.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
	 *     An object containing the encoded text1, the encoded text2 and
	 *     the array of unique strings.
	 *     The zeroth element of the array of unique strings is intentionally blank.
	 * @private
	 */
	diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
	  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
	  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

	  // '\x00' is a valid character, but various debuggers don't like it.
	  // So we'll insert a junk entry to avoid generating a null character.
	  lineArray[0] = '';

	  /**
	   * Split a text into an array of strings.  Reduce the texts to a string of
	   * hashes where each Unicode character represents one line.
	   * Modifies linearray and linehash through being a closure.
	   * @param {string} text String to encode.
	   * @return {string} Encoded string.
	   * @private
	   */
	  function diff_linesToCharsMunge_(text) {
	    var chars = '';
	    // Walk the text, pulling out a substring for each line.
	    // text.split('\n') would would temporarily double our memory footprint.
	    // Modifying text would create many large strings to garbage collect.
	    var lineStart = 0;
	    var lineEnd = -1;
	    // Keeping our own length variable is faster than looking it up.
	    var lineArrayLength = lineArray.length;
	    while (lineEnd < text.length - 1) {
	      lineEnd = text.indexOf('\n', lineStart);
	      if (lineEnd == -1) {
	        lineEnd = text.length - 1;
	      }
	      var line = text.substring(lineStart, lineEnd + 1);

	      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
	          (lineHash[line] !== undefined)) {
	        chars += String.fromCharCode(lineHash[line]);
	      } else {
	        if (lineArrayLength == maxLines) {
	          // Bail out at 65535 because
	          // String.fromCharCode(65536) == String.fromCharCode(0)
	          line = text.substring(lineStart);
	          lineEnd = text.length;
	        }
	        chars += String.fromCharCode(lineArrayLength);
	        lineHash[line] = lineArrayLength;
	        lineArray[lineArrayLength++] = line;
	      }
	      lineStart = lineEnd + 1;
	    }
	    return chars;
	  }
	  // Allocate 2/3rds of the space for text1, the rest for text2.
	  var maxLines = 40000;
	  var chars1 = diff_linesToCharsMunge_(text1);
	  maxLines = 65535;
	  var chars2 = diff_linesToCharsMunge_(text2);
	  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
	};


	/**
	 * Rehydrate the text in a diff from a string of line hashes to real lines of
	 * text.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {!Array.<string>} lineArray Array of unique strings.
	 * @private
	 */
	diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
	  for (var i = 0; i < diffs.length; i++) {
	    var chars = diffs[i][1];
	    var text = [];
	    for (var j = 0; j < chars.length; j++) {
	      text[j] = lineArray[chars.charCodeAt(j)];
	    }
	    diffs[i][1] = text.join('');
	  }
	};


	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: https://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstart, pointermid) ==
	        text2.substring(pointerstart, pointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 ||
	      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: https://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
	        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Determine if the suffix of one string is the prefix of another.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of the first
	 *     string and the start of the second string.
	 * @private
	 */
	diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  // Eliminate the null case.
	  if (text1_length == 0 || text2_length == 0) {
	    return 0;
	  }
	  // Truncate the longer string.
	  if (text1_length > text2_length) {
	    text1 = text1.substring(text1_length - text2_length);
	  } else if (text1_length < text2_length) {
	    text2 = text2.substring(0, text1_length);
	  }
	  var text_length = Math.min(text1_length, text2_length);
	  // Quick check for the worst case.
	  if (text1 == text2) {
	    return text_length;
	  }

	  // Start by looking for a single character match
	  // and increase length until no match is found.
	  // Performance analysis: https://neil.fraser.name/news/2010/11/04/
	  var best = 0;
	  var length = 1;
	  while (true) {
	    var pattern = text1.substring(text_length - length);
	    var found = text2.indexOf(pattern);
	    if (found == -1) {
	      return best;
	    }
	    length += found;
	    if (found == 0 || text1.substring(text_length - length) ==
	        text2.substring(0, length)) {
	      best = length;
	      length++;
	    }
	  }
	};


	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 * @private
	 */
	diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
	  if (this.Diff_Timeout <= 0) {
	    // Don't risk returning a non-optimal diff if we have unlimited time.
	    return null;
	  }
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null;  // Pointless.
	  }
	  var dmp = this;  // 'this' becomes 'window' in a closure.

	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closure, but does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtext, shorttext, i) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
	    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
	      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
	                                               shorttext.substring(j));
	      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
	                                               shorttext.substring(0, j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLength, j) +
	            shorttext.substring(j, j + prefixLength);
	        best_longtext_a = longtext.substring(0, i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0, j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_a, best_longtext_b,
	              best_shorttext_a, best_shorttext_b, best_common];
	    } else {
	      return null;
	    }
	  }

	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }

	  // A half-match was found, sort out the return data.
	  var text1_a, text1_b, text2_a, text2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_a, text1_b, text2_a, text2_b, mid_common];
	};


	/**
	 * Reduce the number of edits by eliminating semantically trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastEquality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Number of characters that changed prior to the equality.
	  var length_insertions1 = 0;
	  var length_deletions1 = 0;
	  // Number of characters that changed after the equality.
	  var length_insertions2 = 0;
	  var length_deletions2 = 0;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      equalities[equalitiesLength++] = pointer;
	      length_insertions1 = length_insertions2;
	      length_deletions1 = length_deletions2;
	      length_insertions2 = 0;
	      length_deletions2 = 0;
	      lastEquality = diffs[pointer][1];
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_INSERT) {
	        length_insertions2 += diffs[pointer][1].length;
	      } else {
	        length_deletions2 += diffs[pointer][1].length;
	      }
	      // Eliminate an equality that is smaller or equal to the edits on both
	      // sides of it.
	      if (lastEquality && (lastEquality.length <=
	          Math.max(length_insertions1, length_deletions1)) &&
	          (lastEquality.length <= Math.max(length_insertions2,
	                                           length_deletions2))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     new diff_match_patch.Diff(DIFF_DELETE, lastEquality));
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        // Throw away the equality we just deleted.
	        equalitiesLength--;
	        // Throw away the previous equality (it needs to be reevaluated).
	        equalitiesLength--;
	        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
	        length_insertions1 = 0;  // Reset the counters.
	        length_deletions1 = 0;
	        length_insertions2 = 0;
	        length_deletions2 = 0;
	        lastEquality = null;
	        changes = true;
	      }
	    }
	    pointer++;
	  }

	  // Normalize the diff.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	  this.diff_cleanupSemanticLossless(diffs);

	  // Find any overlaps between deletions and insertions.
	  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
	  //   -> <del>abc</del>xxx<ins>def</ins>
	  // e.g: <del>xxxabc</del><ins>defxxx</ins>
	  //   -> <ins>def</ins>xxx<del>abc</del>
	  // Only extract an overlap if it is as big as the edit ahead or behind it.
	  pointer = 1;
	  while (pointer < diffs.length) {
	    if (diffs[pointer - 1][0] == DIFF_DELETE &&
	        diffs[pointer][0] == DIFF_INSERT) {
	      var deletion = diffs[pointer - 1][1];
	      var insertion = diffs[pointer][1];
	      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
	      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
	      if (overlap_length1 >= overlap_length2) {
	        if (overlap_length1 >= deletion.length / 2 ||
	            overlap_length1 >= insertion.length / 2) {
	          // Overlap found.  Insert an equality and trim the surrounding edits.
	          diffs.splice(pointer, 0, new diff_match_patch.Diff(DIFF_EQUAL,
	              insertion.substring(0, overlap_length1)));
	          diffs[pointer - 1][1] =
	              deletion.substring(0, deletion.length - overlap_length1);
	          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
	          pointer++;
	        }
	      } else {
	        if (overlap_length2 >= deletion.length / 2 ||
	            overlap_length2 >= insertion.length / 2) {
	          // Reverse overlap found.
	          // Insert an equality and swap and trim the surrounding edits.
	          diffs.splice(pointer, 0, new diff_match_patch.Diff(DIFF_EQUAL,
	              deletion.substring(0, overlap_length2)));
	          diffs[pointer - 1][0] = DIFF_INSERT;
	          diffs[pointer - 1][1] =
	              insertion.substring(0, insertion.length - overlap_length2);
	          diffs[pointer + 1][0] = DIFF_DELETE;
	          diffs[pointer + 1][1] =
	              deletion.substring(overlap_length2);
	          pointer++;
	        }
	      }
	      pointer++;
	    }
	    pointer++;
	  }
	};


	/**
	 * Look for single edits surrounded on both sides by equalities
	 * which can be shifted sideways to align the edit to a word boundary.
	 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
	  /**
	   * Given two strings, compute a score representing whether the internal
	   * boundary falls on logical boundaries.
	   * Scores range from 6 (best) to 0 (worst).
	   * Closure, but does not reference any external variables.
	   * @param {string} one First string.
	   * @param {string} two Second string.
	   * @return {number} The score.
	   * @private
	   */
	  function diff_cleanupSemanticScore_(one, two) {
	    if (!one || !two) {
	      // Edges are the best.
	      return 6;
	    }

	    // Each port of this function behaves slightly differently due to
	    // subtle differences in each language's definition of things like
	    // 'whitespace'.  Since this function's purpose is largely cosmetic,
	    // the choice has been made to use each language's native features
	    // rather than force total conformity.
	    var char1 = one.charAt(one.length - 1);
	    var char2 = two.charAt(0);
	    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
	    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
	    var whitespace1 = nonAlphaNumeric1 &&
	        char1.match(diff_match_patch.whitespaceRegex_);
	    var whitespace2 = nonAlphaNumeric2 &&
	        char2.match(diff_match_patch.whitespaceRegex_);
	    var lineBreak1 = whitespace1 &&
	        char1.match(diff_match_patch.linebreakRegex_);
	    var lineBreak2 = whitespace2 &&
	        char2.match(diff_match_patch.linebreakRegex_);
	    var blankLine1 = lineBreak1 &&
	        one.match(diff_match_patch.blanklineEndRegex_);
	    var blankLine2 = lineBreak2 &&
	        two.match(diff_match_patch.blanklineStartRegex_);

	    if (blankLine1 || blankLine2) {
	      // Five points for blank lines.
	      return 5;
	    } else if (lineBreak1 || lineBreak2) {
	      // Four points for line breaks.
	      return 4;
	    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
	      // Three points for end of sentences.
	      return 3;
	    } else if (whitespace1 || whitespace2) {
	      // Two points for whitespace.
	      return 2;
	    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
	      // One point for non-alphanumeric.
	      return 1;
	    }
	    return 0;
	  }

	  var pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      var equality1 = diffs[pointer - 1][1];
	      var edit = diffs[pointer][1];
	      var equality2 = diffs[pointer + 1][1];

	      // First, shift the edit as far left as possible.
	      var commonOffset = this.diff_commonSuffix(equality1, edit);
	      if (commonOffset) {
	        var commonString = edit.substring(edit.length - commonOffset);
	        equality1 = equality1.substring(0, equality1.length - commonOffset);
	        edit = commonString + edit.substring(0, edit.length - commonOffset);
	        equality2 = commonString + equality2;
	      }

	      // Second, step character by character right, looking for the best fit.
	      var bestEquality1 = equality1;
	      var bestEdit = edit;
	      var bestEquality2 = equality2;
	      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
	          diff_cleanupSemanticScore_(edit, equality2);
	      while (edit.charAt(0) === equality2.charAt(0)) {
	        equality1 += edit.charAt(0);
	        edit = edit.substring(1) + equality2.charAt(0);
	        equality2 = equality2.substring(1);
	        var score = diff_cleanupSemanticScore_(equality1, edit) +
	            diff_cleanupSemanticScore_(edit, equality2);
	        // The >= encourages trailing rather than leading whitespace on edits.
	        if (score >= bestScore) {
	          bestScore = score;
	          bestEquality1 = equality1;
	          bestEdit = edit;
	          bestEquality2 = equality2;
	        }
	      }

	      if (diffs[pointer - 1][1] != bestEquality1) {
	        // We have an improvement, save it back to the diff.
	        if (bestEquality1) {
	          diffs[pointer - 1][1] = bestEquality1;
	        } else {
	          diffs.splice(pointer - 1, 1);
	          pointer--;
	        }
	        diffs[pointer][1] = bestEdit;
	        if (bestEquality2) {
	          diffs[pointer + 1][1] = bestEquality2;
	        } else {
	          diffs.splice(pointer + 1, 1);
	          pointer--;
	        }
	      }
	    }
	    pointer++;
	  }
	};

	// Define some regex patterns for matching boundaries.
	diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
	diff_match_patch.whitespaceRegex_ = /\s/;
	diff_match_patch.linebreakRegex_ = /[\r\n]/;
	diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
	diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;

	/**
	 * Reduce the number of edits by eliminating operationally trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastEquality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Is there an insertion operation before the last equality.
	  var pre_ins = false;
	  // Is there a deletion operation before the last equality.
	  var pre_del = false;
	  // Is there an insertion operation after the last equality.
	  var post_ins = false;
	  // Is there a deletion operation after the last equality.
	  var post_del = false;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      if (diffs[pointer][1].length < this.Diff_EditCost &&
	          (post_ins || post_del)) {
	        // Candidate found.
	        equalities[equalitiesLength++] = pointer;
	        pre_ins = post_ins;
	        pre_del = post_del;
	        lastEquality = diffs[pointer][1];
	      } else {
	        // Not a candidate, and can never become one.
	        equalitiesLength = 0;
	        lastEquality = null;
	      }
	      post_ins = post_del = false;
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_DELETE) {
	        post_del = true;
	      } else {
	        post_ins = true;
	      }
	      /*
	       * Five types to be split:
	       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
	       * <ins>A</ins>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<ins>C</ins>
	       * <ins>A</del>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<del>C</del>
	       */
	      if (lastEquality && ((pre_ins && pre_del && post_ins && post_del) ||
	                           ((lastEquality.length < this.Diff_EditCost / 2) &&
	                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     new diff_match_patch.Diff(DIFF_DELETE, lastEquality));
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        equalitiesLength--;  // Throw away the equality we just deleted;
	        lastEquality = null;
	        if (pre_ins && pre_del) {
	          // No changes made which could affect previous entry, keep going.
	          post_ins = post_del = true;
	          equalitiesLength = 0;
	        } else {
	          equalitiesLength--;  // Throw away the previous equality.
	          pointer = equalitiesLength > 0 ?
	              equalities[equalitiesLength - 1] : -1;
	          post_ins = post_del = false;
	        }
	        changes = true;
	      }
	    }
	    pointer++;
	  }

	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};


	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
	  // Add a dummy entry at the end.
	  diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ''));
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = this.diff_commonPrefix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              if ((pointer - count_delete - count_insert) > 0 &&
	                  diffs[pointer - count_delete - count_insert - 1][0] ==
	                  DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] +=
	                    text_insert.substring(0, commonlength);
	              } else {
	                diffs.splice(0, 0, new diff_match_patch.Diff(DIFF_EQUAL,
	                    text_insert.substring(0, commonlength)));
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = this.diff_commonSuffix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length -
	                  commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0, text_insert.length -
	                  commonlength);
	              text_delete = text_delete.substring(0, text_delete.length -
	                  commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          pointer -= count_delete + count_insert;
	          diffs.splice(pointer, count_delete + count_insert);
	          if (text_delete.length) {
	            diffs.splice(pointer, 0,
	                new diff_match_patch.Diff(DIFF_DELETE, text_delete));
	            pointer++;
	          }
	          if (text_insert.length) {
	            diffs.splice(pointer, 0,
	                new diff_match_patch.Diff(DIFF_INSERT, text_insert));
	            pointer++;
	          }
	          pointer++;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer, 1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop();  // Remove the dummy entry at the end.
	  }

	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length -
	          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] +
	            diffs[pointer][1].substring(0, diffs[pointer][1].length -
	                                        diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 1, 1);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
	          diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] =
	            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
	            diffs[pointer + 1][1];
	        diffs.splice(pointer + 1, 1);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were made, the diff needs reordering and another shift sweep.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};


	/**
	 * loc is a location in text1, compute and return the equivalent location in
	 * text2.
	 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {number} loc Location within text1.
	 * @return {number} Location within text2.
	 */
	diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
	  var chars1 = 0;
	  var chars2 = 0;
	  var last_chars1 = 0;
	  var last_chars2 = 0;
	  var x;
	  for (x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
	      chars1 += diffs[x][1].length;
	    }
	    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
	      chars2 += diffs[x][1].length;
	    }
	    if (chars1 > loc) {  // Overshot the location.
	      break;
	    }
	    last_chars1 = chars1;
	    last_chars2 = chars2;
	  }
	  // Was the location was deleted?
	  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
	    return last_chars2;
	  }
	  // Add the remaining character length.
	  return last_chars2 + (loc - last_chars1);
	};


	/**
	 * Convert a diff array into a pretty HTML report.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} HTML representation.
	 */
	diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
	  var html = [];
	  var pattern_amp = /&/g;
	  var pattern_lt = /</g;
	  var pattern_gt = />/g;
	  var pattern_para = /\n/g;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];    // Operation (insert, delete, equal)
	    var data = diffs[x][1];  // Text of change.
	    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
	        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
	    switch (op) {
	      case DIFF_INSERT:
	        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
	        break;
	      case DIFF_DELETE:
	        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
	        break;
	      case DIFF_EQUAL:
	        html[x] = '<span>' + text + '</span>';
	        break;
	    }
	  }
	  return html.join('');
	};


	/**
	 * Compute and return the source text (all equalities and deletions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Source text.
	 */
	diff_match_patch.prototype.diff_text1 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};


	/**
	 * Compute and return the destination text (all equalities and insertions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Destination text.
	 */
	diff_match_patch.prototype.diff_text2 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_DELETE) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};


	/**
	 * Compute the Levenshtein distance; the number of inserted, deleted or
	 * substituted characters.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {number} Number of changes.
	 */
	diff_match_patch.prototype.diff_levenshtein = function(diffs) {
	  var levenshtein = 0;
	  var insertions = 0;
	  var deletions = 0;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];
	    var data = diffs[x][1];
	    switch (op) {
	      case DIFF_INSERT:
	        insertions += data.length;
	        break;
	      case DIFF_DELETE:
	        deletions += data.length;
	        break;
	      case DIFF_EQUAL:
	        // A deletion and an insertion is one substitution.
	        levenshtein += Math.max(insertions, deletions);
	        insertions = 0;
	        deletions = 0;
	        break;
	    }
	  }
	  levenshtein += Math.max(insertions, deletions);
	  return levenshtein;
	};


	/**
	 * Crush the diff into an encoded string which describes the operations
	 * required to transform text1 into text2.
	 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
	 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Delta text.
	 */
	diff_match_patch.prototype.diff_toDelta = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    switch (diffs[x][0]) {
	      case DIFF_INSERT:
	        text[x] = '+' + encodeURI(diffs[x][1]);
	        break;
	      case DIFF_DELETE:
	        text[x] = '-' + diffs[x][1].length;
	        break;
	      case DIFF_EQUAL:
	        text[x] = '=' + diffs[x][1].length;
	        break;
	    }
	  }
	  return text.join('\t').replace(/%20/g, ' ');
	};


	/**
	 * Given the original text1, and an encoded string which describes the
	 * operations required to transform text1 into text2, compute the full diff.
	 * @param {string} text1 Source string for the diff.
	 * @param {string} delta Delta text.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
	  var diffs = [];
	  var diffsLength = 0;  // Keeping our own length var is faster in JS.
	  var pointer = 0;  // Cursor in text1
	  var tokens = delta.split(/\t/g);
	  for (var x = 0; x < tokens.length; x++) {
	    // Each token begins with a one character parameter which specifies the
	    // operation of this token (delete, insert, equality).
	    var param = tokens[x].substring(1);
	    switch (tokens[x].charAt(0)) {
	      case '+':
	        try {
	          diffs[diffsLength++] =
	              new diff_match_patch.Diff(DIFF_INSERT, decodeURI(param));
	        } catch (ex) {
	          // Malformed URI sequence.
	          throw new Error('Illegal escape in diff_fromDelta: ' + param);
	        }
	        break;
	      case '-':
	        // Fall through.
	      case '=':
	        var n = parseInt(param, 10);
	        if (isNaN(n) || n < 0) {
	          throw new Error('Invalid number in diff_fromDelta: ' + param);
	        }
	        var text = text1.substring(pointer, pointer += n);
	        if (tokens[x].charAt(0) == '=') {
	          diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_EQUAL, text);
	        } else {
	          diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_DELETE, text);
	        }
	        break;
	      default:
	        // Blank tokens are ok (from a trailing \t).
	        // Anything else is an error.
	        if (tokens[x]) {
	          throw new Error('Invalid diff operation in diff_fromDelta: ' +
	                          tokens[x]);
	        }
	    }
	  }
	  if (pointer != text1.length) {
	    throw new Error('Delta length (' + pointer +
	        ') does not equal source text length (' + text1.length + ').');
	  }
	  return diffs;
	};


	//  MATCH FUNCTIONS


	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc'.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 */
	diff_match_patch.prototype.match_main = function(text, pattern, loc) {
	  // Check for null inputs.
	  if (text == null || pattern == null || loc == null) {
	    throw new Error('Null input. (match_main)');
	  }

	  loc = Math.max(0, Math.min(loc, text.length));
	  if (text == pattern) {
	    // Shortcut (potentially not guaranteed by the algorithm)
	    return 0;
	  } else if (!text.length) {
	    // Nothing to match.
	    return -1;
	  } else if (text.substring(loc, loc + pattern.length) == pattern) {
	    // Perfect match at the perfect spot!  (Includes case of null pattern)
	    return loc;
	  } else {
	    // Do a fuzzy compare.
	    return this.match_bitap_(text, pattern, loc);
	  }
	};


	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
	 * Bitap algorithm.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 * @private
	 */
	diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
	  if (pattern.length > this.Match_MaxBits) {
	    throw new Error('Pattern too long for this browser.');
	  }

	  // Initialise the alphabet.
	  var s = this.match_alphabet_(pattern);

	  var dmp = this;  // 'this' becomes 'window' in a closure.

	  /**
	   * Compute and return the score for a match with e errors and x location.
	   * Accesses loc and pattern through being a closure.
	   * @param {number} e Number of errors in match.
	   * @param {number} x Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  function match_bitapScore_(e, x) {
	    var accuracy = e / pattern.length;
	    var proximity = Math.abs(loc - x);
	    if (!dmp.Match_Distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy;
	    }
	    return accuracy + (proximity / dmp.Match_Distance);
	  }

	  // Highest score beyond which we give up.
	  var score_threshold = this.Match_Threshold;
	  // Is there a nearby exact match? (speedup)
	  var best_loc = text.indexOf(pattern, loc);
	  if (best_loc != -1) {
	    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    // What about in the other direction? (speedup)
	    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
	    if (best_loc != -1) {
	      score_threshold =
	          Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    }
	  }

	  // Initialise the bit arrays.
	  var matchmask = 1 << (pattern.length - 1);
	  best_loc = -1;

	  var bin_min, bin_mid;
	  var bin_max = pattern.length + text.length;
	  var last_rd;
	  for (var d = 0; d < pattern.length; d++) {
	    // Scan for the best match; each iteration allows for one more error.
	    // Run a binary search to determine how far from 'loc' we can stray at this
	    // error level.
	    bin_min = 0;
	    bin_mid = bin_max;
	    while (bin_min < bin_mid) {
	      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
	        bin_min = bin_mid;
	      } else {
	        bin_max = bin_mid;
	      }
	      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
	    }
	    // Use the result from this iteration as the maximum for the next.
	    bin_max = bin_mid;
	    var start = Math.max(1, loc - bin_mid + 1);
	    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

	    var rd = Array(finish + 2);
	    rd[finish + 1] = (1 << d) - 1;
	    for (var j = finish; j >= start; j--) {
	      // The alphabet (s) is a sparse hash, so the following line generates
	      // warnings.
	      var charMatch = s[text.charAt(j - 1)];
	      if (d === 0) {  // First pass: exact match.
	        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
	      } else {  // Subsequent passes: fuzzy match.
	        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
	                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
	                last_rd[j + 1];
	      }
	      if (rd[j] & matchmask) {
	        var score = match_bitapScore_(d, j - 1);
	        // This match will almost certainly be better than any existing match.
	        // But check anyway.
	        if (score <= score_threshold) {
	          // Told you so.
	          score_threshold = score;
	          best_loc = j - 1;
	          if (best_loc > loc) {
	            // When passing loc, don't exceed our current distance from loc.
	            start = Math.max(1, 2 * loc - best_loc);
	          } else {
	            // Already passed loc, downhill from here on in.
	            break;
	          }
	        }
	      }
	    }
	    // No hope for a (better) match at greater error levels.
	    if (match_bitapScore_(d + 1, loc) > score_threshold) {
	      break;
	    }
	    last_rd = rd;
	  }
	  return best_loc;
	};


	/**
	 * Initialise the alphabet for the Bitap algorithm.
	 * @param {string} pattern The text to encode.
	 * @return {!Object} Hash of character locations.
	 * @private
	 */
	diff_match_patch.prototype.match_alphabet_ = function(pattern) {
	  var s = {};
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] = 0;
	  }
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
	  }
	  return s;
	};


	//  PATCH FUNCTIONS


	/**
	 * Increase the context until it is unique,
	 * but don't let the pattern expand beyond Match_MaxBits.
	 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
	 * @param {string} text Source text.
	 * @private
	 */
	diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
	  if (text.length == 0) {
	    return;
	  }
	  if (patch.start2 === null) {
	    throw Error('patch not initialized');
	  }
	  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
	  var padding = 0;

	  // Look for the first and last matches of pattern in text.  If two different
	  // matches are found, increase the pattern length.
	  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
	         pattern.length < this.Match_MaxBits - this.Patch_Margin -
	         this.Patch_Margin) {
	    padding += this.Patch_Margin;
	    pattern = text.substring(patch.start2 - padding,
	                             patch.start2 + patch.length1 + padding);
	  }
	  // Add one chunk for good luck.
	  padding += this.Patch_Margin;

	  // Add the prefix.
	  var prefix = text.substring(patch.start2 - padding, patch.start2);
	  if (prefix) {
	    patch.diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, prefix));
	  }
	  // Add the suffix.
	  var suffix = text.substring(patch.start2 + patch.length1,
	                              patch.start2 + patch.length1 + padding);
	  if (suffix) {
	    patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, suffix));
	  }

	  // Roll back the start points.
	  patch.start1 -= prefix.length;
	  patch.start2 -= prefix.length;
	  // Extend the lengths.
	  patch.length1 += prefix.length + suffix.length;
	  patch.length2 += prefix.length + suffix.length;
	};


	/**
	 * Compute a list of patches to turn text1 into text2.
	 * Use diffs if provided, otherwise compute it ourselves.
	 * There are four ways to call this function, depending on what data is
	 * available to the caller:
	 * Method 1:
	 * a = text1, b = text2
	 * Method 2:
	 * a = diffs
	 * Method 3 (optimal):
	 * a = text1, b = diffs
	 * Method 4 (deprecated, use method 3):
	 * a = text1, b = text2, c = diffs
	 *
	 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
	 * Array of diff tuples for text1 to text2 (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>=} opt_b text2 (methods 1,4) or
	 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>=} opt_c Array of diff tuples
	 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
	  var text1, diffs;
	  if (typeof a == 'string' && typeof opt_b == 'string' &&
	      typeof opt_c == 'undefined') {
	    // Method 1: text1, text2
	    // Compute diffs from text1 and text2.
	    text1 = /** @type {string} */(a);
	    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
	    if (diffs.length > 2) {
	      this.diff_cleanupSemantic(diffs);
	      this.diff_cleanupEfficiency(diffs);
	    }
	  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
	      typeof opt_c == 'undefined') {
	    // Method 2: diffs
	    // Compute text1 from diffs.
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
	    text1 = this.diff_text1(diffs);
	  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
	      typeof opt_c == 'undefined') {
	    // Method 3: text1, diffs
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
	  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
	      opt_c && typeof opt_c == 'object') {
	    // Method 4: text1, text2, diffs
	    // text2 is not used.
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
	  } else {
	    throw new Error('Unknown call format to patch_make.');
	  }

	  if (diffs.length === 0) {
	    return [];  // Get rid of the null case.
	  }
	  var patches = [];
	  var patch = new diff_match_patch.patch_obj();
	  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
	  var char_count1 = 0;  // Number of characters into the text1 string.
	  var char_count2 = 0;  // Number of characters into the text2 string.
	  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
	  // text2 (postpatch_text).  We recreate the patches one by one to determine
	  // context info.
	  var prepatch_text = text1;
	  var postpatch_text = text1;
	  for (var x = 0; x < diffs.length; x++) {
	    var diff_type = diffs[x][0];
	    var diff_text = diffs[x][1];

	    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
	      // A new patch starts here.
	      patch.start1 = char_count1;
	      patch.start2 = char_count2;
	    }

	    switch (diff_type) {
	      case DIFF_INSERT:
	        patch.diffs[patchDiffLength++] = diffs[x];
	        patch.length2 += diff_text.length;
	        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
	                         postpatch_text.substring(char_count2);
	        break;
	      case DIFF_DELETE:
	        patch.length1 += diff_text.length;
	        patch.diffs[patchDiffLength++] = diffs[x];
	        postpatch_text = postpatch_text.substring(0, char_count2) +
	                         postpatch_text.substring(char_count2 +
	                             diff_text.length);
	        break;
	      case DIFF_EQUAL:
	        if (diff_text.length <= 2 * this.Patch_Margin &&
	            patchDiffLength && diffs.length != x + 1) {
	          // Small equality inside a patch.
	          patch.diffs[patchDiffLength++] = diffs[x];
	          patch.length1 += diff_text.length;
	          patch.length2 += diff_text.length;
	        } else if (diff_text.length >= 2 * this.Patch_Margin) {
	          // Time for a new patch.
	          if (patchDiffLength) {
	            this.patch_addContext_(patch, prepatch_text);
	            patches.push(patch);
	            patch = new diff_match_patch.patch_obj();
	            patchDiffLength = 0;
	            // Unlike Unidiff, our patch lists have a rolling context.
	            // https://github.com/google/diff-match-patch/wiki/Unidiff
	            // Update prepatch text & pos to reflect the application of the
	            // just completed patch.
	            prepatch_text = postpatch_text;
	            char_count1 = char_count2;
	          }
	        }
	        break;
	    }

	    // Update the current character count.
	    if (diff_type !== DIFF_INSERT) {
	      char_count1 += diff_text.length;
	    }
	    if (diff_type !== DIFF_DELETE) {
	      char_count2 += diff_text.length;
	    }
	  }
	  // Pick up the leftover patch if not empty.
	  if (patchDiffLength) {
	    this.patch_addContext_(patch, prepatch_text);
	    patches.push(patch);
	  }

	  return patches;
	};


	/**
	 * Given an array of patches, return another array that is identical.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_deepCopy = function(patches) {
	  // Making deep copies is hard in JavaScript.
	  var patchesCopy = [];
	  for (var x = 0; x < patches.length; x++) {
	    var patch = patches[x];
	    var patchCopy = new diff_match_patch.patch_obj();
	    patchCopy.diffs = [];
	    for (var y = 0; y < patch.diffs.length; y++) {
	      patchCopy.diffs[y] =
	          new diff_match_patch.Diff(patch.diffs[y][0], patch.diffs[y][1]);
	    }
	    patchCopy.start1 = patch.start1;
	    patchCopy.start2 = patch.start2;
	    patchCopy.length1 = patch.length1;
	    patchCopy.length2 = patch.length2;
	    patchesCopy[x] = patchCopy;
	  }
	  return patchesCopy;
	};


	/**
	 * Merge a set of patches onto the text.  Return a patched text, as well
	 * as a list of true/false values indicating which patches were applied.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @param {string} text Old text.
	 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
	 *      new text and an array of boolean values.
	 */
	diff_match_patch.prototype.patch_apply = function(patches, text) {
	  if (patches.length == 0) {
	    return [text, []];
	  }

	  // Deep copy the patches so that no changes are made to originals.
	  patches = this.patch_deepCopy(patches);

	  var nullPadding = this.patch_addPadding(patches);
	  text = nullPadding + text + nullPadding;

	  this.patch_splitMax(patches);
	  // delta keeps track of the offset between the expected and actual location
	  // of the previous patch.  If there are patches expected at positions 10 and
	  // 20, but the first patch was found at 12, delta is 2 and the second patch
	  // has an effective expected position of 22.
	  var delta = 0;
	  var results = [];
	  for (var x = 0; x < patches.length; x++) {
	    var expected_loc = patches[x].start2 + delta;
	    var text1 = this.diff_text1(patches[x].diffs);
	    var start_loc;
	    var end_loc = -1;
	    if (text1.length > this.Match_MaxBits) {
	      // patch_splitMax will only provide an oversized pattern in the case of
	      // a monster delete.
	      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
	                                  expected_loc);
	      if (start_loc != -1) {
	        end_loc = this.match_main(text,
	            text1.substring(text1.length - this.Match_MaxBits),
	            expected_loc + text1.length - this.Match_MaxBits);
	        if (end_loc == -1 || start_loc >= end_loc) {
	          // Can't find valid trailing context.  Drop this patch.
	          start_loc = -1;
	        }
	      }
	    } else {
	      start_loc = this.match_main(text, text1, expected_loc);
	    }
	    if (start_loc == -1) {
	      // No match found.  :(
	      results[x] = false;
	      // Subtract the delta for this failed patch from subsequent patches.
	      delta -= patches[x].length2 - patches[x].length1;
	    } else {
	      // Found a match.  :)
	      results[x] = true;
	      delta = start_loc - expected_loc;
	      var text2;
	      if (end_loc == -1) {
	        text2 = text.substring(start_loc, start_loc + text1.length);
	      } else {
	        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
	      }
	      if (text1 == text2) {
	        // Perfect match, just shove the replacement text in.
	        text = text.substring(0, start_loc) +
	               this.diff_text2(patches[x].diffs) +
	               text.substring(start_loc + text1.length);
	      } else {
	        // Imperfect match.  Run a diff to get a framework of equivalent
	        // indices.
	        var diffs = this.diff_main(text1, text2, false);
	        if (text1.length > this.Match_MaxBits &&
	            this.diff_levenshtein(diffs) / text1.length >
	            this.Patch_DeleteThreshold) {
	          // The end points match, but the content is unacceptably bad.
	          results[x] = false;
	        } else {
	          this.diff_cleanupSemanticLossless(diffs);
	          var index1 = 0;
	          var index2;
	          for (var y = 0; y < patches[x].diffs.length; y++) {
	            var mod = patches[x].diffs[y];
	            if (mod[0] !== DIFF_EQUAL) {
	              index2 = this.diff_xIndex(diffs, index1);
	            }
	            if (mod[0] === DIFF_INSERT) {  // Insertion
	              text = text.substring(0, start_loc + index2) + mod[1] +
	                     text.substring(start_loc + index2);
	            } else if (mod[0] === DIFF_DELETE) {  // Deletion
	              text = text.substring(0, start_loc + index2) +
	                     text.substring(start_loc + this.diff_xIndex(diffs,
	                         index1 + mod[1].length));
	            }
	            if (mod[0] !== DIFF_DELETE) {
	              index1 += mod[1].length;
	            }
	          }
	        }
	      }
	    }
	  }
	  // Strip the padding off.
	  text = text.substring(nullPadding.length, text.length - nullPadding.length);
	  return [text, results];
	};


	/**
	 * Add some padding on text start and end so that edges can match something.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} The padding string added to each side.
	 */
	diff_match_patch.prototype.patch_addPadding = function(patches) {
	  var paddingLength = this.Patch_Margin;
	  var nullPadding = '';
	  for (var x = 1; x <= paddingLength; x++) {
	    nullPadding += String.fromCharCode(x);
	  }

	  // Bump all the patches forward.
	  for (var x = 0; x < patches.length; x++) {
	    patches[x].start1 += paddingLength;
	    patches[x].start2 += paddingLength;
	  }

	  // Add some padding on start of first diff.
	  var patch = patches[0];
	  var diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
	    patch.start1 -= paddingLength;  // Should be 0.
	    patch.start2 -= paddingLength;  // Should be 0.
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[0][1].length) {
	    // Grow first equality.
	    var extraLength = paddingLength - diffs[0][1].length;
	    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
	    patch.start1 -= extraLength;
	    patch.start2 -= extraLength;
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }

	  // Add some padding on end of last diff.
	  patch = patches[patches.length - 1];
	  diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
	    // Grow last equality.
	    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
	    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }

	  return nullPadding;
	};


	/**
	 * Look through the patches and break up any which are longer than the maximum
	 * limit of the match algorithm.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_splitMax = function(patches) {
	  var patch_size = this.Match_MaxBits;
	  for (var x = 0; x < patches.length; x++) {
	    if (patches[x].length1 <= patch_size) {
	      continue;
	    }
	    var bigpatch = patches[x];
	    // Remove the big old patch.
	    patches.splice(x--, 1);
	    var start1 = bigpatch.start1;
	    var start2 = bigpatch.start2;
	    var precontext = '';
	    while (bigpatch.diffs.length !== 0) {
	      // Create one of several smaller patches.
	      var patch = new diff_match_patch.patch_obj();
	      var empty = true;
	      patch.start1 = start1 - precontext.length;
	      patch.start2 = start2 - precontext.length;
	      if (precontext !== '') {
	        patch.length1 = patch.length2 = precontext.length;
	        patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, precontext));
	      }
	      while (bigpatch.diffs.length !== 0 &&
	             patch.length1 < patch_size - this.Patch_Margin) {
	        var diff_type = bigpatch.diffs[0][0];
	        var diff_text = bigpatch.diffs[0][1];
	        if (diff_type === DIFF_INSERT) {
	          // Insertions are harmless.
	          patch.length2 += diff_text.length;
	          start2 += diff_text.length;
	          patch.diffs.push(bigpatch.diffs.shift());
	          empty = false;
	        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
	                   patch.diffs[0][0] == DIFF_EQUAL &&
	                   diff_text.length > 2 * patch_size) {
	          // This is a large deletion.  Let it pass in one chunk.
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          empty = false;
	          patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
	          bigpatch.diffs.shift();
	        } else {
	          // Deletion or equality.  Only take as much as we can stomach.
	          diff_text = diff_text.substring(0,
	              patch_size - patch.length1 - this.Patch_Margin);
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          if (diff_type === DIFF_EQUAL) {
	            patch.length2 += diff_text.length;
	            start2 += diff_text.length;
	          } else {
	            empty = false;
	          }
	          patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
	          if (diff_text == bigpatch.diffs[0][1]) {
	            bigpatch.diffs.shift();
	          } else {
	            bigpatch.diffs[0][1] =
	                bigpatch.diffs[0][1].substring(diff_text.length);
	          }
	        }
	      }
	      // Compute the head context for the next patch.
	      precontext = this.diff_text2(patch.diffs);
	      precontext =
	          precontext.substring(precontext.length - this.Patch_Margin);
	      // Append the end context for this patch.
	      var postcontext = this.diff_text1(bigpatch.diffs)
	                            .substring(0, this.Patch_Margin);
	      if (postcontext !== '') {
	        patch.length1 += postcontext.length;
	        patch.length2 += postcontext.length;
	        if (patch.diffs.length !== 0 &&
	            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
	          patch.diffs[patch.diffs.length - 1][1] += postcontext;
	        } else {
	          patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, postcontext));
	        }
	      }
	      if (!empty) {
	        patches.splice(++x, 0, patch);
	      }
	    }
	  }
	};


	/**
	 * Take a list of patches and return a textual representation.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} Text representation of patches.
	 */
	diff_match_patch.prototype.patch_toText = function(patches) {
	  var text = [];
	  for (var x = 0; x < patches.length; x++) {
	    text[x] = patches[x];
	  }
	  return text.join('');
	};


	/**
	 * Parse a textual representation of patches and return a list of Patch objects.
	 * @param {string} textline Text representation of patches.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.patch_fromText = function(textline) {
	  var patches = [];
	  if (!textline) {
	    return patches;
	  }
	  var text = textline.split('\n');
	  var textPointer = 0;
	  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
	  while (textPointer < text.length) {
	    var m = text[textPointer].match(patchHeader);
	    if (!m) {
	      throw new Error('Invalid patch string: ' + text[textPointer]);
	    }
	    var patch = new diff_match_patch.patch_obj();
	    patches.push(patch);
	    patch.start1 = parseInt(m[1], 10);
	    if (m[2] === '') {
	      patch.start1--;
	      patch.length1 = 1;
	    } else if (m[2] == '0') {
	      patch.length1 = 0;
	    } else {
	      patch.start1--;
	      patch.length1 = parseInt(m[2], 10);
	    }

	    patch.start2 = parseInt(m[3], 10);
	    if (m[4] === '') {
	      patch.start2--;
	      patch.length2 = 1;
	    } else if (m[4] == '0') {
	      patch.length2 = 0;
	    } else {
	      patch.start2--;
	      patch.length2 = parseInt(m[4], 10);
	    }
	    textPointer++;

	    while (textPointer < text.length) {
	      var sign = text[textPointer].charAt(0);
	      try {
	        var line = decodeURI(text[textPointer].substring(1));
	      } catch (ex) {
	        // Malformed URI sequence.
	        throw new Error('Illegal escape in patch_fromText: ' + line);
	      }
	      if (sign == '-') {
	        // Deletion.
	        patch.diffs.push(new diff_match_patch.Diff(DIFF_DELETE, line));
	      } else if (sign == '+') {
	        // Insertion.
	        patch.diffs.push(new diff_match_patch.Diff(DIFF_INSERT, line));
	      } else if (sign == ' ') {
	        // Minor equality.
	        patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, line));
	      } else if (sign == '@') {
	        // Start of next patch.
	        break;
	      } else if (sign === '') ; else {
	        // WTF?
	        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
	      }
	      textPointer++;
	    }
	  }
	  return patches;
	};


	/**
	 * Class representing one patch operation.
	 * @constructor
	 */
	diff_match_patch.patch_obj = function() {
	  /** @type {!Array.<!diff_match_patch.Diff>} */
	  this.diffs = [];
	  /** @type {?number} */
	  this.start1 = null;
	  /** @type {?number} */
	  this.start2 = null;
	  /** @type {number} */
	  this.length1 = 0;
	  /** @type {number} */
	  this.length2 = 0;
	};


	/**
	 * Emulate GNU diff's format.
	 * Header: @@ -382,8 +481,9 @@
	 * Indices are printed as 1-based, not 0-based.
	 * @return {string} The GNU diff string.
	 */
	diff_match_patch.patch_obj.prototype.toString = function() {
	  var coords1, coords2;
	  if (this.length1 === 0) {
	    coords1 = this.start1 + ',0';
	  } else if (this.length1 == 1) {
	    coords1 = this.start1 + 1;
	  } else {
	    coords1 = (this.start1 + 1) + ',' + this.length1;
	  }
	  if (this.length2 === 0) {
	    coords2 = this.start2 + ',0';
	  } else if (this.length2 == 1) {
	    coords2 = this.start2 + 1;
	  } else {
	    coords2 = (this.start2 + 1) + ',' + this.length2;
	  }
	  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
	  var op;
	  // Escape the body of the patch with %xx notation.
	  for (var x = 0; x < this.diffs.length; x++) {
	    switch (this.diffs[x][0]) {
	      case DIFF_INSERT:
	        op = '+';
	        break;
	      case DIFF_DELETE:
	        op = '-';
	        break;
	      case DIFF_EQUAL:
	        op = ' ';
	        break;
	    }
	    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
	  }
	  return text.join('').replace(/%20/g, ' ');
	};


	// The following export code was added by @ForbesLindesay
	module.exports = diff_match_patch;
	module.exports['diff_match_patch'] = diff_match_patch;
	module.exports['DIFF_DELETE'] = DIFF_DELETE;
	module.exports['DIFF_INSERT'] = DIFF_INSERT;
	module.exports['DIFF_EQUAL'] = DIFF_EQUAL;
} (diffMatchPatch));

var DiffMatchPatch = diffMatchPatch.exports;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

v35('v3', 0x30, md5);

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

v35('v5', 0x50, sha1);

function ansiRegex({onlyFirst = false} = {}) {
	const pattern = [
	    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
}

function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	return string.replace(ansiRegex(), '');
}

// Based on https://github.com/lodash/lodash/blob/6018350ac10d5ce6a5b7db625140b82aeab804df/.internal/unicodeSize.js

function charRegex() {
	// Used to compose unicode character classes.
	const astralRange = "\\ud800-\\udfff";
	const comboMarksRange = "\\u0300-\\u036f";
	const comboHalfMarksRange = "\\ufe20-\\ufe2f";
	const comboSymbolsRange = "\\u20d0-\\u20ff";
	const comboMarksExtendedRange = "\\u1ab0-\\u1aff";
	const comboMarksSupplementRange = "\\u1dc0-\\u1dff";
	const comboRange = comboMarksRange + comboHalfMarksRange + comboSymbolsRange + comboMarksExtendedRange + comboMarksSupplementRange;
	const varRange = "\\ufe0e\\ufe0f";

	// Used to compose unicode capture groups.
	const astral = `[${astralRange}]`;
	const combo = `[${comboRange}]`;
	const fitz = "\\ud83c[\\udffb-\\udfff]";
	const modifier = `(?:${combo}|${fitz})`;
	const nonAstral = `[^${astralRange}]`;
	const regional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
	const surrogatePair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
	const zeroWidthJoiner = "\\u200d";
	const blackFlag = "(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)";

	// Used to compose unicode regexes.
	const optModifier = `${modifier}?`;
	const optVar = `[${varRange}]?`;
	const optJoin = `(?:${zeroWidthJoiner}(?:${[nonAstral, regional, surrogatePair].join("|")})${optVar + optModifier})*`;
	const seq = optVar + optModifier + optJoin;
	const nonAstralCombo = `${nonAstral}${combo}?`;
	const symbol = `(?:${[blackFlag, nonAstralCombo, combo, regional, surrogatePair, astral].join("|")})`;

	// Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode).
	return new RegExp(`${fitz}(?=${fitz})|${symbol + seq}`, "g")
}

function stringLength(string, {countAnsiEscapeCodes = false} = {}) {
	if (string === '') {
		return 0;
	}

	if (!countAnsiEscapeCodes) {
		string = stripAnsi(string);
	}

	if (string === '') {
		return 0;
	}

	return string.match(charRegex()).length;
}

var dist = {};

const strPosToUni = (s, strOffset = s.length) => {
    let pairs = 0;
    let i = 0;
    for (; i < strOffset; i++) {
        const code = s.charCodeAt(i);
        if (code >= 0xd800 && code <= 0xdfff) {
            pairs++;
            i++; // Skip the second part of the pair.
        }
    }
    if (i !== strOffset)
        throw Error('Invalid offset - splits unicode bytes');
    return i - pairs;
};
const uniToStrPos = (s, uniOffset) => {
    let pos = 0;
    for (; uniOffset > 0; uniOffset--) {
        const code = s.charCodeAt(pos);
        pos += code >= 0xd800 && code <= 0xdfff ? 2 : 1;
    }
    return pos;
};

var unicount = /*#__PURE__*/Object.freeze({
    __proto__: null,
    strPosToUni: strPosToUni,
    uniToStrPos: uniToStrPos
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(unicount);

var type = {};

(function (exports) {
	/* Text OT!
	 *
	 * This is an OT implementation for text. It is the standard implementation of
	 * text used by ShareJS.
	 *
	 * This type is composable and by default non-invertable (operations do not by
	 * default contain enough information to invert them). Its similar to ShareJS's
	 * old text-composable type, but its not invertable and its very similar to the
	 * text-tp2 implementation but it doesn't support tombstones or purging.
	 *
	 * Ops are lists of components which iterate over the document. Components are
	 * either:
	 *
	 * - A number N: Skip N characters in the original document
	 * - "str": Insert "str" at the current position in the document
	 * - {d:N}: Delete N characters at the current position in the document
	 * - {d:"str"}: Delete "str" at the current position in the document. This is
	 *   equivalent to {d:N} but provides extra information for operation
	 *   invertability.
	 *
	 * Eg: [3, 'hi', 5, {d:8}]
	 *
	 * The operation does not have to skip the last characters in the document.
	 *
	 * Snapshots are by default strings.
	 *
	 * Cursors are either a single number (which is the cursor position) or a pair
	 * of [anchor, focus] (aka [start, end]). Be aware that end can be before start.
	 *
	 * The actual string type is configurable. The OG default exposed text type uses
	 * raw javascript strings, but they're not compatible with OT implementations in
	 * other languages because string.length returns the wrong value for unicode
	 * characters that don't fit in 2 bytes. And JS strings are quite an inefficient
	 * data structure for manipulating lines & UTF8 offsets. For this reason, you
	 * can use your own data structure underneath the text OT code.
	 *
	 * Note that insert operations themselves are always raw strings. Its just
	 * snapshots that are configurable.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.uniSlice = exports.dlen = exports.eachOp = void 0;
	const unicount_1 = require$$0;
	/** Check the operation is valid. Throws if not valid. */
	const checkOp = (op) => {
	    if (!Array.isArray(op))
	        throw Error('Op must be an array of components');
	    let last = null;
	    for (let i = 0; i < op.length; i++) {
	        const c = op[i];
	        switch (typeof c) {
	            case 'object':
	                // The only valid objects are {d:X} for +ive values of X or non-empty strings.
	                if (typeof c.d !== 'number' && typeof c.d !== 'string')
	                    throw Error('Delete must be number or string');
	                if (exports.dlen(c.d) <= 0)
	                    throw Error('Deletes must not be empty');
	                break;
	            case 'string':
	                // Strings are inserts.
	                if (!(c.length > 0))
	                    throw Error('Inserts cannot be empty');
	                break;
	            case 'number':
	                // Numbers must be skips. They have to be +ive numbers.
	                if (!(c > 0))
	                    throw Error('Skip components must be >0');
	                if (typeof last === 'number')
	                    throw Error('Adjacent skip components should be combined');
	                break;
	        }
	        last = c;
	    }
	    if (typeof last === 'number')
	        throw Error('Op has a trailing skip');
	};
	// TODO: Consider exposing this at the library level.
	// TODO: Also consider rewriting this to use es iterators instead of callback-passing style.
	function eachOp(op, fn) {
	    let prePos = 0, postPos = 0;
	    for (let i = 0; i < op.length; i++) {
	        const c = op[i];
	        fn(c, prePos, postPos);
	        switch (typeof c) {
	            case 'object': // Delete
	                prePos += exports.dlen(c.d);
	                break;
	            case 'string': // Insert
	                postPos += unicount_1.strPosToUni(c);
	                break;
	            case 'number': // Skip
	                prePos += c;
	                postPos += c;
	                break;
	        }
	    }
	}
	exports.eachOp = eachOp;
	function mapOp(op, fn) {
	    const newOp = [];
	    const append = makeAppend(newOp);
	    eachOp(op, (c, prePos, postPos) => {
	        append(fn(c, prePos, postPos));
	    });
	    return trim(newOp);
	}
	const id = (x) => x;
	const normalize = (op) => {
	    return mapOp(op, id);
	};
	exports.dlen = (d) => typeof d === 'number' ? d : unicount_1.strPosToUni(d);
	/** Make a function that appends to the given operation. */
	const makeAppend = (op) => (component) => {
	    if (!component || component.d === 0 || component.d === '') ;
	    else if (op.length === 0) {
	        op.push(component);
	    }
	    else if (typeof component === typeof op[op.length - 1]) {
	        if (typeof component === 'object') {
	            // Concatenate deletes. This is annoying because the op or component could
	            // contain strings or numbers.
	            const last = op[op.length - 1];
	            last.d = typeof last.d === 'string' && typeof component.d === 'string'
	                ? last.d + component.d // Preserve invert information
	                : exports.dlen(last.d) + exports.dlen(component.d); // Discard invert information, if any.
	            // (op[op.length - 1] as {d:number}).d += component.d
	        }
	        else {
	            // Concat strings / inserts. TSC should be smart enough for this :p
	            op[op.length - 1] += component;
	        }
	    }
	    else {
	        op.push(component);
	    }
	};
	/** Get the length of a component */
	const componentLength = (c) => (typeof c === 'number' ? c
	    : typeof c === 'string' ? unicount_1.strPosToUni(c)
	        : typeof c.d === 'number' ? c.d
	            : unicount_1.strPosToUni(c.d));
	// Does not support negative numbers.
	exports.uniSlice = (s, startUni, endUni) => {
	    const start = unicount_1.uniToStrPos(s, startUni);
	    const end = endUni == null ? Infinity : unicount_1.uniToStrPos(s, endUni);
	    return s.slice(start, end);
	};
	const dslice = (d, start, end) => (typeof d === 'number'
	    ? (end == null) ? d - start : Math.min(d, end) - start
	    : exports.uniSlice(d, start, end));
	/** Makes and returns utility functions take and peek.
	 */
	const makeTake = (op) => {
	    // TODO: Rewrite this by passing a context, like the rust code does. Its cleaner that way.
	    // The index of the next component to take
	    let idx = 0;
	    // The offset into the component. For strings this is in UCS2 length, not
	    // unicode codepoints.
	    let offset = 0;
	    // Take up to length n from the front of op. If n is -1, take the entire next
	    // op component. If indivisableField == 'd', delete components won't be separated.
	    // If indivisableField == 'i', insert components won't be separated.
	    const take = (n, indivisableField) => {
	        // We're at the end of the operation. The op has skips, forever. Infinity
	        // might make more sense than null here.
	        if (idx === op.length)
	            return n === -1 ? null : n;
	        const c = op[idx];
	        let part;
	        if (typeof c === 'number') {
	            // Skip
	            if (n === -1 || c - offset <= n) {
	                part = c - offset;
	                ++idx;
	                offset = 0;
	                return part;
	            }
	            else {
	                offset += n;
	                return n;
	            }
	        }
	        else if (typeof c === 'string') {
	            // Insert
	            if (n === -1 || indivisableField === 'i' || unicount_1.strPosToUni(c.slice(offset)) <= n) {
	                part = c.slice(offset);
	                ++idx;
	                offset = 0;
	                return part;
	            }
	            else {
	                const offset2 = offset + unicount_1.uniToStrPos(c.slice(offset), n);
	                part = c.slice(offset, offset2);
	                offset = offset2;
	                return part;
	            }
	        }
	        else {
	            // Delete
	            //
	            // So this is a little weird - the insert case uses UCS2 length offsets
	            // directly instead of counting in codepoints. Thats more efficient, but
	            // more complicated. It only matters for non-invertable ops with huge
	            // deletes being composed / transformed by other very complicated ops.
	            // Probably not common enough to optimize for. Esp since this is a little
	            // bit of a mess anyway, and the tests should iron out any problems.
	            if (n === -1 || indivisableField === 'd' || exports.dlen(c.d) - offset <= n) {
	                // Emit the remainder of the delete.
	                part = { d: dslice(c.d, offset) };
	                // part = {d: dlen(c.d) - offset}
	                ++idx;
	                offset = 0;
	                return part;
	            }
	            else {
	                // Slice into the delete content
	                let result = dslice(c.d, offset, offset + n);
	                offset += n;
	                return { d: result };
	            }
	        }
	    };
	    // Peek at the next op that will be returned.
	    const peek = () => op[idx];
	    return { take, peek };
	};
	/** Trim any excess skips from the end of an operation.
	 *
	 * There should only be at most one, because the operation was made with append.
	 */
	const trim = (op) => {
	    if (op.length > 0 && typeof op[op.length - 1] === 'number') {
	        op.pop();
	    }
	    return op;
	};
	/** Transform op by otherOp.
	 *
	 * @param op - The operation to transform
	 * @param otherOp - Operation to transform it by
	 * @param side - Either 'left' or 'right'
	 */
	function transform(op1, op2, side) {
	    if (side !== 'left' && side !== 'right') {
	        throw Error("side (" + side + ") must be 'left' or 'right'");
	    }
	    checkOp(op1);
	    checkOp(op2);
	    const newOp = [];
	    const append = makeAppend(newOp);
	    const { take, peek } = makeTake(op1);
	    for (let i = 0; i < op2.length; i++) {
	        const c2 = op2[i];
	        let length, c1;
	        switch (typeof c2) {
	            case 'number': // Skip
	                length = c2;
	                while (length > 0) {
	                    c1 = take(length, 'i');
	                    append(c1);
	                    if (typeof c1 !== 'string') {
	                        length -= componentLength(c1);
	                    }
	                }
	                break;
	            case 'string': // Insert
	                if (side === 'left') {
	                    // The left insert should go first.
	                    if (typeof peek() === 'string') {
	                        append(take(-1));
	                    }
	                }
	                // Otherwise skip the inserted text.
	                append(unicount_1.strPosToUni(c2));
	                break;
	            case 'object': // Delete
	                length = exports.dlen(c2.d);
	                while (length > 0) {
	                    c1 = take(length, 'i');
	                    switch (typeof c1) {
	                        case 'number':
	                            length -= c1;
	                            break;
	                        case 'string':
	                            append(c1);
	                            break;
	                        case 'object':
	                            // The delete is unnecessary now - the text has already been deleted.
	                            length -= exports.dlen(c1.d);
	                    }
	                }
	                break;
	        }
	    }
	    // Append any extra data in op1.
	    let c;
	    while ((c = take(-1)))
	        append(c);
	    return trim(newOp);
	}
	/** Compose op1 and op2 together and return the result */
	function compose(op1, op2) {
	    checkOp(op1);
	    checkOp(op2);
	    const result = [];
	    const append = makeAppend(result);
	    const { take } = makeTake(op1);
	    for (let i = 0; i < op2.length; i++) {
	        const component = op2[i];
	        let length, chunk;
	        switch (typeof component) {
	            case 'number': // Skip
	                length = component;
	                while (length > 0) {
	                    chunk = take(length, 'd');
	                    append(chunk);
	                    if (typeof chunk !== 'object') {
	                        length -= componentLength(chunk);
	                    }
	                }
	                break;
	            case 'string': // Insert
	                append(component);
	                break;
	            case 'object': // Delete
	                length = exports.dlen(component.d); // Length of the delete we're doing
	                let offset = 0; // Offset into our deleted content
	                while (offset < length) {
	                    chunk = take(length - offset, 'd');
	                    switch (typeof chunk) {
	                        case 'number':
	                            // We're deleting the skipped characters.
	                            append({ d: dslice(component.d, offset, offset + chunk) });
	                            offset += chunk;
	                            break;
	                        case 'string':
	                            offset += unicount_1.strPosToUni(chunk);
	                            break;
	                        case 'object':
	                            append(chunk);
	                    }
	                }
	                break;
	        }
	    }
	    let c;
	    while ((c = take(-1)))
	        append(c);
	    return trim(result);
	}
	// This operates in unicode offsets to make it consistent with the equivalent
	// methods in other languages / systems.
	const transformPosition = (cursor, op) => {
	    let pos = 0;
	    for (let i = 0; i < op.length && cursor > pos; i++) {
	        const c = op[i];
	        // I could actually use the op_iter stuff above - but I think its simpler
	        // like this.
	        switch (typeof c) {
	            case 'number': { // skip
	                pos += c;
	                break;
	            }
	            case 'string': // insert
	                // Its safe to use c.length here because they're both utf16 offsets.
	                // Ignoring pos because the doc doesn't know about the insert yet.
	                const offset = unicount_1.strPosToUni(c);
	                pos += offset;
	                cursor += offset;
	                break;
	            case 'object': // delete
	                cursor -= Math.min(exports.dlen(c.d), cursor - pos);
	                break;
	        }
	    }
	    return cursor;
	};
	const transformSelection = (selection, op) => (typeof selection === 'number'
	    ? transformPosition(selection, op)
	    : selection.map(s => transformPosition(s, op)));
	function makeInvertible(op, doc, ropeImpl) {
	    return mapOp(op, (c, prePos) => ((typeof c === 'object' && typeof c.d === 'number') // Delete
	        ? { d: ropeImpl.slice(doc, prePos, prePos + c.d) }
	        : c));
	}
	/** Attempt to invert the operation. Operations with {d:N} components cannot be inverted, and this method will throw. */
	function invert(op) {
	    return mapOp(op, c => {
	        switch (typeof c) {
	            case 'object': // Delete
	                if (typeof c.d === 'number') {
	                    throw Error('Cannot invert text op: Deleted characters missing from operation. makeInvertible must be called first.');
	                }
	                else
	                    return c.d; // delete -> insert
	            case 'string': return { d: c }; // Insert -> delete
	            case 'number': return c; // skip -> skip
	        }
	    });
	}
	/** Strip extraneous invertibility information from the operation */
	function stripInvertible(op) {
	    return mapOp(op, c => ((typeof c === 'object' && typeof c.d === 'string')
	        ? { d: unicount_1.strPosToUni(c.d) }
	        : c));
	}
	/** Helper method. returns true if the operation can be successfully inverted. */
	function isInvertible(op) {
	    let invertible = true;
	    eachOp(op, c => {
	        if (typeof c === 'object' && typeof c.d === 'number')
	            invertible = false;
	    });
	    return invertible;
	}
	function makeType(ropeImpl) {
	    return {
	        name: 'text-unicode',
	        uri: 'http://sharejs.org/types/text-unicode',
	        trim,
	        normalize,
	        checkOp,
	        /** Create a new text snapshot.
	         *
	         * @param {string} initial - initial snapshot data. Optional. Defaults to ''.
	         * @returns {Snap} Initial document snapshot object
	         */
	        create(initial = '') {
	            if (typeof initial !== 'string') {
	                throw Error('Initial data must be a string');
	            }
	            return ropeImpl.create(initial);
	        },
	        /** Apply an operation to a document snapshot
	         */
	        apply(str, op) {
	            checkOp(op);
	            const builder = ropeImpl.builder(str);
	            for (let i = 0; i < op.length; i++) {
	                const component = op[i];
	                switch (typeof component) {
	                    case 'number':
	                        builder.skip(component);
	                        break;
	                    case 'string':
	                        builder.append(component);
	                        break;
	                    case 'object':
	                        builder.del(exports.dlen(component.d));
	                        break;
	                }
	            }
	            return builder.build();
	        },
	        transform,
	        compose,
	        transformPosition,
	        transformSelection,
	        isInvertible,
	        makeInvertible(op, doc) { return makeInvertible(op, doc, ropeImpl); },
	        stripInvertible,
	        invert,
	        invertWithDoc(op, doc) { return invert(makeInvertible(op, doc, ropeImpl)); },
	        isNoop: (op) => op.length === 0
	    };
	}
	exports.default = makeType;
} (type));

var api$1 = {};

Object.defineProperty(api$1, "__esModule", { value: true });
// Text document API for the 'text' type. This implements some standard API
// methods for any text-like type, so you can easily bind a textarea or
// something without being fussy about the underlying OT implementation.
//
// The API is desigend as a set of functions to be mixed in to some context
// object as part of its lifecycle. It expects that object to have getSnapshot
// and submitOp methods, and call _onOp when an operation is received.
//
// This API defines:
//
// - getLength() returns the length of the document in characters
// - getText() returns a string of the document
// - insert(pos, text, [callback]) inserts text at position pos in the document
// - remove(pos, length, [callback]) removes length characters at position pos
//
// A user can define:
// - onInsert(pos, text): Called when text is inserted.
// - onRemove(pos, length): Called when text is removed.
const type_1 = type;
const unicount_1 = require$$0;
function api(getSnapshot, submitOp) {
    return {
        // Returns the text content of the document
        get: getSnapshot,
        // Returns the number of characters in the string
        getLength() { return getSnapshot().length; },
        // Insert the specified text at the given position in the document
        insert(pos, text, callback) {
            const uniPos = unicount_1.strPosToUni(getSnapshot(), pos);
            return submitOp([uniPos, text], callback);
        },
        remove(pos, lengthOrContent, callback) {
            const uniPos = unicount_1.strPosToUni(getSnapshot(), pos);
            return submitOp([uniPos, { d: lengthOrContent }], callback);
        },
        // When you use this API, you should implement these two methods
        // in your editing context.
        //onInsert: function(pos, text) {},
        //onRemove: function(pos, removedLength) {},
        _onOp(op) {
            type_1.eachOp(op, (component, prePos, postPos) => {
                switch (typeof component) {
                    case 'string':
                        if (this.onInsert)
                            this.onInsert(postPos, component);
                        break;
                    case 'object':
                        const dl = type_1.dlen(component.d);
                        if (this.onRemove)
                            this.onRemove(postPos, dl);
                }
            });
        },
        onInsert: null,
        onRemove: null,
    };
}
api$1.default = api;
api.provides = { text: true };

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.type = exports.remove = exports.insert = void 0;
	// This is an implementation of the text OT type built on top of JS strings.
	// You would think this would be horribly inefficient, but its surpringly
	// good. JS strings are magic.
	const unicount_1 = require$$0;
	const type_1 = __importStar(type);
	const api_1 = __importDefault(api$1);
	const ropeImplUnicodeString = {
	    create(s) { return s; },
	    toString(s) { return s; },
	    builder(oldDoc) {
	        if (typeof oldDoc !== 'string')
	            throw Error('Invalid document snapshot: ' + oldDoc);
	        const newDoc = [];
	        return {
	            skip(n) {
	                let offset = unicount_1.uniToStrPos(oldDoc, n);
	                if (offset > oldDoc.length)
	                    throw Error('The op is too long for this document');
	                newDoc.push(oldDoc.slice(0, offset));
	                oldDoc = oldDoc.slice(offset);
	            },
	            append(s) {
	                newDoc.push(s);
	            },
	            del(n) {
	                oldDoc = oldDoc.slice(unicount_1.uniToStrPos(oldDoc, n));
	            },
	            build() { return newDoc.join('') + oldDoc; },
	        };
	    },
	    slice: type_1.uniSlice,
	};
	const textString = type_1.default(ropeImplUnicodeString);
	const type$1 = Object.assign(Object.assign({}, textString), { api: api_1.default });
	exports.type = type$1;
	exports.insert = (pos, text) => (text.length === 0
	    ? []
	    : pos === 0 ? [text] : [pos, text]);
	exports.remove = (pos, textOrLen) => (type_1.dlen(textOrLen) === 0
	    ? []
	    : pos === 0 ? [{ d: textOrLen }] : [pos, { d: textOrLen }]);
	var type_2 = type;
	Object.defineProperty(exports, "makeType", { enumerable: true, get: function () { return type_2.default; } });
} (dist));

function getInlineId(node) {
    var _a;
    if ((_a = node.dataset) === null || _a === void 0 ? void 0 : _a.inlineId) {
        return [node.dataset.inlineId, node];
    }
    if (!node.parentElement) {
        return [];
    }
    return getInlineId(node.parentElement);
}
function createInline(type, text = '\uFEFF', attributes = {}) {
    return {
        id: v4(),
        text,
        type,
        attributes,
        isEmbed: isEmbed(type),
    };
}
function isEmbed(type) {
    switch (type) {
        case 'TEXT':
            return false;
        default:
            return false;
    }
}
function getInlineText(inline) {
    if (!inline)
        return '';
    let text = '';
    for (let i = 0; i < inline.childNodes.length; i++) {
        const el = inline.childNodes[i];
        if (el instanceof Text) {
            text += inline.childNodes[i].textContent;
        }
        if (el instanceof Image) {
            text += el.alt;
        }
        if (el.tagName === 'BR') {
            text += '\n';
        }
    }
    return text;
}

function createBlock(type, contents = [], attributes, meta) {
    return {
        id: v4(),
        contents: contents.length < 1 ? [createInline('TEXT')] : contents,
        attributes: attributes !== null && attributes !== void 0 ? attributes : {},
        meta: meta !== null && meta !== void 0 ? meta : {},
        type,
    };
}
function getBlockId(node) {
    var _a;
    if ((_a = node.dataset) === null || _a === void 0 ? void 0 : _a.blockId) {
        return [node.dataset.blockId, node];
    }
    if (!node.parentElement) {
        return [];
    }
    return getBlockId(node.parentElement);
}
function getBlockElementById(blockId) {
    const element = document.querySelector('[data-block-id="' + blockId + '"]');
    if (!element)
        return null;
    return element;
}
function getBlockLength(block) {
    var _a;
    const element = block instanceof HTMLElement ? block : getBlockElementById(block);
    if (!element)
        return null;
    let cumulativeLength = 0;
    for (let i = 0; i < element.children.length; i++) {
        const targetElement = element.children[i];
        const format = (_a = targetElement.dataset.format) === null || _a === void 0 ? void 0 : _a.replace(/^inline\//, '').toUpperCase();
        const inlineLength = isEmbed(format)
            ? 1
            : stringLength(getInlineText(targetElement).replaceAll(/\uFEFF/gi, ''));
        cumulativeLength += inlineLength;
    }
    return cumulativeLength;
}
function convertHTMLtoInlines(block) {
    const element = block instanceof HTMLElement ? block : getBlockElementById(block);
    let affectedLength = 0;
    let affected = false;
    if (!element)
        return { contents: [], affectedLength, affected };
    const contents = Array.from(element.childNodes).reduce((r, inline, currentIndex) => {
        var _a, _b;
        if (inline instanceof Text) {
            element.removeChild(inline);
            if (!(inline === null || inline === void 0 ? void 0 : inline.textContent))
                return r;
            affectedLength += inline.length;
            affected = true;
            return [...r, createInline('TEXT', inline.textContent)];
        }
        const inlineText = getInlineText(inline);
        const format = (_a = inline.dataset.format) === null || _a === void 0 ? void 0 : _a.replace(/^inline\//, '').toUpperCase();
        if (!format || !inline.dataset.inlineId)
            return r;
        if (inlineText.match(/\uFEFF$/i)) {
            affected = true;
        }
        if (inlineText.match(/^\uFEFF/i)) {
            affectedLength -= 1;
            affected = true;
        }
        let text = inlineText.replaceAll(/\uFEFF/gi, '');
        text = currentIndex === 0 && text.length < 1 ? '\uFEFF' : text;
        return [
            ...r,
            {
                id: inline.dataset.inlineId,
                attributes: JSON.parse((_b = inline.dataset.attributes) !== null && _b !== void 0 ? _b : ''),
                text,
                type: format,
                isEmbed: isEmbed(format),
            },
        ];
    }, []);
    return { contents, affectedLength, affected };
}
// convert block index to native index
function getNativeIndexFromBlockIndex(block, index) {
    var _a, _b;
    const element = block instanceof HTMLElement ? block : getBlockElementById(block);
    if (!element)
        return null;
    let cumulativeLength = 0;
    for (let i = 0; i < element.children.length; i++) {
        const targetElement = element.children[i];
        const format = (_a = targetElement.dataset.format) === null || _a === void 0 ? void 0 : _a.replace(/^inline\//, '').toUpperCase();
        if (format) {
            if (isEmbed(format)) {
                cumulativeLength += 1;
            }
            else {
                const childNodes = targetElement.childNodes;
                for (let j = 0; j < childNodes.length; j++) {
                    const node = childNodes[j];
                    let nodeLength = stringLength((_b = node.textContent) !== null && _b !== void 0 ? _b : '');
                    nodeLength = nodeLength > 0 ? nodeLength : 1;
                    if (index <= cumulativeLength + nodeLength) {
                        if (node instanceof Image) {
                            if (index === cumulativeLength + nodeLength) {
                                return {
                                    node: targetElement,
                                    index: j + 1,
                                };
                            }
                            return {
                                node: targetElement,
                                index: j,
                            };
                        }
                        if (node.tagName === 'BR') {
                            return targetElement.nextSibling
                                ? {
                                    node: targetElement.nextSibling,
                                    index: 0,
                                }
                                : {
                                    node: targetElement,
                                    index: j,
                                };
                        }
                        return {
                            node: node instanceof Text ? node : targetElement,
                            index: index - cumulativeLength,
                        };
                    }
                    cumulativeLength += nodeLength;
                }
            }
        }
    }
    return null;
}
function getBlockIndexFromNativeIndex(ChildNode, offset) {
    var _a, _b, _c;
    const [inlineId, inlineElement] = getInlineId(ChildNode);
    const [blockId, blockElement] = getBlockId(ChildNode);
    if (!inlineId || !inlineElement || !blockElement || !blockId)
        return null;
    let cumulativeLength = 0;
    for (let i = 0; i < blockElement.children.length; i++) {
        const targetElement = blockElement.children[i];
        const format = (_a = targetElement.dataset.format) === null || _a === void 0 ? void 0 : _a.replace(/^inline\//, '').toUpperCase();
        if (format) {
            const inlineLength = isEmbed(format)
                ? 1
                : stringLength(getInlineText(targetElement));
            if (targetElement === inlineElement) {
                const childNodes = Array.from(inlineElement.childNodes);
                let normalizedOffset = 0;
                for (let j = 0; j < childNodes.length; j++) {
                    if (childNodes[j] === ChildNode) {
                        const offestText = (_b = childNodes[j].textContent) !== null && _b !== void 0 ? _b : '';
                        // emoji support
                        const offsetTextIndex = stringLength(offestText.slice(0, offset));
                        normalizedOffset += offsetTextIndex;
                        break;
                    }
                    if (ChildNode.contains(childNodes[j]) && j === offset) {
                        break;
                    }
                    // <br> only line support
                    if (ChildNode === inlineElement && j === offset) {
                        normalizedOffset += 1;
                        break;
                    }
                    let nodeLength = stringLength((_c = childNodes[j].textContent) !== null && _c !== void 0 ? _c : '');
                    nodeLength = nodeLength > 0 ? nodeLength : 1;
                    normalizedOffset += nodeLength;
                }
                return { blockId, index: cumulativeLength + normalizedOffset };
            }
            cumulativeLength += inlineLength;
        }
    }
    return null;
}
// index is the position to start deleting, and length is the number of characters to delete (default is 1).
function deleteInlineContents(contents, index, length = 1) {
    let startIndex = index;
    let endIndex = index + length;
    const destContents = [];
    let cumulativeLength = 0;
    for (let i = 0; i < contents.length; i++) {
        const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
        if (length > 0 &&
            endIndex >= cumulativeLength &&
            startIndex < cumulativeLength + inlineLength) {
            if (!contents[i].isEmbed) {
                let deleteIndex = startIndex - cumulativeLength;
                deleteIndex = deleteIndex > 0 ? deleteIndex : 0;
                const textlength = stringLength(contents[i].text) - deleteIndex;
                const deletelength = textlength - length >= 0 ? length : textlength;
                length -= deletelength;
                const removeOp = dist.remove(deleteIndex, deletelength);
                const text = dist.type.apply(contents[i].text, removeOp);
                if (stringLength(text) > 0) {
                    destContents.push(Object.assign(Object.assign({}, contents[i]), { text }));
                }
            }
            else {
                length--;
            }
        }
        else {
            destContents.push(contents[i]);
        }
        cumulativeLength += inlineLength;
    }
    if (destContents.length < 1) {
        destContents.push(createInline('TEXT'));
    }
    return destContents;
}
function setAttributesForInlineContents(contents, attributes, index, length = 1) {
    let startIndex = index;
    let endIndex = index + length;
    const destContents = [];
    let cumulativeLength = 0;
    for (let i = 0; i < contents.length; i++) {
        const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
        if (length > 0 &&
            endIndex >= cumulativeLength &&
            startIndex < cumulativeLength + inlineLength) {
            if (!contents[i].isEmbed) {
                let formatIndex = startIndex - cumulativeLength;
                formatIndex = formatIndex > 0 ? formatIndex : 0;
                const textlength = stringLength(contents[i].text) - formatIndex;
                const formatlength = textlength - length >= 0 ? length : textlength;
                length -= formatlength;
                const firstText = dist.type.apply(contents[i].text, dist.remove(formatIndex, textlength));
                const middleText = dist.type.apply(contents[i].text, dist.type.compose(dist.remove(0, formatIndex), dist.remove(formatlength, stringLength(contents[i].text) - (formatIndex + formatlength))));
                const lastText = dist.type.apply(contents[i].text, dist.remove(0, formatIndex + formatlength));
                if (firstText.length > 0) {
                    destContents.push(Object.assign(Object.assign({}, contents[i]), { id: v4(), text: firstText }));
                }
                if (middleText.length > 0) {
                    const mergedAttributes = Object.assign(Object.assign({}, contents[i].attributes), attributes);
                    Object.keys(mergedAttributes).forEach((key) => {
                        if (typeof mergedAttributes[key] === 'boolean' && !mergedAttributes[key]) {
                            delete mergedAttributes[key];
                        }
                    });
                    destContents.push(Object.assign(Object.assign({}, contents[i]), { id: v4(), text: middleText, attributes: mergedAttributes }));
                }
                if (lastText.length > 0) {
                    destContents.push(Object.assign(Object.assign({}, contents[i]), { id: v4(), text: lastText }));
                }
            }
            else {
                length--;
            }
        }
        else {
            destContents.push(contents[i]);
        }
        cumulativeLength += inlineLength;
    }
    if (destContents.length < 1) {
        destContents.push(createInline('TEXT'));
    }
    return destContents;
}
// length is the string currently selected by the user and to be deleted when splitting.
function splitInlineContents(contents, index) {
    const startIndex = index;
    const firstContents = [];
    const lastContents = [];
    let cumulativeLength = 0;
    for (let i = 0; i < contents.length; i++) {
        const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
        if (startIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
            if (!contents[i].isEmbed) {
                const sliceIndex = startIndex - cumulativeLength;
                const firstText = dist.type.apply(contents[i].text, dist.remove(sliceIndex, stringLength(contents[i].text) - sliceIndex));
                const lastText = dist.type.apply(contents[i].text, dist.remove(0, sliceIndex));
                if (firstText.length > 0) {
                    firstContents.push(Object.assign(Object.assign({}, contents[i]), { text: firstText }));
                }
                if (lastText.length > 0) {
                    lastContents.push(Object.assign(Object.assign({}, contents[i]), { id: v4(), text: lastText }));
                }
            }
            else {
                lastContents.push(contents[i]);
            }
        }
        else {
            if (startIndex > cumulativeLength) {
                firstContents.push(contents[i]);
            }
            else {
                lastContents.push(contents[i]);
            }
        }
        cumulativeLength += inlineLength;
    }
    return [firstContents, lastContents];
}
function optimizeInlineContents(contents) {
    let prevAttributes = {};
    const dest = contents.reduce((r, v, i) => {
        if (v.text === '\uFEFF') {
            prevAttributes = Object.assign({}, v.attributes);
            return r;
        }
        if (r.length > 0 && isEqual(v.attributes, prevAttributes)) {
            prevAttributes = Object.assign({}, v.attributes);
            r[r.length - 1].text += v.text;
            return [...r];
        }
        prevAttributes = Object.assign({}, v.attributes);
        return [...r, v];
    }, []);
    if (dest.length < 1) {
        dest.push(createInline('TEXT'));
    }
    return dest;
}
function getInlineContents(contents, index, length = 0) {
    let startIndex = index;
    let endIndex = index + length;
    const destContents = [];
    let cumulativeLength = 0;
    for (let i = 0; i < contents.length; i++) {
        const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
        if (length > 0 &&
            endIndex >= cumulativeLength &&
            startIndex < cumulativeLength + inlineLength) {
            if (!contents[i].isEmbed) {
                let selectedIndex = startIndex - cumulativeLength;
                selectedIndex = selectedIndex > 0 ? selectedIndex : 0;
                const textlength = stringLength(contents[i].text);
                const deleteTextlength = textlength - selectedIndex;
                const selectedLength = textlength - length >= 0 ? length : textlength;
                const deletelength = deleteTextlength - length >= 0 ? length : deleteTextlength;
                length -= deletelength;
                let text = contents[i].text;
                if (textlength - (selectedIndex + selectedLength) > 0) {
                    const removeLast = dist.remove(selectedIndex + selectedLength, textlength - (selectedIndex + selectedLength));
                    text = dist.type.apply(text, removeLast);
                }
                const removeFirst = dist.remove(0, selectedIndex);
                text = dist.type.apply(text, removeFirst);
                if (stringLength(text) > 0) {
                    destContents.push(Object.assign(Object.assign({}, contents[i]), { text }));
                }
            }
            else {
                length--;
            }
        }
        cumulativeLength += inlineLength;
    }
    return destContents;
}
function getDuplicateAttributes(contents, index, length = 0) {
    let startIndex = index;
    let endIndex = index + length;
    const destContents = [];
    let cumulativeLength = 0;
    for (let i = 0; i < contents.length; i++) {
        const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
        if (length < 1) {
            break;
        }
        if (endIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
            if (!contents[i].isEmbed) {
                let selectedIndex = startIndex - cumulativeLength;
                selectedIndex = selectedIndex > 0 ? selectedIndex : 0;
                const textlength = stringLength(contents[i].text) - selectedIndex;
                const selectedlength = textlength - length >= 0 ? length : textlength;
                length -= selectedlength;
                const text = dist.type.apply(contents[i].text, dist.remove(selectedIndex + selectedlength, stringLength(contents[i].text) - (selectedIndex + selectedlength)));
                if (stringLength(text) > 0) {
                    destContents.push(Object.assign({}, contents[i].attributes));
                }
            }
            else {
                length--;
            }
        }
        cumulativeLength += inlineLength;
    }
    const duplicateAttributes = destContents.reduce((r, v, i) => {
        if (i === 0) {
            return Object.assign({}, v);
        }
        const attributes = Object.assign({}, r);
        Object.keys(attributes).forEach((attr) => {
            if (!Object.prototype.hasOwnProperty.call(v, attr)) {
                delete attributes[attr];
            }
        });
        return attributes;
    }, {});
    return duplicateAttributes;
}
function convertBlocksToText(blocks) {
    const text = blocks.reduce((r, block) => {
        return `${r}${block.contents.map((content) => content.text).join('')}\n`;
    }, '');
    return text.replaceAll(/\uFEFF/gi, '');
}

function caretRangeFromPoint(x, y) {
    // for chrome & safari & edge
    if (document.caretRangeFromPoint) {
        return document.caretRangeFromPoint(x, y);
    }
    // @ts-ignore for firefox
    if (document.caretPositionFromPoint) {
        // @ts-ignore
        const position = document.caretPositionFromPoint(x, y);
        const range = document.createRange();
        range.setStart(position.offsetNode, position.offset);
        range.setEnd(position.offsetNode, position.offset);
        return range;
    }
    return null;
}
function getRectByRange(range) {
    let clientRect = null;
    if (range.endContainer instanceof Text) {
        clientRect = range.getBoundingClientRect();
    }
    else {
        const index = range.endOffset > range.endContainer.childNodes.length - 1
            ? range.endContainer.childNodes.length - 1
            : range.endOffset;
        const currentNode = range.endContainer.childNodes[index];
        if (!currentNode)
            return null;
        if (currentNode instanceof Text) {
            const currentNodeRange = document.createRange();
            currentNodeRange.selectNode(currentNode);
            clientRect = currentNodeRange.getBoundingClientRect();
        }
        else {
            if (!(currentNode instanceof Image) && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.tagName) !== 'BR')
                return null;
            clientRect = currentNode.getBoundingClientRect();
        }
    }
    return clientRect;
}

const json0diff = require('json0-ot-diff');
function useEditor({ settings, eventEmitter, }) {
    const editorRef = React__namespace.useRef(null);
    const lastCaretPositionRef = React__namespace.useRef();
    const lastCaretRectRef = React__namespace.useRef();
    const blocksRef = React__namespace.useRef([]);
    const modulesRef = React__namespace.useRef({});
    const focus = React__namespace.useCallback(() => {
        if (lastCaretPositionRef.current) {
            setCaretPosition({
                blockId: lastCaretPositionRef.current.blockId,
                index: lastCaretPositionRef.current.index,
                length: lastCaretPositionRef.current.length,
            });
        }
        else {
            const lastBlock = blocksRef.current[blocksRef.current.length - 1];
            if (!lastBlock)
                return;
            const element = getBlockElementById(lastBlock.id);
            if (!element)
                return;
            setCaretPosition({
                blockId: lastBlock.id,
                index: element.innerText.length,
            });
        }
        updateCaretPositionRef();
    }, []);
    const blur = React__namespace.useCallback(() => {
        const selection = document.getSelection();
        if (!selection)
            return null;
        selection.removeAllRanges();
    }, []);
    const hasFocus = React__namespace.useCallback(() => {
        const selection = document.getSelection();
        if (!selection || !editorRef.current)
            return false;
        return editorRef.current.contains(selection.focusNode);
    }, []);
    const prev = React__namespace.useCallback(({ index, margin = 10, blockId } = {}) => {
        var _a, _b;
        const position = lastCaretPositionRef.current;
        const currentIndex = blocksRef.current.findIndex((v) => v.id === (blockId !== null && blockId !== void 0 ? blockId : position === null || position === void 0 ? void 0 : position.blockId));
        if (currentIndex < 1 || !blocksRef.current[currentIndex - 1])
            return false;
        if (!lastCaretRectRef.current) {
            setCaretPosition({
                blockId: blocksRef.current[currentIndex - 1].id,
                index: 0,
                nextElementDirection: 'up',
            });
            return false;
        }
        const prevBlock = getBlockElementById(blocksRef.current[currentIndex - 1].id);
        if (!prevBlock)
            return false;
        // for embedded elements
        if (prevBlock.contentEditable === 'false') {
            return prev({ blockId: prevBlock.dataset.blockId });
        }
        let prevRect = prevBlock.getBoundingClientRect();
        const container = getScrollContainer(settings.scrollContainer);
        const containerOffsetTop = container ? container.getBoundingClientRect().top : 0;
        if (prevRect.top <=
            (container ? containerOffsetTop : containerOffsetTop + settings.scrollMarginTop)) {
            if (container) {
                container.scrollTop = currentIndex - 1 < 1 ? 0 : (_b = (_a = prevBlock.parentElement) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0;
            }
            else {
                if (document.scrollingElement) {
                    let editorScrollTop = document.scrollingElement.scrollTop + prevRect.top - settings.scrollMarginTop;
                    if (currentIndex - 1 < 1) {
                        editorScrollTop -= 30;
                    }
                    document.scrollingElement.scrollTop = editorScrollTop;
                }
            }
            prevRect = prevBlock.getBoundingClientRect();
        }
        if (typeof index === 'number' && index >= 0) {
            setTimeout(() => {
                setCaretPosition({
                    blockId: blocksRef.current[currentIndex - 1].id,
                    index,
                });
            }, 10);
            return true;
        }
        const range = caretRangeFromPoint(lastCaretRectRef.current.x, prevRect.y + prevRect.height - margin);
        const selection = document.getSelection();
        if (!selection || !range)
            return false;
        selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
        const nativeRange = getNativeRange();
        if (!nativeRange)
            return false;
        const newCaretPosition = normalizeRange(nativeRange);
        if (!newCaretPosition)
            return false;
        updateCaretPositionRef();
        return true;
    }, []);
    const next = React__namespace.useCallback(({ index = 0, margin = 10, blockId } = {}) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const position = lastCaretPositionRef.current;
        const currentIndex = blocksRef.current.findIndex((v) => v.id === (blockId !== null && blockId !== void 0 ? blockId : position === null || position === void 0 ? void 0 : position.blockId));
        if (currentIndex === -1 || !blocksRef.current[currentIndex + 1])
            return false;
        if (!lastCaretRectRef.current) {
            setTimeout(() => {
                setCaretPosition({
                    blockId: blocksRef.current[currentIndex + 1].id,
                    index,
                });
            }, 10);
            return false;
        }
        const nextBlock = getBlockElementById(blocksRef.current[currentIndex + 1].id);
        if (!nextBlock)
            return false;
        // for embedded elements
        if (nextBlock.contentEditable === 'false') {
            return next({ blockId: nextBlock.dataset.blockId });
        }
        let nextRect = (_b = (_a = nextBlock.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : nextBlock.getBoundingClientRect();
        const container = getScrollContainer(settings.scrollContainer);
        const scrollHeight = (_c = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _c !== void 0 ? _c : window.innerHeight;
        if (container) {
            const containerRect = (_d = container.getBoundingClientRect()) !== null && _d !== void 0 ? _d : 0;
            if (nextRect.top + nextRect.height >=
                containerRect.top + containerRect.height - settings.scrollMarginBottom) {
                const scrollTop = ((_f = (_e = nextBlock.parentElement) === null || _e === void 0 ? void 0 : _e.offsetTop) !== null && _f !== void 0 ? _f : 0) -
                    container.clientHeight +
                    settings.scrollMarginBottom;
                if (container.scrollHeight > scrollTop + container.clientHeight) {
                    container.scrollTop = scrollTop;
                }
                else {
                    container.scrollTop = container.scrollHeight - container.clientHeight;
                }
                nextRect =
                    (_h = (_g = nextBlock.parentElement) === null || _g === void 0 ? void 0 : _g.getBoundingClientRect()) !== null && _h !== void 0 ? _h : nextBlock.getBoundingClientRect();
            }
        }
        else if (nextRect.top + nextRect.height >= scrollHeight - settings.scrollMarginBottom) {
            if (document.scrollingElement) {
                const nextTop = document.scrollingElement.scrollTop + nextRect.top;
                const p = nextTop - window.innerHeight + settings.scrollMarginBottom;
                document.scrollingElement.scrollTop = p;
            }
            nextRect = nextBlock.getBoundingClientRect();
        }
        const range = caretRangeFromPoint(lastCaretRectRef.current.x, nextRect.y + margin);
        const selection = document.getSelection();
        if (!selection || !range)
            return false;
        selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
        const nativeRange = getNativeRange();
        if (!nativeRange)
            return false;
        const newCaretPosition = normalizeRange(nativeRange);
        if (!newCaretPosition)
            return false;
        updateCaretPositionRef();
        return true;
    }, []);
    const getFormats = React__namespace.useCallback((blockId, index, length = 0) => {
        const block = blocksRef.current.find((v) => v.id === blockId);
        if (!block)
            return {};
        if (length === 0) {
            index = index === 0 ? index : index - 1;
            length = 1;
        }
        return getDuplicateAttributes(block.contents, index, length);
    }, []);
    const formatText = React__namespace.useCallback((blockId, index, length, attributes = {}) => {
        const block = blocksRef.current.find((v) => v.id === blockId);
        if (!block)
            return null;
        const contents = setAttributesForInlineContents(copyObject(block.contents), attributes, index, length);
        updateBlock(Object.assign(Object.assign({}, block), { contents }));
        render([block.id]);
    }, []);
    const setBlocks = React__namespace.useCallback((blocks) => {
        blocksRef.current = blocks.map((block) => {
            return Object.assign(Object.assign({}, block), { contents: optimizeInlineContents(block.contents) });
        });
        numberingList();
        render();
    }, []);
    const getBlocks = React__namespace.useCallback(() => {
        return blocksRef.current;
    }, []);
    const getBlock = React__namespace.useCallback((blockId) => {
        var _a;
        return (_a = blocksRef.current.find((v) => v.id === blockId)) !== null && _a !== void 0 ? _a : null;
    }, []);
    const getBlockLength$1 = React__namespace.useCallback((blockId) => {
        const element = getBlockElementById(blockId);
        if (!element)
            return null;
        return getBlockLength(element);
    }, []);
    const getCaretPosition = React__namespace.useCallback(() => {
        const nativeRange = getNativeRange();
        if (!nativeRange)
            return null;
        return normalizeRange(nativeRange);
    }, []);
    const updateCaretPositionRef = React__namespace.useCallback((caretPosition) => {
        if (caretPosition) {
            lastCaretPositionRef.current = caretPosition;
        }
        else {
            const nativeRange = getNativeRange();
            if (!nativeRange)
                return null;
            const range = normalizeRange(nativeRange);
            lastCaretPositionRef.current = range;
        }
        return lastCaretPositionRef.current;
    }, []);
    const updateCaretRect = React__namespace.useCallback((rect) => {
        if (rect) {
            lastCaretRectRef.current = rect;
        }
        else {
            const nativeRange = getNativeRange();
            if (!nativeRange)
                return null;
            const clientRect = getRectByRange(nativeRange);
            if (!clientRect)
                return null;
            lastCaretRectRef.current = clientRect;
        }
        return lastCaretRectRef.current;
    }, []);
    const getNativeRange = React__namespace.useCallback(() => {
        const selection = document.getSelection();
        if (!selection || selection.rangeCount < 1)
            return null;
        const range = selection.getRangeAt(0);
        if (!range)
            return null;
        return range;
    }, []);
    const setCaretPosition = React__namespace.useCallback(({ blockId = '', index = 0, length = 0, nextElementDirection = 'down', }) => {
        var _a, _b, _c, _d;
        const element = getBlockElementById(blockId);
        if (!element)
            return;
        // for embedded elements
        if (element.contentEditable === 'false') {
            const nextBlockId = nextElementDirection === 'up'
                ? ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.previousElementSibling).dataset.id
                : ((_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.nextElementSibling).dataset.id;
            if (!nextBlockId)
                return;
            const nextBlockLength = nextElementDirection === 'up' ? (_c = getBlockLength$1(nextBlockId)) !== null && _c !== void 0 ? _c : 0 : 0;
            setCaretPosition({
                blockId: nextBlockId,
                index: nextBlockLength,
                length: 0,
                nextElementDirection,
            });
            return;
        }
        const selection = document.getSelection();
        if (!selection)
            return;
        const blockLength = (_d = getBlockLength$1(blockId)) !== null && _d !== void 0 ? _d : 0;
        if (index < 0) {
            index = 0;
        }
        if (index > blockLength) {
            index = blockLength;
        }
        try {
            const range = document.createRange();
            const start = getNativeIndexFromBlockIndex(element, index);
            const end = getNativeIndexFromBlockIndex(element, index + length);
            if (!start || !end)
                return;
            range.setStart(start.node, start.index);
            range.setEnd(end.node, end.index);
            selection.removeAllRanges();
            selection.addRange(range);
            updateCaretPositionRef();
        }
        catch (e) {
            eventEmitter.warning('Invalid Range', e);
        }
    }, []);
    const scrollIntoView = React__namespace.useCallback((blockId) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        blockId = (_b = blockId !== null && blockId !== void 0 ? blockId : (_a = lastCaretPositionRef.current) === null || _a === void 0 ? void 0 : _a.blockId) !== null && _b !== void 0 ? _b : '';
        const element = getBlockElementById(blockId);
        if (!element)
            return;
        let nextRect = (_d = (_c = element.parentElement) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) !== null && _d !== void 0 ? _d : element.getBoundingClientRect();
        const container = getScrollContainer(settings.scrollContainer);
        const scrollHeight = (_e = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _e !== void 0 ? _e : window.innerHeight;
        if (container) {
            const containerRect = (_f = container.getBoundingClientRect()) !== null && _f !== void 0 ? _f : 0;
            if (nextRect.top + nextRect.height >=
                containerRect.top + containerRect.height - settings.scrollMarginBottom) {
                const scrollTop = ((_h = (_g = element.parentElement) === null || _g === void 0 ? void 0 : _g.offsetTop) !== null && _h !== void 0 ? _h : 0) -
                    container.clientHeight +
                    settings.scrollMarginBottom;
                if (container.scrollHeight > scrollTop + container.clientHeight) {
                    container.scrollTop = scrollTop;
                }
                else {
                    container.scrollTop = container.scrollHeight - container.clientHeight;
                }
                nextRect =
                    (_k = (_j = element.parentElement) === null || _j === void 0 ? void 0 : _j.getBoundingClientRect()) !== null && _k !== void 0 ? _k : element.getBoundingClientRect();
            }
        }
        else if (nextRect.top + nextRect.height >= scrollHeight - settings.scrollMarginBottom) {
            if (document.scrollingElement) {
                const nextTop = document.scrollingElement.scrollTop + nextRect.top;
                const p = nextTop - window.innerHeight + settings.scrollMarginBottom;
                document.scrollingElement.scrollTop = p;
            }
        }
    }, []);
    const normalizeRange = React__namespace.useCallback((nativeRange) => {
        var _a;
        const [startInlineId, startInlineElement] = getInlineId(nativeRange.startContainer);
        const [endInlineId, endInlineElement] = getInlineId(nativeRange.endContainer);
        const [blockId, blockElement] = getBlockId(nativeRange.startContainer);
        if (!editorRef.current || !startInlineId || !endInlineId || !blockId || !blockElement) {
            return null;
        }
        const start = getBlockIndexFromNativeIndex(nativeRange.startContainer, nativeRange.startOffset);
        const end = getBlockIndexFromNativeIndex(nativeRange.endContainer, nativeRange.endOffset);
        const caretRect = getRectByRange(nativeRange);
        if (!caretRect)
            return null;
        const blockRect = blockElement.getBoundingClientRect();
        if (!start || !end)
            return null;
        const range = {
            blockId,
            blockFormat: (_a = blockElement === null || blockElement === void 0 ? void 0 : blockElement.dataset.format) !== null && _a !== void 0 ? _a : '',
            index: start.index,
            length: end.index - start.index,
            collapsed: nativeRange.collapsed,
            isTop: caretRect.y - blockRect.y < 10,
            isBottom: blockRect.y + blockRect.height - (caretRect.y + caretRect.height) < 10,
            rect: caretRect,
        };
        return range;
    }, []);
    const addModule = React__namespace.useCallback((name, module, options = {}) => {
        const moduleInstance = new module({
            eventEmitter,
            editor: editorController,
            options,
        });
        modulesRef.current = Object.assign(Object.assign({}, modulesRef.current), { [name]: moduleInstance });
        moduleInstance.onInit();
    }, []);
    const addModules = React__namespace.useCallback((modules, options = {}) => {
        modules.forEach(({ name, module }) => {
            var _a;
            const moduleInstance = new module({
                eventEmitter,
                editor: editorController,
                options: (_a = options[name]) !== null && _a !== void 0 ? _a : {},
            });
            modulesRef.current = Object.assign(Object.assign({}, modulesRef.current), { [name]: moduleInstance });
            moduleInstance.onInit();
        });
    }, []);
    const getEventEmitter = React__namespace.useCallback(() => {
        return eventEmitter;
    }, []);
    const getModule = React__namespace.useCallback((name) => {
        if (!modulesRef.current[name])
            return null;
        return modulesRef.current[name];
    }, []);
    const removeAllModules = React__namespace.useCallback(() => {
        Object.keys(modulesRef.current).forEach((key) => {
            modulesRef.current[key].onDestroy();
        });
        modulesRef.current = {};
    }, []);
    const sync = React__namespace.useCallback((blockId, blockElement, forceUpdate = false) => {
        if (!blockId) {
            const nativeRange = getNativeRange();
            if (!nativeRange)
                return;
            [blockId, blockElement] = getBlockId(nativeRange.startContainer);
        }
        if (!blockElement && blockId) {
            const el = getBlockElementById(blockId);
            if (el) {
                blockElement = el;
            }
        }
        const block = blocksRef.current.find((v) => v.id === blockId);
        const composing = getModule('keyboard').composing;
        setTimeout(() => {
            var _a, _b;
            if (!blockId || !block || !blockElement || composing)
                return;
            const { contents, affected, affectedLength } = convertHTMLtoInlines(blockElement);
            updateCaretPositionRef();
            if (isEqual(block.contents, contents))
                return;
            updateBlock(Object.assign(Object.assign({}, block), { contents }));
            if (affected || forceUpdate) {
                render([blockId]);
                let newCaretPosition = lastCaretPositionRef.current;
                if (!newCaretPosition) {
                    if (!lastCaretRectRef.current)
                        return;
                    const range = caretRangeFromPoint(lastCaretRectRef.current.x, lastCaretRectRef.current.y);
                    const selection = document.getSelection();
                    if (!selection || !range)
                        return;
                    selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
                    const nativeRange = getNativeRange();
                    if (!nativeRange)
                        return;
                    newCaretPosition = normalizeRange(nativeRange);
                }
                const blockLength = (_a = getBlockLength(blockElement)) !== null && _a !== void 0 ? _a : 0;
                let caretIndex = (_b = newCaretPosition === null || newCaretPosition === void 0 ? void 0 : newCaretPosition.index) !== null && _b !== void 0 ? _b : 0;
                caretIndex += affectedLength;
                if (blockLength < caretIndex) {
                    caretIndex = blockLength;
                }
                blur();
                setTimeout(() => {
                    setCaretPosition(Object.assign(Object.assign({}, newCaretPosition), { index: caretIndex >= 0 ? caretIndex : 0 }));
                    updateCaretRect();
                }, 10);
            }
            else {
                updateCaretRect();
            }
        }, 10);
    }, []);
    const createBlock$1 = React__namespace.useCallback((appendBlock, prevBlockId, type = 'append', source = EventSources.USER) => {
        const currentIndex = blocksRef.current.findIndex((v) => v.id === prevBlockId);
        const block = copyObject(appendBlock);
        if (block.meta) {
            delete block.meta;
        }
        eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
            payload: {
                type: HistoryType.ADD_BLOCK,
                blockId: appendBlock.id,
                block,
                prevBlockId,
            },
            source,
        });
        updateBlocks(currentIndex !== -1
            ? [
                ...blocksRef.current.slice(0, currentIndex + 1),
                appendBlock,
                ...blocksRef.current.slice(currentIndex + 1),
            ]
            : type === 'prepend'
                ? [appendBlock, ...blocksRef.current]
                : [...blocksRef.current, appendBlock]);
    }, []);
    const updateBlocks = React__namespace.useCallback((blocks) => {
        // If the last block is an embedded element
        if (settings.embeddedBlocks.includes(blocks[blocks.length - 1].type)) {
            blocks = [...blocks, createBlock('PARAGRAPH')];
        }
        blocksRef.current = blocks;
    }, []);
    const updateBlock = React__namespace.useCallback((targetBlock, source = EventSources.USER) => {
        const currentIndex = blocksRef.current.findIndex((v) => v.id === targetBlock.id);
        if (currentIndex === -1)
            return;
        const block = copyObject(targetBlock);
        const prev = copyObject(blocksRef.current[currentIndex]);
        Object.keys(block.attributes).forEach((key) => {
            if (typeof block.attributes[key] === 'boolean' && !block.attributes[key]) {
                delete block.attributes[key];
            }
        });
        const contents = optimizeInlineContents(block.contents);
        blocksRef.current = [
            ...blocksRef.current.slice(0, currentIndex),
            Object.assign(Object.assign(Object.assign({}, blocksRef.current[currentIndex]), block), { contents }),
            ...blocksRef.current.slice(currentIndex + 1),
        ];
        if (block.meta) {
            delete block.meta;
        }
        if (prev.meta) {
            delete prev.meta;
        }
        const prevBlock = Object.assign(Object.assign({}, prev), { contents: prev.contents.map((content) => {
                return {
                    attributes: content.attributes,
                    text: content.text,
                    type: content.type,
                    isEmbed: content.isEmbed,
                    data: content.data,
                };
            }) });
        const currentBlock = Object.assign(Object.assign({}, block), { contents: contents.map((content) => {
                return {
                    attributes: content.attributes,
                    text: content.text,
                    type: content.type,
                    isEmbed: content.isEmbed,
                    data: content.data,
                };
            }) });
        const redo = json0diff(prevBlock, currentBlock, DiffMatchPatch);
        const undo = json0diff(currentBlock, prevBlock, DiffMatchPatch);
        if (redo && undo) {
            eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
                payload: {
                    type: HistoryType.UPDATE_CONTENTS,
                    blockId: block.id,
                    undo,
                    redo,
                },
                source,
            });
        }
    }, []);
    const deleteBlock = React__namespace.useCallback((blockId, source = EventSources.USER) => {
        var _a;
        const currentIndex = blocksRef.current.findIndex((v) => v.id === blockId);
        if (currentIndex === -1)
            return;
        eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
            payload: {
                type: HistoryType.REMOVE_BLOCK,
                blockId: blocksRef.current[currentIndex].id,
                block: copyObject(blocksRef.current[currentIndex]),
                prevBlockId: (_a = blocksRef.current[currentIndex - 1]) === null || _a === void 0 ? void 0 : _a.id,
            },
            source,
        });
        updateBlocks(blocksRef.current.filter((v) => v.id !== blockId));
    }, []);
    const deleteBlocks = React__namespace.useCallback((blockIds, source = EventSources.USER) => {
        const deleteBlocks = blocksRef.current.filter((v) => blockIds.includes(v.id));
        if (deleteBlocks.length < 1)
            return;
        eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
            payload: deleteBlocks.map((block) => {
                var _a;
                const currentIndex = blocksRef.current.findIndex((v) => v.id === block.id);
                return {
                    type: HistoryType.REMOVE_BLOCK,
                    blockId: block.id,
                    block: copyObject(block),
                    prevBlockId: (_a = blocksRef.current[currentIndex - 1]) === null || _a === void 0 ? void 0 : _a.id,
                };
            }),
            source,
        });
        updateBlocks(blocksRef.current.filter((v) => !blockIds.includes(v.id)));
    }, []);
    const render = React__namespace.useCallback((affectedIds = [], isForce = false) => {
        if (isForce) {
            eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER_FORCE, affectedIds);
        }
        else {
            eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER, affectedIds);
        }
    }, []);
    const numberingList = React__namespace.useCallback(() => {
        let listNumbers = [];
        let lastIndent = 0;
        const affectedIds = [];
        updateBlocks(blocksRef.current.map((v, i) => {
            var _a, _b, _c;
            const indent = (_b = (_a = v.attributes) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 0;
            if (v.type === 'ORDEREDLIST') {
                if (!listNumbers[indent]) {
                    listNumbers[indent] = 0;
                }
                if (lastIndent < indent) {
                    listNumbers[indent] = 0;
                }
                lastIndent = indent;
                if (((_c = v.meta) === null || _c === void 0 ? void 0 : _c.listNumber) !== ++listNumbers[indent]) {
                    affectedIds.push(v.id);
                }
                return Object.assign(Object.assign({}, v), { meta: Object.assign(Object.assign({}, v.meta), { listNumber: listNumbers[indent] }) });
            }
            if (v.type === 'BULLETLIST' && lastIndent < indent) {
                return Object.assign(Object.assign({}, v), { meta: Object.assign(Object.assign({}, v.meta), { listNumber: 0 }) });
            }
            listNumbers = [];
            lastIndent = indent;
            return Object.assign(Object.assign({}, v), { meta: Object.assign(Object.assign({}, v.meta), { listNumber: 0 }) });
        }));
        render(affectedIds);
    }, []);
    const getSettings = React__namespace.useCallback(() => {
        return settings;
    }, [settings]);
    const getEditorRef = React__namespace.useCallback(() => {
        return editorRef.current;
    }, []);
    const editorController = React__namespace.useMemo(() => {
        return {
            focus,
            blur,
            hasFocus,
            getFormats,
            formatText,
            setBlocks,
            getBlocks,
            getBlock,
            getBlockLength: getBlockLength$1,
            createBlock: createBlock$1,
            updateBlock,
            updateBlocks,
            deleteBlock,
            deleteBlocks,
            sync,
            getCaretPosition,
            setCaretPosition,
            updateCaretPositionRef,
            updateCaretRect,
            scrollIntoView,
            getNativeRange,
            prev,
            next,
            numberingList,
            render,
            addModule,
            addModules,
            getModule,
            removeAllModules,
            getEventEmitter,
            getSettings,
            getEditorRef,
        };
    }, []);
    // real-time collaborative test
    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     const block = getBlock(blocksRef.current[0].id);
    //     if (!block) return;
    //     const contents = [
    //       ...block.contents.slice(0, block.contents.length - 1),
    //       {
    //         ...block.contents[block.contents.length - 1],
    //         text: 'あ' + block.contents[block.contents.length - 1].text,
    //       },
    //     ];
    //     console.log(JSON.stringify(contents));
    //     updateBlock({ ...block, contents }, EventSources.COLLABORATOR);
    //     render([block.id]);
    //   }, 4000);
    //   return () => {
    //     clearInterval(interval);
    //   };
    // }, []);
    React__namespace.useEffect(() => {
        const debouncedSelectionChange = debounce(200, (e) => {
            if (!editorRef.current)
                return;
            updateCaretPositionRef();
            eventEmitter.emit(EditorEvents.EVENT_SELECTION_CHANGE, e);
        });
        document.addEventListener('selectionchange', debouncedSelectionChange);
        return () => {
            document.removeEventListener('selectionchange', debouncedSelectionChange);
        };
    }, []);
    return [editorRef, editorController];
}

class EventEmitter {
    constructor() {
        this._eventBus = new Subject();
    }
    emit(key, data = {}) {
        this._eventBus.next({ key, data });
    }
    select(key) {
        return this._eventBus.asObservable().pipe(filter((event) => event.key === key), map((event) => event.data));
    }
    info(message, data) {
        this.emit(EditorEvents.EVENT_LOG_INFO, { message, data });
    }
    warning(message, data) {
        this.emit(EditorEvents.EVENT_LOG_WARNING, { message, data });
    }
    error(message, data) {
        this.emit(EditorEvents.EVENT_LOG_ERROR, { message, data });
    }
}

function useEventEmitter() {
    const [eventEmitter] = React__namespace.useState(new EventEmitter());
    const subscriptionRef = React__namespace.useRef();
    const on = React__namespace.useCallback((key, callback) => {
        var _a;
        if (!eventEmitter)
            return;
        const sub = eventEmitter.select(key).subscribe((res) => {
            callback(res);
        });
        (_a = subscriptionRef.current) === null || _a === void 0 ? void 0 : _a.add(sub);
        return sub;
    }, [eventEmitter]);
    const removeAll = React__namespace.useCallback(() => {
        var _a;
        (_a = subscriptionRef.current) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }, []);
    React__namespace.useEffect(() => {
        subscriptionRef.current = new Subscription();
        return () => {
            var _a;
            (_a = subscriptionRef.current) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
    }, []);
    return [eventEmitter, { on, removeAll }];
}

class EditorModule {
    constructor({ eventEmitter, editor }) {
        this.subs = new Subscription();
        this.eventEmitter = eventEmitter;
        this.editor = editor;
    }
    onInit() {
        this.eventEmitter.info('init editor module');
        const blocks = this.editor.getBlocks();
        if (blocks.length < 1) {
            this.createBlock();
        }
    }
    onDestroy() {
        this.eventEmitter.info('destory editor module');
        this.subs.unsubscribe();
    }
    createBlock({ prevId = '', type = 'PARAGRAPH', contents = [], attributes = {}, meta = {}, source = 'user', } = {}) {
        var _a;
        const caretPosition = this.editor.getCaretPosition();
        const appendBlock = createBlock(type, contents, attributes, meta);
        const prevBlockId = prevId || (caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.blockId);
        this.editor.createBlock(appendBlock, prevBlockId, 'append', source);
        this.editor.numberingList();
        (_a = this.editor.getModule('history')) === null || _a === void 0 ? void 0 : _a.optimizeOp();
        setTimeout(() => {
            this.editor.setCaretPosition({
                blockId: prevBlockId,
                index: 0,
            });
            this.editor.updateCaretRect();
            this.editor.next();
        }, 10);
        this.editor.render([]);
        return appendBlock;
    }
    deleteBlock(blockId) {
        var _a;
        const caretPosition = this.editor.getCaretPosition();
        blockId = blockId !== null && blockId !== void 0 ? blockId : caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.blockId;
        const blocks = this.editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === blockId);
        if (!blockId || blocks.length <= 1 || currentIndex < 1)
            return;
        const prevBlockLength = (_a = this.editor.getBlockLength(blocks[currentIndex - 1].id)) !== null && _a !== void 0 ? _a : 0;
        this.editor.prev({ index: prevBlockLength });
        this.editor.deleteBlock(blockId);
        this.editor.numberingList();
        this.editor.getModule('history').optimizeOp();
        this.editor.render();
    }
    deleteBlocks(blockIds) {
        var _a;
        const blocks = this.editor.getBlocks();
        if (blocks.length <= 1)
            return;
        this.editor.deleteBlocks(blockIds);
        const deletedBlocks = this.editor.getBlocks();
        if (deletedBlocks.length < 1) {
            this.createBlock();
        }
        this.editor.numberingList();
        this.editor.getModule('history').optimizeOp();
        this.editor.render();
        const currentIndex = blocks.findIndex((v) => v.id === blockIds[0]);
        if (currentIndex !== -1) {
            const deletedBlocks = this.editor.getBlocks();
            const targetBlockId = currentIndex === 0 ? deletedBlocks[0].id : blocks[currentIndex - 1].id;
            const targetBlockLength = (_a = this.editor.getBlockLength(targetBlockId)) !== null && _a !== void 0 ? _a : 0;
            this.editor.setCaretPosition({
                blockId: targetBlockId,
                index: targetBlockLength,
            });
        }
    }
    mergeBlock(sourceBlockId, otherBlockId) {
        var _a;
        const blocks = this.editor.getBlocks();
        const source = blocks.find((v) => v.id === sourceBlockId);
        const other = blocks.find((v) => v.id === otherBlockId);
        if (!source || !other)
            return;
        this.editor.deleteBlock(other.id);
        const currentSourceLength = (_a = this.editor.getBlockLength(source.id)) !== null && _a !== void 0 ? _a : 0;
        this.editor.updateBlock(Object.assign(Object.assign({}, source), { contents: copyObject([...source.contents, ...other.contents]) }));
        this.editor.numberingList();
        this.editor.getModule('history').optimizeOp();
        setTimeout(() => this.editor.setCaretPosition({ blockId: source.id, index: currentSourceLength }), 10);
        this.editor.render([source.id]);
    }
    splitBlock(blockId, index, length = 0) {
        const blocks = this.editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === blockId);
        if (currentIndex === -1)
            return;
        let contents = blocks[currentIndex].contents;
        if (length > 0) {
            contents = deleteInlineContents(contents, index, length);
        }
        const [first, last] = splitInlineContents(contents, index);
        const firstBlock = Object.assign(Object.assign({}, blocks[currentIndex]), { contents: first.length < 1 ? [createInline('TEXT')] : first });
        let blockType = 'PARAGRAPH';
        if (['ORDEREDLIST', 'BULLETLIST'].includes(blocks[currentIndex].type)) {
            blockType = blocks[currentIndex].type;
        }
        const lastBlock = createBlock(blockType, last, blocks[currentIndex].attributes);
        this.editor.createBlock(lastBlock, firstBlock.id);
        this.editor.updateBlock(firstBlock);
        this.editor.numberingList();
        this.editor.getModule('history').optimizeOp();
        this.editor.render([blocks[currentIndex].id]);
        this.editor.blur();
        setTimeout(() => {
            this.editor.setCaretPosition({ blockId: lastBlock.id });
            this.editor.scrollIntoView();
        }, 10);
    }
}

const ShortKey$1 = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
class KeyBoardModule {
    constructor({ eventEmitter, editor }) {
        this.sync = throttle(200, (blockId, blockElement) => {
            this.editor.sync(blockId, blockElement, false);
        });
        this.eventEmitter = eventEmitter;
        this.editor = editor;
        this.bindings = [];
        this.composing = false;
    }
    onInit() {
        this.eventEmitter.info('init keyboard module');
        // handle enter
        this.addBinding({
            key: KeyCodes.ENTER,
            composing: true,
            prevented: true,
            handler: this._handleEnter.bind(this),
        });
        this.addBinding({
            key: KeyCodes.NUMPAD_ENTER,
            composing: true,
            prevented: true,
            handler: this._handleEnter.bind(this),
        });
        // this.addBinding({
        //   key: KeyCodes.ENTER,
        //   shiftKey: true,
        //   handler: this._handleShiftEnter.bind(this),
        // });
        // this.addBinding({
        //   key: KeyCodes.NUMPAD_ENTER,
        //   shiftKey: true,
        //   handler: this._handleShiftEnter.bind(this),
        // });
        // handle key operation
        this.addBinding({
            key: KeyCodes.ARROW_UP,
            collapsed: true,
            handler: this._handleKeyUp.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_DOWN,
            collapsed: true,
            handler: this._handleKeyDown.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_LEFT,
            collapsed: true,
            handler: this._handleKeyLeft.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_RIGHT,
            collapsed: true,
            handler: this._handleKeyRight.bind(this),
        });
        // selector operation
        this.addBinding({
            key: KeyCodes.ARROW_UP,
            shiftKey: true,
            handler: this._handleSelectorUp.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_DOWN,
            shiftKey: true,
            handler: this._handleSelectorDown.bind(this),
        });
        this.addBinding({
            key: KeyCodes.A,
            shortKey: true,
            handler: this._handleSelectAll.bind(this),
        });
        this.addBinding({
            key: KeyCodes.BACKSPACE,
            prevented: true,
            handler: this._handleBackspace.bind(this),
        });
        this.addBinding({
            key: KeyCodes.SPACE,
            handler: this._handleSpace.bind(this),
        });
        this.addBinding({
            key: KeyCodes.TAB,
            composing: true,
            prevented: true,
            handler: this._handleIndent.bind(this),
        });
        this.addBinding({
            key: KeyCodes.TAB,
            shiftKey: true,
            prevented: true,
            handler: this._handleOutdent.bind(this),
        });
        // if ([KeyCodes.DEL].includes(e.code)) {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   return;
        // }
        this.addBinding({
            key: KeyCodes.Z,
            prevented: true,
            shortKey: true,
            handler: this._handleUndo.bind(this),
        });
        this.addBinding({
            key: KeyCodes.Z,
            prevented: true,
            shortKey: true,
            shiftKey: true,
            handler: this._handleRedo.bind(this),
        });
        // override native events
        this.addBinding({
            key: KeyCodes.B,
            prevented: true,
            shortKey: true,
            handler: this._handleBold.bind(this),
        });
        this.addBinding({
            key: KeyCodes.I,
            prevented: true,
            shortKey: true,
            handler: this._handleItalic.bind(this),
        });
        this.addBinding({
            key: KeyCodes.U,
            prevented: true,
            shortKey: true,
            handler: this._handleUnderline.bind(this),
        });
    }
    onDestroy() {
        this.bindings = [];
        this.eventEmitter.info('destroy keyboard module');
    }
    onCompositionStart(e) {
        this.composing = true;
    }
    onCompositionEnd(e) {
        this.composing = false;
    }
    onInput(e) {
        setTimeout(() => {
            const nativeRange = this.editor.getNativeRange();
            const [blockId, blockElement] = getBlockId(nativeRange === null || nativeRange === void 0 ? void 0 : nativeRange.startContainer);
            if (this.composing || !blockId || !blockElement) {
                return;
            }
            this.sync(blockId, blockElement);
        });
    }
    onKeyPress(e) { }
    onKeyDown(e) {
        let prevented = false;
        const caretPosition = this.editor.getCaretPosition();
        if (!caretPosition) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.bindings.forEach((binding) => {
            if (this._trigger(e, binding, caretPosition)) {
                prevented = true;
            }
        });
        if (prevented) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    onBeforeInput(e) { }
    addBinding(props) {
        this.bindings.push(props);
    }
    addBindings(propsArray = []) {
        propsArray.forEach((props) => {
            this.bindings.push(props);
        });
    }
    _trigger(e, props, caretPosition) {
        const { key, collapsed = false, empty = false, formats = [], metaKey = false, ctrlKey = false, shiftKey = false, shortKey = false, altKey = false, prevented = false, composing = false, handler, } = props;
        if (!composing && this.composing)
            return false;
        if (!caretPosition)
            return false;
        if (shortKey && !e[ShortKey$1])
            return false;
        if (!shortKey) {
            if ((metaKey && !e.metaKey) || (!metaKey && e.metaKey))
                return false;
            if ((ctrlKey && !e.ctrlKey) || (!ctrlKey && e.ctrlKey))
                return false;
        }
        else {
            if (metaKey && !e.metaKey)
                return false;
            if (ctrlKey && !e.ctrlKey)
                return false;
        }
        if ((shiftKey && !e.shiftKey) || (!shiftKey && e.shiftKey))
            return false;
        if ((altKey && !e.altKey) || (!altKey && e.altKey))
            return false;
        if (collapsed && !caretPosition.collapsed)
            return false;
        if (empty && caretPosition.length > 0)
            return false;
        if (key !== e.code)
            return false;
        if (formats.length > 0 && formats.includes(caretPosition.blockFormat))
            return false;
        handler(caretPosition, this.editor, e);
        return prevented;
    }
    _handleEnter(caretPosition, editor) {
        var _a;
        if (this.composing) {
            return;
        }
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const length = editor.getBlockLength(caret.blockId);
        const block = this.editor.getBlock(caret.blockId);
        if (length === null || !block)
            return;
        if (caretPosition.collapsed && (caret.index === length || length === 0)) {
            // For list elements, if enter is pressed with an empty string, the decoration is erased.
            if (block.type !== 'PARAGRAPH' && length === 0) {
                editor.updateBlock(Object.assign(Object.assign({}, block), { attributes: Object.assign(Object.assign({}, block.attributes), { indent: false }), type: 'PARAGRAPH' }));
                this.editor.numberingList();
                (_a = this.editor.getModule('history')) === null || _a === void 0 ? void 0 : _a.optimizeOp();
                editor.render([block.id]);
                setTimeout(() => {
                    this.editor.setCaretPosition({
                        blockId: block.id,
                        index: 0,
                    });
                    this.editor.updateCaretRect();
                }, 10);
                return;
            }
            // Revert to "PARAGRAPH" for header elements
            let blockType = block.type;
            if (['HEADER1', 'HEADER2', 'HEADER3', 'HEADER4', 'HEADER5', 'HEADER6'].includes(block.type)) {
                blockType = 'PARAGRAPH';
            }
            editor.getModule('editor').createBlock({
                type: blockType,
                attributes: block.attributes,
            });
        }
        else {
            editor.getModule('editor').splitBlock(caret.blockId, caret.index, caret.length);
        }
    }
    _handleKeyLeft(caretPosition, editor, event) {
        var _a;
        const caret = editor.getCaretPosition();
        if (caret) {
            const blockLength = editor.getBlockLength(caret.blockId);
            if (blockLength === null)
                return;
            if (blockLength === 0 || caret.index === 0) {
                event.preventDefault();
                const blocks = editor.getBlocks();
                const currentIndex = blocks.findIndex((v) => v.id === caret.blockId);
                if (currentIndex !== -1 && currentIndex > 0) {
                    const nextBlockLength = (_a = editor.getBlockLength(blocks[currentIndex - 1].id)) !== null && _a !== void 0 ? _a : 0;
                    editor.setCaretPosition({
                        blockId: blocks[currentIndex - 1].id,
                        index: nextBlockLength,
                        nextElementDirection: 'up',
                    });
                }
            }
        }
        setTimeout(() => editor.updateCaretRect(), 10);
    }
    _handleKeyRight(caretPosition, editor, event) {
        const caret = editor.getCaretPosition();
        if (caret) {
            const blockLength = editor.getBlockLength(caret.blockId);
            if (blockLength === null)
                return;
            if (blockLength === 0 || blockLength === caret.index) {
                event.preventDefault();
                const blocks = editor.getBlocks();
                const currentIndex = blocks.findIndex((v) => v.id === caret.blockId);
                if (currentIndex !== -1 && currentIndex < blocks.length - 1) {
                    editor.setCaretPosition({ blockId: blocks[currentIndex + 1].id });
                }
            }
        }
        setTimeout(() => editor.updateCaretRect(), 10);
    }
    _handleKeyUp(caretPosition, editor, event) {
        if (!caretPosition.isTop)
            return;
        if (editor.prev()) {
            event.preventDefault();
        }
        else {
            setTimeout(() => editor.updateCaretRect(), 10);
        }
    }
    _handleKeyDown(caretPosition, editor, event) {
        if (!caretPosition.isBottom)
            return;
        if (editor.next()) {
            event.preventDefault();
        }
        else {
            setTimeout(() => editor.updateCaretRect(), 10);
        }
    }
    _handleBackspace(caretPosition, editor) {
        var _a;
        const block = editor.getBlock(caretPosition.blockId);
        const blocks = editor.getBlocks();
        const blockIndex = blocks.findIndex((v) => v.id === caretPosition.blockId);
        const textLength = editor.getBlockLength(caretPosition.blockId);
        let deletedContents;
        let caretIndex;
        if (caretPosition.collapsed) {
            if (!block)
                return;
            // Ignored for null characters
            if (textLength === 0) {
                if (block.type !== 'PARAGRAPH') {
                    editor.updateBlock(Object.assign(Object.assign({}, block), { attributes: Object.assign(Object.assign({}, block.attributes), { indent: false }), type: 'PARAGRAPH' }));
                    this.editor.numberingList();
                    (_a = this.editor.getModule('history')) === null || _a === void 0 ? void 0 : _a.optimizeOp();
                    editor.render([block.id]);
                    setTimeout(() => {
                        this.editor.setCaretPosition({
                            blockId: block.id,
                            index: 0,
                        });
                        this.editor.updateCaretRect();
                    }, 10);
                    return;
                }
                const { embeddedBlocks } = editor.getSettings();
                if (blockIndex > 0 && embeddedBlocks.includes(blocks[blockIndex - 1].type)) {
                    editor.getModule('editor').deleteBlock(blocks[blockIndex - 1].id);
                    setTimeout(() => {
                        editor.setCaretPosition({ blockId: block.id, index: caretIndex });
                        editor.updateCaretRect();
                    }, 10);
                    return;
                }
                editor.getModule('editor').deleteBlock();
                return;
            }
            if (caretPosition.index < 1) {
                if (blockIndex < 1)
                    return;
                editor.getModule('editor').mergeBlock(blocks[blockIndex - 1].id, blocks[blockIndex].id);
                return;
            }
            caretIndex = caretPosition.index - 1;
            deletedContents = deleteInlineContents(block.contents, caretIndex, 1);
            deletedContents[deletedContents.length - 1].text = deletedContents[deletedContents.length - 1].text.replace(/\n+$/i, '');
        }
        else {
            if (!block || caretPosition.length < 1)
                return;
            caretIndex = caretPosition.index;
            deletedContents = deleteInlineContents(block.contents, caretPosition.index, caretPosition.length);
        }
        editor.updateBlock(Object.assign(Object.assign({}, block), { contents: deletedContents }));
        editor.blur();
        editor.render([block.id]);
        setTimeout(() => {
            editor.setCaretPosition({ blockId: block.id, index: caretIndex });
            editor.updateCaretRect();
        }, 10);
    }
    _handleUndo(caretPosition, editor, event) {
        editor.getModule('history').undo();
    }
    _handleRedo(caretPosition, editor, event) {
        editor.getModule('history').redo();
    }
    _handleSpace(caretPosition, editor, event) {
        const isExecuted = editor.getModule('markdown-shortcut').execute();
        if (isExecuted) {
            event.preventDefault();
        }
    }
    _handleBold(caretPosition, editor, event) {
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
        editor.getModule('toolbar').formatInline({ bold: !(formats === null || formats === void 0 ? void 0 : formats.bold) });
    }
    _handleItalic(caretPosition, editor, event) {
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
        editor.getModule('toolbar').formatInline({ italic: !(formats === null || formats === void 0 ? void 0 : formats.italic) });
    }
    _handleUnderline(caretPosition, editor, event) {
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
        editor.getModule('toolbar').formatInline({ underline: !(formats === null || formats === void 0 ? void 0 : formats.underline) });
    }
    _handleIndent(caretPosition, editor, event) {
        var _a;
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const block = editor.getBlock(caret.blockId);
        const { indentatableFormats } = editor.getSettings();
        if (!block || !indentatableFormats.includes(block.type))
            return;
        if (block.attributes.indent > 6)
            return;
        editor.updateBlock(Object.assign(Object.assign({}, block), { attributes: Object.assign(Object.assign({}, block.attributes), { indent: ((_a = block.attributes.indent) !== null && _a !== void 0 ? _a : 0) + 1 }) }));
        editor.numberingList();
        editor.render([block.id]);
        editor.blur();
        setTimeout(() => {
            editor.setCaretPosition(caret);
            editor.updateCaretRect();
        }, 10);
    }
    _handleOutdent(caretPosition, editor, event) {
        var _a;
        const caret = editor.getCaretPosition();
        if (!caret)
            return;
        const block = editor.getBlock(caret.blockId);
        const { indentatableFormats } = editor.getSettings();
        if (!block || !indentatableFormats.includes(block.type))
            return;
        if (((_a = block.attributes.indent) !== null && _a !== void 0 ? _a : 0) < 1)
            return;
        const indent = block.attributes.indent - 1;
        editor.updateCaretRect();
        editor.updateBlock(Object.assign(Object.assign({}, block), { attributes: Object.assign(Object.assign({}, block.attributes), { indent: indent !== 0 ? indent : false }) }));
        editor.numberingList();
        editor.render([block.id]);
        editor.blur();
        setTimeout(() => {
            editor.setCaretPosition(caret);
            editor.updateCaretRect();
        }, 10);
    }
    _handleSelectorUp(caretPosition, editor, event) {
        if (caretPosition.isTop) {
            const block = editor.getBlock(caretPosition.blockId);
            if (caretPosition.index === 0 && block) {
                event.preventDefault();
                editor.getModule('selector').selectBlocks([block]);
                editor.getModule('selector').setStart(block.id);
                return;
            }
        }
    }
    _handleSelectorDown(caretPosition, editor, event) {
        var _a;
        if (caretPosition.isBottom) {
            const block = editor.getBlock(caretPosition.blockId);
            const blockLength = (_a = editor.getBlockLength(caretPosition.blockId)) !== null && _a !== void 0 ? _a : 0;
            if (caretPosition.length === blockLength - caretPosition.index && block) {
                event.preventDefault();
                editor.getModule('selector').selectBlocks([block]);
                editor.getModule('selector').setStart(block.id);
                return;
            }
        }
    }
    _handleSelectAll(caretPosition, editor, event) {
        var _a;
        const blocks = editor.getBlocks();
        const blockLength = (_a = editor.getBlockLength(caretPosition.blockId)) !== null && _a !== void 0 ? _a : 0;
        if (blocks && caretPosition.index === 0 && caretPosition.length === blockLength) {
            event.preventDefault();
            editor.getModule('selector').selectBlocks(blocks);
            editor.getModule('selector').setStart(caretPosition.blockId);
            return;
        }
    }
}

class LoggerModule {
    constructor({ eventEmitter, options: { logLevel = 1 } }) {
        this.subs = new Subscription();
        this.eventEmitter = eventEmitter;
        this.logLevel = logLevel;
    }
    onInit() {
        this._watchLogEvents();
        this.eventEmitter.info('init logger module');
    }
    onDestroy() {
        this.eventEmitter.info('destroy logger module');
        setTimeout(() => {
            // Run one frame later to display the log just before it disappears
            this.subs.unsubscribe();
        });
    }
    _watchLogEvents() {
        if (this.logLevel >= LogLevels.INFO) {
            const sub = this.eventEmitter
                .select(EditorEvents.EVENT_LOG_INFO)
                .subscribe(({ message, data = '' }) => {
                console.info('LOG_INFO:', message, data);
            });
            this.subs.add(sub);
        }
        if (this.logLevel >= LogLevels.WARNING) {
            const sub = this.eventEmitter
                .select(EditorEvents.EVENT_LOG_WARNING)
                .subscribe(({ message, data = '' }) => {
                console.warn('LOG_WARNING:', message, data);
            });
            this.subs.add(sub);
        }
        if (this.logLevel >= LogLevels.ERROR) {
            const sub = this.eventEmitter
                .select(EditorEvents.EVENT_LOG_ERROR)
                .subscribe(({ message, data = '' }) => {
                console.error('LOG_ERROR:', message, data);
            });
            this.subs.add(sub);
        }
    }
}

class ToolbarModule {
    constructor({ eventEmitter, editor }) {
        this.editor = editor;
        this.eventEmitter = eventEmitter;
    }
    onInit() {
        this.eventEmitter.info('init toolbar module');
    }
    onDestroy() {
        this.eventEmitter.info('destroy toolbar module');
    }
    formatInline(attributes = {}, caretPosition = null) {
        if (!caretPosition) {
            caretPosition = this.editor.getCaretPosition();
        }
        if (!caretPosition)
            return;
        const block = this.editor.getBlock(caretPosition.blockId);
        if (!block)
            return;
        this.editor.formatText(block.id, caretPosition.index, caretPosition.length, attributes);
        setTimeout(() => this.editor.setCaretPosition({
            blockId: block.id,
            index: caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.index,
            length: caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.length,
        }), 10);
    }
    formatBlock(type, attributes = {}) {
        const caretPosition = this.editor.getCaretPosition();
        if (!caretPosition)
            return;
        const block = this.editor.getBlock(caretPosition.blockId);
        if (!block)
            return;
        this.editor.updateBlock(Object.assign(Object.assign({}, block), { type, attributes }));
        this.editor.numberingList();
        this.editor.render([block.id]);
        setTimeout(() => this.editor.setCaretPosition({
            blockId: block.id,
            index: caretPosition.index,
            length: caretPosition.length,
        }), 10);
    }
}

const ShortKey = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
class SelectorModule {
    constructor({ eventEmitter, editor }) {
        this.startBlockId = null;
        this.enabled = false;
        this.mousePressed = false;
        this.changed = false;
        this.selectedBlocks = [];
        this.bindings = [];
        // area select mode
        this.area = { start: null, end: null };
        this.areaSelecting = false;
        this.areaEl = null;
        this.mouseMove = throttle(20, (e) => {
            var _a, _b;
            if (this.areaSelecting) {
                this.areaMove(e);
                return;
            }
            if (!this.mousePressed)
                return;
            const blocks = this.editor.getBlocks();
            const startIndex = blocks.findIndex((v) => v.id === this.startBlockId);
            if (startIndex === -1)
                return;
            const [blockId] = getBlockId(e.target);
            let blockIds = [];
            let selectedBlocks = [];
            const blockIndex = blocks.findIndex((v) => v.id === blockId);
            if (!blockId || blockIndex === -1) {
                const startEl = getBlockElementById(blocks[startIndex].id);
                const startTop = (_b = (_a = startEl === null || startEl === void 0 ? void 0 : startEl.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) !== null && _b !== void 0 ? _b : 0;
                const isUpward = startTop > e.clientY;
                if (isUpward) {
                    for (let i = startIndex; i >= 0; i--) {
                        const blockEl = getBlockElementById(blocks[i].id);
                        const rect = blockEl === null || blockEl === void 0 ? void 0 : blockEl.getBoundingClientRect();
                        if (rect && rect.top + rect.height > e.clientY) {
                            blockIds.push(blocks[i].id);
                        }
                        else {
                            break;
                        }
                    }
                }
                else {
                    for (let i = startIndex; i < blocks.length; i++) {
                        const blockEl = getBlockElementById(blocks[i].id);
                        const rect = blockEl === null || blockEl === void 0 ? void 0 : blockEl.getBoundingClientRect();
                        if (rect && rect.top < e.clientY) {
                            blockIds.push(blocks[i].id);
                        }
                        else {
                            break;
                        }
                    }
                }
                selectedBlocks = copyObject(blocks.filter((v) => blockIds.includes(v.id)));
            }
            else {
                const endIndex = blocks.findIndex((v) => v.id === blockId);
                if (startIndex > endIndex) {
                    selectedBlocks = copyObject(blocks.slice(endIndex, startIndex + 1));
                    blockIds = selectedBlocks.map((v) => v.id);
                }
                else {
                    selectedBlocks = copyObject(blocks.slice(startIndex, endIndex + 1));
                    blockIds = selectedBlocks.map((v) => v.id);
                }
            }
            if (!this.enabled && blockIds.length > 1) {
                this.enabled = true;
                this.changed = true;
                this.editor.blur();
            }
            if (this.enabled) {
                this.selectBlocks(selectedBlocks);
            }
        });
        this.editor = editor;
        this.eventEmitter = eventEmitter;
    }
    selectBlocks(blocks) {
        this.selectedBlocks = blocks;
        this.sendBlockSelectedEvent(blocks.map((v) => v.id));
    }
    setStart(id) {
        this.startBlockId = id;
    }
    sendBlockSelectedEvent(blockIds) {
        this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_SELECTED, blockIds);
    }
    onInit() {
        this.eventEmitter.info('init selector module');
        this.addBinding({
            key: KeyCodes.BACKSPACE,
            prevented: true,
            handler: this._handleBackspace.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_UP,
            prevented: true,
            shiftKey: true,
            handler: this._handleSelectorUp.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_DOWN,
            prevented: true,
            shiftKey: true,
            handler: this._handleSelectorDown.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_UP,
            handler: this._handleKeyUp.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_DOWN,
            handler: this._handleKeyDown.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_LEFT,
            handler: this._handleReset.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ARROW_RIGHT,
            handler: this._handleReset.bind(this),
        });
        this.addBinding({
            key: KeyCodes.A,
            shortKey: true,
            handler: this._handleSelectAll.bind(this),
        });
        this.addBinding({
            key: KeyCodes.ESC,
            handler: this._handleReset.bind(this),
        });
        this.addBinding({
            key: KeyCodes.TAB,
            prevented: true,
            handler: this._handleIndent.bind(this),
        });
        this.addBinding({
            key: KeyCodes.TAB,
            shiftKey: true,
            prevented: true,
            handler: this._handleOutdent.bind(this),
        });
    }
    onDestroy() {
        this.eventEmitter.info('destroy selector module');
    }
    mouseDown(e) {
        if (e.shiftKey && this.startBlockId) {
            const blocks = this.editor.getBlocks();
            const [blockId] = getBlockId(e.target);
            const startIndex = blocks.findIndex((v) => v.id === this.startBlockId);
            const endIndex = blocks.findIndex((v) => v.id === blockId);
            if (startIndex === -1 || endIndex === -1)
                return;
            this.selectBlocks(blocks.slice(startIndex < endIndex ? startIndex : endIndex, (endIndex > startIndex ? endIndex : startIndex) + 1));
            return;
        }
        this.reset();
        const [blockId] = getBlockId(e.target);
        if (!blockId)
            return;
        this.mousePressed = true;
        this.startBlockId = blockId;
    }
    mouseUp(e) {
        if (this.areaSelecting) {
            this.areaEnd(e);
            return;
        }
        this.mousePressed = false;
        setTimeout(() => {
            this.changed = false;
        });
    }
    areaStart(e) {
        var _a;
        const [blockId] = getBlockId(e.target);
        if (blockId)
            return;
        const blocks = this.editor.getBlocks();
        let startBlockIndex;
        for (let i = 0; i < blocks.length; i++) {
            const blockEl = getBlockElementById(blocks[i].id);
            const rect = blockEl === null || blockEl === void 0 ? void 0 : blockEl.getBoundingClientRect();
            if (rect && rect.top < e.clientY && rect.top + rect.height > e.clientY) {
                startBlockIndex = i;
                break;
            }
        }
        const container = getScrollContainer(this.editor.getSettings().scrollContainer);
        const containerScrollTop = container ? container.scrollTop : 0;
        const scrollEl = document.scrollingElement;
        const bodyScrollTop = (_a = scrollEl === null || scrollEl === void 0 ? void 0 : scrollEl.scrollTop) !== null && _a !== void 0 ? _a : 0;
        this.area.start = {
            top: e.clientY,
            left: e.clientX,
            bodyScrollTop,
            containerScrollTop,
            blockIndex: startBlockIndex !== null && startBlockIndex !== void 0 ? startBlockIndex : null,
        };
        this.area.end = null;
        this.areaSelecting = true;
        if (!document.getElementById('shibuya-area-selector')) {
            this.areaEl = document.createElement('div');
            this.areaEl.setAttribute('id', 'shibuya-area-selector');
            this.areaEl.style.backgroundColor = 'rgba(46,170,220,0.2)';
            this.areaEl.style.borderRadius = '8px';
            this.areaEl.style.position = 'absolute';
            document.body.appendChild(this.areaEl);
        }
    }
    areaMove(e) {
        var _a, _b, _c, _d, _e;
        if (!this.area.start)
            return;
        let isUpward = false;
        const container = getScrollContainer(this.editor.getSettings().scrollContainer);
        const containerScrollTop = container ? container.scrollTop : 0;
        const scrollEl = document.scrollingElement;
        const bodyScrollTop = (_a = scrollEl === null || scrollEl === void 0 ? void 0 : scrollEl.scrollTop) !== null && _a !== void 0 ? _a : 0;
        this.area.end = { top: e.clientY, left: e.clientX, bodyScrollTop, containerScrollTop };
        const startTop = this.area.start.bodyScrollTop + this.area.start.top;
        const endTop = bodyScrollTop + this.area.end.top;
        const startLeft = this.area.start.left;
        const endLeft = this.area.end.left;
        let area = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        };
        if (startTop < endTop) {
            area.top = startTop;
            area.height = endTop - startTop;
        }
        else {
            area.top = endTop;
            area.height = startTop - endTop;
        }
        if (startLeft < endLeft) {
            area.left = startLeft;
            area.width = endLeft - startLeft;
        }
        else {
            area.left = endLeft;
            area.width = startLeft - endLeft;
        }
        if (containerScrollTop + startTop > containerScrollTop + endTop) {
            isUpward = true;
        }
        if (this.areaEl) {
            this.areaEl.style.top = `${area.top}px`;
            this.areaEl.style.left = `${area.left}px`;
            this.areaEl.style.height = `${area.height}px`;
            this.areaEl.style.width = `${area.width}px`;
        }
        const editorRect = container
            ? (_c = (_b = this.editor.getEditorRef().parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()
            : this.editor.getEditorRef().getBoundingClientRect();
        if (!editorRect)
            return;
        if (((editorRect.x < area.left && editorRect.x + editorRect.width > area.left + area.width) ||
            (editorRect.x > area.left && editorRect.x < area.left + area.width) ||
            (editorRect.x + editorRect.width < area.left + area.width &&
                editorRect.x + editorRect.width > area.left)) &&
            ((editorRect.y < area.top &&
                editorRect.y + editorRect.height > area.top - bodyScrollTop + area.height) ||
                (editorRect.y > area.top && editorRect.y < area.top - bodyScrollTop + area.height) ||
                (editorRect.y + editorRect.height < area.top - bodyScrollTop + area.height &&
                    editorRect.y + editorRect.height > area.top - bodyScrollTop))) {
            const blocks = this.editor.getBlocks();
            let blockIds = [];
            let selectedBlocks = [];
            if (isUpward) {
                for (let i = (_d = this.area.start.blockIndex) !== null && _d !== void 0 ? _d : blocks.length - 1; i >= 0; i--) {
                    const blockEl = getBlockElementById(blocks[i].id);
                    const rect = blockEl === null || blockEl === void 0 ? void 0 : blockEl.getBoundingClientRect();
                    if (rect && rect.top + rect.height > e.clientY) {
                        blockIds.push(blocks[i].id);
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                for (let i = (_e = this.area.start.blockIndex) !== null && _e !== void 0 ? _e : 0; i < blocks.length; i++) {
                    const blockEl = getBlockElementById(blocks[i].id);
                    const rect = blockEl === null || blockEl === void 0 ? void 0 : blockEl.getBoundingClientRect();
                    if (rect && rect.top <= e.clientY) {
                        if (container && area.top >= rect.top + bodyScrollTop) {
                            continue;
                        }
                        blockIds.push(blocks[i].id);
                    }
                    else {
                        break;
                    }
                }
            }
            selectedBlocks = copyObject(blocks.filter((v) => blockIds.includes(v.id)));
            this.selectBlocks(selectedBlocks);
        }
        else {
            this.selectBlocks([]);
        }
    }
    areaEnd(e) {
        setTimeout(() => {
            this.area.start = null;
            this.area.end = null;
            this.areaSelecting = false;
            if (this.areaEl) {
                this.areaEl.remove();
                this.areaEl = null;
            }
        });
    }
    reset(e) {
        if (this.changed)
            return;
        if (this.areaSelecting && e && this.area.start) {
            const movedX = e.clientX - this.area.start.left;
            const movedY = e.clientY - this.area.start.top;
            if ((movedX < -5 || movedX > 5) && (movedY < -5 || movedY > 5)) {
                return;
            }
        }
        this.mousePressed = false;
        this.enabled = false;
        this.startBlockId = null;
        this.selectBlocks([]);
    }
    getSelectedBlocks() {
        return this.selectedBlocks;
    }
    addBinding(props) {
        this.bindings.push(props);
    }
    onKeyDown(e) {
        let prevented = false;
        this.bindings.forEach((binding) => {
            if (this._trigger(e, binding)) {
                prevented = true;
            }
        });
        if (prevented) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    _trigger(e, props) {
        const { key, metaKey = false, ctrlKey = false, shiftKey = false, shortKey = false, altKey = false, prevented = false, handler, } = props;
        if (shortKey && !e[ShortKey])
            return false;
        if (!shortKey) {
            if ((metaKey && !e.metaKey) || (!metaKey && e.metaKey))
                return false;
            if ((ctrlKey && !e.ctrlKey) || (!ctrlKey && e.ctrlKey))
                return false;
        }
        else {
            if (metaKey && !e.metaKey)
                return false;
            if (ctrlKey && !e.ctrlKey)
                return false;
        }
        if ((shiftKey && !e.shiftKey) || (!shiftKey && e.shiftKey))
            return false;
        if ((altKey && !e.altKey) || (!altKey && e.altKey))
            return false;
        if (key !== e.code)
            return false;
        handler(this.editor, e);
        return prevented;
    }
    _handleBackspace(editor) {
        const selectedBlocks = editor.getModule('selector').getSelectedBlocks();
        if (selectedBlocks.length < 1)
            return;
        editor.getModule('editor').deleteBlocks(selectedBlocks.map((block) => block.id));
        this.reset();
    }
    _handleSelectorUp() {
        const blocks = this.editor.getBlocks();
        const startIndex = this.selectedBlocks.findIndex((v) => v.id === this.startBlockId);
        if (startIndex === -1)
            return;
        if (startIndex === this.selectedBlocks.length - 1) {
            const index = blocks.findIndex((v) => this.selectedBlocks[0].id === v.id);
            if (index === -1 || !blocks[index - 1])
                return;
            this.selectBlocks([blocks[index - 1], ...this.selectedBlocks]);
        }
        else {
            this.selectBlocks(this.selectedBlocks.slice(0, -1));
        }
    }
    _handleSelectorDown() {
        const blocks = this.editor.getBlocks();
        const startIndex = this.selectedBlocks.findIndex((v) => v.id === this.startBlockId);
        if (startIndex === -1)
            return;
        if (startIndex === 0) {
            const index = blocks.findIndex((v) => this.selectedBlocks[this.selectedBlocks.length - 1].id === v.id);
            if (index === -1 || !blocks[index + 1])
                return;
            this.selectBlocks([...this.selectedBlocks, blocks[index + 1]]);
        }
        else {
            this.selectBlocks(this.selectedBlocks.slice(1));
        }
    }
    _handleReset(editor, e) {
        e.preventDefault();
        if (this.startBlockId) {
            const length = this.editor.getBlockLength(this.startBlockId);
            editor.setCaretPosition({
                blockId: this.startBlockId,
                index: length !== null && length !== void 0 ? length : 0,
            });
            editor.updateCaretRect();
        }
        this.reset();
    }
    _handleKeyUp(editor, e) {
        e.preventDefault();
        if (this.selectedBlocks.length < 1)
            return;
        if (this.selectedBlocks.length > 1) {
            this.selectBlocks(this.selectedBlocks.filter((v) => v.id === this.startBlockId));
            return;
        }
        const blocks = this.editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === this.startBlockId);
        if (currentIndex === -1 || currentIndex < 1)
            return;
        const nextBlock = blocks[currentIndex - 1];
        this.startBlockId = nextBlock.id;
        this.selectBlocks([nextBlock]);
    }
    _handleKeyDown(editor, e) {
        e.preventDefault();
        if (this.selectedBlocks.length < 1)
            return;
        if (this.selectedBlocks.length > 1) {
            this.selectBlocks(this.selectedBlocks.filter((v) => v.id === this.startBlockId));
            return;
        }
        const blocks = this.editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === this.startBlockId);
        if (currentIndex === -1 || currentIndex >= blocks.length - 1)
            return;
        const nextBlock = blocks[currentIndex + 1];
        this.startBlockId = nextBlock.id;
        this.selectBlocks([nextBlock]);
    }
    _handleSelectAll(editor, event) {
        const blocks = editor.getBlocks();
        event.preventDefault();
        editor.getModule('selector').selectBlocks(blocks);
        return;
    }
    _handleIndent(editor, event) {
        var _a;
        event.preventDefault();
        const blocks = editor.getBlocks();
        const { indentatableFormats } = editor.getSettings();
        const affectedIds = [];
        for (let i = 0; i < this.selectedBlocks.length; i++) {
            const blockIndex = blocks.findIndex((v) => v.id === this.selectedBlocks[i].id);
            if (blockIndex === -1)
                return;
            if (!blocks[blockIndex] || !indentatableFormats.includes(blocks[blockIndex].type))
                return;
            if (blocks[blockIndex].attributes.indent > 6)
                return;
            editor.updateBlock(Object.assign(Object.assign({}, blocks[blockIndex]), { attributes: Object.assign(Object.assign({}, blocks[blockIndex].attributes), { indent: ((_a = blocks[blockIndex].attributes.indent) !== null && _a !== void 0 ? _a : 0) + 1 }) }));
            affectedIds.push(this.selectedBlocks[i].id);
        }
        editor.numberingList();
        editor.render(affectedIds);
        return;
    }
    _handleOutdent(editor, event) {
        var _a;
        event.preventDefault();
        const blocks = editor.getBlocks();
        const { indentatableFormats } = editor.getSettings();
        const affectedIds = [];
        for (let i = 0; i < this.selectedBlocks.length; i++) {
            const blockIndex = blocks.findIndex((v) => v.id === this.selectedBlocks[i].id);
            if (blockIndex === -1)
                return;
            if (!blocks[blockIndex] || !indentatableFormats.includes(blocks[blockIndex].type))
                return;
            if (((_a = blocks[blockIndex].attributes.indent) !== null && _a !== void 0 ? _a : 0) < 1)
                return;
            const indent = blocks[blockIndex].attributes.indent - 1;
            editor.updateBlock(Object.assign(Object.assign({}, blocks[blockIndex]), { attributes: Object.assign(Object.assign({}, blocks[blockIndex].attributes), { indent: indent !== 0 ? indent : false }) }));
            affectedIds.push(this.selectedBlocks[i].id);
        }
        editor.numberingList();
        editor.render(affectedIds);
        return;
    }
}

// These methods let you build a transform function from a transformComponent
// function for OT types like JSON0 in which operations are lists of components
// and transforming them requires N^2 work. I find it kind of nasty that I need
// this, but I'm not really sure what a better solution is. Maybe I should do
// this automatically to types that don't have a compose function defined.

// Add transform and transformX functions for an OT type which has
// transformComponent defined.  transformComponent(destination array,
// component, other component, side)
var bootstrapTransform_1 = bootstrapTransform;
function bootstrapTransform(type, transformComponent, checkValidOp, append) {
  var transformComponentX = function(left, right, destLeft, destRight) {
    transformComponent(destLeft, left, right, 'left');
    transformComponent(destRight, right, left, 'right');
  };

  var transformX = type.transformX = function(leftOp, rightOp) {
    checkValidOp(leftOp);
    checkValidOp(rightOp);
    var newRightOp = [];

    for (var i = 0; i < rightOp.length; i++) {
      var rightComponent = rightOp[i];

      // Generate newLeftOp by composing leftOp by rightComponent
      var newLeftOp = [];
      var k = 0;
      while (k < leftOp.length) {
        var nextC = [];
        transformComponentX(leftOp[k], rightComponent, newLeftOp, nextC);
        k++;

        if (nextC.length === 1) {
          rightComponent = nextC[0];
        } else if (nextC.length === 0) {
          for (var j = k; j < leftOp.length; j++) {
            append(newLeftOp, leftOp[j]);
          }
          rightComponent = null;
          break;
        } else {
          // Recurse.
          var pair = transformX(leftOp.slice(k), nextC);
          for (var l = 0; l < pair[0].length; l++) {
            append(newLeftOp, pair[0][l]);
          }
          for (var r = 0; r < pair[1].length; r++) {
            append(newRightOp, pair[1][r]);
          }
          rightComponent = null;
          break;
        }
      }

      if (rightComponent != null) {
        append(newRightOp, rightComponent);
      }
      leftOp = newLeftOp;
    }
    return [leftOp, newRightOp];
  };

  // Transforms op with specified type ('left' or 'right') by otherOp.
  type.transform = function(op, otherOp, type) {
    if (!(type === 'left' || type === 'right'))
      throw new Error("type must be 'left' or 'right'");

    if (otherOp.length === 0) return op;

    if (op.length === 1 && otherOp.length === 1)
      return transformComponent([], op[0], otherOp[0], type);

    if (type === 'left')
      return transformX(op, otherOp)[0];
    else
      return transformX(otherOp, op)[1];
  };
}

var text0 = {exports: {}};

// DEPRECATED!
//
// This type works, but is not exported. Its included here because the JSON0
// embedded string operations use this library.


// A simple text implementation
//
// Operations are lists of components. Each component either inserts or deletes
// at a specified position in the document.
//
// Components are either:
//  {i:'str', p:100}: Insert 'str' at position 100 in the document
//  {d:'str', p:100}: Delete 'str' at position 100 in the document
//
// Components in an operation are executed sequentially, so the position of components
// assumes previous components have already executed.
//
// Eg: This op:
//   [{i:'abc', p:0}]
// is equivalent to this op:
//   [{i:'a', p:0}, {i:'b', p:1}, {i:'c', p:2}]

var text$1 = text0.exports = {
  name: 'text0',
  uri: 'http://sharejs.org/types/textv0',
  create: function(initial) {
    if ((initial != null) && typeof initial !== 'string') {
      throw new Error('Initial data must be a string');
    }
    return initial || '';
  }
};

/** Insert s2 into s1 at pos. */
var strInject = function(s1, pos, s2) {
  return s1.slice(0, pos) + s2 + s1.slice(pos);
};

/** Check that an operation component is valid. Throws if its invalid. */
var checkValidComponent = function(c) {
  if (typeof c.p !== 'number')
    throw new Error('component missing position field');

  if ((typeof c.i === 'string') === (typeof c.d === 'string'))
    throw new Error('component needs an i or d field');

  if (c.p < 0)
    throw new Error('position cannot be negative');
};

/** Check that an operation is valid */
var checkValidOp = function(op) {
  for (var i = 0; i < op.length; i++) {
    checkValidComponent(op[i]);
  }
};

/** Apply op to snapshot */
text$1.apply = function(snapshot, op) {
  var deleted;

  checkValidOp(op);
  for (var i = 0; i < op.length; i++) {
    var component = op[i];
    if (component.i != null) {
      snapshot = strInject(snapshot, component.p, component.i);
    } else {
      deleted = snapshot.slice(component.p, component.p + component.d.length);
      if (component.d !== deleted)
        throw new Error("Delete component '" + component.d + "' does not match deleted text '" + deleted + "'");

      snapshot = snapshot.slice(0, component.p) + snapshot.slice(component.p + component.d.length);
    }
  }
  return snapshot;
};

/**
 * Append a component to the end of newOp. Exported for use by the random op
 * generator and the JSON0 type.
 */
var append = text$1._append = function(newOp, c) {
  if (c.i === '' || c.d === '') return;

  if (newOp.length === 0) {
    newOp.push(c);
  } else {
    var last = newOp[newOp.length - 1];

    if (last.i != null && c.i != null && last.p <= c.p && c.p <= last.p + last.i.length) {
      // Compose the insert into the previous insert
      newOp[newOp.length - 1] = {i:strInject(last.i, c.p - last.p, c.i), p:last.p};

    } else if (last.d != null && c.d != null && c.p <= last.p && last.p <= c.p + c.d.length) {
      // Compose the deletes together
      newOp[newOp.length - 1] = {d:strInject(c.d, last.p - c.p, last.d), p:c.p};

    } else {
      newOp.push(c);
    }
  }
};

/** Compose op1 and op2 together */
text$1.compose = function(op1, op2) {
  checkValidOp(op1);
  checkValidOp(op2);
  var newOp = op1.slice();
  for (var i = 0; i < op2.length; i++) {
    append(newOp, op2[i]);
  }
  return newOp;
};

/** Clean up an op */
text$1.normalize = function(op) {
  var newOp = [];

  // Normalize should allow ops which are a single (unwrapped) component:
  // {i:'asdf', p:23}.
  // There's no good way to test if something is an array:
  // http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
  // so this is probably the least bad solution.
  if (op.i != null || op.p != null) op = [op];

  for (var i = 0; i < op.length; i++) {
    var c = op[i];
    if (c.p == null) c.p = 0;

    append(newOp, c);
  }

  return newOp;
};

// This helper method transforms a position by an op component.
//
// If c is an insert, insertAfter specifies whether the transform
// is pushed after the insert (true) or before it (false).
//
// insertAfter is optional for deletes.
var transformPosition = function(pos, c, insertAfter) {
  // This will get collapsed into a giant ternary by uglify.
  if (c.i != null) {
    if (c.p < pos || (c.p === pos && insertAfter)) {
      return pos + c.i.length;
    } else {
      return pos;
    }
  } else {
    // I think this could also be written as: Math.min(c.p, Math.min(c.p -
    // otherC.p, otherC.d.length)) but I think its harder to read that way, and
    // it compiles using ternary operators anyway so its no slower written like
    // this.
    if (pos <= c.p) {
      return pos;
    } else if (pos <= c.p + c.d.length) {
      return c.p;
    } else {
      return pos - c.d.length;
    }
  }
};

// Helper method to transform a cursor position as a result of an op.
//
// Like transformPosition above, if c is an insert, insertAfter specifies
// whether the cursor position is pushed after an insert (true) or before it
// (false).
text$1.transformCursor = function(position, op, side) {
  var insertAfter = side === 'right';
  for (var i = 0; i < op.length; i++) {
    position = transformPosition(position, op[i], insertAfter);
  }

  return position;
};

// Transform an op component by another op component. Asymmetric.
// The result will be appended to destination.
//
// exported for use in JSON type
var transformComponent = text$1._tc = function(dest, c, otherC, side) {
  //var cIntersect, intersectEnd, intersectStart, newC, otherIntersect, s;

  checkValidComponent(c);
  checkValidComponent(otherC);

  if (c.i != null) {
    // Insert.
    append(dest, {i:c.i, p:transformPosition(c.p, otherC, side === 'right')});
  } else {
    // Delete
    if (otherC.i != null) {
      // Delete vs insert
      var s = c.d;
      if (c.p < otherC.p) {
        append(dest, {d:s.slice(0, otherC.p - c.p), p:c.p});
        s = s.slice(otherC.p - c.p);
      }
      if (s !== '')
        append(dest, {d: s, p: c.p + otherC.i.length});

    } else {
      // Delete vs delete
      if (c.p >= otherC.p + otherC.d.length)
        append(dest, {d: c.d, p: c.p - otherC.d.length});
      else if (c.p + c.d.length <= otherC.p)
        append(dest, c);
      else {
        // They overlap somewhere.
        var newC = {d: '', p: c.p};

        if (c.p < otherC.p)
          newC.d = c.d.slice(0, otherC.p - c.p);

        if (c.p + c.d.length > otherC.p + otherC.d.length)
          newC.d += c.d.slice(otherC.p + otherC.d.length - c.p);

        // This is entirely optional - I'm just checking the deleted text in
        // the two ops matches
        var intersectStart = Math.max(c.p, otherC.p);
        var intersectEnd = Math.min(c.p + c.d.length, otherC.p + otherC.d.length);
        var cIntersect = c.d.slice(intersectStart - c.p, intersectEnd - c.p);
        var otherIntersect = otherC.d.slice(intersectStart - otherC.p, intersectEnd - otherC.p);
        if (cIntersect !== otherIntersect)
          throw new Error('Delete ops delete different text in the same region of the document');

        if (newC.d !== '') {
          newC.p = transformPosition(newC.p, otherC);
          append(dest, newC);
        }
      }
    }
  }

  return dest;
};

var invertComponent = function(c) {
  return (c.i != null) ? {d:c.i, p:c.p} : {i:c.d, p:c.p};
};

// No need to use append for invert, because the components won't be able to
// cancel one another.
text$1.invert = function(op) {
  // Shallow copy & reverse that sucka.
  op = op.slice().reverse();
  for (var i = 0; i < op.length; i++) {
    op[i] = invertComponent(op[i]);
  }
  return op;
};

bootstrapTransform_1(text$1, transformComponent, checkValidOp, append);

/*
 This is the implementation of the JSON OT type.

 Spec is here: https://github.com/josephg/ShareJS/wiki/JSON-Operations

 Note: This is being made obsolete. It will soon be replaced by the JSON2 type.
*/

/**
 * UTILITY FUNCTIONS
 */

/**
 * Checks if the passed object is an Array instance. Can't use Array.isArray
 * yet because its not supported on IE8.
 *
 * @param obj
 * @returns {boolean}
 */
var isArray = function(obj) {
  return Object.prototype.toString.call(obj) == '[object Array]';
};

/**
 * Checks if the passed object is an Object instance.
 * No function call (fast) version
 *
 * @param obj
 * @returns {boolean}
 */
var isObject = function(obj) {
  return (!!obj) && (obj.constructor === Object);
};

/**
 * Clones the passed object using JSON serialization (which is slow).
 *
 * hax, copied from test/types/json. Apparently this is still the fastest way
 * to deep clone an object, assuming we have browser support for JSON.  @see
 * http://jsperf.com/cloning-an-object/12
 */
var clone = function(o) {
  return JSON.parse(JSON.stringify(o));
};

/**
 * JSON OT Type
 * @type {*}
 */
var json = {
  name: 'json0',
  uri: 'http://sharejs.org/types/JSONv0'
};

// You can register another OT type as a subtype in a JSON document using
// the following function. This allows another type to handle certain
// operations instead of the builtin JSON type.
var subtypes = {};
json.registerSubtype = function(subtype) {
  subtypes[subtype.name] = subtype;
};

json.create = function(data) {
  // Null instead of undefined if you don't pass an argument.
  return data === undefined ? null : clone(data);
};

json.invertComponent = function(c) {
  var c_ = {p: c.p};

  // handle subtype ops
  if (c.t && subtypes[c.t]) {
    c_.t = c.t;
    c_.o = subtypes[c.t].invert(c.o);
  }

  if (c.si !== void 0) c_.sd = c.si;
  if (c.sd !== void 0) c_.si = c.sd;
  if (c.oi !== void 0) c_.od = c.oi;
  if (c.od !== void 0) c_.oi = c.od;
  if (c.li !== void 0) c_.ld = c.li;
  if (c.ld !== void 0) c_.li = c.ld;
  if (c.na !== void 0) c_.na = -c.na;

  if (c.lm !== void 0) {
    c_.lm = c.p[c.p.length-1];
    c_.p = c.p.slice(0,c.p.length-1).concat([c.lm]);
  }

  return c_;
};

json.invert = function(op) {
  var op_ = op.slice().reverse();
  var iop = [];
  for (var i = 0; i < op_.length; i++) {
    iop.push(json.invertComponent(op_[i]));
  }
  return iop;
};

json.checkValidOp = function(op) {
  for (var i = 0; i < op.length; i++) {
    if (!isArray(op[i].p)) throw new Error('Missing path');
  }
};

json.checkList = function(elem) {
  if (!isArray(elem))
    throw new Error('Referenced element not a list');
};

json.checkObj = function(elem) {
  if (!isObject(elem)) {
    throw new Error("Referenced element not an object (it was " + JSON.stringify(elem) + ")");
  }
};

// helper functions to convert old string ops to and from subtype ops
function convertFromText(c) {
  c.t = 'text0';
  var o = {p: c.p.pop()};
  if (c.si != null) o.i = c.si;
  if (c.sd != null) o.d = c.sd;
  c.o = [o];
}

function convertToText(c) {
  c.p.push(c.o[0].p);
  if (c.o[0].i != null) c.si = c.o[0].i;
  if (c.o[0].d != null) c.sd = c.o[0].d;
  delete c.t;
  delete c.o;
}

json.apply = function(snapshot, op) {
  json.checkValidOp(op);

  op = clone(op);

  var container = {
    data: snapshot
  };

  for (var i = 0; i < op.length; i++) {
    var c = op[i];

    // convert old string ops to use subtype for backwards compatibility
    if (c.si != null || c.sd != null)
      convertFromText(c);

    var parent = null;
    var elem = container;
    var key = 'data';

    for (var j = 0; j < c.p.length; j++) {
      var p = c.p[j];

      parent = elem;
      elem = elem[key];
      key = p;

      if (parent == null)
        throw new Error('Path invalid');
    }

    // handle subtype ops
    if (c.t && c.o !== void 0 && subtypes[c.t]) {
      elem[key] = subtypes[c.t].apply(elem[key], c.o);

    // Number add
    } else if (c.na !== void 0) {
      if (typeof elem[key] != 'number')
        throw new Error('Referenced element not a number');

      elem[key] += c.na;
    }

    // List replace
    else if (c.li !== void 0 && c.ld !== void 0) {
      json.checkList(elem);
      // Should check the list element matches c.ld
      elem[key] = c.li;
    }

    // List insert
    else if (c.li !== void 0) {
      json.checkList(elem);
      elem.splice(key,0, c.li);
    }

    // List delete
    else if (c.ld !== void 0) {
      json.checkList(elem);
      // Should check the list element matches c.ld here too.
      elem.splice(key,1);
    }

    // List move
    else if (c.lm !== void 0) {
      json.checkList(elem);
      if (c.lm != key) {
        var e = elem[key];
        // Remove it...
        elem.splice(key,1);
        // And insert it back.
        elem.splice(c.lm,0,e);
      }
    }

    // Object insert / replace
    else if (c.oi !== void 0) {
      json.checkObj(elem);

      // Should check that elem[key] == c.od
      elem[key] = c.oi;
    }

    // Object delete
    else if (c.od !== void 0) {
      json.checkObj(elem);

      // Should check that elem[key] == c.od
      delete elem[key];
    }

    else {
      throw new Error('invalid / missing instruction in op');
    }
  }

  return container.data;
};

// Helper to break an operation up into a bunch of small ops.
json.shatter = function(op) {
  var results = [];
  for (var i = 0; i < op.length; i++) {
    results.push([op[i]]);
  }
  return results;
};

// Helper for incrementally applying an operation to a snapshot. Calls yield
// after each op component has been applied.
json.incrementalApply = function(snapshot, op, _yield) {
  for (var i = 0; i < op.length; i++) {
    var smallOp = [op[i]];
    snapshot = json.apply(snapshot, smallOp);
    // I'd just call this yield, but thats a reserved keyword. Bah!
    _yield(smallOp, snapshot);
  }

  return snapshot;
};

// Checks if two paths, p1 and p2 match.
var pathMatches = json.pathMatches = function(p1, p2, ignoreLast) {
  if (p1.length != p2.length)
    return false;

  for (var i = 0; i < p1.length; i++) {
    if (p1[i] !== p2[i] && (!ignoreLast || i !== p1.length - 1))
      return false;
  }

  return true;
};

json.append = function(dest,c) {
  c = clone(c);

  if (dest.length === 0) {
    dest.push(c);
    return;
  }

  var last = dest[dest.length - 1];

  // convert old string ops to use subtype for backwards compatibility
  if ((c.si != null || c.sd != null) && (last.si != null || last.sd != null)) {
    convertFromText(c);
    convertFromText(last);
  }

  if (pathMatches(c.p, last.p)) {
    // handle subtype ops
    if (c.t && last.t && c.t === last.t && subtypes[c.t]) {
      last.o = subtypes[c.t].compose(last.o, c.o);

      // convert back to old string ops
      if (c.si != null || c.sd != null) {
        var p = c.p;
        for (var i = 0; i < last.o.length - 1; i++) {
          c.o = [last.o.pop()];
          c.p = p.slice();
          convertToText(c);
          dest.push(c);
        }

        convertToText(last);
      }
    } else if (last.na != null && c.na != null) {
      dest[dest.length - 1] = {p: last.p, na: last.na + c.na};
    } else if (last.li !== undefined && c.li === undefined && c.ld === last.li) {
      // insert immediately followed by delete becomes a noop.
      if (last.ld !== undefined) {
        // leave the delete part of the replace
        delete last.li;
      } else {
        dest.pop();
      }
    } else if (last.od !== undefined && last.oi === undefined && c.oi !== undefined && c.od === undefined) {
      last.oi = c.oi;
    } else if (last.oi !== undefined && c.od !== undefined) {
      // The last path component inserted something that the new component deletes (or replaces).
      // Just merge them.
      if (c.oi !== undefined) {
        last.oi = c.oi;
      } else if (last.od !== undefined) {
        delete last.oi;
      } else {
        // An insert directly followed by a delete turns into a no-op and can be removed.
        dest.pop();
      }
    } else if (c.lm !== undefined && c.p[c.p.length - 1] === c.lm) ; else {
      dest.push(c);
    }
  } else {
    // convert string ops back
    if ((c.si != null || c.sd != null) && (last.si != null || last.sd != null)) {
      convertToText(c);
      convertToText(last);
    }

    dest.push(c);
  }
};

json.compose = function(op1,op2) {
  json.checkValidOp(op1);
  json.checkValidOp(op2);

  var newOp = clone(op1);

  for (var i = 0; i < op2.length; i++) {
    json.append(newOp,op2[i]);
  }

  return newOp;
};

json.normalize = function(op) {
  var newOp = [];

  op = isArray(op) ? op : [op];

  for (var i = 0; i < op.length; i++) {
    var c = op[i];
    if (c.p == null) c.p = [];

    json.append(newOp,c);
  }

  return newOp;
};

// Returns the common length of the paths of ops a and b
json.commonLengthForOps = function(a, b) {
  var alen = a.p.length;
  var blen = b.p.length;
  if (a.na != null || a.t)
    alen++;

  if (b.na != null || b.t)
    blen++;

  if (alen === 0) return -1;
  if (blen === 0) return null;

  alen--;
  blen--;

  for (var i = 0; i < alen; i++) {
    var p = a.p[i];
    if (i >= blen || p !== b.p[i])
      return null;
  }

  return alen;
};

// Returns true if an op can affect the given path
json.canOpAffectPath = function(op, path) {
  return json.commonLengthForOps({p:path}, op) != null;
};

// transform c so it applies to a document with otherC applied.
json.transformComponent = function(dest, c, otherC, type) {
  c = clone(c);

  var common = json.commonLengthForOps(otherC, c);
  var common2 = json.commonLengthForOps(c, otherC);
  var cplength = c.p.length;
  var otherCplength = otherC.p.length;

  if (c.na != null || c.t)
    cplength++;

  if (otherC.na != null || otherC.t)
    otherCplength++;

  // if c is deleting something, and that thing is changed by otherC, we need to
  // update c to reflect that change for invertibility.
  if (common2 != null && otherCplength > cplength && c.p[common2] == otherC.p[common2]) {
    if (c.ld !== void 0) {
      var oc = clone(otherC);
      oc.p = oc.p.slice(cplength);
      c.ld = json.apply(clone(c.ld),[oc]);
    } else if (c.od !== void 0) {
      var oc = clone(otherC);
      oc.p = oc.p.slice(cplength);
      c.od = json.apply(clone(c.od),[oc]);
    }
  }

  if (common != null) {
    var commonOperand = cplength == otherCplength;

    // backward compatibility for old string ops
    var oc = otherC;
    if ((c.si != null || c.sd != null) && (otherC.si != null || otherC.sd != null)) {
      convertFromText(c);
      oc = clone(otherC);
      convertFromText(oc);
    }

    // handle subtype ops
    if (oc.t && subtypes[oc.t]) {
      if (c.t && c.t === oc.t) {
        var res = subtypes[c.t].transform(c.o, oc.o, type);

        // convert back to old string ops
        if (c.si != null || c.sd != null) {
          var p = c.p;
          for (var i = 0; i < res.length; i++) {
            c.o = [res[i]];
            c.p = p.slice();
            convertToText(c);
            json.append(dest, c);
          }
        } else if (!isArray(res) || res.length > 0) {
          c.o = res;
          json.append(dest, c);
        }

        return dest;
      }
    }

    // transform based on otherC
    else if (otherC.na !== void 0) ; else if (otherC.li !== void 0 && otherC.ld !== void 0) {
      if (otherC.p[common] === c.p[common]) {
        // noop

        if (!commonOperand) {
          return dest;
        } else if (c.ld !== void 0) {
          // we're trying to delete the same element, -> noop
          if (c.li !== void 0 && type === 'left') {
            // we're both replacing one element with another. only one can survive
            c.ld = clone(otherC.li);
          } else {
            return dest;
          }
        }
      }
    } else if (otherC.li !== void 0) {
      if (c.li !== void 0 && c.ld === undefined && commonOperand && c.p[common] === otherC.p[common]) {
        // in li vs. li, left wins.
        if (type === 'right')
          c.p[common]++;
      } else if (otherC.p[common] <= c.p[common]) {
        c.p[common]++;
      }

      if (c.lm !== void 0) {
        if (commonOperand) {
          // otherC edits the same list we edit
          if (otherC.p[common] <= c.lm)
            c.lm++;
          // changing c.from is handled above.
        }
      }
    } else if (otherC.ld !== void 0) {
      if (c.lm !== void 0) {
        if (commonOperand) {
          if (otherC.p[common] === c.p[common]) {
            // they deleted the thing we're trying to move
            return dest;
          }
          // otherC edits the same list we edit
          var p = otherC.p[common];
          var from = c.p[common];
          var to = c.lm;
          if (p < to || (p === to && from < to))
            c.lm--;

        }
      }

      if (otherC.p[common] < c.p[common]) {
        c.p[common]--;
      } else if (otherC.p[common] === c.p[common]) {
        if (otherCplength < cplength) {
          // we're below the deleted element, so -> noop
          return dest;
        } else if (c.ld !== void 0) {
          if (c.li !== void 0) {
            // we're replacing, they're deleting. we become an insert.
            delete c.ld;
          } else {
            // we're trying to delete the same element, -> noop
            return dest;
          }
        }
      }

    } else if (otherC.lm !== void 0) {
      if (c.lm !== void 0 && cplength === otherCplength) {
        // lm vs lm, here we go!
        var from = c.p[common];
        var to = c.lm;
        var otherFrom = otherC.p[common];
        var otherTo = otherC.lm;
        if (otherFrom !== otherTo) {
          // if otherFrom == otherTo, we don't need to change our op.

          // where did my thing go?
          if (from === otherFrom) {
            // they moved it! tie break.
            if (type === 'left') {
              c.p[common] = otherTo;
              if (from === to) // ugh
                c.lm = otherTo;
            } else {
              return dest;
            }
          } else {
            // they moved around it
            if (from > otherFrom) c.p[common]--;
            if (from > otherTo) c.p[common]++;
            else if (from === otherTo) {
              if (otherFrom > otherTo) {
                c.p[common]++;
                if (from === to) // ugh, again
                  c.lm++;
              }
            }

            // step 2: where am i going to put it?
            if (to > otherFrom) {
              c.lm--;
            } else if (to === otherFrom) {
              if (to > from)
                c.lm--;
            }
            if (to > otherTo) {
              c.lm++;
            } else if (to === otherTo) {
              // if we're both moving in the same direction, tie break
              if ((otherTo > otherFrom && to > from) ||
                  (otherTo < otherFrom && to < from)) {
                if (type === 'right') c.lm++;
              } else {
                if (to > from) c.lm++;
                else if (to === otherFrom) c.lm--;
              }
            }
          }
        }
      } else if (c.li !== void 0 && c.ld === undefined && commonOperand) {
        // li
        var from = otherC.p[common];
        var to = otherC.lm;
        p = c.p[common];
        if (p > from) c.p[common]--;
        if (p > to) c.p[common]++;
      } else {
        // ld, ld+li, si, sd, na, oi, od, oi+od, any li on an element beneath
        // the lm
        //
        // i.e. things care about where their item is after the move.
        var from = otherC.p[common];
        var to = otherC.lm;
        p = c.p[common];
        if (p === from) {
          c.p[common] = to;
        } else {
          if (p > from) c.p[common]--;
          if (p > to) c.p[common]++;
          else if (p === to && from > to) c.p[common]++;
        }
      }
    }
    else if (otherC.oi !== void 0 && otherC.od !== void 0) {
      if (c.p[common] === otherC.p[common]) {
        if (c.oi !== void 0 && commonOperand) {
          // we inserted where someone else replaced
          if (type === 'right') {
            // left wins
            return dest;
          } else {
            // we win, make our op replace what they inserted
            c.od = otherC.oi;
          }
        } else {
          // -> noop if the other component is deleting the same object (or any parent)
          return dest;
        }
      }
    } else if (otherC.oi !== void 0) {
      if (c.oi !== void 0 && c.p[common] === otherC.p[common]) {
        // left wins if we try to insert at the same place
        if (type === 'left') {
          json.append(dest,{p: c.p, od:otherC.oi});
        } else {
          return dest;
        }
      }
    } else if (otherC.od !== void 0) {
      if (c.p[common] == otherC.p[common]) {
        if (!commonOperand)
          return dest;
        if (c.oi !== void 0) {
          delete c.od;
        } else {
          return dest;
        }
      }
    }
  }

  json.append(dest,c);
  return dest;
};

bootstrapTransform_1(json, json.transformComponent, json.checkValidOp, json.append);

/**
 * Register a subtype for string operations, using the text0 type.
 */
var text = text0.exports;

json.registerSubtype(text);
var json0 = json;

// Only the JSON type is exported, because the text type is deprecated
// otherwise. (If you want to use it somewhere, you're welcome to pull it out
// into a separate module that json0 can depend on).

var lib = {
  type: json0
};

function getTextLength(ops = []) {
    let length = 0;
    ops.forEach((op) => {
        if (op.li) {
            length += stringLength(op.li.text.replaceAll(/\uFEFF/gi, ''));
        }
        if (op.ld) {
            length -= stringLength(op.ld.text.replaceAll(/\uFEFF/gi, ''));
        }
        if (op.si) {
            length += stringLength(op.si.replaceAll(/\uFEFF/gi, ''));
        }
        if (op.sd) {
            length -= stringLength(op.sd.replaceAll(/\uFEFF/gi, ''));
        }
    });
    return length;
}
function getStartIndex(contents, ops = []) {
    let textIndex = 0;
    let arrayIndex = 0;
    ops.forEach((op) => {
        if (!op.p || op.p[0] !== 'contents')
            return;
        if (arrayIndex === 0 || arrayIndex >= op.p[1]) {
            arrayIndex = op.p[1];
            if (arrayIndex === 0 ||
                arrayIndex !== op.p[1] ||
                (arrayIndex === op.p[1] && textIndex > op.p[3])) {
                textIndex = op.p[3];
            }
        }
    });
    let index = 0;
    for (let i = 0; i < contents.length; i++) {
        if (arrayIndex === i) {
            // emoji support
            const currentTextIndex = stringLength(contents[i].text.slice(0, textIndex));
            index += currentTextIndex;
            break;
        }
        index += stringLength(contents[i].text);
    }
    return index;
}

const defaultOptions = {
    maxStack: 50,
    delay: 1000,
};
class HistoryModule {
    constructor({ eventEmitter, editor, options }) {
        this.stack = {
            undo: [],
            redo: [],
        };
        this.tmpUndo = [];
        this.debouncedOptimizeOp = () => { };
        this.isUpdating = false;
        this.subs = new Subscription();
        this.editor = editor;
        this.options = Object.assign(Object.assign({}, defaultOptions), options);
        this.eventEmitter = eventEmitter;
    }
    onInit() {
        this.eventEmitter.info('init history module');
        const sub = this.eventEmitter
            .select(EditorEvents.EVENT_EDITOR_HISTORY_PUSH)
            .subscribe(({ payload, source }) => {
            if (source === EventSources.USER) {
                if (this.isUpdating)
                    return;
                if (Array.isArray(payload)) {
                    setTimeout(() => {
                        payload.forEach((op) => {
                            this.record(op);
                        });
                    }, 20);
                }
                else {
                    setTimeout(() => this.record(payload), 20);
                }
            }
            if (source === EventSources.COLLABORATOR) {
                if (Array.isArray(payload)) {
                    this.transformMultiLineOp(payload);
                }
                else {
                    this.transform(payload);
                }
            }
        });
        this.subs.add(sub);
        this.debouncedOptimizeOp = debounce(this.options.delay, () => {
            this.optimizeOp();
        });
    }
    onDestroy() {
        this.eventEmitter.info('destroy history module');
        this.subs.unsubscribe();
        this.stack = {
            undo: [],
            redo: [],
        };
        this.tmpUndo = [];
    }
    record(op, force = false) {
        this.stack.redo = [];
        const position = this.editor.getCaretPosition();
        if (position) {
            op.position = position;
        }
        if (op.type === HistoryType.UPDATE_CONTENTS && (op.undo.length < 1 || op.redo.length < 1)) {
            return;
        }
        this.tmpUndo.push(op);
        if (force) {
            this.optimizeOp();
        }
        else {
            this.debouncedOptimizeOp();
        }
    }
    // Deleting the operation history to avoid interfering with each other's changes during collaborative editing.
    transform(transformOp) {
        this.stack.undo = this.stack.undo
            .map((ops) => {
            return ops.filter((op) => {
                return transformOp.blockId !== op.blockId;
            });
        })
            .filter((ops) => ops.length > 0);
        this.stack.redo = this.stack.redo
            .map((ops) => {
            return ops.filter((op) => {
                return transformOp.blockId !== op.blockId;
            });
        })
            .filter((ops) => ops.length > 0);
        const caret = this.editor.getCaretPosition();
        if (caret && caret.blockId === transformOp.blockId) {
            if (transformOp.type === HistoryType.UPDATE_CONTENTS && transformOp.redo) {
                this.editor.blur();
                const block = this.editor.getBlock(caret.blockId);
                const affectedLength = getTextLength(transformOp.redo);
                const startIndex = block ? getStartIndex(block.contents, transformOp.redo) : 0;
                setTimeout(() => {
                    if (startIndex > caret.index) {
                        this.editor.setCaretPosition(Object.assign({}, caret));
                    }
                    else {
                        this.editor.setCaretPosition(Object.assign(Object.assign({}, caret), { index: caret.index + affectedLength }));
                        this.editor.updateCaretRect();
                    }
                }, 10);
            }
        }
    }
    // Deleting the operation history to avoid interfering with each other's changes during collaborative editing.
    transformMultiLineOp(transformOps) {
        const ids = transformOps.map((v) => v.blockId);
        this.stack.undo = this.stack.undo
            .map((ops) => {
            return ops.filter((op) => {
                return !ids.includes(op.blockId);
            });
        })
            .filter((ops) => ops.length > 0);
        this.stack.redo = this.stack.redo
            .map((ops) => {
            return ops.filter((op) => {
                return !ids.includes(op.blockId);
            });
        })
            .filter((ops) => ops.length > 0);
    }
    optimizeOp() {
        if (this.tmpUndo.length < 1)
            return;
        let optimizedUndo = [];
        const updateOps = this.tmpUndo
            .filter((tmp) => tmp.type === HistoryType.UPDATE_CONTENTS)
            .reverse();
        const otherOps = this.tmpUndo.filter((tmp) => tmp.type !== HistoryType.UPDATE_CONTENTS);
        otherOps.forEach((tmp) => {
            const index = optimizedUndo.findIndex((v) => v.blockId === tmp.blockId && v.type === tmp.type);
            if (index === -1) {
                optimizedUndo.push(tmp);
                return;
            }
        });
        updateOps.forEach((tmp) => {
            const index = optimizedUndo.findIndex((v) => v.blockId === tmp.blockId && v.type === tmp.type);
            if (index === -1) {
                optimizedUndo.push(tmp);
                return;
            }
            if (tmp.type === HistoryType.UPDATE_CONTENTS &&
                optimizedUndo[index].type === HistoryType.UPDATE_CONTENTS) {
                if (optimizedUndo[index].undo && tmp.undo) {
                    optimizedUndo[index].undo = lib.type.compose(optimizedUndo[index].undo, tmp.undo);
                }
                if (optimizedUndo[index].redo && tmp.redo) {
                    optimizedUndo[index].redo = lib.type.compose(tmp.redo, optimizedUndo[index].redo);
                }
            }
        });
        this.tmpUndo = [];
        this.stack.undo.push(optimizedUndo);
        setTimeout(() => {
            this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_CHANGED, copyObject(optimizedUndo));
        });
        if (this.stack.undo.length > this.options.maxStack) {
            this.stack.undo.shift();
        }
    }
    undo() {
        if (this.tmpUndo.length > 0) {
            this.optimizeOp();
        }
        const ops = this.stack.undo.pop();
        if (ops && ops.length > 0) {
            this.isUpdating = true;
            this.editor.blur();
            const affectedIds = [];
            const addOps = ops.filter((v) => v.type === HistoryType.ADD_BLOCK);
            const removeOps = ops.filter((v) => v.type === HistoryType.REMOVE_BLOCK);
            const updateOps = ops.filter((v) => v.type === HistoryType.UPDATE_CONTENTS);
            updateOps.forEach((op, i) => {
                this.executeJson0(op.blockId, op.undo);
                affectedIds.push(op.blockId);
                if (i === updateOps.length - 1 && addOps.length < 1 && removeOps.length < 1) {
                    this.moveCaret(op, op.position, 'undo');
                }
            });
            addOps.forEach((op, i) => {
                this.editor.deleteBlock(op.blockId);
                affectedIds.push(op.blockId);
                if (i === 0 && removeOps.length < 1) {
                    setTimeout(() => {
                        var _a, _b;
                        const textIndex = (_b = this.editor.getBlockLength((_a = op.prevBlockId) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : 0;
                        this.editor.setCaretPosition({
                            blockId: op.prevBlockId,
                            index: textIndex,
                        });
                        this.editor.updateCaretRect();
                    }, 10);
                }
            });
            removeOps.forEach((op, i) => {
                if (op.prevBlockId) {
                    this.editor.createBlock(copyObject(op.block), op.prevBlockId);
                }
                else {
                    this.editor.createBlock(copyObject(op.block), op.prevBlockId, 'prepend');
                }
                affectedIds.push(op.blockId);
                if (i === removeOps.length - 1) {
                    setTimeout(() => {
                        var _a;
                        const textIndex = (_a = this.editor.getBlockLength(op.blockId)) !== null && _a !== void 0 ? _a : 0;
                        this.editor.setCaretPosition({
                            blockId: op.blockId,
                            index: textIndex,
                        });
                        this.editor.updateCaretRect();
                    }, 10);
                }
            });
            this.stack.redo.push(ops);
            setTimeout(() => {
                const chenged = ops.map((v) => {
                    if (v.type !== 'update_contents')
                        return v;
                    return Object.assign(Object.assign({}, v), { undo: v.redo, redo: v.undo });
                });
                this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_CHANGED, copyObject(chenged));
            });
            this.editor.numberingList();
            this.editor.render(affectedIds);
            this.isUpdating = false;
        }
    }
    redo() {
        if (this.tmpUndo.length > 0) {
            this.optimizeOp();
        }
        const ops = this.stack.redo.pop();
        if (ops && ops.length > 0) {
            this.isUpdating = true;
            this.editor.blur();
            const affectedIds = [];
            const addOps = ops.filter((v) => v.type === HistoryType.ADD_BLOCK);
            const removeOps = ops.filter((v) => v.type === HistoryType.REMOVE_BLOCK);
            const updateOps = ops.filter((v) => v.type === HistoryType.UPDATE_CONTENTS);
            removeOps.forEach((op, i) => {
                this.editor.deleteBlock(op.blockId);
                affectedIds.push(op.blockId);
                if (i === 0 && addOps.length < 1 && updateOps.length < 1) {
                    setTimeout(() => {
                        var _a, _b;
                        const blocks = this.editor.getBlocks();
                        const focusBlockId = (_a = op.prevBlockId) !== null && _a !== void 0 ? _a : blocks[0].id;
                        const textIndex = (_b = this.editor.getBlockLength(focusBlockId)) !== null && _b !== void 0 ? _b : 0;
                        this.editor.setCaretPosition({
                            blockId: focusBlockId,
                            index: textIndex,
                        });
                        this.editor.updateCaretRect();
                    }, 10);
                }
            });
            addOps.forEach((op, i) => {
                this.editor.createBlock(copyObject(op.block), op.prevBlockId);
                affectedIds.push(op.blockId);
                if (i === addOps.length - 1 && updateOps.length < 1) {
                    setTimeout(() => {
                        var _a;
                        const textIndex = (_a = this.editor.getBlockLength(op.blockId)) !== null && _a !== void 0 ? _a : 0;
                        this.editor.setCaretPosition({
                            blockId: op.blockId,
                            index: textIndex,
                        });
                        this.editor.updateCaretRect();
                    }, 10);
                }
            });
            updateOps.forEach((op, i) => {
                switch (op.type) {
                    case HistoryType.UPDATE_CONTENTS: {
                        this.executeJson0(op.blockId, op.redo);
                        affectedIds.push(op.blockId);
                        if (i === updateOps.length - 1) {
                            this.moveCaret(op, op.position, 'redo');
                        }
                        break;
                    }
                }
            });
            this.stack.undo.push(ops);
            setTimeout(() => {
                this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_CHANGED, copyObject(ops));
            });
            this.editor.numberingList();
            this.editor.render(affectedIds);
            this.isUpdating = false;
        }
    }
    executeJson0(blockId, ops) {
        try {
            const block = this.editor.getBlock(blockId);
            if (!block)
                return;
            const updatedBlock = lib.type.apply(block, ops);
            this.editor.updateBlock(Object.assign(Object.assign({}, updatedBlock), { contents: updatedBlock.contents.map((content) => {
                    var _a, _b, _c, _d, _e;
                    return {
                        id: (_a = content.id) !== null && _a !== void 0 ? _a : v4(),
                        attributes: (_b = content.attributes) !== null && _b !== void 0 ? _b : {},
                        text: (_c = content.text) !== null && _c !== void 0 ? _c : '',
                        type: (_d = content.type) !== null && _d !== void 0 ? _d : 'TEXT',
                        isEmbed: (_e = content.isEmbed) !== null && _e !== void 0 ? _e : false,
                    };
                }) }), EventSources.USER);
        }
        catch (e) {
            this.eventEmitter.info('Failed to restore hisotry', e);
        }
    }
    moveCaret(op, position, type = 'undo') {
        var _a, _b, _c;
        if (!position) {
            const blockLength = (_a = this.editor.getBlockLength(op.blockId)) !== null && _a !== void 0 ? _a : 0;
            setTimeout(() => {
                this.editor.setCaretPosition({
                    blockId: op.blockId,
                    index: blockLength,
                    length: 0,
                });
                this.editor.updateCaretRect();
            }, 10);
            return;
        }
        const ops = type === 'undo' ? op.undo : op.redo;
        let affectedLength = type === 'undo' ? getTextLength(ops) : 0;
        let positionIndex = (_b = position.index) !== null && _b !== void 0 ? _b : 0;
        let positionLength = (_c = position.length) !== null && _c !== void 0 ? _c : 0;
        setTimeout(() => {
            var _a;
            const blockLength = (_a = this.editor.getBlockLength(position.blockId)) !== null && _a !== void 0 ? _a : 0;
            if (positionIndex + affectedLength + positionLength > blockLength) {
                affectedLength = 0;
            }
            if (positionIndex + positionLength > blockLength) {
                positionLength = 0;
            }
            this.editor.setCaretPosition({
                blockId: position.blockId,
                index: positionIndex + affectedLength,
                length: positionLength,
            });
            this.editor.updateCaretRect();
        }, 20);
    }
}

class ClipboardModule {
    constructor({ eventEmitter, editor }) {
        this.clipboardEl = null;
        this.subs = new Subscription();
        this.editor = editor;
        this.editorRef = this.editor.getEditorRef();
        this.eventEmitter = eventEmitter;
    }
    onInit() {
        var _a, _b;
        this.eventEmitter.info('init clipboard module');
        const editorRef = this.editor.getEditorRef();
        this.clipboardEl = (_b = (_a = editorRef === null || editorRef === void 0 ? void 0 : editorRef.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.clipboard')) !== null && _b !== void 0 ? _b : null;
        this.subs.add(this.eventEmitter
            .select(EditorEvents.EVENT_BLOCK_SELECTED)
            .subscribe((blockIds) => {
            if (!this.clipboardEl || blockIds.length < 1)
                return;
            const range = new Range();
            const selection = document.getSelection();
            if (!selection)
                return;
            range.setStart(this.clipboardEl, 0);
            range.setEnd(this.clipboardEl, 0);
            selection.removeAllRanges();
            selection.addRange(range);
        }));
    }
    onDestroy() {
        this.eventEmitter.info('destroy clipboard module');
        this.subs.unsubscribe();
    }
    onPaste(event) {
        var _a, _b;
        event.preventDefault();
        const caretPosition = this.editor.getCaretPosition();
        const dataTransferItems = (_a = event.clipboardData.items) !== null && _a !== void 0 ? _a : [];
        const files = [];
        for (let i = 0; i < dataTransferItems.length; i++) {
            const file = dataTransferItems[i].getAsFile();
            if (file)
                files.push(file);
        }
        // file upload
        if (files.length > 0) {
            this.editor.getModule('uploader').upload(files);
            return;
        }
        const clipboardJson = event.clipboardData.getData('text/shibuya-formats');
        const prevBlock = this.editor.getBlock((_b = caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.blockId) !== null && _b !== void 0 ? _b : '');
        if (caretPosition && prevBlock && clipboardJson) {
            const { type, data } = JSON.parse(clipboardJson);
            // blocks
            if (prevBlock && type === 'blocks') {
                const appendBlocks = data;
                let prevBlockId = prevBlock.id;
                const affectedIds = appendBlocks.map((v, i) => {
                    const appendBlock = Object.assign(Object.assign({}, v), { id: v4() });
                    this.editor.createBlock(appendBlock, prevBlockId);
                    prevBlockId = appendBlock.id;
                    return appendBlock.id;
                });
                this.editor.numberingList();
                this.editor.render(affectedIds);
                setTimeout(() => {
                    var _a;
                    const textIndex = (_a = this.editor.getBlockLength(prevBlockId)) !== null && _a !== void 0 ? _a : 0;
                    this.editor.setCaretPosition({
                        blockId: prevBlockId,
                        index: textIndex,
                    });
                    this.editor.updateCaretRect();
                }, 10);
            }
            else if (type === 'inlines') {
                const appendContents = data;
                let contents = copyObject(prevBlock.contents);
                if (caretPosition.length > 0) {
                    contents = deleteInlineContents(contents, caretPosition.index, caretPosition.length);
                }
                const [first, last] = splitInlineContents(contents, caretPosition.index);
                const appendTextLength = stringLength(appendContents
                    .map((v) => v.text)
                    .join('')
                    .replaceAll(/\uFEFF/gi, ''));
                this.editor.updateBlock(Object.assign(Object.assign({}, prevBlock), { contents: [
                        ...first,
                        ...appendContents.map((v) => {
                            return Object.assign(Object.assign({}, v), { id: v4() });
                        }),
                        ...last,
                    ] }));
                this.editor.render([prevBlock.id]);
                setTimeout(() => {
                    this.editor.setCaretPosition({
                        blockId: prevBlock.id,
                        index: caretPosition.index + appendTextLength,
                    });
                    this.editor.updateCaretRect();
                }, 10);
            }
            return;
        }
        const clipboardText = event.clipboardData.getData('text/plain');
        const linkRegExp = new RegExp(`^https?://[a-zA-Z0-9-_.!'()*;/?:@&=+$,%#]+$`, 'i');
        const linkMatch = clipboardText.match(linkRegExp);
        // if it was url
        if (prevBlock && caretPosition && linkMatch) {
            if (caretPosition.length > 0) {
                this.editor.formatText(prevBlock.id, caretPosition.index, caretPosition.length, {
                    link: linkMatch[0],
                });
                setTimeout(() => {
                    this.editor.setCaretPosition({
                        blockId: prevBlock.id,
                        index: caretPosition.index,
                        length: caretPosition.length,
                    });
                    this.editor.updateCaretRect();
                }, 10);
            }
            else {
                const [first, last] = splitInlineContents(copyObject(prevBlock.contents), caretPosition.index);
                const appendContent = createInline('TEXT', clipboardText, { link: linkMatch[0] });
                this.editor.updateBlock(Object.assign(Object.assign({}, prevBlock), { contents: [...first, appendContent, ...last] }));
                this.editor.render([prevBlock.id]);
                setTimeout(() => {
                    this.editor.setCaretPosition({
                        blockId: prevBlock.id,
                        index: caretPosition.index + stringLength(clipboardText),
                    });
                    this.editor.updateCaretRect();
                }, 10);
            }
            return;
        }
        if (prevBlock && caretPosition && clipboardText.length > 0) {
            let contents = copyObject(prevBlock.contents);
            if (caretPosition.length > 0) {
                contents = deleteInlineContents(contents, caretPosition.index, caretPosition.length);
            }
            const [first, last] = splitInlineContents(contents, caretPosition.index);
            const appendContent = createInline('TEXT', clipboardText);
            this.editor.updateBlock(Object.assign(Object.assign({}, prevBlock), { contents: [...first, appendContent, ...last] }));
            this.editor.render([prevBlock.id]);
            setTimeout(() => {
                this.editor.setCaretPosition({
                    blockId: prevBlock.id,
                    index: caretPosition.index + stringLength(clipboardText),
                });
                this.editor.updateCaretRect();
            }, 10);
            return;
        }
    }
    onCopy(event) {
        var _a;
        event.preventDefault();
        const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
        if (selectedBlocks.length > 0) {
            // block
            this._saveBlocks(event.nativeEvent, selectedBlocks);
        }
        else {
            // inline
            const caretPosition = this.editor.getCaretPosition();
            const block = this.editor.getBlock((_a = caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.blockId) !== null && _a !== void 0 ? _a : '');
            if (block && caretPosition && !caretPosition.collapsed && caretPosition.length > 0) {
                const inlineContents = getInlineContents(block.contents, caretPosition.index, caretPosition.length);
                this._saveInlineContents(event.nativeEvent, inlineContents);
            }
        }
    }
    onCut(event) {
        var _a;
        event.preventDefault();
        const caretPosition = this.editor.getCaretPosition();
        const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
        if (selectedBlocks.length > 0) {
            // block
            this._saveBlocks(event.nativeEvent, selectedBlocks);
            this.editor.getModule('editor').deleteBlocks(selectedBlocks.map((block) => block.id));
            this.editor.getModule('selector').reset();
        }
        else if (caretPosition && !caretPosition.collapsed && caretPosition.length > 0) {
            // inline
            const block = this.editor.getBlock((_a = caretPosition === null || caretPosition === void 0 ? void 0 : caretPosition.blockId) !== null && _a !== void 0 ? _a : '');
            if (block) {
                const caretIndex = caretPosition.index;
                const inlineContents = getInlineContents(block.contents, caretPosition.index, caretPosition.length);
                this._saveInlineContents(event.nativeEvent, inlineContents);
                const deletedContents = deleteInlineContents(block.contents, caretPosition.index, caretPosition.length);
                this.editor.updateBlock(Object.assign(Object.assign({}, block), { contents: deletedContents }));
                this.editor.blur();
                this.editor.render([block.id]);
                setTimeout(() => {
                    this.editor.setCaretPosition({ blockId: block.id, index: caretIndex });
                    this.editor.updateCaretRect();
                }, 10);
            }
        }
    }
    _saveBlocks(event, blocks) {
        if (event.clipboardData) {
            event.clipboardData.setData('text/plain', convertBlocksToText(blocks));
            event.clipboardData.setData('text/shibuya-formats', JSON.stringify({ type: 'blocks', data: blocks }));
        }
    }
    _saveInlineContents(event, inlines) {
        if (event.clipboardData) {
            const plainText = inlines.map((v) => v.text).join('');
            event.clipboardData.setData('text/plain', plainText);
            event.clipboardData.setData('text/shibuya-formats', JSON.stringify({
                type: 'inlines',
                data: inlines,
            }));
        }
    }
}

class MarkdownShortcutModule {
    constructor({ eventEmitter, editor }) {
        this.editor = editor;
        this.eventEmitter = eventEmitter;
        this.shortcuts = [];
    }
    onInit() {
        this.eventEmitter.info('init markdown module');
        this.addShortcut({
            name: 'blockquote',
            type: 'block',
            pattern: /^>$/,
            handler: this._handleBlockquote.bind(this),
        });
        this.addShortcut({
            name: 'header',
            type: 'block',
            pattern: /^#{1,6}$/,
            handler: this._handleHeader.bind(this),
        });
        this.addShortcut({
            name: 'ordered-list',
            type: 'block',
            pattern: /^1.$/,
            handler: this._handleOrderedList.bind(this),
        });
        this.addShortcut({
            name: 'bullet-list',
            type: 'block',
            pattern: /^(\*|-|\+)$/,
            handler: this._handleBulletList.bind(this),
        });
        this.addShortcut({
            name: 'image',
            type: 'block',
            pattern: /^(?:!\[(.+?)\])(?:\((.+?)(?:\s"(.+?)")?\))$/,
            handler: this._handleImage.bind(this),
        });
        this.addShortcut({
            name: 'bold',
            type: 'inline',
            pattern: /(.*)((?:\*|_){2})(.+?)((?:\*|_){2})/,
            handler: this._handleBold.bind(this),
        });
        this.addShortcut({
            name: 'italic',
            type: 'inline',
            pattern: /(.*)((?:\*|_){1})(.+?)((?:\*|_){1})/,
            handler: this._handleItalic.bind(this),
        });
        this.addShortcut({
            name: 'strike',
            type: 'inline',
            pattern: /(.*)((?:~){2})(.+?)((?:~){2})/,
            handler: this._handleStrike.bind(this),
        });
        this.addShortcut({
            name: 'code',
            type: 'inline',
            pattern: /(.*)((?:`){1})(.+?)((?:`){1})/,
            handler: this._handleInlineCode.bind(this),
        });
        this.addShortcut({
            name: 'link',
            type: 'inline',
            /* eslint-disable-next-line */
            pattern: /(.*)(?:\[(.+?)\])(?:\((https?\:\/\/.+?)\))/,
            handler: this._handleLink.bind(this),
        });
    }
    onDestroy() {
        this.eventEmitter.info('destroy markdown module');
    }
    addShortcut(props) {
        this.shortcuts.push(props);
    }
    execute() {
        var _a;
        let isExecuted = false;
        const caret = this.editor.getCaretPosition();
        if (!caret)
            return isExecuted;
        const block = this.editor.getBlock(caret.blockId);
        if (!block)
            return isExecuted;
        let targetText = block.contents.map((v) => v.text).join('');
        const targetLength = stringLength(targetText) - caret.index;
        if (targetLength > 0) {
            const removeOp = dist.remove(caret.index, targetLength);
            targetText = dist.type.apply(targetText, removeOp);
        }
        for (let i = 0; i < this.shortcuts.length; i++) {
            const match = targetText.match(this.shortcuts[i].pattern);
            if (match) {
                this.shortcuts[i].handler(caret, match);
                (_a = this.editor.getModule('history')) === null || _a === void 0 ? void 0 : _a.optimizeOp();
                isExecuted = true;
                break;
            }
        }
        return isExecuted;
    }
    formatInline(blockId, index, openeTagLength, contentLength, closeTagLength, attributes) {
        const block = this.editor.getBlock(blockId);
        if (!block)
            return;
        const deletedContents = deleteInlineContents(deleteInlineContents(block.contents, index, openeTagLength), index + contentLength, closeTagLength);
        this.editor.updateBlock(Object.assign(Object.assign({}, block), { contents: deletedContents }));
        const formatedContents = setAttributesForInlineContents(copyObject(deletedContents), attributes, index, contentLength);
        this.editor.updateBlock(Object.assign(Object.assign({}, block), { contents: formatedContents }));
        this.editor.render([block.id], true);
        setTimeout(() => {
            this.editor.setCaretPosition({
                blockId: block.id,
                index: index + contentLength,
            });
        }, 10);
    }
    formatBlock(blockId, type, index, length, attributes = {}) {
        const block = this.editor.getBlock(blockId);
        if (!block)
            return;
        this.editor.updateBlock(Object.assign(Object.assign({}, block), { contents: deleteInlineContents(block.contents, index, length), attributes: Object.assign(Object.assign({}, block.attributes), attributes), type }));
        this.editor.numberingList();
        this.editor.render([block.id]);
        setTimeout(() => {
            this.editor.setCaretPosition({
                blockId: block.id,
                index,
            });
        }, 10);
    }
    _handleBlockquote(caret, match) {
        this.formatBlock(caret.blockId, 'BLOCKQUOTE', 0, stringLength(match[0]));
    }
    _handleOrderedList(caret, match) {
        this.formatBlock(caret.blockId, 'ORDEREDLIST', 0, stringLength(match[0]));
    }
    _handleBulletList(caret, match) {
        this.formatBlock(caret.blockId, 'BULLETLIST', 0, stringLength(match[0]));
    }
    _handleImage(caret, match) {
        var _a, _b;
        this.formatBlock(caret.blockId, 'IMAGE', 0, stringLength(match[0]), {
            thumbnail: match[2],
            original: match[2],
            alt: (_a = match[1]) !== null && _a !== void 0 ? _a : '',
            title: (_b = match[3]) !== null && _b !== void 0 ? _b : '',
        });
    }
    _handleHeader(caret, match) {
        const length = stringLength(match[0]);
        switch (length) {
            case 1:
                this.formatBlock(caret.blockId, 'HEADER1', 0, length);
                break;
            case 2:
                this.formatBlock(caret.blockId, 'HEADER2', 0, length);
                break;
            case 3:
                this.formatBlock(caret.blockId, 'HEADER3', 0, length);
                break;
            case 4:
                this.formatBlock(caret.blockId, 'HEADER4', 0, length);
                break;
            case 5:
                this.formatBlock(caret.blockId, 'HEADER5', 0, length);
                break;
            case 6:
                this.formatBlock(caret.blockId, 'HEADER6', 0, length);
                break;
        }
    }
    _handleBold(caret, match) {
        const index = stringLength(match[1]);
        const openeTagLength = stringLength(match[2]);
        const contentLength = stringLength(match[3]);
        const closeTagLength = stringLength(match[4]);
        this.formatInline(caret.blockId, index, openeTagLength, contentLength, closeTagLength, {
            bold: true,
        });
    }
    _handleItalic(caret, match) {
        const index = stringLength(match[1]);
        const openeTagLength = stringLength(match[2]);
        const contentLength = stringLength(match[3]);
        const closeTagLength = stringLength(match[4]);
        this.formatInline(caret.blockId, index, openeTagLength, contentLength, closeTagLength, {
            italic: true,
        });
    }
    _handleStrike(caret, match) {
        const index = stringLength(match[1]);
        const openeTagLength = stringLength(match[2]);
        const contentLength = stringLength(match[3]);
        const closeTagLength = stringLength(match[4]);
        this.formatInline(caret.blockId, index, openeTagLength, contentLength, closeTagLength, {
            strike: true,
        });
    }
    _handleInlineCode(caret, match) {
        const index = stringLength(match[1]);
        const openeTagLength = stringLength(match[2]);
        const contentLength = stringLength(match[3]);
        const closeTagLength = stringLength(match[4]);
        this.formatInline(caret.blockId, index, openeTagLength, contentLength, closeTagLength, {
            code: true,
        });
    }
    _handleLink(caret, match) {
        const block = this.editor.getBlock(caret.blockId);
        if (!block)
            return;
        const matchLength = stringLength(match[0]);
        const index = stringLength(match[1]);
        const linkText = match[2];
        const url = match[3];
        this.editor.getModule('history').optimizeOp();
        const deletedContents = deleteInlineContents(block.contents, index, matchLength - index);
        const [first, last] = splitInlineContents(deletedContents, index);
        this.editor.updateBlock(Object.assign(Object.assign({}, block), { contents: [...first, createInline('TEXT', linkText, { link: url }), ...last] }));
        this.editor.render([caret.blockId]);
        setTimeout(() => {
            this.editor.setCaretPosition({
                blockId: block.id,
                index: index + stringLength(linkText),
            });
        }, 10);
    }
}

class UploaderModule {
    constructor({ eventEmitter, editor, options }) {
        this.editor = editor;
        this.eventEmitter = eventEmitter;
        this.options = Object.assign({}, options);
    }
    onInit() {
        this.eventEmitter.info('init uploader module');
    }
    onDestroy() {
        this.eventEmitter.info('destroy uploader module');
    }
    upload(files, blockId) {
        if (!this.options.onUpload || typeof this.options.onUpload !== 'function')
            return;
        files.forEach((file) => {
            const isImage = !!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp)/i);
            if (isImage) {
                const fileReader = new FileReader();
                fileReader.onload = (event) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const addedBlock = this.editor.getModule('editor').createBlock({
                        prevId: blockId,
                        type: 'IMAGE',
                        attributes: {
                            thumbnail: event.target.result,
                        },
                        meta: {
                            isUploading: true,
                        },
                    });
                    setTimeout(() => {
                        const el = getBlockElementById(addedBlock.id);
                        el === null || el === void 0 ? void 0 : el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 20);
                    const res = yield this.options.onUpload({
                        original: file,
                        base64: event.target.result,
                        isImage,
                    });
                    if (!res) {
                        // todo: error;
                        this.editor.deleteBlock(addedBlock.id);
                        this.editor.render();
                        return;
                    }
                    this.editor.updateBlock(Object.assign(Object.assign({}, addedBlock), { attributes: { thumbnail: (_a = res === null || res === void 0 ? void 0 : res.thumbnail) !== null && _a !== void 0 ? _a : res.original }, meta: {
                            isUploading: false,
                        } }));
                    this.editor.render([addedBlock.id]);
                });
                fileReader.readAsDataURL(file);
            }
            else {
                const fileReader = new FileReader();
                fileReader.onload = (event) => __awaiter(this, void 0, void 0, function* () {
                    const addedBlock = this.editor.getModule('editor').createBlock({
                        prevId: blockId,
                        type: 'FILE',
                        attributes: {
                            fileName: file.name,
                            original: event.target.result,
                            size: file.size,
                        },
                        meta: {
                            isUploading: true,
                        },
                    });
                    setTimeout(() => {
                        const el = getBlockElementById(addedBlock.id);
                        el === null || el === void 0 ? void 0 : el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 20);
                    const res = yield this.options.onUpload({
                        original: file,
                        base64: event.target.result,
                        isImage,
                    });
                    if (!res) {
                        // todo: error;
                        this.editor.deleteBlock(addedBlock.id);
                        this.editor.render();
                        return;
                    }
                    this.editor.updateBlock(Object.assign(Object.assign({}, addedBlock), { 
                        // attributes: { thumbnail: res?.thumbnail ?? res.original },
                        meta: {
                            isUploading: false,
                        } }));
                    this.editor.render([addedBlock.id]);
                });
                fileReader.readAsDataURL(file);
            }
        });
        //const base64images = await this.options.onUpload(files);
    }
}

class DragDropModule {
    constructor({ eventEmitter, editor }) {
        this.editor = editor;
        this.eventEmitter = eventEmitter;
    }
    onInit() {
        this.eventEmitter.info('init dnd module');
    }
    onDestroy() {
        this.eventEmitter.info('destroy dnd module');
    }
    handleDrop(e) {
        e.preventDefault();
        if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length < 1)
            return;
        const [blockId] = getBlockId(e.target);
        const files = Array.from(e.dataTransfer.files);
        this.editor.getModule('uploader').upload(files, blockId);
    }
}

const EnterLinkContainer = He.div `
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
  display: flex;
`;
const PreviewContainer = He.div `
  position: absolute;
  min-width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  color: #444;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Info = He.div `
  margin-right: 8px;
`;
const Link = He.a `
  padding: 0 8px;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const LinkInput = He.input ``;
const ButtonContainer = He.div `
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 8px;
  }
`;
const Button = He.button ``;
const SingleButton = He(Button) `
  margin-left: 16px;
`;
const LinkPopup = React__namespace.memo((_a) => {
    var _b, _c, _d, _e, _f;
    var { editor, scrollContainer, onFocus, onBlur, onLinkSave } = _a, props = __rest(_a, ["editor", "scrollContainer", "onFocus", "onBlur", "onLinkSave"]);
    const [formats, setFormats] = React__namespace.useState({});
    const [inline, setInline] = React__namespace.useState();
    const [linkUrl, setLinkUrl] = React__namespace.useState('');
    const [popupMode, setPopupMode] = React__namespace.useState();
    const [popupOpen, setPopupOpen] = React__namespace.useState(false);
    const [popupPosition, setPopupPosition] = React__namespace.useState();
    const [currentCaretPosition, setCurrentCaretPosition] = React__namespace.useState();
    const modalRef = React__namespace.useRef(null);
    const handleChange = React__namespace.useCallback((event) => {
        setLinkUrl(event.target.value);
    }, [linkUrl]);
    const handleSave = React__namespace.useCallback((event) => {
        event.preventDefault();
        // attributeにlinkがないときは新規追加する
        if (!inline) {
            editor.getModule('toolbar').formatInline({ link: linkUrl }, currentCaretPosition);
            setPopupOpen(false);
            setLinkUrl('');
            setTimeout(() => {
                editor.focus();
            }, 10);
            return;
        }
        // それ以外はlinkを更新する
        if (!currentCaretPosition)
            return;
        const block = editor.getBlock(currentCaretPosition.blockId);
        if (!block)
            return;
        const inlineIndex = block.contents.findIndex((v) => v.id === inline.id);
        if (inlineIndex === -1)
            return;
        editor.updateBlock(Object.assign(Object.assign({}, block), { contents: copyObject([
                ...block.contents.slice(0, inlineIndex),
                Object.assign(Object.assign({}, block.contents[inlineIndex]), { attributes: Object.assign(Object.assign({}, block.contents[inlineIndex].attributes), { link: linkUrl }) }),
                ...block.contents.slice(inlineIndex + 1),
            ]) }));
        editor.render([block.id]);
        setPopupOpen(false);
        setLinkUrl('');
        setTimeout(() => {
            editor.focus();
        }, 10);
    }, [linkUrl, inline, currentCaretPosition]);
    const handleClose = React__namespace.useCallback(() => {
        setPopupOpen(false);
        setLinkUrl('');
    }, []);
    const handleEdit = React__namespace.useCallback(() => {
        const eventEmitter = editor.getEventEmitter();
        eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
            mode: 'openEnterLink',
            inline,
            caretPosition: currentCaretPosition,
        });
    }, [inline, currentCaretPosition]);
    const handleRemove = React__namespace.useCallback(() => {
        if (!currentCaretPosition || !inline)
            return;
        const block = editor.getBlock(currentCaretPosition.blockId);
        if (!block)
            return;
        const inlineIndex = block.contents.findIndex((v) => v.id === inline.id);
        if (inlineIndex === -1)
            return;
        editor.updateBlock(Object.assign(Object.assign({}, block), { contents: copyObject([
                ...block.contents.slice(0, inlineIndex),
                Object.assign(Object.assign({}, block.contents[inlineIndex]), { attributes: Object.assign(Object.assign({}, block.contents[inlineIndex].attributes), { link: false }) }),
                ...block.contents.slice(inlineIndex + 1),
            ]) }));
        editor.render([block.id]);
        setPopupOpen(false);
        setLinkUrl('');
        setTimeout(() => {
            editor.focus();
        }, 10);
    }, [inline]);
    React__namespace.useEffect(() => {
        const subs = new Subscription();
        const eventEmitter = editor.getEventEmitter();
        subs.add(eventEmitter.select(EditorEvents.EVENT_LINK_CLICK).subscribe((v) => {
            var _a, _b;
            const caret = editor.getCaretPosition();
            if (!caret) {
                handleClose();
                return;
            }
            setPopupOpen(true);
            const container = getScrollContainer(scrollContainer);
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const top = ((_a = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _a !== void 0 ? _a : 0) + caret.rect.top - containerRect.top;
                const left = caret.rect.left - containerRect.left;
                setPopupPosition({ top, left });
            }
            else {
                const scrollEl = document.scrollingElement;
                const top = scrollEl.scrollTop + caret.rect.top;
                const left = caret.rect.left;
                setPopupPosition({ top, left });
            }
            setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
            if (!currentCaretPosition) {
                setCurrentCaretPosition(v.caretPosition ? v.caretPosition : caret);
            }
            if (v.mode) {
                setPopupMode(v.mode);
            }
            if (v.inline) {
                setInline(v.inline);
                setLinkUrl((_b = v.inline) === null || _b === void 0 ? void 0 : _b.attributes['link']);
            }
        }));
        return () => {
            subs.unsubscribe();
        };
    }, []);
    React__namespace.useEffect(() => {
        if (!popupOpen)
            return;
        const handleClose = (e) => {
            var _a;
            if (!((_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setPopupOpen(false);
            }
        };
        document.addEventListener('click', handleClose, true);
        return () => {
            document.removeEventListener('click', handleClose, true);
        };
    }, [popupOpen]);
    return ReactDOM__default["default"].createPortal(popupOpen && (jsxRuntime.exports.jsxs("div", Object.assign({ ref: modalRef }, { children: [popupMode === 'openEnterLink' && (jsxRuntime.exports.jsxs(EnterLinkContainer, Object.assign({ style: { top: (_b = popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.top) !== null && _b !== void 0 ? _b : 0, left: (_c = popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.left) !== null && _c !== void 0 ? _c : 0 } }, props, { children: [jsxRuntime.exports.jsx(Info, { children: "Enter link:" }), jsxRuntime.exports.jsx(LinkInput, { value: linkUrl, onFocus: onFocus, onBlur: onBlur, onChange: handleChange }), jsxRuntime.exports.jsx(SingleButton, Object.assign({ onClick: handleSave }, { children: "save" }))] }))), popupMode === 'openPreview' && (jsxRuntime.exports.jsxs(PreviewContainer, Object.assign({ style: { top: (_d = popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.top) !== null && _d !== void 0 ? _d : 0, left: (_e = popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.left) !== null && _e !== void 0 ? _e : 0 } }, props, { children: [jsxRuntime.exports.jsx("div", { children: "Visit URL:" }), jsxRuntime.exports.jsx(Link, Object.assign({ target: "_blank", rel: "noopener noreferrer", href: inline === null || inline === void 0 ? void 0 : inline.attributes['link'] }, { children: inline === null || inline === void 0 ? void 0 : inline.attributes['link'] })), jsxRuntime.exports.jsxs(ButtonContainer, { children: [jsxRuntime.exports.jsx(Button, Object.assign({ onClick: handleEdit }, { children: "edit" })), jsxRuntime.exports.jsx(Button, Object.assign({ onClick: handleRemove }, { children: "remove" }))] })] })))] }))), (_f = getScrollContainer(scrollContainer)) !== null && _f !== void 0 ? _f : document.body);
});

const Container = He.div `
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  cursor: text;

  deepl-inline-translate {
    display: none;
  }
`;
const Inner = He.div `
  flex-shrink: 0;
  flex-grow: 0;
`;
const MarginBottom = He.div `
  flex-shrink: 0;
  flex-grow: 1;
  user-select: none;
`;
const Selector = He.div `
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
`;
const Editor = React__namespace.memo(React__namespace.forwardRef((_a, forwardRef) => {
    var _b, _c, _d, _e, _f, _g;
    var { readOnly = false, formats, settings = {} } = _a, props = __rest(_a, ["readOnly", "formats", "settings"]);
    const [eventEmitter, eventTool] = useEventEmitter();
    const [editorRef, editor] = useEditor({
        settings: {
            // default settings
            scrollMarginTop: (_b = settings.scrollMarginTop) !== null && _b !== void 0 ? _b : 100,
            scrollMarginBottom: (_c = settings.scrollMarginBottom) !== null && _c !== void 0 ? _c : 250,
            allowFormats: (_d = settings.allowFormats) !== null && _d !== void 0 ? _d : [],
            embeddedBlocks: (_e = settings.embeddedBlocks) !== null && _e !== void 0 ? _e : ['IMAGE', 'FILE'],
            collaborationLevel: (_f = settings.collaborationLevel) !== null && _f !== void 0 ? _f : 'inline',
            indentatableFormats: (_g = settings.indentatableFormats) !== null && _g !== void 0 ? _g : ['ORDEREDLIST', 'BULLETLIST'],
            scrollContainer: settings.scrollContainer,
        },
        eventEmitter,
    });
    const containerRef = React__namespace.useRef(null);
    const [blockFormats, setBlockFormats] = React__namespace.useState({
        'toolbar/global': GlobalToolbar,
        'toolbar/bubble': BubbleToolbar,
        'block/paragraph': Paragraph,
        'block/orderedlist': OrderedList,
        'block/bulletlist': BulletList,
        'block/header1': Header1,
        'block/header2': Header2,
        'block/header3': Header3,
        'block/blockquote': Blockquote,
        'block/image': Image$1,
        'block/file': File,
        'inline/text': InlineText,
        'inline/style/bold': Bold,
        'inline/style/underline': Underline,
        'inline/style/strike': Strike,
        'inline/style/code': InlineCode,
        'inline/style/italic': Italic,
        'inline/style/link': Link$1,
        'inline/style/color': Color,
        'popup/link': LinkPopup,
    });
    const [blocks, setBlocks] = React__namespace.useState([]);
    const [selectedIds, setSelectedIds] = React__namespace.useState([]);
    const handleKeyDown = React__namespace.useCallback((event) => {
        const keyboard = editor.getModule('keyboard');
        if (keyboard && keyboard instanceof KeyBoardModule) {
            keyboard.onKeyDown(event);
        }
    }, [editor]);
    const handleSelectorKeyDown = React__namespace.useCallback((event) => {
        const selector = editor.getModule('selector');
        if (selector) {
            selector.onKeyDown(event);
        }
    }, [editor]);
    const handleCopy = React__namespace.useCallback((event) => {
        const clipboard = editor.getModule('clipboard');
        if (clipboard) {
            clipboard.onCopy(event);
        }
    }, [editor]);
    const handleCut = React__namespace.useCallback((event) => {
        const clipboard = editor.getModule('clipboard');
        if (clipboard) {
            clipboard.onCut(event);
        }
    }, [editor]);
    const handleSelectorInput = React__namespace.useCallback((event) => {
        // event.preventDefault();
        // event.stopPropagation();
    }, [editor]);
    const handleCompositionStart = React__namespace.useCallback((event) => {
        const keyboard = editor.getModule('keyboard');
        if (keyboard && keyboard instanceof KeyBoardModule) {
            keyboard.onCompositionStart(event);
        }
    }, [editor]);
    const handleCompositionEnd = React__namespace.useCallback((event) => {
        const keyboard = editor.getModule('keyboard');
        if (keyboard && keyboard instanceof KeyBoardModule) {
            keyboard.onCompositionEnd(event);
        }
    }, [editor]);
    const handleInput = React__namespace.useCallback((e) => {
        const keyboard = editor.getModule('keyboard');
        if (keyboard) {
            keyboard.onInput(e);
        }
    }, []);
    const handleClick = React__namespace.useCallback((e) => {
        editor.updateCaretRect();
    }, [editor]);
    const handlePaste = React__namespace.useCallback((e) => {
        editor.getModule('clipboard').onPaste(e.nativeEvent);
    }, [editor]);
    const handleDrop = React__namespace.useCallback((e) => {
        e.preventDefault();
        editor.getModule('drag-drop').handleDrop(e.nativeEvent);
    }, [editor]);
    const handleDrag = React__namespace.useCallback((e) => {
        e.preventDefault();
    }, [editor]);
    const handleDragOver = React__namespace.useCallback((e) => {
        var _a;
        if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.getAttribute('contenteditable')) !== 'true') {
            e.preventDefault();
        }
    }, [editor]);
    const handleContainerClick = React__namespace.useCallback((e) => {
        var _a;
        const lastBlock = blocks[blocks.length - 1];
        if (!lastBlock)
            return;
        const element = getBlockElementById(lastBlock.id);
        if (!element)
            return;
        e.preventDefault();
        editor.setCaretPosition({
            blockId: lastBlock.id,
            index: (_a = editor.getBlockLength(lastBlock.id)) !== null && _a !== void 0 ? _a : 0,
        });
    }, [blocks.length]);
    React__namespace.useEffect(() => {
        var _a;
        const subs = new Subscription();
        editor.addModules([
            { name: 'logger', module: LoggerModule },
            { name: 'editor', module: EditorModule },
            { name: 'keyboard', module: KeyBoardModule },
            { name: 'toolbar', module: ToolbarModule },
            { name: 'selector', module: SelectorModule },
            { name: 'history', module: HistoryModule },
            { name: 'clipboard', module: ClipboardModule },
            { name: 'markdown-shortcut', module: MarkdownShortcutModule },
            { name: 'uploader', module: UploaderModule },
            { name: 'drag-drop', module: DragDropModule },
        ], (_a = settings === null || settings === void 0 ? void 0 : settings.modules) !== null && _a !== void 0 ? _a : {});
        subs.add(eventEmitter.select(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
            setBlocks(editor.getBlocks());
        }));
        subs.add(eventEmitter.select(EditorEvents.EVENT_BLOCK_SELECTED).subscribe((blockIds) => {
            setSelectedIds(blockIds);
        }));
        editor.render();
        return () => {
            editor.removeAllModules();
            subs.unsubscribe();
        };
    }, []);
    React__namespace.useEffect(() => {
        const handleMouseDown = (e) => {
            var _a;
            if ((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
                editor.getModule('selector').mouseDown(e);
            }
            else {
                editor.getModule('selector').areaStart(e);
            }
        };
        const handleMouseMove = (e) => {
            var _a;
            (_a = editor.getModule('selector')) === null || _a === void 0 ? void 0 : _a.mouseMove(e);
        };
        const handleMouseUp = (e) => {
            editor.getModule('selector').mouseUp(e);
        };
        const handleOutsideClick = (e) => {
            if (!editorRef.current || editorRef.current.contains(e.target)) {
                return;
            }
            editor.getModule('selector').reset(e);
        };
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    React__namespace.useEffect(() => {
        const appendFormats = formats !== null && formats !== void 0 ? formats : {};
        setBlockFormats((prevFormats) => {
            return Object.assign(Object.assign({}, prevFormats), appendFormats);
        });
    }, [formats]);
    const memoBlocks = React__namespace.useMemo(() => {
        return blocks.map((v, i) => {
            return {
                id: v.id,
                type: v.type,
                selected: selectedIds.includes(v.id),
            };
        });
    }, [blocks.length, selectedIds]);
    const memoEditor = React__namespace.useMemo(() => {
        return editor;
    }, []);
    const MemoGlobalToolbar = React__namespace.useMemo(() => {
        return blockFormats['toolbar/global'];
    }, [blockFormats]);
    const MemoBubbleToolbar = React__namespace.useMemo(() => {
        return blockFormats['toolbar/bubble'];
    }, [blockFormats]);
    const MemoLinkPopup = React__namespace.useMemo(() => {
        return blockFormats['popup/link'];
    }, [blockFormats]);
    React__namespace.useImperativeHandle(forwardRef, () => editor, [editor]);
    return (jsxRuntime.exports.jsxs(Container, Object.assign({ ref: containerRef }, props, { children: [jsxRuntime.exports.jsx(Inner, Object.assign({ ref: editorRef, onClick: handleClick, onKeyDown: handleKeyDown, onPaste: handlePaste, onCopy: handleCopy, onCut: handleCut, onDrop: handleDrop, onDrag: handleDrag, onDragOver: handleDragOver }, { children: memoBlocks.map((block, index) => {
                    return (jsxRuntime.exports.jsx(BlockContainer, { formats: blockFormats, editor: memoEditor, blockId: block.id, readOnly: readOnly, selected: block.selected, scrollContainer: settings.scrollContainer, onBeforeInput: handleInput, onCompositionStart: handleCompositionStart, onCompositionEnd: handleCompositionEnd }, block.id));
                }) })), jsxRuntime.exports.jsx(MarginBottom, { onClick: handleContainerClick }), jsxRuntime.exports.jsx(MemoGlobalToolbar, { editor: memoEditor }), jsxRuntime.exports.jsx(MemoBubbleToolbar, { editor: memoEditor, scrollContainer: settings.scrollContainer }), jsxRuntime.exports.jsx(MemoLinkPopup, { editor: memoEditor, scrollContainer: settings.scrollContainer }), jsxRuntime.exports.jsx(Selector, { contentEditable: true, className: "clipboard", onKeyDown: handleSelectorKeyDown, onBeforeInput: handleSelectorInput, onCopy: handleCopy, onCut: handleCut })] })));
}));

exports.BlockContainer = BlockContainer;
exports.Blockquote = Blockquote;
exports.Bold = Bold;
exports.BubbleToolbar = BubbleToolbar;
exports.BulletList = BulletList;
exports.ClipboardModule = ClipboardModule;
exports.Color = Color;
exports.DragDropModule = DragDropModule;
exports.Editor = Editor;
exports.EditorModule = EditorModule;
exports.File = File;
exports.GlobalToolbar = GlobalToolbar;
exports.Header1 = Header1;
exports.Header2 = Header2;
exports.Header3 = Header3;
exports.HistoryModule = HistoryModule;
exports.Image = Image$1;
exports.InlineCode = InlineCode;
exports.InlineText = InlineText;
exports.Italic = Italic;
exports.KeyBoardModule = KeyBoardModule;
exports.Link = Link$1;
exports.LoggerModule = LoggerModule;
exports.MarkdownShortcutModule = MarkdownShortcutModule;
exports.OrderedList = OrderedList;
exports.Paragraph = Paragraph;
exports.SelectorModule = SelectorModule;
exports.Strike = Strike;
exports.ToolbarModule = ToolbarModule;
exports.Underline = Underline;
exports.UploaderModule = UploaderModule;
//# sourceMappingURL=main.js.map
