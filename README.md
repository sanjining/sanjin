# sanjin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

一些学习注释
在json文件配置中，是不支持注释的
有些没代码没有问题但是出现了报错问题，可以着重看一下是不是eslint的问题，如果是就将它的规则更改一下，一般是package.json文件的rules中
下面是eslint的网站，可以查看eslint的规则和选项
https://eslint.bootcss.com/docs/rules/
禁用eslint选项一般是false
允许的话可能是true或者error
"rules": {
      "generator-star-spacing": "off",
      "no-tabs":"off",//一些风格指南不允许使用 tab 字符，包括在注释内
      "no-unused-vars":"off",//声明了但是未使用就会报错
      "no-console":"off",
      "no-irregular-whitespace":"off",
      "no-debugger": "off"// 禁止debugger
  }

