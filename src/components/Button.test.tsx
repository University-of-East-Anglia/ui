import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  afterEach(cleanup);

  it("renders successfully", () => {
    render(<Button>My Cool Button</Button>);
    expect(screen.getByText(/My Cool Button/i)).toBeInTheDocument();
  });

  it("has primary styles if specified as a primary button", () => {
    const { container } = render(<Button variant="primary">My Cool Button</Button>);

    expect(container.querySelector("button")).toHaveStyle({
      backgroundColor: "rgba(228, 0, 135, var(--tw-bg-opacity))",
    });
  });

  it("has secondary styles if specified as a secondary button", () => {
    const { container } = render(<Button variant="secondary">My Cool Button</Button>);

    expect(container.querySelector("button")).toHaveStyle({
      backgroundColor: "rgba(0, 174, 240, var(--tw-bg-opacity))",
    });
  });
});
