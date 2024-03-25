# cloudflare-ai-translator
基于 Cloudflare AI 的 Translator Workers，接收 URL 参数变量实现 get 请求直接得到翻译结果
<img width="552" alt="image" src="https://github.com/WhyMeta/cloudflare-ai-translator/assets/6345591/55a6a30b-f9a1-4047-a772-b574761aea23">

- `example`: https://translator.cloudflare.workers.dev/?source_lang=en&target_lang=zh&text='Tell%20me%20a%20joke%20about%20Cloudflare'
- `translator.cloudflare.workers.dev` --> 替换为你自己的触发域自定义域名或者优选 IP 的路由域名

# DEPLOY
1. Workers 和 Pages 选择创建应用程序
<img width="865" alt="image" src="https://github.com/WhyMeta/cloudflare-ai-translator/assets/6345591/22d3b71a-2ea4-4e6a-952d-b26a40cd719f">

2. 选择`翻译应用模板`(会绑定关联 AI workers，所以Cloudflare 账户需要绑定信用卡/PayPal，PayPal 可以使用国内的卡绑定，CF 开通 free 计划足够个人使用了)
<img width="1289" alt="image" src="https://github.com/WhyMeta/cloudflare-ai-translator/assets/6345591/4eafd9b1-aa93-48e4-896a-e9b05c55eb91">

3. 改名称，部署

4. 编辑代码，复制`index.js`的代码覆盖，部署

5. 设置 - 变量里面定义缺省变量，SOURCE_LANG=en、TARGET_LANG=zh、TEXT=I am Cloudflare AI translator

6. 绑定你的触发器自定义域名或者路由优选 IP 的域名

7. source_lang(需要翻译的来源语言)、target_lang(翻译后的目标语言)、text(需要翻译的文本，注意 URL 编码)

