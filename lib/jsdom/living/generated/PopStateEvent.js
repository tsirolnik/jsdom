"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const Event = require("./Event.js");
const impl = utils.implSymbol;
const convertPopStateEventInit = require("./PopStateEventInit").convert;

function PopStateEvent(type) {
  if (!new.target) {
    throw new TypeError("Failed to construct 'PopStateEvent'. Please use the 'new' operator; this constructor cannot be called as a function.");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'PopStateEvent': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  args[1] = convertPopStateEventInit(args[1]);

  iface.setup(this, args);
}
Object.setPrototypeOf(PopStateEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(PopStateEvent, Event.interface);

Object.defineProperty(PopStateEvent.prototype, "state", {
  get() {
    return this[impl].state;
  },
  enumerable: true,
  configurable: true
});


PopStateEvent.prototype[Symbol.toStringTag] = "PopStateEvent";

const iface = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(PopStateEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(PopStateEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Event._internalSetup(obj);

  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    this._internalSetup(obj);

    obj[impl] = new Impl.implementation(constructorArgs, privateData);
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: PopStateEvent,
  expose: {
    Window: { PopStateEvent: PopStateEvent },
    Worker: { PopStateEvent: PopStateEvent }
  }
};
module.exports = iface;

const Impl = require("../events/PopStateEvent-impl.js");
