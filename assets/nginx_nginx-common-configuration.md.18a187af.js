import{_ as s,o as n,c as a,V as l}from"./chunks/framework.2e68d0e6.js";const d=JSON.parse('{"title":"Nginx 常用配置","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/nginx-common-configuration.md","filePath":"nginx/nginx-common-configuration.md","lastUpdated":1688366551000}'),p={name:"nginx/nginx-common-configuration.md"},e=l(`<h1 id="nginx-常用配置" tabindex="-1">Nginx 常用配置 <a class="header-anchor" href="#nginx-常用配置" aria-label="Permalink to &quot;Nginx 常用配置&quot;">​</a></h1><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">user                            root;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes                1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">  worker_connections            10240;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">  log_format                    &#39;$remote_addr - $remote_user [$time_local] &#39; &#39;&quot;$request&quot; $status $body_bytes_sent &#39; &#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  include                       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">  default_type                  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">  sendfile                      on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #autoindex                    on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="color:#A6ACCD;">  autoindex_localtime           on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  keepalive_timeout             65;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip                          on;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_disable                  &quot;msie6&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_min_length               100;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_buffers                  4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_comp_level               1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_types                  text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_types                    &quot;*&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_vary                     off;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens                 off;</span></span>
<span class="line"><span style="color:#A6ACCD;">  client_max_body_size          200m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name                 _;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return                      403 /www/403/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  include                       ../serve/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="隐藏-nginx-版本信息" tabindex="-1">隐藏 Nginx 版本信息 <a class="header-anchor" href="#隐藏-nginx-版本信息" aria-label="Permalink to &quot;隐藏 Nginx 版本信息&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_tokens         off;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="禁止-ip-直接访问-80-端口" tabindex="-1">禁止 ip 直接访问 80 端口 <a class="header-anchor" href="#禁止-ip-直接访问-80-端口" aria-label="Permalink to &quot;禁止 ip 直接访问 80 端口&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                80 default;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name           _;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return                500;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="启动-web-服务-vue-项目为例" tabindex="-1">启动 web 服务 (vue 项目为例) <a class="header-anchor" href="#启动-web-服务-vue-项目为例" aria-label="Permalink to &quot;启动 web 服务 (vue 项目为例)&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 项目启动端口</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen            80;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 域名（localhost）</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name       _;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;">  add_header        X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 项目目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    root 	    html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 默认读取文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    index           index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files       $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="color:#A6ACCD;">  location ~* \\.(gif|jpg|jpeg|png|css|js|ico)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root           html/static/;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 图片防盗链</span></span>
<span class="line"><span style="color:#A6ACCD;">  location ~/static/.*\\.(jpg|jpeg|png|gif|webp)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root              html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    valid_referers    *.deeruby.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return          403;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 访问限制</span></span>
<span class="line"><span style="color:#A6ACCD;">  location /static {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root               html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # allow 允许</span></span>
<span class="line"><span style="color:#A6ACCD;">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    # deny  拒绝</span></span>
<span class="line"><span style="color:#A6ACCD;">    deny               all;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="pc-端和移动端使用不同的项目文件映射" tabindex="-1">PC 端和移动端使用不同的项目文件映射 <a class="header-anchor" href="#pc-端和移动端使用不同的项目文件映射" aria-label="Permalink to &quot;PC 端和移动端使用不同的项目文件映射&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  ......</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /home/static/pc;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ($http_user_agent ~* &#39;(mobile|android|iphone|ipad|phone)&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      root /home/static/mobile;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="一个-web-服务-配置多个项目-location-匹配路由区别" tabindex="-1">一个 web 服务，配置多个项目 (location 匹配路由区别) <a class="header-anchor" href="#一个-web-服务-配置多个项目-location-匹配路由区别" aria-label="Permalink to &quot;一个 web 服务，配置多个项目 (location 匹配路由区别)&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                80;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name           _;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 主应用</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root          html/main;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index               index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 子应用一</span></span>
<span class="line"><span style="color:#A6ACCD;">  location ^~ /store/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass          http://localhost:8001;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Forwarded-For</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 子应用二</span></span>
<span class="line"><span style="color:#A6ACCD;">  location ^~ /school/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass          http://localhost:8002;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="color:#A6ACCD;">  rewrite ^/api/profile/(.*)$ /(替换成正确路径的文件的上一层目录)/$1 last;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 子应用一服务</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                8001;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name           _;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root          html/store;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index               index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location ^~ /store/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias               html/store/;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files           $uri /store/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 接口代理</span></span>
<span class="line"><span style="color:#A6ACCD;">  location  /api {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass          http://localhost:8089;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 子应用二服务</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                8002;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name           _;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root          html/school;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index               index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files           $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location ^~ /school/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias               html/school/;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files           $uri /school/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 接口代理</span></span>
<span class="line"><span style="color:#A6ACCD;">  location  /api {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass          http://localhost:10010;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="配置负载均衡" tabindex="-1">配置负载均衡 <a class="header-anchor" href="#配置负载均衡" aria-label="Permalink to &quot;配置负载均衡&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream my_upstream {</span></span>
<span class="line"><span style="color:#A6ACCD;">  server                http://localhost:9001;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server                http://localhost:9002;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server                http://localhost:9003;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name           test.com;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="ssl-配置-https" tabindex="-1">SSL 配置 HTTPS <a class="header-anchor" href="#ssl-配置-https" aria-label="Permalink to &quot;SSL 配置 HTTPS&quot;">​</a></h2><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                      80;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen                      443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate             /etc/nginx/ssl/www.xxx.com.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_certificate_key         /etc/nginx/ssl/www.xxx.com.key;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root                    /project/xxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try_files               $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,17),o=[e];function c(t,r,i,C,A,y){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
