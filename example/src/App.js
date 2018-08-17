import React, { Component } from 'react'

import ExampleComponent from 'busybee-result-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent results={json} />
      </div>
    )
  }
}

const json =
{
  "data": [
      {
          "id": "REST TestSuite",
          "pass": true,
          "testSets": [
              {
                  "id": "ts1",
                  "pass": true,
                  "tests": [
                      {
                          "body": {
                              "actual": {
                                  "arr": [
                                      1,
                                      2,
                                      3
                                  ],
                                  "hello": "world",
                                  "object": {
                                      "1": "2",
                                      "arr": [
                                          1,
                                          3,
                                          4
                                      ],
                                      "nested": {
                                          "arr": [
                                              1,
                                              2,
                                              3,
                                              4
                                          ],
                                          "im": "nested"
                                      }
                                  }
                              },
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:15 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/body-assertion"
                          },
                          "status": {
                              "actual": 200,
                              "pass": true
                          }
                      },
                      {
                          "body": {
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:15 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "status assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/status-assertion"
                          },
                          "status": {
                              "actual": 404,
                              "pass": true
                          }
                      }
                  ]
              },
              {
                  "id": "ts1",
                  "pass": true,
                  "tests": [
                      {
                          "body": {
                              "actual": {
                                  "arr": [
                                      1,
                                      2,
                                      3
                                  ],
                                  "hello": "world",
                                  "object": {
                                      "1": "2",
                                      "arr": [
                                          1,
                                          3,
                                          4
                                      ],
                                      "nested": {
                                          "arr": [
                                              1,
                                              2,
                                              3,
                                              4
                                          ],
                                          "im": "nested"
                                      }
                                  }
                              },
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:18 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/body-assertion"
                          },
                          "status": {
                              "actual": 200,
                              "pass": true
                          }
                      },
                      {
                          "body": {
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:18 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "status assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/status-assertion"
                          },
                          "status": {
                              "actual": 404,
                              "pass": true
                          }
                      }
                  ]
              },
              {
                  "id": "ts1",
                  "pass": true,
                  "tests": [
                      {
                          "body": {
                              "actual": {
                                  "arr": [
                                      1,
                                      2,
                                      3
                                  ],
                                  "hello": "world",
                                  "object": {
                                      "1": "2",
                                      "arr": [
                                          1,
                                          3,
                                          4
                                      ],
                                      "nested": {
                                          "arr": [
                                              1,
                                              2,
                                              3,
                                              4
                                          ],
                                          "im": "nested"
                                      }
                                  }
                              },
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:21 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/body-assertion"
                          },
                          "status": {
                              "actual": 200,
                              "pass": true
                          }
                      },
                      {
                          "body": {
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:21 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "status assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/status-assertion"
                          },
                          "status": {
                              "actual": 404,
                              "pass": true
                          }
                      }
                  ]
              },
              {
                  "id": "ts1",
                  "pass": true,
                  "tests": [
                      {
                          "body": {
                              "actual": {
                                  "arr": [
                                      1,
                                      2,
                                      3
                                  ],
                                  "hello": "world",
                                  "object": {
                                      "1": "2",
                                      "arr": [
                                          1,
                                          3,
                                          4
                                      ],
                                      "nested": {
                                          "arr": [
                                              1,
                                              2,
                                              3,
                                              4
                                          ],
                                          "im": "nested"
                                      }
                                  }
                              },
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:24 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/body-assertion"
                          },
                          "status": {
                              "actual": 200,
                              "pass": true
                          }
                      },
                      {
                          "body": {
                              "pass": true
                          },
                          "headers": {
                              "actual": [
                                  {
                                      "content-type": "application/json"
                                  },
                                  {
                                      "date": "Thu, 16 Aug 2018 19:14:24 GMT"
                                  },
                                  {
                                      "connection": "close"
                                  },
                                  {
                                      "transfer-encoding": "chunked"
                                  }
                              ],
                              "pass": true
                          },
                          "id": "status assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/status-assertion"
                          },
                          "status": {
                              "actual": 404,
                              "pass": true
                          }
                      }
                  ]
              }
          ],
          "type": "REST"
      },
      {
          "id": "USER_PROVIDED TestSuite",
          "pass": false,
          "testSets": [
              {
                  "error": {
                      "message": "Unexpected token F in JSON at position 0",
                      "stack": "SyntaxError: Unexpected token F in JSON at position 0\n    at JSON.parse (<anonymous>)\n    at ParsedTestSetConfig.assertion (/Users/212589146/dev/busybee/busybee/test/IT/fixtures/mixed-test-suite-type/config.js:94:33)\n    at GenericSuiteManager.<anonymous> (/Users/212589146/dev/busybee/busybee/src/managers/GenericSuiteManager.ts:90:41)\n    at step (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:32:23)\n    at Object.next (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:13:53)\n    at fulfilled (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:4:58)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)"
                  },
                  "id": "ts1",
                  "pass": false
              },
              {
                  "error": {
                      "message": "Unexpected token P in JSON at position 0",
                      "stack": "SyntaxError: Unexpected token P in JSON at position 0\n    at JSON.parse (<anonymous>)\n    at ParsedTestSetConfig.assertion (/Users/212589146/dev/busybee/busybee/test/IT/fixtures/mixed-test-suite-type/config.js:117:33)\n    at GenericSuiteManager.<anonymous> (/Users/212589146/dev/busybee/busybee/src/managers/GenericSuiteManager.ts:90:41)\n    at step (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:32:23)\n    at Object.next (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:13:53)\n    at fulfilled (/Users/212589146/dev/busybee/busybee/dist/src/managers/GenericSuiteManager.js:4:58)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)"
                  },
                  "id": "ts1",
                  "pass": false
              }
          ],
          "type": "USER_PROVIDED"
      }
  ],
  "runId": "8e133dd0-a188-11e8-9b6e-17c0db374515",
  "runTimestamp": 1534446850605
};
