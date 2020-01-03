/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.exportSymbol('proto.Mysqlx.ClientMessages', null, global);
goog.exportSymbol('proto.Mysqlx.ClientMessages.Type', null, global);
goog.exportSymbol('proto.Mysqlx.Error', null, global);
goog.exportSymbol('proto.Mysqlx.Error.Severity', null, global);
goog.exportSymbol('proto.Mysqlx.Ok', null, global);
goog.exportSymbol('proto.Mysqlx.ServerMessages', null, global);
goog.exportSymbol('proto.Mysqlx.ServerMessages.Type', null, global);
goog.exportSymbol('proto.Mysqlx.clientMessageId', null, global);
goog.exportSymbol('proto.Mysqlx.serverMessageId', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.ClientMessages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.ClientMessages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mysqlx.ClientMessages.displayName = 'proto.Mysqlx.ClientMessages';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.ClientMessages.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.ClientMessages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.ClientMessages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.ClientMessages.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.ClientMessages}
 */
proto.Mysqlx.ClientMessages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.ClientMessages;
  return proto.Mysqlx.ClientMessages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.ClientMessages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.ClientMessages}
 */
proto.Mysqlx.ClientMessages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.ClientMessages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.ClientMessages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.ClientMessages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.ClientMessages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.Mysqlx.ClientMessages.Type = {
  CON_CAPABILITIES_GET: 1,
  CON_CAPABILITIES_SET: 2,
  CON_CLOSE: 3,
  SESS_AUTHENTICATE_START: 4,
  SESS_AUTHENTICATE_CONTINUE: 5,
  SESS_RESET: 6,
  SESS_CLOSE: 7,
  SQL_STMT_EXECUTE: 12,
  CRUD_FIND: 17,
  CRUD_INSERT: 18,
  CRUD_UPDATE: 19,
  CRUD_DELETE: 20,
  EXPECT_OPEN: 24,
  EXPECT_CLOSE: 25,
  CRUD_CREATE_VIEW: 30,
  CRUD_MODIFY_VIEW: 31,
  CRUD_DROP_VIEW: 32
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.ServerMessages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.ServerMessages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mysqlx.ServerMessages.displayName = 'proto.Mysqlx.ServerMessages';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.ServerMessages.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.ServerMessages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.ServerMessages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.ServerMessages.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.ServerMessages}
 */
proto.Mysqlx.ServerMessages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.ServerMessages;
  return proto.Mysqlx.ServerMessages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.ServerMessages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.ServerMessages}
 */
proto.Mysqlx.ServerMessages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.ServerMessages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.ServerMessages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.ServerMessages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.ServerMessages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.Mysqlx.ServerMessages.Type = {
  OK: 0,
  ERROR: 1,
  CONN_CAPABILITIES: 2,
  SESS_AUTHENTICATE_CONTINUE: 3,
  SESS_AUTHENTICATE_OK: 4,
  NOTICE: 11,
  RESULTSET_COLUMN_META_DATA: 12,
  RESULTSET_ROW: 13,
  RESULTSET_FETCH_DONE: 14,
  RESULTSET_FETCH_SUSPENDED: 15,
  RESULTSET_FETCH_DONE_MORE_RESULTSETS: 16,
  SQL_STMT_EXECUTE_OK: 17,
  RESULTSET_FETCH_DONE_MORE_OUT_PARAMS: 18
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mysqlx.Ok.displayName = 'proto.Mysqlx.Ok';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Ok}
 */
proto.Mysqlx.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Ok;
  return proto.Mysqlx.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Ok}
 */
proto.Mysqlx.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.Mysqlx.Ok.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Mysqlx.Ok.prototype.setMsg = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Mysqlx.Ok.prototype.clearMsg = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mysqlx.Ok.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mysqlx.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Mysqlx.Error.displayName = 'proto.Mysqlx.Error';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    severity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getField(msg, 2),
    sqlState: jspb.Message.getField(msg, 4),
    msg: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mysqlx.Error}
 */
proto.Mysqlx.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Error;
  return proto.Mysqlx.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Error}
 */
proto.Mysqlx.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Mysqlx.Error.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSqlState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.Mysqlx.Error.Severity} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Mysqlx.Error.Severity = {
  ERROR: 0,
  FATAL: 1
};

/**
 * optional Severity severity = 1;
 * @return {!proto.Mysqlx.Error.Severity}
 */
proto.Mysqlx.Error.prototype.getSeverity = function() {
  return /** @type {!proto.Mysqlx.Error.Severity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Mysqlx.Error.Severity} value */
proto.Mysqlx.Error.prototype.setSeverity = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Mysqlx.Error.prototype.clearSeverity = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mysqlx.Error.prototype.hasSeverity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 code = 2;
 * @return {number}
 */
proto.Mysqlx.Error.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Mysqlx.Error.prototype.setCode = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Mysqlx.Error.prototype.clearCode = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mysqlx.Error.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string sql_state = 4;
 * @return {string}
 */
proto.Mysqlx.Error.prototype.getSqlState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.Mysqlx.Error.prototype.setSqlState = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Mysqlx.Error.prototype.clearSqlState = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mysqlx.Error.prototype.hasSqlState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required string msg = 3;
 * @return {string}
 */
proto.Mysqlx.Error.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Mysqlx.Error.prototype.setMsg = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.Mysqlx.Error.prototype.clearMsg = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Mysqlx.Error.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clientMessageId`.
 * @type {!jspb.ExtensionFieldInfo.<!proto.Mysqlx.ClientMessages.Type>}
 */
proto.Mysqlx.clientMessageId = new jspb.ExtensionFieldInfo(
    100001,
    {clientMessageId: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[100001] = new jspb.ExtensionFieldBinaryInfo(
    proto.Mysqlx.clientMessageId,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[100001] = proto.Mysqlx.clientMessageId;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `serverMessageId`.
 * @type {!jspb.ExtensionFieldInfo.<!proto.Mysqlx.ServerMessages.Type>}
 */
proto.Mysqlx.serverMessageId = new jspb.ExtensionFieldInfo(
    100002,
    {serverMessageId: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[100002] = new jspb.ExtensionFieldBinaryInfo(
    proto.Mysqlx.serverMessageId,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[100002] = proto.Mysqlx.serverMessageId;

goog.object.extend(exports, proto.Mysqlx);
