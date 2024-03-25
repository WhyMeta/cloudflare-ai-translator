import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
    const ai = new Ai(env.AI);
    const url = new URL(request.url);

    // 获取查询参数
    const text = url.searchParams.get('text') || `${env.text}`;
    const source_lang = url.searchParams.get('source_lang') || `${env.source_lang}`;
    const target_lang = url.searchParams.get('target_lang') || `${env.target_lang}`;

    const inputs = { text, source_lang, target_lang };
    const response = await ai.run('@cf/meta/m2m100-1.2b', inputs);

    return Response.json({ inputs, response });
  }
};
