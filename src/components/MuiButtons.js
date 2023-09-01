import { Button, Icon } from "@mui/material";
import { Color } from "./Colors";

const MuiButton = (props) => {
  return (
    <>
      {props.variant === "contained" ? (
        <div style={{ margin: 15 }}>
          <Button
            variant={props.variant}
            onClick={props.onClick}
            href={props.href}
            sx={{
              margin: props.margin,
              marginTop: props.marginTop,
              backgroundColor: props.backgroundColor,
              color: props.color,
              ":hover": {
                color: "white",
              },
            }}
          >
            {props.icon}
            {props.title}
          </Button>
        </div>
      ) : (
        <div style={{ margin: 15 }}>
          <Button
            variant={props.variant}
            onClick={props.onClick}
            href={props.href}
            sx={{
              margin: props.margin,
              marginTop: props.marginTop,
              backgroundColor: props.backgroundColor,
              color: props.color,
              ":hover": {
                color: "black",
                bgcolor: Color.ivory,
              },
            }}
          >
            {props.icon}
            {props.title}
          </Button>
        </div>
      )}
    </>
  );
};

export default MuiButton;
