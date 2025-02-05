module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "onvh52dwdr6ga"
  },
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
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    },
    "requestBodies": {
      "Ingestion-query": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "required": [
                "type",
                "dataset"
              ],
              "properties": {
                "type": {
                  "$ref": "#/components/schemas/Ingestion-type"
                },
                "dataset": {
                  "$ref": "#/components/schemas/Ingestion-dataset"
                },
                "source_name": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "fbemz0zvt96wm"
                  },
                  "description": "Name of ingestion source"
                }
              }
            },
            "examples": {}
          }
        }
      },
      "ingestion-update": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "required": [
                "type",
                "dataset"
              ],
              "properties": {
                "type": {
                  "$ref": "#/components/schemas/Ingestion-type"
                },
                "dataset": {
                  "$ref": "#/components/schemas/Ingestion-dataset"
                },
                "source_name": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "hmd7f0wt4d2u0"
                  },
                  "description": "Name of ingestion source",
                  "example": "ingestion-1"
                },
                "query": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "k1wy7wm1f23p6"
                  },
                  "description": "SQL query string",
                  "example": "SELECT * FROM TABLE"
                },
                "column_mapping": {
                  "x-stoplight": {
                    "id": "6vzfjohi44f70"
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/metrics-column-mapping"
                    },
                    {
                      "$ref": "#/components/schemas/events-column-mapping"
                    },
                    {
                      "$ref": "#/components/schemas/exposures-column-mapping"
                    }
                  ],
                  "description": "Column mapping"
                },
                "share": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "5g2fhj49wnq6a"
                  },
                  "description": "Delta sharing share. Can only be set if ingestion already uses delta sharing."
                },
                "schema": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "555q8rvnb0f2b"
                  },
                  "description": "Delta sharing schema. Can only be set if ingestion already uses delta sharing."
                },
                "table": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "f5o1p7uplmpj4"
                  },
                  "description": "Delta sharing table. Can only be set if ingestion already uses delta sharing."
                },
                "enabled": {
                  "type": "boolean",
                  "x-stoplight": {
                    "id": "d9qdtvpcaa7sc"
                  },
                  "description": "Whether ingestion source is enabled or not"
                }
              }
            }
          }
        }
      },
      "Ingestion-create": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "required": [
                "type",
                "dataset",
                "source_name"
              ],
              "properties": {
                "type": {
                  "$ref": "#/components/schemas/Ingestion-type"
                },
                "dataset": {
                  "$ref": "#/components/schemas/Ingestion-dataset"
                },
                "source_name": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "wg3e3jzshassd"
                  },
                  "description": "Name of ingestion source",
                  "example": "ingestion-1"
                },
                "query": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "46ln3vyq93zt2"
                  },
                  "description": "SQL query string",
                  "example": "SELECT * FROM TABLE"
                },
                "column_mapping": {
                  "x-stoplight": {
                    "id": "60vvxjxb2e8j6"
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/metrics-column-mapping"
                    },
                    {
                      "$ref": "#/components/schemas/events-column-mapping"
                    },
                    {
                      "$ref": "#/components/schemas/exposures-column-mapping"
                    }
                  ],
                  "description": "Column mapping"
                },
                "use_delta_sharing": {
                  "type": "boolean",
                  "x-stoplight": {
                    "id": "rum0lm73wa14f"
                  },
                  "default": true,
                  "description": "Should use delta sharing."
                },
                "share": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "c2qceadhasmwm"
                  },
                  "description": "Delta sharing share. Required if ingestion uses delta sharing."
                },
                "schema": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "d9sp2sgl6qkrf"
                  },
                  "description": "Delta sharing schema. Required if ingestion uses delta sharing."
                },
                "table": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "tfyasovprxo2c"
                  },
                  "description": "Delta sharing table. Required if ingestion uses delta sharing."
                },
                "enabled": {
                  "type": "boolean",
                  "x-stoplight": {
                    "id": "uauc63uhyk4mr"
                  },
                  "default": false,
                  "description": "Whether ingestion source is enabled or not"
                }
              }
            },
            "examples": {}
          }
        }
      }
    },
    "schemas": {
      "Ingestion": {
        "title": "Ingestion",
        "x-stoplight": {
          "id": "0j3l694zzn1s1"
        },
        "type": "object",
        "x-examples": {},
        "required": [
          "id",
          "type"
        ],
        "properties": {
          "id": {
            "type": "string",
            "x-stoplight": {
              "id": "48qasxe8kaonh"
            },
            "description": "Ingestion ID"
          },
          "type": {
            "$ref": "#/components/schemas/Ingestion-type"
          },
          "enabled": {
            "type": "boolean",
            "x-stoplight": {
              "id": "assdvev7zkt5k"
            },
            "description": "Ingestion enabled status"
          },
          "data": {
            "type": "object",
            "x-stoplight": {
              "id": "xqcppkj99d6j9"
            },
            "description": "Ingestion data",
            "properties": {
              "name": {
                "type": "string",
                "x-stoplight": {
                  "id": "rnq0qb15721eg"
                }
              },
              "namespace": {
                "type": "string",
                "x-stoplight": {
                  "id": "6wzne5i5rwv7e"
                }
              },
              "query": {
                "type": "string",
                "x-stoplight": {
                  "id": "24hf7l8haqsnb"
                }
              },
              "knownColumns": {
                "type": "array",
                "x-stoplight": {
                  "id": "zi1qf11txaxz4"
                },
                "items": {
                  "x-stoplight": {
                    "id": "skcbdm8x2itk5"
                  },
                  "type": "string"
                }
              },
              "sampleRows": {
                "type": "array",
                "x-stoplight": {
                  "id": "oe46x32lwdtqv"
                },
                "items": {
                  "x-stoplight": {
                    "id": "r90sepyf0xjda"
                  },
                  "type": "array",
                  "items": {
                    "x-stoplight": {
                      "id": "gkfytxaypb7zb"
                    },
                    "type": "string"
                  }
                }
              },
              "columnTypes": {
                "type": "array",
                "x-stoplight": {
                  "id": "ncbs3b2086k77"
                },
                "items": {
                  "x-stoplight": {
                    "id": "rsfv8778xkiqt"
                  },
                  "type": "string"
                }
              },
              "columnMappings": {
                "type": "object",
                "x-stoplight": {
                  "id": "r24dal4hbsycd"
                }
              },
              "scheduled_hour_pst": {
                "type": "number",
                "x-stoplight": {
                  "id": "fjkdju9z3c0yw"
                }
              },
              "enabled": {
                "type": "boolean",
                "x-stoplight": {
                  "id": "2qh3b93j3s8j7"
                },
                "default": false
              },
              "creator": {
                "type": "string",
                "x-stoplight": {
                  "id": "6y7vc58ud9r3o"
                }
              },
              "creation_time": {
                "type": "number",
                "x-stoplight": {
                  "id": "b39gj0g0h5s8r"
                }
              },
              "last_modifier": {
                "type": "string",
                "x-stoplight": {
                  "id": "bz43vn592ccrq"
                }
              },
              "last_modified_time": {
                "type": "number",
                "x-stoplight": {
                  "id": "e8dtbswwar7hm"
                }
              },
              "subscriber_emails": {
                "type": "array",
                "x-stoplight": {
                  "id": "b4jgg2lktyirw"
                },
                "items": {
                  "x-stoplight": {
                    "id": "dbnz6aqzf90xf"
                  },
                  "type": "string"
                }
              },
              "dataExportType": {
                "$ref": "#/components/schemas/data-export-type"
              },
              "exportTableName": {
                "type": "string",
                "x-stoplight": {
                  "id": "sifra1vjtbsz2"
                }
              },
              "is_delta_sharing": {
                "type": "boolean",
                "x-stoplight": {
                  "id": "q123n4fvowhlk"
                }
              }
            }
          }
        }
      },
      "ingestion-run": {
        "type": "object",
        "x-examples": {
          "download_error": {
            "runID": "5a09550b-75a1-4f98-908a-cd79ca729689",
            "latestStatus": "download_error",
            "lastUpdatedAt": "2023-12-14T02:47:00.321Z",
            "createdAt": "2023-12-14T02:31:46.896Z",
            "trigger": "scheduled",
            "sources": [
              "Events 1",
              "Events 2"
            ],
            "dateStamps": [
              "2023-12-12"
            ],
            "runHistory": [
              {
                "statusTimestamp": "2023-12-14T02:47:01.422Z",
                "status": "download_error"
              },
              {
                "statusTimestamp": "2023-12-14T02:46:46.800Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:44:32.597Z",
                "status": "download_error"
              },
              {
                "statusTimestamp": "2023-12-14T02:43:34.056Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:34:27.056Z",
                "status": "started"
              },
              {
                "statusTimestamp": "2023-12-14T02:31:46.896Z",
                "status": "enqueued"
              }
            ],
            "granularHistory": [
              {
                "source": "Events 1",
                "latestSourceStatus": "download_error",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T02:44:30.666Z",
                        "status": "download_error"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:22.724Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:34:25.325Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:31:46.896Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              },
              {
                "source": "Events 2",
                "latestSourceStatus": "download_error",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T02:44:30.666Z",
                        "status": "download_error"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:22.724Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:34:25.325Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:31:46.896Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "pulse_complete": {
            "runID": "21b97020-e61a-49bf-a9f3-ce46cec50489",
            "latestStatus": "pulse_complete",
            "lastUpdatedAt": "2023-12-14T04:18:54.603Z",
            "createdAt": "2023-12-14T02:30:27.217Z",
            "trigger": "scheduled",
            "sources": [
              "Metrics 1"
            ],
            "dateStamps": [
              "2023-12-12"
            ],
            "runHistory": [
              {
                "statusTimestamp": "2023-12-14T04:18:55.556Z",
                "status": "pulse_complete"
              },
              {
                "statusTimestamp": "2023-12-14T03:32:49.429Z",
                "status": "metrics_complete"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:40.015Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:33.322Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:27.046Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:15.449Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:45:17.161Z",
                "status": "download_complete"
              },
              {
                "statusTimestamp": "2023-12-14T02:43:33.661Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:35:09.734Z",
                "status": "started"
              },
              {
                "statusTimestamp": "2023-12-14T02:30:27.217Z",
                "status": "enqueued"
              }
            ],
            "granularHistory": [
              {
                "source": "Metrics 1",
                "latestSourceStatus": "pulse_complete",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T04:18:53.975Z",
                        "status": "pulse_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T04:04:48.761Z",
                        "status": "pulse_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:32:48.019Z",
                        "status": "metrics_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:38.667Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:32.039Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:25.385Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:14.383Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:45:05.125Z",
                        "status": "download_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:27.013Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:35:07.577Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:30:27.217Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "properties": {
          "runID": {
            "type": "string"
          },
          "latestStatus": {
            "type": "string"
          },
          "lastUpdatedAt": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          },
          "trigger": {
            "type": "string"
          },
          "sources": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dateStamps": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "runHistory": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "statusTimestamp": {
                  "type": "string"
                },
                "status": {
                  "type": "string"
                }
              }
            }
          },
          "granularHistory": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "source": {
                  "type": "string"
                },
                "latestSourceStatus": {
                  "type": "string"
                },
                "statusByDate": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "dateStamp": {
                        "type": "string"
                      },
                      "statuses": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "statusTimestamp": {
                              "type": "string"
                            },
                            "status": {
                              "type": "string"
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
        },
        "required": [
          "runID",
          "latestStatus"
        ]
      },
      "Ingestion-type": {
        "title": "Ingestion-type",
        "x-stoplight": {
          "id": "fb1elnvxnmsev"
        },
        "enum": [
          "redshift",
          "bigquery-v2",
          "snowflake-v2",
          "databricks",
          "azure-synapse",
          "s3",
          "athena",
          "adls"
        ],
        "type": "string",
        "example": "databricks",
        "description": "Ingestion type"
      },
      "Ingestion-dataset": {
        "title": "Ingestion-dataset",
        "x-stoplight": {
          "id": "ewavhqtgwoccm"
        },
        "enum": [
          "Metrics",
          "Events",
          "export_exposures"
        ],
        "type": "string",
        "example": "Metrics",
        "description": "Ingestion dataset"
      },
      "data-export-type": {
        "title": "data-export-type",
        "x-stoplight": {
          "id": "8u564r0ncixle"
        },
        "enum": [
          "pulse-summary",
          "exposures"
        ],
        "type": "string",
        "example": "pulse-summary"
      },
      "metrics-column-mapping": {
        "title": "metrics-column-mapping",
        "x-stoplight": {
          "id": "8zidqofaikwu5"
        },
        "type": "object",
        "description": "Column mapping schema for metric ingestions",
        "required": [
          "unit_id",
          "id_type",
          "dateid",
          "metric_name"
        ],
        "properties": {
          "unit_id": {
            "type": "string",
            "x-stoplight": {
              "id": "cty9ts0xww7jd"
            }
          },
          "id_type": {
            "type": "string",
            "x-stoplight": {
              "id": "084bvzy7j332p"
            }
          },
          "dateid": {
            "type": "string",
            "x-stoplight": {
              "id": "zzf59lg3iqr3f"
            }
          },
          "metric_name": {
            "type": "string",
            "x-stoplight": {
              "id": "bct18vbqtf2ta"
            }
          },
          "metric_value": {
            "type": "string",
            "x-stoplight": {
              "id": "ucnkdllivd3s0"
            },
            "description": "Either metric_value or both numerator and denominator are required"
          },
          "numerator": {
            "type": "string",
            "x-stoplight": {
              "id": "kl03xk9mq8mot"
            }
          },
          "denominator": {
            "type": "string",
            "x-stoplight": {
              "id": "37fxd4inp0rmk"
            }
          }
        }
      },
      "events-column-mapping": {
        "title": "events-column-mapping",
        "x-stoplight": {
          "id": "du0kwt7fglzt8"
        },
        "type": "object",
        "description": "Column mapping schema for event dataset ingestions",
        "required": [
          "event_name",
          "timestamp"
        ],
        "properties": {
          "unit_id": {
            "type": "string",
            "x-stoplight": {
              "id": "pv4tashyor0o2"
            }
          },
          "event_name": {
            "type": "string",
            "x-stoplight": {
              "id": "qmd6khz3kxzib"
            }
          },
          "timestamp": {
            "type": "string",
            "x-stoplight": {
              "id": "nlw5msa2or6u3"
            }
          }
        }
      },
      "exposures-column-mapping": {
        "title": "exposures-column-mapping",
        "x-stoplight": {
          "id": "6tn51mv4qetbc"
        },
        "type": "object",
        "description": "Column mapping schema for exposure ingestions",
        "required": [
          "experiment",
          "group_id",
          "timestamp"
        ],
        "properties": {
          "experiment": {
            "type": "string",
            "x-stoplight": {
              "id": "n2p69a5m0gbdh"
            }
          },
          "group_id": {
            "type": "string",
            "x-stoplight": {
              "id": "iw8a6qrvmwyka"
            }
          },
          "unit_id": {
            "type": "string",
            "x-stoplight": {
              "id": "jt7bs4ui55gqd"
            }
          },
          "timestamp": {
            "type": "string",
            "x-stoplight": {
              "id": "9dlzsz9mk00z1"
            }
          }
        }
      }
    },
    "responses": {},
    "parameters": {
      "Ingestion-type": {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string",
          "enum": [
            "redshift",
            "bigquery-v2",
            "snowflake-v2",
            "databricks",
            "azure-synapse",
            "s3",
            "athena",
            "adls"
          ],
          "example": "databricks"
        },
        "description": "Ingestion type"
      },
      "Dataset": {
        "name": "dataset",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string",
          "enum": [
            "Events",
            "Metrics",
            "export_exposures"
          ],
          "example": "Events"
        },
        "description": "Ingestion dataset type"
      },
      "Source-name": {
        "name": "source_name",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "example": "ingestion-1"
        },
        "description": "Name of ingestion source"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "tags": [
    {
      "name": "ingestion"
    }
  ],
  "paths": {
    "/ingestion": {
      "get": {
        "summary": "Read Ingestion",
        "tags": [
          "Ingestions"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "4dxi7s3dni1h7"
                      },
                      "example": "Ingestion read successfully."
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "rir19lebxjq6d"
                      },
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/Ingestion"
                        },
                        {
                          "type": "array",
                          "x-stoplight": {
                            "id": "ns01pz64hmjja"
                          },
                          "items": {
                            "$ref": "#/components/schemas/Ingestion"
                          }
                        }
                      ]
                    }
                  },
                  "required": [
                    "message"
                  ]
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Ingestion read successfully"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "get-ingestion",
        "x-stoplight": {
          "id": "q90xa4o51w0zc"
        },
        "parameters": [
          {
            "$ref": "#/components/parameters/Ingestion-type"
          },
          {
            "$ref": "#/components/parameters/Dataset"
          },
          {
            "$ref": "#/components/parameters/Source-name"
          }
        ]
      },
      "patch": {
        "summary": "Update Ingestion",
        "tags": [
          "Ingestions"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "897yygzkrltvl"
                      },
                      "example": "Ingestion updated successfully."
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "or7rgz7fp0jx6"
                      },
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/Ingestion"
                        },
                        {
                          "type": "array",
                          "x-stoplight": {
                            "id": "uedt3mwkjsigl"
                          },
                          "items": {
                            "$ref": "#/components/schemas/Ingestion"
                          }
                        }
                      ]
                    }
                  },
                  "required": [
                    "message"
                  ]
                }
              }
            }
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "patch-ingestion",
        "x-stoplight": {
          "id": "sjs61bo7ecohx"
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/ingestion-update"
        }
      },
      "delete": {
        "summary": "Delete Ingestion Source",
        "tags": [
          "Ingestions"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "6wil52gnho9n2"
                      },
                      "example": "Ingestion deleted successfully."
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "delete-ingestion",
        "x-stoplight": {
          "id": "rhz75n2dj7w48"
        },
        "parameters": [
          {
            "$ref": "#/components/parameters/Ingestion-type"
          },
          {
            "$ref": "#/components/parameters/Dataset"
          },
          {
            "$ref": "#/components/parameters/Source-name"
          }
        ]
      },
      "post": {
        "summary": "Create Ingestion Source",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "message"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "n176iylq5wr1i"
                      },
                      "example": "Ingestion created successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/Ingestion"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          }
        },
        "operationId": "post-ingestion",
        "x-stoplight": {
          "id": "wenx9j62aawf2"
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/Ingestion-create"
        },
        "tags": [
          "Ingestions"
        ]
      }
    },
    "/ingestion/connection/databricks": {
      "post": {
        "summary": "Create Databricks Connection",
        "operationId": "post-ingestion-connection-databricks",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "message"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "s91ppk3nf2ice"
                      },
                      "example": "Ingestion created successfully."
                    },
                    "data": {
                      "$ref": "#/components/schemas/Ingestion"
                    }
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "74iy0akt2dtib"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "token": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "vqhqbokzy44kt"
                    }
                  },
                  "host": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "b7lfs74c6lsyo"
                    }
                  },
                  "path": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "vvatm3cnodzcg"
                    }
                  },
                  "deltaSharingCredentials": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "8kw9xyl1v9ewd"
                    }
                  },
                  "verified": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "qc57goc6pwcnm"
                    }
                  }
                },
                "required": [
                  "token",
                  "host",
                  "path"
                ]
              }
            }
          }
        },
        "tags": [
          "Ingestion Connections"
        ]
      },
      "parameters": []
    },
    "/ingestion/status": {
      "parameters": [],
      "get": {
        "summary": "List Ingestions Status",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Your job for events ingestion completed successfully",
                      "timestamp": "2023-09-07T00:50:07.941Z",
                      "ingestion_dataset": "events",
                      "ingestion_source": null,
                      "status": "BACKFILL_STARTED"
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "timestamp": {
                      "type": "string",
                      "description": "ISO 8601 Timestamp"
                    },
                    "ingestion_dataset": {
                      "type": "string",
                      "nullable": true
                    },
                    "ingestion_source": {
                      "type": "string",
                      "nullable": true
                    },
                    "status": {
                      "type": "string"
                    },
                    "rowCount": {
                      "type": "number",
                      "x-stoplight": {
                        "id": "olukg1nzo84xw"
                      },
                      "description": "number of rows imported"
                    }
                  }
                },
                "example": {
                  "message": "Gates listed successfully.",
                  "data": [
                    {
                      "id": "my_gate_a",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_3",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_2",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "b_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "examples": {
                  "Backfill started": {
                    "value": [
                      {
                        "message": "Your job for events ingestion completed successfully",
                        "timestamp": "2023-09-07T00:50:07.941Z",
                        "ingestion_dataset": "events",
                        "ingestion_source": null,
                        "status": "BACKFILL_STARTED"
                      }
                    ]
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
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
        },
        "x-stoplight": {
          "id": "h218ukpi9hjc8"
        },
        "parameters": [
          {
            "schema": {
              "type": "string",
              "example": "2023-08-08"
            },
            "in": "query",
            "name": "startDate",
            "description": "Start date for your query"
          },
          {
            "schema": {
              "type": "string",
              "example": "2023-09-08"
            },
            "in": "query",
            "name": "endDate",
            "description": "End date for your query"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "ingestion_source",
            "description": "Filter for selected ingestion sources"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "ingestion_dataset",
            "description": "Filter for selected datasets"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "status",
            "description": "Filter for selected status"
          }
        ],
        "requestBody": {
          "content": {}
        },
        "description": "",
        "tags": [
          "Ingestion Status"
        ]
      }
    },
    "/ingestion/runs": {
      "get": {
        "summary": "List Ingestion Runs",
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
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "5929jvxypz4ke"
                      },
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ingestion-run"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Ingestion Runs Listed Successfully.",
                      "data": [
                        {
                          "runID": "5a09550b-75a1-4f98-908a-cd79ca729689",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-14T02:47:00.321Z",
                          "createdAt": "2023-12-14T02:31:46.896Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-12"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-14T02:47:01.422Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:46:46.800Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:44:32.597Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:43:34.056Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:34:27.056Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:31:46.896Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T02:44:30.666Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:22.724Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:34:25.325Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:31:46.896Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T02:44:30.666Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:22.724Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:34:25.325Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:31:46.896Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "21b97020-e61a-49bf-a9f3-ce46cec50489",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-14T04:18:54.603Z",
                          "createdAt": "2023-12-14T02:30:27.217Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-12"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-14T04:18:55.556Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:32:49.429Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:40.015Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:33.322Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:27.046Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:15.449Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:45:17.161Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:43:33.661Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:35:09.734Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:30:27.217Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T04:18:53.975Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T04:04:48.761Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:32:48.019Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:38.667Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:32.039Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:25.385Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:14.383Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:45:05.125Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:27.013Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:35:07.577Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:30:27.217Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "de941fa2-3e0f-44ec-a44c-5c51eed07e0d",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-13T02:44:23.790Z",
                          "createdAt": "2023-12-13T02:30:55.992Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-11"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-13T02:44:24.865Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:44:12.421Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:41:48.458Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:40:56.694Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:32:35.607Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:30:55.992Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "93b0150f-d53a-416e-876f-bac00634a872",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-13T03:47:23.504Z",
                          "createdAt": "2023-12-13T02:29:32.793Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-11"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-13T03:47:24.548Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:41:19.158Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:35:05.780Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:28:52.123Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:22:38.140Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:20:48.982Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:40.079Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:31.359Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:23.553Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:08.026Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:42:52.210Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:41:01.394Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:33:26.492Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:29:32.793Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T03:47:22.812Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:41:17.582Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:20:47.294Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:38.421Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:29.827Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:21.847Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:05.864Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:42:36.220Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:47.890Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:33:24.219Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:29:32.793Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "a4df397e-c816-4e39-9b1a-ab6b2e5f3811",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-12T02:43:29.739Z",
                          "createdAt": "2023-12-12T02:30:41.989Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-10"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-12T02:43:30.735Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:43:16.318Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:40:56.030Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:39:58.147Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:32:18.156Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:30:41.989Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:54.406Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:39:51.150Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:16.419Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:30:41.989Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:54.406Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:39:51.150Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:16.419Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:30:41.989Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "eedeb4c0-07dd-43d0-8014-5ac41ef7dab8",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-12T03:50:41.473Z",
                          "createdAt": "2023-12-12T02:29:22.966Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-10"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-12T03:50:42.631Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:43:37.286Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:36:24.884Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:29:10.652Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:21:58.355Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:20:04.085Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:24.760Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:18.051Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:10.427Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:14:55.187Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:42:29.345Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:40:52.701Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:32:50.650Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:29:22.966Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-07",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:29:02.000Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:21:56.433Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-08",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:36:14.414Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:29:09.220Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:43:28.767Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:36:23.369Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:50:40.851Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:43:35.832Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:42:12.290Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:45.773Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:48.580Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:29:22.966Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "93b8b43c-8d52-4c77-bf8b-26426031a937",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-12T05:23:34.419Z",
                          "createdAt": "2023-12-11T02:30:09.748Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-09"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-11T02:43:14.831Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:42:59.726Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:40:35.456Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:39:41.755Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:31:30.223Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:30:09.748Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T05:23:36.192Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:40:33.565Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:39:34.990Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:31:28.492Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:30:09.748Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T05:23:36.193Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:40:33.565Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:39:34.990Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:31:28.492Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:30:09.748Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "97bbdee6-d77b-42c9-b4f0-d970eee9f983",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-11T10:00:43.391Z",
                          "createdAt": "2023-12-11T02:29:04.866Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-09"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-11T10:00:44.621Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:54:39.521Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:47:27.810Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:40:15.586Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:33:02.761Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:31:14.238Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:37.129Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:30.339Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:23.246Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:13.395Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:51:38.296Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:49:59.185Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:42:14.545Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:29:04.866Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-06",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:40:06.488Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:33:00.819Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.624Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-07",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:47:19.007Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:40:14.371Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-08",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:54:31.386Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:47:26.424Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T10:00:42.867Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:54:38.280Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:51:26.328Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:49:52.797Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:42:12.424Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:29:04.866Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 10,
                        "pageNumber": 1,
                        "nextPage": "/console/v1/ingestion/runs?page=2",
                        "previousPage": null
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-ingestion-runs",
        "x-stoplight": {
          "id": "g4etp74h0xp1a"
        },
        "parameters": [
          {
            "schema": {
              "type": "number",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "description": "Which page to query"
          }
        ],
        "description": "List ingestion runs sorted by the timestamp they were triggered",
        "tags": [
          "Ingestion Runs"
        ]
      }
    },
    "/ingestion/runs/{run_id}": {
      "get": {
        "summary": "Read Ingestion Run",
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
                    },
                    "data": {
                      "$ref": "#/components/schemas/ingestion-run"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Ingestion Run Read Successfully",
                      "data": {
                        "runID": "de941fa2-3e0f-44ec-a44c-5c51eed07e0d",
                        "latestStatus": "download_error",
                        "lastUpdatedAt": "2023-12-13T02:44:23.790Z",
                        "createdAt": "2023-12-13T02:30:55.992Z",
                        "trigger": "scheduled",
                        "sources": [
                          "Events 1",
                          "Events 2"
                        ],
                        "dateStamps": [
                          "2023-12-11"
                        ],
                        "runHistory": [
                          {
                            "statusTimestamp": "2023-12-13T02:44:24.865Z",
                            "status": "download_error"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:44:12.421Z",
                            "status": "download_started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:41:48.458Z",
                            "status": "download_error"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:40:56.694Z",
                            "status": "download_started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:32:35.607Z",
                            "status": "started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:30:55.992Z",
                            "status": "enqueued"
                          }
                        ],
                        "granularHistory": [
                          {
                            "source": "Events 1",
                            "latestSourceStatus": "download_error",
                            "statusByDate": [
                              {
                                "dateStamp": "2023-12-11",
                                "statuses": [
                                  {
                                    "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                    "status": "download_error"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                    "status": "download_started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                    "status": "started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                    "status": "enqueued"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "source": "Events 2",
                            "latestSourceStatus": "download_error",
                            "statusByDate": [
                              {
                                "dateStamp": "2023-12-11",
                                "statuses": [
                                  {
                                    "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                    "status": "download_error"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                    "status": "download_started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                    "status": "started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                    "status": "enqueued"
                                  }
                                ]
                              }
                            ]
                          }
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
                  "Example 1": {
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
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "statusCode": 404,
                      "message": "runID de941fa2-3e0f-44ec-a44c-5c51eed07e0da not found",
                      "error": "Not Found"
                    }
                  },
                  "properties": {
                    "statusCode": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "statusCode": 404,
                      "message": "runID de941fa2-3e0f-44ec-a44c-5c51eed07e0z not found",
                      "error": "Not Found"
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-ingestion-runs",
        "x-stoplight": {
          "id": "5uhik5q1q2wum"
        },
        "parameters": [
          {
            "schema": {
              "type": "number",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "description": "Which page to query"
          }
        ],
        "description": "Get a selected run_id",
        "tags": [
          "Ingestion Runs"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "run_id",
          "in": "path",
          "required": true,
          "description": "The Run ID to query"
        }
      ]
    },
    "/ingestion/backfill": {
      "post": {
        "summary": "Backfill Ingestion",
        "operationId": "post-ingestion-backfill",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "message"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "w6vs0u615ia1b"
                      },
                      "example": "Ingestion backfilled successfully."
                    },
                    "data": {
                      "type": "object",
                      "x-stoplight": {
                        "id": "juv3agselwdvt"
                      },
                      "properties": {
                        "runID": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "jgco2mbgnojn4"
                          },
                          "description": "Run ID"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "datestamp_start",
                  "datestamp_end",
                  "dataset",
                  "type"
                ],
                "properties": {
                  "datestamp_start": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "k2a90ssrf36nh"
                    },
                    "description": "Start time in format YYYY-MM-DD"
                  },
                  "datestamp_end": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "0xrh3r810fody"
                    },
                    "description": "End time in format YYYY-MM-DD"
                  },
                  "source": {
                    "x-stoplight": {
                      "id": "lvvm9nslzmyfr"
                    },
                    "anyOf": [
                      {
                        "type": "array",
                        "x-stoplight": {
                          "id": "jr6sldg8f6uyr"
                        },
                        "items": {
                          "x-stoplight": {
                            "id": "ib8qw3v9rxzv4"
                          },
                          "type": "string"
                        }
                      },
                      {
                        "type": "string",
                        "x-stoplight": {
                          "id": "la2e2m47er9rl"
                        }
                      }
                    ]
                  },
                  "dataset": {
                    "$ref": "#/components/schemas/Ingestion-dataset"
                  },
                  "type": {
                    "$ref": "#/components/schemas/Ingestion-type"
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "jt8tz6wycutnc"
        },
        "tags": [
          "Ingestion Backfills"
        ]
      }
    },
    "/ingestion/events/count": {
      "get": {
        "summary": "Read Ingestion Event Counts",
        "tags": [
          "Ingestion Events"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "message",
                    "data"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "t62inlamov1uf"
                      },
                      "example": "Event count read successfully."
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "4frhnjd17vnpn"
                      },
                      "oneOf": [
                        {
                          "x-stoplight": {
                            "id": "9khak2r8y4kpw"
                          },
                          "items": {
                            "x-stoplight": {
                              "id": "jb7cl2dnzpp37"
                            },
                            "type": "object",
                            "required": [
                              "date",
                              "event",
                              "count",
                              "last_updated_time"
                            ],
                            "properties": {
                              "date": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "he8obkibcyxmr"
                                },
                                "example": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
                                "description": "Date of record"
                              },
                              "event": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "hnkqed9g5ufed"
                                },
                                "description": "Name of event",
                                "example": "example_event"
                              },
                              "count": {
                                "type": "number",
                                "x-stoplight": {
                                  "id": "rkusafkrq17su"
                                },
                                "example": 1234,
                                "description": "Count of events"
                              },
                              "last_updated_time": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "jjfq6g27mnqhl"
                                },
                                "example": "2024-03-05T19:43:59.110Z",
                                "description": "Last updated time of the data represented"
                              }
                            }
                          }
                        },
                        {
                          "x-stoplight": {
                            "id": "dni58zg61wt9c"
                          },
                          "items": {
                            "x-stoplight": {
                              "id": "la3o1l4htdr4g"
                            },
                            "type": "object",
                            "required": [
                              "date",
                              "events"
                            ],
                            "properties": {
                              "date": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "kax14hfmhkuwt"
                                },
                                "description": "Date of record",
                                "example": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"
                              },
                              "events": {
                                "type": "array",
                                "x-stoplight": {
                                  "id": "hlvnerx46ynr1"
                                },
                                "description": "List of events and their counts. Elements are unique by event, and aggregated over sources",
                                "items": {
                                  "x-stoplight": {
                                    "id": "72ofnx85d8ptj"
                                  },
                                  "type": "object",
                                  "required": [
                                    "event",
                                    "count",
                                    "last_updated_time"
                                  ],
                                  "properties": {
                                    "event": {
                                      "type": "string",
                                      "x-stoplight": {
                                        "id": "875q4dv8ri08k"
                                      },
                                      "description": "Name of event",
                                      "example": "example_event"
                                    },
                                    "count": {
                                      "type": "number",
                                      "x-stoplight": {
                                        "id": "y5j9fqlzze94h"
                                      },
                                      "description": "Count of events",
                                      "example": 1234
                                    },
                                    "last_updated_time": {
                                      "type": "string",
                                      "x-stoplight": {
                                        "id": "yheo7s7045ncz"
                                      },
                                      "description": "Last updated time of the data represented",
                                      "example": "2024-03-05T19:43:59.110Z"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "type": "array"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Event count read successfully.",
                      "data": [
                        {
                          "date": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
                          "event": "example_event",
                          "count": 1234,
                          "last_updated_time": "2024-03-05T19:43:59.110Z"
                        }
                      ]
                    }
                  }
                }
              },
              "operationId": "get-ingestion-events",
              "x-stoplight": {
                "id": "abnqx2zv9euf7"
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "source_name",
            "description": "Name of ingestion source. If omitted, counts are aggregated over all sources."
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "event_name",
            "description": "Name of event. If omitted, response includes list of all events"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "start_date",
            "description": "Start date of date range to query"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "end_date",
            "description": "End date of date range to query"
          }
        ]
      }
    },
    "/ingestion/events/delta": {
      "get": {
        "summary": "Read Ingestion Event Deltas",
        "tags": [
          "Ingestion Events"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "message",
                    "data"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "am747xucddfob"
                      },
                      "example": "Event delta read successfully."
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "2miothbyac56z"
                      },
                      "oneOf": [
                        {
                          "x-stoplight": {
                            "id": "pd2nqs8jk1utd"
                          },
                          "items": {
                            "x-stoplight": {
                              "id": "wx9oftx41ixdd"
                            },
                            "type": "object",
                            "required": [
                              "date",
                              "source",
                              "event",
                              "internal_count",
                              "external_count",
                              "has_diff",
                              "threshold",
                              "last_updated_time"
                            ],
                            "properties": {
                              "date": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "mlad4q6mxqrrx"
                                },
                                "example": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
                                "description": "Date of record"
                              },
                              "source": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "49xmmq6i7v3b0"
                                },
                                "description": "Name of ingestion source",
                                "example": "main-source"
                              },
                              "event": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "gtvded3pwowxu"
                                },
                                "example": "example_event",
                                "description": "Name of event"
                              },
                              "internal_count": {
                                "type": "number",
                                "x-stoplight": {
                                  "id": "6mrnwc2zyvdeo"
                                },
                                "example": 1234,
                                "description": "Count in Statsig"
                              },
                              "external_count": {
                                "type": "number",
                                "x-stoplight": {
                                  "id": "zunbxxnzixrak"
                                },
                                "example": 1246,
                                "description": "Count from ingestion source"
                              },
                              "has_diff": {
                                "type": "boolean",
                                "x-stoplight": {
                                  "id": "ov5tpn71myiv9"
                                },
                                "description": "Whether there is a significant delta between internal and external counts"
                              },
                              "threshold": {
                                "type": "number",
                                "x-stoplight": {
                                  "id": "8j8v7i6fs08h0"
                                },
                                "example": 0.2,
                                "description": "Difference threshold"
                              },
                              "last_updated_time": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "w9bg7scrldsk5"
                                },
                                "description": "Last updated time of the data represented",
                                "example": "2024-03-05T19:43:59.110Z"
                              }
                            }
                          }
                        },
                        {
                          "x-stoplight": {
                            "id": "9scst73lx3dij"
                          },
                          "items": {
                            "x-stoplight": {
                              "id": "72c1yjtins9gq"
                            },
                            "type": "object",
                            "required": [
                              "date",
                              "events"
                            ],
                            "properties": {
                              "date": {
                                "type": "string",
                                "x-stoplight": {
                                  "id": "vraologu2fb0k"
                                },
                                "example": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
                                "description": "Date of record"
                              },
                              "events": {
                                "type": "array",
                                "x-stoplight": {
                                  "id": "lmlcddyglg58i"
                                },
                                "description": "List of events and their deltas. Elements are unique by event and source",
                                "items": {
                                  "x-stoplight": {
                                    "id": "r8e6k2qy1l6ht"
                                  },
                                  "type": "object",
                                  "required": [
                                    "source",
                                    "event",
                                    "internal_count",
                                    "external_count",
                                    "has_diff",
                                    "threshold",
                                    "last_updated_time"
                                  ],
                                  "properties": {
                                    "source": {
                                      "type": "string",
                                      "x-stoplight": {
                                        "id": "zzrmxo91q3zgc"
                                      },
                                      "description": "Name of ingestion source",
                                      "example": "main-source"
                                    },
                                    "event": {
                                      "type": "string",
                                      "x-stoplight": {
                                        "id": "3dvfsst5wcvpw"
                                      },
                                      "example": "example_event",
                                      "description": "Name of event"
                                    },
                                    "internal_count": {
                                      "type": "number",
                                      "x-stoplight": {
                                        "id": "5fh8zhp8ad1lj"
                                      },
                                      "example": 1234,
                                      "description": "Count in Statsig"
                                    },
                                    "external_count": {
                                      "type": "number",
                                      "x-stoplight": {
                                        "id": "63k5tnqaadoky"
                                      },
                                      "example": 1246,
                                      "description": "Count from ingestion source"
                                    },
                                    "has_diff": {
                                      "type": "boolean",
                                      "x-stoplight": {
                                        "id": "ptlaru5a4b2yr"
                                      },
                                      "description": "Whether there is a significant delta between internal and external counts"
                                    },
                                    "threshold": {
                                      "type": "number",
                                      "x-stoplight": {
                                        "id": "lccdrddoayx9p"
                                      },
                                      "example": 0.2,
                                      "description": "Difference threshold"
                                    },
                                    "last_updated_time": {
                                      "type": "string",
                                      "x-stoplight": {
                                        "id": "l3hyl2k4xu43g"
                                      },
                                      "description": "Last updated time of the data represented",
                                      "example": "2024-03-05T19:43:59.110Z"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "type": "array"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Event delta read successfully.",
                      "data": [
                        {
                          "date": "Mon Mar 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)",
                          "source": "main-source",
                          "event": "example_event",
                          "internal_count": 1234,
                          "external_count": 1246,
                          "has_diff": true,
                          "threshold": 0.2,
                          "last_updated_time": "2024-03-05T19:43:59.110Z"
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-ingestion-events-delta",
        "x-stoplight": {
          "id": "lgd48lh7921fx"
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "source_name",
            "description": "Name of ingestion source. If omitted, response includes all sources"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "event_name",
            "description": "Name of event. If omitted, response includes list of all events"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "start_date",
            "description": "Start date of date range to query"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "end_date",
            "description": "End date of date range to query"
          }
        ]
      }
    }
  }
}