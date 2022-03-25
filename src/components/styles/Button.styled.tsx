import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue } from "@mui/material/colors";

// const StyledButton = styled.button`
//   font-family: Sora;
//   color: #fff;
//   background-color: #2196f3;
//   &:hover {
//     background-color: #1976d2;
//   }
// `;

const StyledButton = styled(Button)<ButtonProps>(() => ({
  disabled: "false",
  fontFamily: "Sora",
  color: "#fff",
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

export default StyledButton;
