import { Box } from "@mui/material";
import { Color } from "./Colors";

const MuiBox = ({
  maxWidth,
  maxHeight,
  backgroundColor,
  display,
  flexDirection,
  boxShadow,
  borderRadius,
  content,
}) => {
  return (
    <Box
      flex={1}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      sx={{ backgroundColor, margin: 8 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      boxShadow={15}
      borderRadius={5}
    >
      {content}
    </Box>
  );
};

export default MuiBox;
