import Container, { ContainerProps } from "@mui/material/Container";

const BaseContainer = ({ children }: ContainerProps) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{ background: "black", minHeight: "100vh" }}
    >
      <Container disableGutters={false} maxWidth="xl">
        {children}
      </Container>
    </Container>
  );
};

export default BaseContainer;
