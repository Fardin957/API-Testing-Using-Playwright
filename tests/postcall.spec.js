import { test, expect } from '@playwright/test';

test('Post call request with token extraction', async ({ request }) => {
    // Make a POST request to the API endpoint

    const response = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: { "Content-Type": "application/json" },
        data: { username: "admin", password: "password123" }
    });

    console.log(response.status());
    const responseBody = await response.json();

    // Extract the token from the response body the positive assertion to check if the token is not null

    expect(responseBody.token).not.toBeNull();

    console.log(await response.text());
    console.log(await response.headers());
    console.log(await response.ok());
    console.log(await response.statusText());
    console.log(await response.url());

});


test('Post call request with booking ID', async ({ request }) => {
    const bookingData = {
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01'
        },
        additionalneeds: 'Breakfast'
    };

    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        headers: { 'Content-Type': 'application/json' },
        data: bookingData
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.bookingid).toBeTruthy();
    console.log('Status:', response.status());
    console.log('Booking ID:', responseBody.bookingid);
});



