// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Core from "@material-ui/core";

function ExampleRadioGroup(Props) {
  var match = React.useState(function () {
        return "Yes";
      });
  var setState = match[1];
  return React.createElement(Core.RadioGroup, {
              children: null,
              name: "answer",
              onChange: (function (e) {
                  var value = e.target.value;
                  return Curry._1(setState, (function (param) {
                                return value;
                              }));
                }),
              value: match[0]
            }, React.createElement(Core.FormControlLabel, {
                  control: React.createElement(Core.Radio, {}),
                  label: "Yes",
                  value: "Yes"
                }), React.createElement(Core.FormControlLabel, {
                  control: React.createElement(Core.Radio, {}),
                  label: "No",
                  value: "No"
                }), React.createElement(Core.FormControlLabel, {
                  control: React.createElement(Core.Radio, {}),
                  label: "Maybe",
                  value: "Maybe"
                }));
}

var make = ExampleRadioGroup;

export {
  make ,
  
}
/* react Not a pure module */
