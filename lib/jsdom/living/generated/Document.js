"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const Node = require("./Node.js");
const impl = utils.implSymbol;
const mixin = utils.mixin;
const GlobalEventHandlers = require("./GlobalEventHandlers.js");
const NonElementParentNode = require("./NonElementParentNode.js");
const ParentNode = require("./ParentNode.js");

function Document() {

  iface.setup(this);
}
Object.setPrototypeOf(Document.prototype, Node.interface.prototype);
Object.setPrototypeOf(Document, Node.interface);

mixin(Document.prototype, GlobalEventHandlers.interface.prototype);
GlobalEventHandlers.mixedInto.push(Document);
mixin(Document.prototype, NonElementParentNode.interface.prototype);
NonElementParentNode.mixedInto.push(Document);
mixin(Document.prototype, ParentNode.interface.prototype);
ParentNode.mixedInto.push(Document);

Document.prototype.getElementsByTagName = function getElementsByTagName(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].getElementsByTagName(...args));
};

Document.prototype.getElementsByTagNameNS = function getElementsByTagNameNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError("Failed to execute 'getElementsByTagNameNS' on 'Document': 2 arguments required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
  args[0] = conversions["DOMString"](args[0]);
  }
  args[1] = conversions["DOMString"](args[1]);
  return utils.tryWrapperForImpl(this[impl].getElementsByTagNameNS(...args));
};

Document.prototype.getElementsByClassName = function getElementsByClassName(classNames) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].getElementsByClassName(...args));
};

Document.prototype.createElement = function createElement(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createElement' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createElement(...args));
};

Document.prototype.createElementNS = function createElementNS(namespace, qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError("Failed to execute 'createElementNS' on 'Document': 2 arguments required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
  args[0] = conversions["DOMString"](args[0]);
  }
  args[1] = conversions["DOMString"](args[1]);
  return utils.tryWrapperForImpl(this[impl].createElementNS(...args));
};

Document.prototype.createDocumentFragment = function createDocumentFragment() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].createDocumentFragment());
};

Document.prototype.createTextNode = function createTextNode(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createTextNode' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createTextNode(...args));
};

Document.prototype.createCDATASection = function createCDATASection(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createCDATASection' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createCDATASection(...args));
};

Document.prototype.createComment = function createComment(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createComment' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createComment(...args));
};

Document.prototype.createProcessingInstruction = function createProcessingInstruction(target, data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError("Failed to execute 'createProcessingInstruction' on 'Document': 2 arguments required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  args[1] = conversions["DOMString"](args[1]);
  return utils.tryWrapperForImpl(this[impl].createProcessingInstruction(...args));
};

Document.prototype.importNode = function importNode(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'importNode' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[1] !== undefined) {
  args[1] = conversions["boolean"](args[1]);
  } else {
    args[1] = false;
  }
  return utils.tryWrapperForImpl(this[impl].importNode(...args));
};

Document.prototype.adoptNode = function adoptNode(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'adoptNode' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  return utils.tryWrapperForImpl(this[impl].adoptNode(...args));
};

Document.prototype.createAttribute = function createAttribute(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createAttribute' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createAttribute(...args));
};

Document.prototype.createAttributeNS = function createAttributeNS(namespace, qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError("Failed to execute 'createAttributeNS' on 'Document': 2 arguments required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
  args[0] = conversions["DOMString"](args[0]);
  }
  args[1] = conversions["DOMString"](args[1]);
  return utils.tryWrapperForImpl(this[impl].createAttributeNS(...args));
};

Document.prototype.createEvent = function createEvent(_interface) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createEvent' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].createEvent(...args));
};

Document.prototype.createTreeWalker = function createTreeWalker(root) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'createTreeWalker' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 3; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[1] !== undefined) {
  args[1] = conversions["unsigned long"](args[1]);
  } else {
    args[1] = 4294967295;
  }
  if (args[2] === null || args[2] === undefined) {
    args[2] = null;
  } else {
  }
  return utils.tryWrapperForImpl(this[impl].createTreeWalker(...args));
};

Document.prototype.getElementsByName = function getElementsByName(elementName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only " + arguments.length + " present.");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  args[0] = conversions["DOMString"](args[0]);
  return utils.tryWrapperForImpl(this[impl].getElementsByName(...args));
};

Document.prototype.open = function open() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] !== undefined) {
  args[0] = conversions["DOMString"](args[0]);
  } else {
    args[0] = "text/html";
  }
  if (args[1] !== undefined) {
  args[1] = conversions["DOMString"](args[1]);
  } else {
    args[1] = "";
  }
  return utils.tryWrapperForImpl(this[impl].open(...args));
};

Document.prototype.close = function close() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].close();
};

Document.prototype.write = function write() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] !== undefined) {
  args[0] = conversions["DOMString"](args[0]);
  }
  return this[impl].write(...args);
};

Document.prototype.writeln = function writeln() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length; ++i) {
    args[i] = utils.tryImplForWrapper(arguments[i]);
  }
  if (args[0] !== undefined) {
  args[0] = conversions["DOMString"](args[0]);
  }
  return this[impl].writeln(...args);
};

Document.prototype.hasFocus = function hasFocus() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].hasFocus();
};
Object.defineProperty(Document.prototype, "implementation", {
  get() {
    return utils.getSameObject(this, "implementation", () => { return utils.tryWrapperForImpl(this[impl].implementation); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "URL", {
  get() {
    return this[impl].URL;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "documentURI", {
  get() {
    return this[impl].documentURI;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "origin", {
  get() {
    return this[impl].origin;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "compatMode", {
  get() {
    return this[impl].compatMode;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "characterSet", {
  get() {
    return this[impl].characterSet;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "charset", {
  get() {
    return this[impl].charset;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "inputEncoding", {
  get() {
    return this[impl].inputEncoding;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "contentType", {
  get() {
    return this[impl].contentType;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "doctype", {
  get() {
    return utils.tryWrapperForImpl(this[impl].doctype);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "documentElement", {
  get() {
    return utils.tryWrapperForImpl(this[impl].documentElement);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "referrer", {
  get() {
    return this[impl].referrer;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "cookie", {
  get() {
    return this[impl].cookie;
  },
  set(V) {
    V = conversions["DOMString"](V);
    this[impl].cookie = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "lastModified", {
  get() {
    return this[impl].lastModified;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "readyState", {
  get() {
    return utils.tryWrapperForImpl(this[impl].readyState);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "title", {
  get() {
    return this[impl].title;
  },
  set(V) {
    V = conversions["DOMString"](V);
    this[impl].title = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "dir", {
  get() {
    return this[impl].dir;
  },
  set(V) {
    V = conversions["DOMString"](V);
    this[impl].dir = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "body", {
  get() {
    return utils.tryWrapperForImpl(this[impl].body);
  },
  set(V) {
    if (V === null || V === undefined) {
      V = null;
    } else {
    }
    this[impl].body = utils.tryImplForWrapper(V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "head", {
  get() {
    return utils.tryWrapperForImpl(this[impl].head);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "images", {
  get() {
    return utils.getSameObject(this, "images", () => { return utils.tryWrapperForImpl(this[impl].images); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "embeds", {
  get() {
    return utils.getSameObject(this, "embeds", () => { return utils.tryWrapperForImpl(this[impl].embeds); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "plugins", {
  get() {
    return utils.getSameObject(this, "plugins", () => { return utils.tryWrapperForImpl(this[impl].plugins); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "links", {
  get() {
    return utils.getSameObject(this, "links", () => { return utils.tryWrapperForImpl(this[impl].links); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "forms", {
  get() {
    return utils.getSameObject(this, "forms", () => { return utils.tryWrapperForImpl(this[impl].forms); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "scripts", {
  get() {
    return utils.getSameObject(this, "scripts", () => { return utils.tryWrapperForImpl(this[impl].scripts); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "currentScript", {
  get() {
    return utils.tryWrapperForImpl(this[impl].currentScript);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "defaultView", {
  get() {
    return utils.tryWrapperForImpl(this[impl].defaultView);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "activeElement", {
  get() {
    return utils.tryWrapperForImpl(this[impl].activeElement);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onreadystatechange", {
  get() {
    return utils.tryWrapperForImpl(this[impl].onreadystatechange);
  },
  set(V) {
    this[impl].onreadystatechange = utils.tryImplForWrapper(V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "anchors", {
  get() {
    return utils.getSameObject(this, "anchors", () => { return utils.tryWrapperForImpl(this[impl].anchors); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "applets", {
  get() {
    return utils.getSameObject(this, "applets", () => { return utils.tryWrapperForImpl(this[impl].applets); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "styleSheets", {
  get() {
    return utils.getSameObject(this, "styleSheets", () => { return utils.tryWrapperForImpl(this[impl].styleSheets); });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "hidden", {
  get() {
    return this[impl].hidden;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "visibilityState", {
  get() {
    return utils.tryWrapperForImpl(this[impl].visibilityState);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onvisibilitychange", {
  get() {
    return utils.tryWrapperForImpl(this[impl].onvisibilitychange);
  },
  set(V) {
    this[impl].onvisibilitychange = utils.tryImplForWrapper(V);
  },
  enumerable: true,
  configurable: true
});


Document.prototype[Symbol.toStringTag] = "Document";

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
    let obj = Object.create(Document.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Document.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);

    Object.defineProperty(obj, "location", {
      get() {
        return utils.tryWrapperForImpl(obj[impl].location);
      },
      set(V) {
        this.location.href = V;
      },
      enumerable: true,
      configurable: false
    });
    
    
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    this._internalSetup(obj);

    obj[impl] = new Impl.implementation(constructorArgs, privateData);
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: Document,
  expose: {
    Window: { Document: Document }
  }
};
module.exports = iface;

const Impl = require("../nodes/Document-impl.js");
