import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi, test, expect } from "vitest";
import axios from "axios";
import Home from "./pages/Home";

vi.mock("axios");

test("renders mocked user data after API call", async () => {
  const mockUser = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };

  axios.get.mockResolvedValue({
    data: [mockUser],
  });

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });
});