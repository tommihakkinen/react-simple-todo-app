const schemas = {
  idSchema: {
    type: "number",
    minimum: 1,
  },
  taskSchema: {
    type: "object",
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      priority: { type: "number", minimum: "1", maximum: "5" },
    },
  },
};

module.exports = schemas;
