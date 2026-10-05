import { expect, test } from "@playwright/test";

test("Get call", async ({ request }) => {
    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    // console.log(resp);

    // get the response body as a string

    const body = await resp.body();

    //console.log(body)


    // get the response body as JSON

    const jsondata=await resp.json()
    // (console.log(jsondata)

    const respheader = await resp.headers();

    //console.log(respheader)
    const statuscode = await resp.status();
    //console.log(statuscode);
    //expect(statuscode).toBe(200);
    const statustext = await resp.statusText();
    //console.log(statustext);

    const contenttype = await respheader["content-type"];
    console.log(contenttype);
    expect(contenttype).toBe("application/json; charset=utf-8");
    expect(statustext).toBe("OK");
    expect(statuscode).toBe(200);

    






});


