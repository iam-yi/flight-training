import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function saveOrder(order) {
    return sendRequest(`${BASE_URL}/new`, 'POST', order);

}