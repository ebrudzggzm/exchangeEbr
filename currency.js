class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1ZdRVYk55Gzfxe6Y1thGNoUDrPJP6WPflcl9ncnj&base_currency=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const currencyRate = amount * result.data[secondCurrency];

    return currencyRate;
  }
}
