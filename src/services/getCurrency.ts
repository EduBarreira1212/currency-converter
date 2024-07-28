import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY;

export const getCurrency = async (fromCurrency: string, toCurrency: string, amount: number) => {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);

        return response.data;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};