addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);

  // 如果直接访问站点，重定向至项目地址
  if (url.pathname === "/") {
    return Response.redirect("https://t.wyf9.top/rpxs-gh", 302);
  }

  const actualUrlStr = url.pathname.replace("/","") + url.search + url.hash

  const actualUrl = new URL(actualUrlStr)

  // 请求源站
  const modifiedRequest = new Request(actualUrl, {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);

  // 添加允许跨域访问(CORS)的响应头
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');

  return modifiedResponse;
}