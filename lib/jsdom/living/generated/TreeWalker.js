"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const impl = utils.implSymbol;

function TreeWalker() {
  throw new TypeError("Illegal constructor");
}


TreeWalker.prototype.parentNode = function parentNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].parentNode());
};

TreeWalker.prototype.firstChild = function firstChild() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].firstChild());
};

TreeWalker.prototype.lastChild = function lastChild() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].lastChild());
};

TreeWalker.prototype.previousSibling = function previousSibling() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].previousSibling());
};

TreeWalker.prototype.nextSibling = function nextSibling() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].nextSibling());
};

TreeWalker.prototype.previousNode = function previousNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].previousNode());
};

TreeWalker.prototype.nextNode = function nextNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].nextNode());
};
Object.defineProperty(TreeWalker.prototype, "root", {
  get() {
    return utils.getSameObject(this, "root", () => { return utils.tryWrapperForImpl(this[impl].root); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TreeWalker.prototype, "whatToShow", {
  get() {
    return this[impl].whatToShow;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TreeWalker.prototype, "filter", {
  get() {
    return utils.tryWrapperForImpl(this[impl].filter);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TreeWalker.prototype, "currentNode", {
  get() {
    return utils.tryWrapperForImpl(this[impl].currentNode);
  },
  set(V) {
    this[impl].currentNode = utils.tryImplForWrapper(V);
  },
  enumerable: true,
  configurable: true
});


TreeWalker.prototype[Symbol.toStringTag] = "TreeWalker";

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
    let obj = Object.create(TreeWalker.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(TreeWalker.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    this._internalSetup(obj);

    obj[impl] = new Impl.implementation(constructorArgs, privateData);
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: TreeWalker,
  expose: {
    Window: { TreeWalker: TreeWalker }
  }
};
module.exports = iface;

const Impl = require("../traversal/TreeWalker-impl.js");
