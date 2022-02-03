import IconTweet from "./IconTweet";
import Fab, { FabProps } from "@mui/material/Fab";

const ButtonTweetMobile = ({ href }: FabProps) => {
  return (
    <Fab
      href={href}
      disableRipple={true}
      size="medium"
      sx={{
        left: -5,
        backgroundColor: "#1D9BF0",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#1A8CD8",
        },
      }}
    >
      <IconTweet />
    </Fab>
  );
};

export default ButtonTweetMobile;
