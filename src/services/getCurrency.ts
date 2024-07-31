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

const apiConfig = {
    baseUrl: 'https://v6.exchangerate-api.com/v6/',
    apiKey: process.env.REACT_APP_API_KEY
};

export const getCurrency = async (fromCurrency: string, toCurrency: string, amount: number): Promise<number | null> => {
    const url = `${apiConfig.baseUrl}${apiConfig.apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`
    try {
        const response = await axios.get<IgetCurrencyResponse>(url);

        return response.data.conversion_result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};