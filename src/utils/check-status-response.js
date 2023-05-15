/* CheckStatusResponse */
export function checkStatusResponse(response) {
    if (response.ok) {
    return response.json();
    } 
    else {
    throw new Error(
        `This is an HTTP error: The status is ${response.status}
    `);
    }
};