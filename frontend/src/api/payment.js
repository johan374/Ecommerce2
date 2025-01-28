import axios from 'axios';

// Create an Axios instance for payments using your Render backend URL
const paymentApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Use the same API URL as other requests
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true  // Add this line
});

export const paymentAPI = {
    createOrder: async (items) => {
        console.log('Payment payload:', { items });
        try {
            const response = await paymentApi.post('/orders/create/', { items });
            return response;
        } catch (error) {
            console.error('Error details:', error.response?.data);
            throw error;
        }
    },
    
    processPayment: async (paymentIntentId, paymentMethodId) => {
        try {
            const response = await paymentApi.post('/process/', {
                payment_intent_id: paymentIntentId,
                payment_method_id: paymentMethodId
            });
            return response;
        } catch (error) {
            console.error('Error processing payment:', error);
            throw error;
        }
    }
};

export default paymentAPI;