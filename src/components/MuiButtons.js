import { Button, Icon } from "@mui/material";

const MuiButton = (props) => {
  return (
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
        }}
      >
        {props.icon}
        {props.title}
      </Button>
    </div>
  );
};

export default MuiButton;
