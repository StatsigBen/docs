module.exports = {
  "openapi": "3.0.0",
  "info": {
    "title": "https://statsigapi.net/console/v1",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    },
    "responses": {
      "404": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "x-examples": {
                "example-1": {
                  "status": 404,
                  "message": "Segment not found."
                }
              },
              "properties": {
                "status": {
                  "$ref": "../models/status.json"
                },
                "message": {
                  "$ref": "../models/message.json"
                }
              },
              "required": [
                "status",
                "message"
              ]
            },
            "examples": {
              "example-1": {
                "value": {
                  "status": 404,
                  "message": "Segment not found."
                }
              }
            }
          }
        }
      }
    },
    "requestBodies": {}
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/segments": {
      "get": {
        "tags": [
          "Segments"
        ],
        "summary": "Read All Segments",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "An array of segments",
                      "items": {
                        "$ref": "../models/segment.json"
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Segments listed successfully.",
                      "data": [
                        {
                          "id": "an_id_list",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                          "type": "id_list",
                          "count": 0,
                          "tags": [
                            "a tag"
                          ]
                        },
                        {
                          "id": "a_rule_based_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                          "type": "rule_based",
                          "count": 0,
                          "rules": {
                            "name": "All Conditions",
                            "id": "38ttpCpzrQFTMKcqFKk02l",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public",
                                "operator": "string",
                                "targetValue": 0,
                                "field": "string",
                                "customID": "string"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          },
                          "tags": [
                            "a tag"
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Segments"
        ],
        "summary": "Create Segment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the new segment"
                  },
                  "description": {
                    "type": "string",
                    "description": "A brief summary of what the segment is being used for."
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "id_list",
                      "rule_based"
                    ]
                  },
                  "idType": {
                    "type": "string",
                    "description": "idType of id_list segments (ignored on rule_based)",
                    "default": "userID"
                  },
                  "creatorID": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "e7pluh4jxhk41"
                    },
                    "description": "The userID of intended creator, defaults to Console API",
                    "example": "35sClJFs8l0y5uRQhDwUDo"
                  }
                },
                "required": [
                  "name",
                  "type"
                ]
              },
              "examples": {
                "id_list": {
                  "value": {
                    "name": "a segment",
                    "description": "helpful summary of what this segment is",
                    "type": "id_list",
                    "idType": "customID",
                    "creatorID": "35sClJFs8l0y5uRQhDwUDo"
                  }
                },
                "rule_based": {
                  "value": {
                    "name": "string",
                    "description": "string",
                    "type": "rule_based"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
                    }
                  }
                },
                "examples": {
                  "id list": {
                    "value": {
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "an_id_list",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                        "type": "id_list",
                        "count": 0,
                        "tags": [
                          "a tag"
                        ]
                      }
                    }
                  },
                  "rule based": {
                    "value": {
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "a_rule_based_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                        "type": "rule_based",
                        "count": 0,
                        "rules": {
                          "name": "All Conditions",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public",
                              "operator": "string",
                              "targetValue": 0,
                              "field": "string",
                              "customID": "string"
                            }
                          ],
                          "returnValue": {
                            "key": true
                          }
                        },
                        "tags": [
                          "a tag"
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/segments/{segment_id}": {
      "get": {
        "tags": [
          "Segments"
        ],
        "summary": "Read a Single Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
                    }
                  }
                },
                "examples": {
                  "id list": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "an_id_list",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                        "type": "id_list",
                        "count": 0,
                        "tags": [
                          "a tag"
                        ]
                      }
                    }
                  },
                  "rule based": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_rule_based_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ahKwUoaNauHu9AmJPc2",
                        "type": "rule_based",
                        "count": 0,
                        "rules": {
                          "name": "All Conditions",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public",
                              "operator": "string",
                              "targetValue": 0,
                              "field": "string",
                              "customID": "string"
                            }
                          ],
                          "returnValue": {
                            "key": true
                          }
                        },
                        "tags": [
                          "a tag"
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list",
                        "count": 0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Segments"
        ],
        "summary": "Delete Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment deleted successfully."
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404"
          }
        }
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_segment"
          },
          "name": "segment_id",
          "in": "path",
          "required": true,
          "description": "The segment id to query"
        }
      ]
    },
    "/segments/{segment_id}/id_list": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Add IDs to Segment",
        "operationId": "patch-segments-segment_id-id_list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "message"
                  ]
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment ids updated successfully."
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404"
          }
        },
        "tags": [
          "Segments"
        ],
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "description": "Array of IDs to add to segment",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "ids"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "ids": [
                      "user-1",
                      "user-2"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "Remove IDs from Segment",
        "operationId": "delete-segments-segment_id-id_list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment ids deleted successfully."
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment ids deleted successfully."
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 400,
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
                    }
                  },
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404"
          }
        },
        "tags": [
          "Segments"
        ],
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "description": "Array of IDs to remove from segment",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "ids"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "ids": [
                      "user-1",
                      "user-2"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    "/segments/{segment_id}/conditional": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Update Segment Rules",
        "operationId": "post-segments-segment_id-conditional",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Rules successfully updated"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "integer"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "x-examples": {
                    "example-1": {
                      "status": 400,
                      "message": "Segment must be of type 'rule_based' to be modified"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Segment must be of type 'rule_based' to be modified on this endpoint"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "passPercentage": {
                      "type": "integer"
                    },
                    "conditions": {
                      "type": "array",
                      "items": {
                        "$ref": "../models/condition.json"
                      }
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": [
                    {
                      "name": "App version check",
                      "passPercentage": 10,
                      "conditions": [
                        {
                          "type": "app_version",
                          "operator": "version_gt",
                          "targetValue": [
                            "1.1.1"
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        },
        "description": "",
        "tags": [
          "Segments"
        ]
      }
    },
    "/segments/{segment_id}/id_list/reset": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "tags": [
          "Segments"
        ],
        "summary": "",
        "operationId": "post-segments-segment_id-id_list-reset",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Upsert an id list",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "items": {}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}