// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = "https://fins-lb-cog.0xnutx.space/fins-auth-learn/v1/test";
  // await fetch(url, {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJraWQiOiJGeW5TVU9hRFVaSytidEE0WXk5dVRKM1FxRkloMzY0U1N1YndONWRUaEJrPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiV3J2ZW9IRlhCTnROeS1TaDNtOHBfdyIsInN1YiI6ImQ5MmE0NWNjLTAwNjEtNzA5OS1mZGUzLWQzMGI5N2VlZTFmMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfclhhZkZVMlVpIiwiY29nbml0bzp1c2VybmFtZSI6ImQ5MmE0NWNjLTAwNjEtNzA5OS1mZGUzLWQzMGI5N2VlZTFmMSIsIm5vbmNlIjoiN09xaEs3cVBMWXNXN1huSGp3cDZYZmNMZGY2R2J2WkZsQXVwd25VNkpUQSIsIm9yaWdpbl9qdGkiOiJmZGEwOWZiMS1mNTZlLTRlNWItODM3OC0wMTBhNGQ2YjQ1Y2YiLCJhdWQiOiIzaXRtY2ltcnIyY2VjM2FrN3Y5N3YxMjR2NiIsImV2ZW50X2lkIjoiNzEzMzE4YzQtMTY5NC00OGI5LThiYjAtM2VkM2E5ZjI3MTg4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTE2MzkyMTksImV4cCI6MTY5MTY0MjgxOSwiaWF0IjoxNjkxNjM5MjE5LCJqdGkiOiI3OWQ5NDAxOC03Mjc3LTQ0NTUtODk0NS1iNjkzOTA1YzY2Y2UiLCJlbWFpbCI6ImRldi5zdXBhbnV0QGdtYWlsLmNvbSJ9.JU7jEKPphus4wkh9LT1ZWd5Lkfsq3Uh9ZyH3K-gJGBJ1xNdhjnM25TefEmeVNrDzUFv1XkBI0bxYdbIcvf0HsZFqYnxBDI7Zr99SOlyYnl1VdJWgSgS5qDYMtBOdCGyIfb4lT4rLqfOneV__JdgCRY8Vi2Mu4PjaSruQn18HF9qdopv_48IayPTXvPli3VomCF13yz9KwTf5Iifh-7gSPCLM73yXpkcXRcb5QxohQ86JbV6ZaIunxYuW13SFQo3LcADXV8SZekzlEpdGv9EdbvntsxoF7OBcST2yLLr0e2C9Ouizz0rU5NduIxydxuCWhhlr9W96m9rv7-XXrWpv0w",
  //   },
  // }).then((res) => {
  //   res.json();
  // });

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    // headers: {
    //   Authorization:
    //     "Bearer eyJraWQiOiJGeW5TVU9hRFVaSytidEE0WXk5dVRKM1FxRkloMzY0U1N1YndONWRUaEJrPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiV3J2ZW9IRlhCTnROeS1TaDNtOHBfdyIsInN1YiI6ImQ5MmE0NWNjLTAwNjEtNzA5OS1mZGUzLWQzMGI5N2VlZTFmMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfclhhZkZVMlVpIiwiY29nbml0bzp1c2VybmFtZSI6ImQ5MmE0NWNjLTAwNjEtNzA5OS1mZGUzLWQzMGI5N2VlZTFmMSIsIm5vbmNlIjoiN09xaEs3cVBMWXNXN1huSGp3cDZYZmNMZGY2R2J2WkZsQXVwd25VNkpUQSIsIm9yaWdpbl9qdGkiOiJmZGEwOWZiMS1mNTZlLTRlNWItODM3OC0wMTBhNGQ2YjQ1Y2YiLCJhdWQiOiIzaXRtY2ltcnIyY2VjM2FrN3Y5N3YxMjR2NiIsImV2ZW50X2lkIjoiNzEzMzE4YzQtMTY5NC00OGI5LThiYjAtM2VkM2E5ZjI3MTg4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTE2MzkyMTksImV4cCI6MTY5MTY0MjgxOSwiaWF0IjoxNjkxNjM5MjE5LCJqdGkiOiI3OWQ5NDAxOC03Mjc3LTQ0NTUtODk0NS1iNjkzOTA1YzY2Y2UiLCJlbWFpbCI6ImRldi5zdXBhbnV0QGdtYWlsLmNvbSJ9.JU7jEKPphus4wkh9LT1ZWd5Lkfsq3Uh9ZyH3K-gJGBJ1xNdhjnM25TefEmeVNrDzUFv1XkBI0bxYdbIcvf0HsZFqYnxBDI7Zr99SOlyYnl1VdJWgSgS5qDYMtBOdCGyIfb4lT4rLqfOneV__JdgCRY8Vi2Mu4PjaSruQn18HF9qdopv_48IayPTXvPli3VomCF13yz9KwTf5Iifh-7gSPCLM73yXpkcXRcb5QxohQ86JbV6ZaIunxYuW13SFQo3LcADXV8SZekzlEpdGv9EdbvntsxoF7OBcST2yLLr0e2C9Ouizz0rU5NduIxydxuCWhhlr9W96m9rv7-XXrWpv0w",
    // },
  });

  const resJSOn = await response.json();
  console.log("resJSOn", resJSOn);

  // const resJSON = await response.json();
  // console.log("resJSON =>", resJSON);
  // const resJSON = await response.json();
  // console.log("resJSON =>", resJSON);

  // res.status(200).json({ name: "John Doe" });

  // const url = "https://fins-lb-cog.0xnutx.space/fins-auth-learn/v1/test";
  // // const response = await fetch(url)
  // //   .then((res) => res.json())
  // //   .then((json) => console.log("json=>", json));

  // const mock = await fetch(
  //   "https://fins-lb-cog.0xnutx.space/fins-auth-learn/v1/test"
  // )
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
}
