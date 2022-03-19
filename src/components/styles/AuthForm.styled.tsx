import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";

const StyledAuthForm = styled(Box)<BoxProps>(() => ({
  fontFamily: "Sora",
  maxWidth: "25rem",
  margin: "3rem auto",
  padding: "1rem",
  ".MuiPaper-root": {
    minHeight: "58vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem",
  },
  "& form": {
    textAlign: "center",
    ".MuiBox-root": {
    },
    ".action": {
      marginTop: "40px"
    }
  },
  "& h1": {
    marginBottom:"30px",
    fontSize: "3rem",
    color: "#15cdfc"
  },
  "& .toggle": {
    cursor: "pointer",
    margin: "10px 0",
    fontSize: "12px",
    color: "#1c1c1c",
  },
  "& .toggle:hover": {
    color: "#7e7e7e",
    textDecoration: "underline",
  },
}));

export default StyledAuthForm;

// export const StyledAuthForm = styled(Paper)`
//   width: 95%;
//   max-width: 25rem;
//   margin: 3rem auto;
//   padding: 1rem;
//   height: 50vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
//   background-color: #fff; */

//   & h1 {
//     font-size: 3rem;
//     color: #15cdfc;
//     margin: 20px 0;
//   }

//   & p {
//     margin: 10px 0;
//     font-size: 12px;
//     color: #1c1c1c;
//   }
//   & p:hover {
//     color: #7e7e7e;
//     cursor: pointer;
//     text-decoration: underline;
//   }

//   & form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;
