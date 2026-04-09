import { render, screen } from "@testing-library/react";
import halamanLogin from "../../../pages/auth/login";

jest.mock("../../../views/auth/login", () => ({ __esModule: true, default: () => <div>Login View</div> }));

describe("Auth login page", () => {
  it("renders the login view wrapper", () => {
    render(<halamanLogin />);

    expect(screen.getByText(/login view/i)).toBeInTheDocument();
  });
});
