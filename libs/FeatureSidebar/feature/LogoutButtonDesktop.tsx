import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutAvatar from "../ui/LogoutAvatar";

export interface LogoutButtonDesktopProps {
  src?: string;
  name?: string;
  userName: string;
}

const LogoutButtonDesktop = (props: LogoutButtonDesktopProps) => {
  const { name, src, userName } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <LogoutAvatar userName={userName} src={src} />
          </Grid>
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              spacing={-1}
              sx={{ color: "#d9d9d9", pl: 2 }}
            >
              <Typography>{!name ? userName.substring(1) : name}</Typography>
              <Typography>{userName || "@test_default"}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <MoreHorizIcon sx={{ color: "#d9d9d9" }} />
      </Grid>
    </Grid>
  );
};

export default LogoutButtonDesktop;
