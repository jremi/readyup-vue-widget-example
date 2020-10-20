class ReadyUpSearchApi {
  constructor() {
    this.baseURL = "https://search-api.readyup.gg";
    this.defaults = {
      sort: { property: "start", direction: "ASC" },
      start: () => Math.floor(Date.now() / 1000).toString(),
      end: () => {
        const d = new Date();
        return Math.floor(d.setFullYear(d.getFullYear() + 1) / 1000).toString();
      },
    };
  }

  getEvents(
    options = {},
    page = 0,
    pageSize = 25,
    start = this.defaults.start(),
    end = this.defaults.end(),
    sort = this.defaults.sort
  ) {
    return fetch(`${this.baseURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...options,
        page,
        pageSize,
        start,
        end,
        sort,
      }),
    }).then((response) => response.json());
  }
}

export default ReadyUpSearchApi;
