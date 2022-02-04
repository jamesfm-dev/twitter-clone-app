import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ButtonTweet from "../ui/ButtonTweet";
import ButtonTweetMobile from "../ui/ButtonTweetMobile";
import SidebarLink from "../ui/SidebarLink";
import TwitterLogo from "../../../components/TwitterLogo";
import Link from "../../../components/Link";
import SidebarLinks from "../data-access/SidebarLinks/SidebarLinks";
import LogoutButtonDesktop from "./LogoutButtonDesktop";
import Drawer from "@mui/material/Drawer";

export const FeatureSidebarDesktop = () => {
  const route = useRouter();
  const drawerWidth = 275;

  return (
    <Drawer
      sx={{
        display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
        width: {
          xl: drawerWidth,
          lg: drawerWidth,
          md: 70,
          sm: 70,
        },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {
            xl: drawerWidth,
            lg: drawerWidth,
            md: 70,
            sm: 70,
          },
          boxSizing: "border-box",
          backgroundColor: "black",
          left: "auto",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Container
        fixed
        sx={{
          pt: 2,
          px: 2,
          display: { xs: "none", sm: "block", md: "block", lg: "block" },
          height: "100vh",
        }}
        disableGutters={true}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ height: "98%" }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Link href={{ pathname: "/home" }}>
                <TwitterLogo />
              </Link>
            </Grid>
            {SidebarLinks.map((links, i) => (
              <Grid item key={i}>
                <Link
                  href={{
                    pathname: `/${links[0].toString().toLowerCase()}`,
                  }}
                  underline="none"
                >
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      {route.pathname.substring(1) ===
                      links[0].toString().toLowerCase()
                        ? links[2]
                        : links[1]}
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
                      <SidebarLink
                        active={
                          route.pathname.substring(1) ===
                          links[0].toString().toLowerCase()
                            ? true
                            : false
                        }
                      >
                        {links[0].toString()}
                      </SidebarLink>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))}
            <Grid
              item
              sx={{
                width: "250px",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <ButtonTweet href={"/compose/tweet"} />
            </Grid>
            <Grid
              item
              sx={{ display: { md: "block", lg: "none", xl: "none" } }}
            >
              <ButtonTweetMobile href={"/compose/tweet"} />
            </Grid>
          </Grid>
          <LogoutButtonDesktop userName={"@default"} />
        </Stack>
      </Container>
    </Drawer>
  );
};

export default FeatureSidebarDesktop;
