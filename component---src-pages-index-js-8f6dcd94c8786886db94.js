(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("6Gk8"),i=a("Bl7J"),c=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(i.a,{location:l,title:s},n.a.createElement(c.a,{title:"All posts"}),n.a.createElement(o.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(i.a,{location:l,title:s},n.a.createElement(c.a,{title:"All posts"}),n.a.createElement(o.a,null),m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("article",{key:e.fields.slug,className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))})))};var s="2239478271"}}]);
//# sourceMappingURL=component---src-pages-index-js-8f6dcd94c8786886db94.js.map