// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/styles";

function getSpacing(theme, num) {
  return String(Curry._1(theme.spacing, num)) + "px";
}

var useStyles = Styles.makeStyles(function (theme) {
      return {
              root: {
                display: "flex",
                flexWrap: "wrap"
              },
              formControl: {
                margin: getSpacing(theme, 1),
                minWidth: "120px"
              },
              selectEmpty: {
                marginTop: getSpacing(theme, 2)
              }
            };
    });

function ExampleSelect(Props) {
  var classes = useStyles();
  var match = React.useReducer((function (param, v) {
          return v;
        }), {
        age: "",
        name: "hai"
      });
  var setValues = match[1];
  var values = match[0];
  var match$1 = React.useReducer((function (param, v) {
          return v;
        }), undefined);
  var setInputLabelEl = match$1[1];
  var inputLabelEl = match$1[0];
  var inputLabel = React.useCallback((function (el) {
          return Curry._1(setInputLabelEl, (el == null) ? undefined : Caml_option.some(el));
        }), []);
  var match$2 = React.useReducer((function (param, l) {
          return l;
        }), 0);
  var setLabelWidth = match$2[1];
  React.useEffect((function () {
          if (inputLabelEl !== undefined) {
            Curry._1(setLabelWidth, Caml_option.valFromOption(inputLabelEl).offsetWidth);
          }
          
        }), [inputLabelEl]);
  var handleChangeAge = function (e, param) {
    return Curry._1(setValues, {
                age: e.target.value,
                name: values.name
              });
  };
  var handleChangeName = function (e, param) {
    return Curry._1(setValues, {
                age: values.age,
                name: e.target.value
              });
  };
  return React.createElement("form", {
              autoComplete: "off"
            }, React.createElement("div", {
                  className: classes.root
                }, React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "age-simple"
                        }), React.createElement(Core.Select, {
                          children: null,
                          inputProps: {
                            id: "age-simple",
                            name: "age"
                          },
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            }))), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "age-helper"
                        }), React.createElement(Core.Select, {
                          children: null,
                          input: React.createElement(Core.Input, {
                                id: "age-helper",
                                name: "age"
                              }),
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Some important helper text"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.Select, {
                          className: classes.selectEmpty,
                          name: "age",
                          children: null,
                          displayEmpty: true,
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Without label"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          shrink: true,
                          htmlFor: "age-label-placeholder"
                        }), React.createElement(Core.Select, {
                          className: classes.selectEmpty,
                          name: "age",
                          children: null,
                          displayEmpty: true,
                          input: React.createElement(Core.Input, {
                                id: "age-label-placeholder",
                                name: "age"
                              }),
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Label + placeholder"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl,
                      disabled: true
                    }, React.createElement(Core.InputLabel, {
                          children: "Name",
                          htmlFor: "name-disabled"
                        }), React.createElement(Core.Select, {
                          children: null,
                          input: React.createElement(Core.Input, {
                                id: "name-disabled",
                                name: "name"
                              }),
                          onChange: handleChangeName,
                          value: values.name
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Hai",
                              value: "hai"
                            }), React.createElement(Core.MenuItem, {
                              children: "Olivier",
                              value: "olivier"
                            }), React.createElement(Core.MenuItem, {
                              children: "Kevin",
                              value: "kevin"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Disabled"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl,
                      error: true
                    }, React.createElement(Core.InputLabel, {
                          children: "Name",
                          htmlFor: "name-error"
                        }), React.createElement(Core.Select, {
                          name: "name",
                          children: null,
                          input: React.createElement(Core.Input, {
                                id: "name-error"
                              }),
                          onChange: handleChangeName,
                          renderValue: (function (value) {
                              return "⚠️  - " + value;
                            }),
                          value: values.name
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Hai",
                              value: "hai"
                            }), React.createElement(Core.MenuItem, {
                              children: "Olivier",
                              value: "olivier"
                            }), React.createElement(Core.MenuItem, {
                              children: "Kevin",
                              value: "kevin"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Error"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.InputLabel, {
                          children: "Name",
                          htmlFor: "name-readonly"
                        }), React.createElement(Core.Select, {
                          children: null,
                          input: React.createElement(Core.Input, {
                                id: "name-readonly",
                                name: "name",
                                readOnly: true
                              }),
                          onChange: handleChangeName,
                          value: values.name
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Hai",
                              value: "hai"
                            }), React.createElement(Core.MenuItem, {
                              children: "Olivier",
                              value: "olivier"
                            }), React.createElement(Core.MenuItem, {
                              children: "Kevin",
                              value: "kevin"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Read only"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "age-auto-width"
                        }), React.createElement(Core.Select, {
                          autoWidth: true,
                          children: null,
                          input: React.createElement(Core.Input, {
                                id: "age-auto-width",
                                name: "age"
                              }),
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Auto width"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl
                    }, React.createElement(Core.Select, {
                          className: classes.selectEmpty,
                          name: "age",
                          children: null,
                          displayEmpty: true,
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: "Placeholder",
                              disabled: true,
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Placeholder"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl,
                      required: true
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "age-required"
                        }), React.createElement(Core.Select, {
                          className: classes.selectEmpty,
                          name: "age",
                          children: null,
                          inputProps: {
                            id: "age-required"
                          },
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })), React.createElement(Core.FormHelperText, {
                          children: "Required"
                        })), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl,
                      variant: "outlined"
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "outlined-age-simple",
                          ref: inputLabel
                        }), React.createElement(Core.Select, {
                          children: null,
                          input: React.createElement(Core.OutlinedInput, {
                                id: "outlined-age-simple",
                                labelWidth: match$2[0],
                                name: "age"
                              }),
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            }))), React.createElement(Core.FormControl, {
                      children: null,
                      className: classes.formControl,
                      variant: "filled"
                    }, React.createElement(Core.InputLabel, {
                          children: "Age",
                          htmlFor: "filled-age-simple"
                        }), React.createElement(Core.Select, {
                          children: null,
                          input: React.createElement(Core.FilledInput, {
                                id: "filled-age-simple",
                                name: "age"
                              }),
                          onChange: handleChangeAge,
                          value: values.age
                        }, React.createElement(Core.MenuItem, {
                              children: React.createElement("em", undefined, "None"),
                              value: ""
                            }), React.createElement(Core.MenuItem, {
                              children: "Ten",
                              value: "10"
                            }), React.createElement(Core.MenuItem, {
                              children: "Twenty",
                              value: "20"
                            }), React.createElement(Core.MenuItem, {
                              children: "Thirty",
                              value: "30"
                            })))));
}

var make = ExampleSelect;

export {
  getSpacing ,
  useStyles ,
  make ,
  
}
/* useStyles Not a pure module */
