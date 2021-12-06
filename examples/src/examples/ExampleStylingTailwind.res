@react.component
let make = () =>
  <Mui.StylesProvider injectFirst=true>
    <Mui.Button
      color=#primary
      classes={Mui.Button.Classes.make(~root="normal-case justify-start", ())}
      onClick=ignore>
      {React.string("Hello, Tailwind & MUI!")}
    </Mui.Button>
  </Mui.StylesProvider>
