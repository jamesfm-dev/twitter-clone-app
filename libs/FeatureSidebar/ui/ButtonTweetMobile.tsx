import Button, { ButtonProps } from "@mui/material/Button";
import IconTweet from "./IconTweet";

const ButtonTweetMobile = ({ href }: ButtonProps) => {
  return (
    <Button
      href={href}
      fullWidth={true}
      disableRipple={true}
      size="large"
      disableElevation
      sx={{
        backgroundColor: "#1D9BF0",
        height: 60,
        textTransform: "none",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "#1A8CD8",
        },
      }}
    >
      <IconTweet />
    </Button>
  );
};

export default ButtonTweetMobile;
