import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ButtonTweet = ({ href }: ButtonProps) => {
  return (
    <Button
      href={href}
      fullWidth={true}
      disableRipple={true}
      variant="contained"
      size="large"
      disableElevation
      sx={{
        backgroundColor: "#1D9BF0",
        height: 50,
        textTransform: "none",
        borderRadius: 10,
        "&:hover": {
          backgroundColor: "#1A8CD8",
        },
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#FFF", fontSize: "17px", fontWeight: "bold" }}
      >
        Tweet
      </Typography>
    </Button>
  );
};

export default ButtonTweet;
