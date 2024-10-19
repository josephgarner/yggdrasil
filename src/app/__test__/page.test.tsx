import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "../page";

describe("Given the Home Page renders", () => {
  it("Then the heading should be displayed", () => {
    render(
      <ChakraProvider>
        <Page />
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
