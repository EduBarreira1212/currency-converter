import axios from "axios"

interface IgetCurrencyResponse {
    result: string,
    documentation: string,
    terms_of_use: string,
    time_last_update_unix: number,
    time_last_update_utc: string,
    time_next_update_unix: number,
    time_next_update_utc: string,
    base_code: string,
    target_code: string,
    conversion_rate: number,
    conversion_result: number
}

const apiKey = process.env.REACT_APP_API_KEY;

export const getCurrency = async (fromCurrency: string, toCurrency: string, amount: number) => {
    try {
        const response = await axios.get<IgetCurrencyResponse>(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);

        return response.data.conversion_result;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};