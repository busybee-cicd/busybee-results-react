import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ExampleComponent from 'busybee-results-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent results={json} />
      </div>
    )
  }
}

const json = {
  "data": [
      {
          "id": "REST TestSuite",
          "pass": false,
          "summary": {
            "numberOfPassedTests": 4,
            "numberOfTestSets": 4,
            "numberOfTests": 6
          },
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
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/body-assertion"
                          }
                      },
                      {
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
                  "id": "ts2",
                  "pass": false,
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
                              "error": {
                                  "error": "you should see this error!",
                                  "stack": "Error: you should see this error!\n    at RESTTestExpect.body (/Users/212589146/dev/busybee/busybee/test/IT/fixtures/mixed-test-suite-type/REST/test/ts2/body-assertion.js:15:17)\n    at RESTSuiteManager.validateTestResult (/Users/212589146/dev/busybee/busybee/src/managers/RESTSuiteManager.ts:380:40)\n    at RESTSuiteManager.<anonymous> (/Users/212589146/dev/busybee/busybee/src/managers/RESTSuiteManager.ts:170:16)\n    at step (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:32:23)\n    at Object.next (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:13:53)\n    at fulfilled (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:4:58)\n    at <anonymous>",
                                  "type": "custom validation function"
                              },
                              "pass": false
                          },
                          "id": "body fn assertion error",
                          "pass": false,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/body-assertion"
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
                          "id": "body assertion",
                          "pass": true,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7777/body-assertion"
                          }
                      },
                      {
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
                  "id": "ts2",
                  "pass": false,
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
                              "error": {
                                  "error": "you should see this error!",
                                  "stack": "Error: you should see this error!\n    at RESTTestExpect.body (/Users/212589146/dev/busybee/busybee/test/IT/fixtures/mixed-test-suite-type/REST/test/ts2/body-assertion.js:15:17)\n    at RESTSuiteManager.validateTestResult (/Users/212589146/dev/busybee/busybee/src/managers/RESTSuiteManager.ts:380:40)\n    at RESTSuiteManager.<anonymous> (/Users/212589146/dev/busybee/busybee/src/managers/RESTSuiteManager.ts:170:16)\n    at step (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:32:23)\n    at Object.next (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:13:53)\n    at fulfilled (/Users/212589146/dev/busybee/busybee/dist/src/managers/RESTSuiteManager.js:4:58)\n    at <anonymous>",
                                  "type": "custom validation function"
                              },
                              "pass": false
                          },
                          "id": "body fn assertion error",
                          "pass": false,
                          "request": {
                              "json": true,
                              "method": "GET",
                              "resolveWithFullResponse": true,
                              "simple": false,
                              "timeout": 30000,
                              "url": "http://localhost:7778/body-assertion"
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
  "runId": "91b44920-a7b9-11e8-a960-4d43603081ac",
  "runTimestamp": 1535127609009
};
