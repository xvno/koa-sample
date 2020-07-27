# Koa2 tutorial for dummies

## 是什么

Koa 就是一种简单好用的 **Web 框架**。它的特点是优雅、简洁.
### 简单上手

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Heya....Koa2 here!'
})

let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`)
});

```

### 关键对象

#### 1 Context对象--简写为ctx

Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

##### 1.1 响应体(response -> body)

```js
function handler (ctx) {
    ctx.body = 'Hello, this is koa server';
}
app.use(handler);
```

##### 1.2 response -> type, request -> accepts

根据请求头"accept"来返回对应类型的数据

```js
function handler(ctx) {
    console.log(ctx.request);
    if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello, html message</p>';
    } else if (ctx.accepts('json')) {
        ctx.type = 'json';
        ctx.body = { data: 'Hello, json' };
    } else if (ctx.accepts('xml')) {
        ctx.type = 'xml';
        ctx.body = '<xml><data>Hello, xml</data></xml>';
        ``;
    } else {
        ctx.type = 'text';
        ctx.body = 'Hello, this is koa server';
    }
}
```

```sh
curl http://localhost:4096 -H 'accept:application/json'
curl http://localhost:4096 -H 'accept:text/html'
```

# Koa2 tutorial for dummies

## 是什么

Koa 就是一种简单好用的 **Web 框架**。它的特点是优雅、简洁.
### 简单上手

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Heya....Koa2 here!'
})

let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`)
});

```

### 关键对象

#### 1 Context对象--简写为ctx

Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

##### 1.1 响应体(response -> body)

```js
function handler (ctx) {
    ctx.body = 'Hello, this is koa server';
}
app.use(handler);
```

##### 1.2 response -> type, request -> accepts

根据请求头"accept"来返回对应类型的数据

```js
function handler(ctx) {
    console.log(ctx.request);
    if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello, html message</p>';
    } else if (ctx.accepts('json')) {
        ctx.type = 'json';
        ctx.body = { data: 'Hello, json' };
    } else if (ctx.accepts('xml')) {
        ctx.type = 'xml';
        ctx.body = '<xml><data>Hello, xml</data></xml>';
        ``;
    } else {
        ctx.type = 'text';
        ctx.body = 'Hello, this is koa server';
    }
}
```

```sh
curl http://localhost:4096 -H 'accept:application/json'
curl http://localhost:4096 -H 'accept:text/html'
```

