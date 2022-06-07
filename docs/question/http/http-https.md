# HTTP 和 HTTPS 的区别

## HTTPS 协议是什么

HTTPS（全称：Hypertext Transfer Protocol over Secure Socket Layer），是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版。即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。 它是一个 URI scheme（抽象标识符体系），句法类同 http:体系。用于安全的 HTTP 数据传输。https:URL 表明它使用了 HTTP，但 HTTPS 存在不同于 HTTP 的默认端口及一个加密/身份验证层（在 HTTP 与 TCP 之间）。这个系统的最初研发由进行，提供了身份验证与加密通讯方法，现在它被广泛用于网上安全敏感的通讯，例如交易支付方面。

超文本传输协议 (HTTP-Hypertext transfer protocol) 是一种详细规定了浏览器和服务器之间互相通信的规则，通过因特网传送文档的数据传送协议。

## HTTP 协议是什么？

HTTP 协议是超文本传输协议的缩写，英文是 Hyper Text Transfer Protocol。它是从 WEB 服务器传输超文本标记语言(HTML)到本地浏览器的传送协议。

设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。

HTPP 有多个版本，目前广泛使用的是 HTTP/1.1 版本。

## HTTPS 和 HTTP 的主要区别

https 协议需要到 CA 申请证书，一般免费证书较少，因而需要一定费用。

http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl/tls 加密传输协议。

http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。

http 的连接很简单，是无状态的；HTTPS 协议是由 SSL/TLS+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。

https 协议需要到 ca 申请证书，一般免费证书很少，需要交费。http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议 http 和 https 使用的是完全不同的连接方式用的端口也不一样,前者是 80,后者是 443。http 的连接很简单,是无状态的 HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议。
