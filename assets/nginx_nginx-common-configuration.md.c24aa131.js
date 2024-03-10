import{_ as s,o as a,c as n,V as e}from"./chunks/framework.bd00fe0c.js";const _=JSON.parse('{"title":"Nginx 常用配置","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/nginx-common-configuration.md","filePath":"nginx/nginx-common-configuration.md","lastUpdated":1688366551000}'),l={name:"nginx/nginx-common-configuration.md"},p=e(`<h1 id="nginx-常用配置" tabindex="-1">Nginx 常用配置 <a class="header-anchor" href="#nginx-常用配置" aria-label="Permalink to &quot;Nginx 常用配置&quot;">​</a></h1><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">user                            root;</span></span>
<span class="line"><span style="color:#babed8;">worker_processes                1;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">events {</span></span>
<span class="line"><span style="color:#babed8;">  worker_connections            10240;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">http {</span></span>
<span class="line"><span style="color:#babed8;">  log_format                    &#39;$remote_addr - $remote_user [$time_local] &#39; &#39;&quot;$request&quot; $status $body_bytes_sent &#39; &#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;;</span></span>
<span class="line"><span style="color:#babed8;">  include                       mime.types;</span></span>
<span class="line"><span style="color:#babed8;">  default_type                  application/octet-stream;</span></span>
<span class="line"><span style="color:#babed8;">  sendfile                      on;</span></span>
<span class="line"><span style="color:#babed8;">  #autoindex                    on;</span></span>
<span class="line"><span style="color:#babed8;">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="color:#babed8;">  autoindex_localtime           on;</span></span>
<span class="line"><span style="color:#babed8;">  keepalive_timeout             65;</span></span>
<span class="line"><span style="color:#babed8;">  gzip                          on;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_disable                  &quot;msie6&quot;;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_min_length               100;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_buffers                  4 16k;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_comp_level               1;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_types                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_types                    &quot;*&quot;;</span></span>
<span class="line"><span style="color:#babed8;">  gzip_vary                     off;</span></span>
<span class="line"><span style="color:#babed8;">  server_tokens                 off;</span></span>
<span class="line"><span style="color:#babed8;">  client_max_body_size          200m;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  server {</span></span>
<span class="line"><span style="color:#babed8;">    listen                      80 default_server;</span></span>
<span class="line"><span style="color:#babed8;">    server_name                 _;</span></span>
<span class="line"><span style="color:#babed8;">    return                      403 /www/403/index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  include                       ../serve/*.conf;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="隐藏-nginx-版本信息" tabindex="-1">隐藏 Nginx 版本信息 <a class="header-anchor" href="#隐藏-nginx-版本信息" aria-label="Permalink to &quot;隐藏 Nginx 版本信息&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">http {</span></span>
<span class="line"><span style="color:#babed8;">  server_tokens         off;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="禁止-ip-直接访问-80-端口" tabindex="-1">禁止 ip 直接访问 80 端口 <a class="header-anchor" href="#禁止-ip-直接访问-80-端口" aria-label="Permalink to &quot;禁止 ip 直接访问 80 端口&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                80 default;</span></span>
<span class="line"><span style="color:#babed8;">  server_name           _;</span></span>
<span class="line"><span style="color:#babed8;">  return                500;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="启动-web-服务-vue-项目为例" tabindex="-1">启动 web 服务 (vue 项目为例) <a class="header-anchor" href="#启动-web-服务-vue-项目为例" aria-label="Permalink to &quot;启动 web 服务 (vue 项目为例)&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  # 项目启动端口</span></span>
<span class="line"><span style="color:#babed8;">  listen            80;</span></span>
<span class="line"><span style="color:#babed8;">  # 域名（localhost）</span></span>
<span class="line"><span style="color:#babed8;">  server_name       _;</span></span>
<span class="line"><span style="color:#babed8;">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="color:#babed8;">  add_header        X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    # 项目目录</span></span>
<span class="line"><span style="color:#babed8;">    root 	    html;</span></span>
<span class="line"><span style="color:#babed8;">    # 默认读取文件</span></span>
<span class="line"><span style="color:#babed8;">    index           index.html;</span></span>
<span class="line"><span style="color:#babed8;">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="color:#babed8;">    try_files       $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="color:#babed8;">  location ~* \\.(gif|jpg|jpeg|png|css|js|ico)$ {</span></span>
<span class="line"><span style="color:#babed8;">    root           html/static/;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 图片防盗链</span></span>
<span class="line"><span style="color:#babed8;">  location ~/static/.*\\.(jpg|jpeg|png|gif|webp)$ {</span></span>
<span class="line"><span style="color:#babed8;">    root              html;</span></span>
<span class="line"><span style="color:#babed8;">    valid_referers    *.deeruby.com;</span></span>
<span class="line"><span style="color:#babed8;">    if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#babed8;">      return          403;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 访问限制</span></span>
<span class="line"><span style="color:#babed8;">  location /static {</span></span>
<span class="line"><span style="color:#babed8;">    root               html;</span></span>
<span class="line"><span style="color:#babed8;">    # allow 允许</span></span>
<span class="line"><span style="color:#babed8;">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="color:#babed8;">    # deny  拒绝</span></span>
<span class="line"><span style="color:#babed8;">    deny               all;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="pc-端和移动端使用不同的项目文件映射" tabindex="-1">PC 端和移动端使用不同的项目文件映射 <a class="header-anchor" href="#pc-端和移动端使用不同的项目文件映射" aria-label="Permalink to &quot;PC 端和移动端使用不同的项目文件映射&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  ......</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root /home/static/pc;</span></span>
<span class="line"><span style="color:#babed8;">    if ($http_user_agent ~* &#39;(mobile|android|iphone|ipad|phone)&#39;) {</span></span>
<span class="line"><span style="color:#babed8;">      root /home/static/mobile;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    index index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="一个-web-服务-配置多个项目-location-匹配路由区别" tabindex="-1">一个 web 服务，配置多个项目 (location 匹配路由区别) <a class="header-anchor" href="#一个-web-服务-配置多个项目-location-匹配路由区别" aria-label="Permalink to &quot;一个 web 服务，配置多个项目 (location 匹配路由区别)&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                80;</span></span>
<span class="line"><span style="color:#babed8;">  server_name           _;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 主应用</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root          html/main;</span></span>
<span class="line"><span style="color:#babed8;">    index               index.html;</span></span>
<span class="line"><span style="color:#babed8;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 子应用一</span></span>
<span class="line"><span style="color:#babed8;">  location ^~ /store/ {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass          http://localhost:8001;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Forwarded-For</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 子应用二</span></span>
<span class="line"><span style="color:#babed8;">  location ^~ /school/ {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass          http://localhost:8002;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="color:#babed8;">  rewrite ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/$1 last;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 子应用一服务</span></span>
<span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                8001;</span></span>
<span class="line"><span style="color:#babed8;">  server_name           _;</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root          html/store;</span></span>
<span class="line"><span style="color:#babed8;">    index               index.html;</span></span>
<span class="line"><span style="color:#babed8;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location ^~ /store/ {</span></span>
<span class="line"><span style="color:#babed8;">    alias               html/store/;</span></span>
<span class="line"><span style="color:#babed8;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#babed8;">    try_files           $uri /store/index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 接口代理</span></span>
<span class="line"><span style="color:#babed8;">  location  /api {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass          http://localhost:8089;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 子应用二服务</span></span>
<span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                8002;</span></span>
<span class="line"><span style="color:#babed8;">  server_name           _;</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root          html/school;</span></span>
<span class="line"><span style="color:#babed8;">    index               index.html;</span></span>
<span class="line"><span style="color:#babed8;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location ^~ /school/ {</span></span>
<span class="line"><span style="color:#babed8;">    alias               html/school/;</span></span>
<span class="line"><span style="color:#babed8;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#babed8;">    try_files           $uri /school/index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  # 接口代理</span></span>
<span class="line"><span style="color:#babed8;">  location  /api {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass          http://localhost:10010;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="配置负载均衡" tabindex="-1">配置负载均衡 <a class="header-anchor" href="#配置负载均衡" aria-label="Permalink to &quot;配置负载均衡&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">upstream my_upstream {</span></span>
<span class="line"><span style="color:#babed8;">  server                http://localhost:9001;</span></span>
<span class="line"><span style="color:#babed8;">  server                http://localhost:9002;</span></span>
<span class="line"><span style="color:#babed8;">  server                http://localhost:9003;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                9000;</span></span>
<span class="line"><span style="color:#babed8;">  server_name           test.com;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><h2 id="ssl-配置-https" tabindex="-1">SSL 配置 HTTPS <a class="header-anchor" href="#ssl-配置-https" aria-label="Permalink to &quot;SSL 配置 HTTPS&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                      80;</span></span>
<span class="line"><span style="color:#babed8;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#babed8;">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="color:#babed8;">  return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen                      443 ssl;</span></span>
<span class="line"><span style="color:#babed8;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_certificate             /etc/nginx/ssl/www.xxx.com.pem;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_certificate_key         /etc/nginx/ssl/www.xxx.com.key;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#babed8;">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root                    /project/xxx;</span></span>
<span class="line"><span style="color:#babed8;">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="color:#babed8;">    try_files               $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div>`,17),o=[p];function c(t,r,i,b,d,y){return a(),n("div",null,o)}const m=s(l,[["render",c]]);export{_ as __pageData,m as default};
