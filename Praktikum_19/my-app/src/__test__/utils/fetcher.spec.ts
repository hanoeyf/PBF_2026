import fetcher from "../../utlis/swr/fetcher";

describe("fetcher utility", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("fetches json from the provided url", async () => {
    const mockedResponse = { data: [1, 2, 3] };
    (global.fetch as jest.Mock).mockResolvedValue({ json: jest.fn().mockResolvedValue(mockedResponse) });

    const result = await fetcher("/api/test");

    expect(global.fetch).toHaveBeenCalledWith("/api/test");
    expect(result).toEqual(mockedResponse);
  });
});
