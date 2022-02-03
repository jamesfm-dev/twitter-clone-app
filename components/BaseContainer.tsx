import Container, { ContainerProps } from "@mui/material/Container";

export interface BaseContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const BaseContainer = ({ children }: BaseContainerProps) => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{ background: "black", minHeight: "100vh" }}
    >
      <Container disableGutters={false} maxWidth="lg">
        {children}
      </Container>
    </Container>
  );
};

export default BaseContainer;
