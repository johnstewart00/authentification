import { Box } from "@mui/material";
import { Color } from "./Colors";

const MuiBox = ({
  minWidth,
  minHeight,
  maxWidth = 600,
  maxHeight = 450,
  backgroundColor = Color.white,
  marginTop,
  padding,
  display,
  flexDirection,
  boxShadow,
  borderRadius,
  content,
  margin = 8,
}) => {
  return (
    <Box
      flex={1}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      sx={{
        backgroundColor,
        margin,
        marginTop,
        padding,
        fontFamily: "Georgia",
      }}
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      boxShadow={15}
      borderRadius={5}
    >
      {content}
    </Box>
  );
};

export default MuiBox;
