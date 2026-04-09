import { render, screen } from "@testing-library/react";
import registerPage from "../../../pages/auth/register";

jest.mock("../../../views/auth/register", () => ({ __esModule: true, default: () => <div>Register View</div> }));

describe("Auth register page", () => {
  it("renders the register view wrapper", () => {
    render(<registerPage />);

    expect(screen.getByText(/register view/i)).toBeInTheDocument();
  });
});
