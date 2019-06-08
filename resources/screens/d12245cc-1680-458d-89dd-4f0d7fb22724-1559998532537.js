jQuery("#simulation")
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "99"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1": {
                      "attributes": {
                        "padding-top": "20px",
                        "line-height": "38px",
                        "font-size": "20.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1 .valign": {
                      "attributes": {
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1 span": {
                      "attributes": {
                        "text-align": "center",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "50"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInOutQuart",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "70"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "130"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "100"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "80"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "24"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 1500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_72" ],
                    "effect": {
                      "type": "slide",
                      "easing": "easeInOutQuint",
                      "duration": 2000,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_9" ],
                    "effect": {
                      "type": "slide",
                      "easing": "easeInOutQuint",
                      "duration": 2000,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "150"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 2000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Master_item_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuint",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 1500
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });