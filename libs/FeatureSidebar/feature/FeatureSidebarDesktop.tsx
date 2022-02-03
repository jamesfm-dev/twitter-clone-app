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

const FeatureSidebarDesktop = () => {
  const route = useRouter();
  return (
    <Container
      sx={{
        pt: 2,
        px: 2,
        display: { xs: "none", sm: "block", md: "block", lg: "block" },
        width: "275px",
        height: "100vh",
        borderRight: "#2d2d2d 1px solid",
      }}
      disableGutters={true}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ height: "97%" }}
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
                  justifyContent="flex-start"
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
              width: "100%",
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
          <Grid item sx={{ display: { md: "block", lg: "none", xl: "none" } }}>
            <ButtonTweetMobile href={"/compose/tweet"} />
          </Grid>
        </Grid>
        <LogoutButtonDesktop userName={"@default"} />
      </Stack>
    </Container>
  );
};

export default FeatureSidebarDesktop;
