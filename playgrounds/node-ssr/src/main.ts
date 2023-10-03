import koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import { nodeResolve } from 'koa-node-resolve';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import { renderIndex } from './pages/index.js';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4200;

const app = new koa();
const router = new Router();

app.use(nodeResolve());
app.use(KoaStatic(process.cwd()));

router.get('/', (ctx) => {
  const name =
    ctx.query['name']
    ? Array.isArray(ctx.query['name'])
    ? ctx.query['name'][0]
    : ctx.query['name']
    : 'World';
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(renderIndex({ name }));
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, host, () => console.log(`[ ready ] http://${host}:${port}`));
