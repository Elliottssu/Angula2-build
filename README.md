> AngularJs作为目前全球最为前沿的前端框架之一，国内已经有很多公司都在用了。 然而前几天谷歌正式发布的Angular2，相比上一版的AngularJS简直不是亲生的。完全颠覆AngularJS1.x的模板语法，但是作为热爱挑战的程序猿，是时候要折腾一番啦。

在开始这个项目之前将会涉及到如下几个知识点。

####一、项目包含

- 利用**Sails**作为本次项目的Node MVC框架。
- 使用**Gulp**作为前端自动化项目构建工具。
- 使用**Bower**进行各种前端插件包管理。
- 使用**less**来编译css。
- 使用**typescript**来编译javascript。
- 使用**swig**模板引擎写html。
- 使用**MongoDB**来完成数据的存储。
- 使用**Angular2**来完成整个项目。

####二、项目结构

为了方便大家理解本篇文章的结构，我把结构图画了出来，主要是整个框架的搭建流程。

![Angular2 框架搭建](http://upload-images.jianshu.io/upload_images/3502567-353baec874dff720.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


####三、知识背景

**Sails**

本次选取sails作为基本框架是因为Sails相比express能够快速的构建项目，有很多优秀的框架结构和扩展，并且使用了waterline(ORM)进行统一地数据库交互，使得可以在不同的数据库环境中无需直接修改代码即可完成增删改查操作。

通过sails可以清晰编写代码，并且封装好了大量的api，比如路由、http、数据库操作等等，这里不再讲述详细的框架功能及优点。在接下来的项目中，我会讲解涉及到sails的相关代码。

Tips:如果是刚接触sails，建议：点击[《sails框架功能详解》]()或官方文档[《Sails.js Documentation》](http://sailsjs.com/documentation/anatomy)。

**Gulp**

前端自动化构建工具一般有gulp和grunt两种来进行部署代码（合并、压缩、加密、编译等），但我还是喜欢用gulp，因为gulp遵循代码优于配置，遵循commonJS规范，使用的是Pipe管道流来处理代码，而且使用gulp会比grunt更快。种种原因让我把sails里自带的grunt替换成了gulp，这样会更顺手。

Tips:想了解关于gulp与grunt区别与用法，可以点击[《Gulp入门指南》](http://www.gulpjs.com.cn/docs/getting-started/)。

**Bower**

Bower作为前端包管理工具，它可用于安装卸载前端的css,js资源。和npm的node包管理有些许不同（通过npm也能安装前端资源），bower功能简单，更加灵活专注。并且可以非常轻松的更新最新资源，方便维护。

Tips:想了解关于bower用法，可以点击[《bower简明入门教程》](https://segmentfault.com/a/1190000002971135)。

**TypeScript**

TypeScript 是 JavaScript 的超集，支持所有的JavaScript语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。Angular2用的就是typescript，所以本次项目代码均是在其基础上编写。

Tips:想了解关于typescript用法，可以点击[《typescript中文网》](https://www.tslang.cn/docs/tutorial.html)。

**MongoDB**

MongoBD是非关系型、面向文档的数据库，使用的是JSON风格语法，方便掌握理解，这对于web应用程序有很大意义。对于大数据量、高并发、弱事务的互联网应用，MongoDB可以应对自如。

Tips:想了解关于MongoBD更多用法，可以点击[《MongoDB使用指南》](http://blog.csdn.net/foruok/article/details/47746057)。

**Angular2**

Angular2相比第一代做出了非常大的改变，第一代显然非常成功，为什么现在要用上angular2呢？angular2是基于ES6，有非常丰富的组件，更好的适应移动端等等很多优势，现在正是学习Angular2的好时候。

Tips:想了解关于angular2用法，可以点击中文官方文档[《AngularJS快速起步》](https://angular.cn/docs/ts/latest/quickstart.html)。

####四、前期准备

1.本项目需要在node环境运行，所以需要首选要安装nodeJS。直接下载安装包即可,推荐安装官网nodeJS最新版，集成了npm。

2.用npm安装模块速度较慢，这里使用的是cnpm（淘宝的npm镜像），通过执行命令行：`npm install -g cnpm -- registry=https: //registry.npm.taobao.org` 来安装cnpm。使用cnpm还要安装node-gyp作为npm底层包的支持，因为cnpm中没有，命令行执行：`cnpm install node-gyp -g`。

3.项目是基于sails的，需要全局安装sails。命令行执行：`cnpm install -g sails`。

4.项目中用到gulp,需要全局安装gulp。命令行执行：`cnpm install -g gulp`。

####五、项目创建

**安装sails-gulp框架**

- 因为本次项目中使用的是gulp,但是sails自带的是grunt，所以要先把grunt替换成gulp。如果直接自己去一个个修改的话显然不合适,这里就用到国外大神开发的第三方sails插件,
方法如下：

- 全局安装sails-gulp模块。命令行执行 `cnpm install -g sails-generate-new-gulp sails-generate-gulpfile sails-generate-frontend-gulp sails-generate-backend-gulp `。

- 生成.sailsrc文件。命令行执行` echo. > .sailsrc`  “echo.>xx”命令可以直接生成文件，这样比较快。注意：这里的.sailsrc需要放在项目文件夹的同级或父级。小知识：以“rc”结尾的文件是和linux系统里rc文件很像，就是自动识别加载该配置文件，后面很多模块都会用到。

- 添加.sailsrc如下内容

![](http://upload-images.jianshu.io/upload_images/3502567-c91aa5a29cae694c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 同目录下执行`sails new Angular2-build`，即可生成该名字的sails框架。默认目录结构如下（该目录结构不再详细讲解,不熟悉的可以看《sails结构详解》）：

![](http://upload-images.jianshu.io/upload_images/3502567-8a1149222472c1ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**安装bower**

项目中会用到各种css、js框架，比如bootstrap、jquery等，通过bower进行统一的安装管理还是非常有必要的。

- 全局安装bower：cnpm install –g bower 。

- 项目根目录下新建. bowerrc文件：echo. > . bowerrc 。然后在该文件设定bower下载下来的插件存放位置，比如我要放在assets/bower这个目录下。

![](http://upload-images.jianshu.io/upload_images/3502567-4f22e2efdeeade0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 初始化bower，项目根目录下执行：bower init 。然后会有一些基本的配置信息，根据情况填写即可，若不嫌麻烦可以一路回车。最后会在该目录下生成一个“bower.json”文件，这里就是刚才的一些bower配置。

- 试试安装一个bootstrap，执行： bower install –save bootstrap 。这里注意带上-save，这样就可以写进bower.json中的dependencies中,下次在其他地方bower install时即可安装进来。

最后不要忘了在.gitignore文件里面把这个assets/bower 目录添加进去，这样可以在git提交代码时忽略掉这个目录。此时安装bower.json和目录结构如下：

![](http://upload-images.jianshu.io/upload_images/3502567-78a5357393f17c39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**assets文件夹目录修改**

现在整个框架就算搭建起来了，我们可以分别执行“gulp”和“node app.js”，然后在本地的1337端口看下效果。接下来需要做的是更改下assets文件下的名称，因为默认的结构满足不了要求啊。这个名字以及结构不限制随便定，主要更改app,js,less三个文件夹。

- assets文件夹下新建app文件夹，用来写Angular2代码。

- 将styles文件夹名字改成less，因为该项目用的是less，而不是css。

- js和less目录下分别放,angular2:存放angular2的代码；import：放第三方插件；plugins：放无法通过bower下载到的插件;最后添加app.less和app.js，作为整个less文件的入口。这样做的目的是为了后期方便管理，当项目越来越大时就发现这样做的优势了。
- less入口文件改为app.less；为上一步中每个文件夹都添加入口文件，即总文件。

- 在app文件夹下添加一些测试文件，main.ts,style.less。

- 删除一些用不到的，如ico,txt,templates等。最终的assets文件结构如下：

![](http://upload-images.jianshu.io/upload_images/3502567-0d9c5e4498fdb7b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**修改tasks目录下的gulp**

因为现在更改了一些文件，以及涉及到typescript的一些东西，所以要更改一些gulp编译方式，这样才能正确的输出到.tmp文件夹。（tasks文件夹下面涉及到代码压缩复制等等的文件这里不再讲解，不熟悉的同学可以看[《sails结构详解》]()里面的grunt，原理类似）

- copy.js:这里会把assets/文件拷贝到.tmp文件下，此时我不需要让“bower”文件夹也出现在这里，所以需要把该处排除。

![](http://upload-images.jianshu.io/upload_images/3502567-1ca156b3801b47a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-  less.js：将less目录下的app.less转成app.css，即将less的书写方式转化成css。输出到.tmp/public/css目录下。

![](http://upload-images.jianshu.io/upload_images/3502567-7ed0debd08699594.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 增加typescript编译文件 :这时候就需要将angular2所需的typescript转化成目前大部分浏览器所能识别的ES5。（关于angular2的typescript语法，不熟悉的同学可以查看官方文档）。

  1) 添加tsconfig.json文件。该文件是typescript的配置信息。（注意这里是输出的类型，我这里是输出的是es6）
![](http://upload-images.jianshu.io/upload_images/3502567-21cfe458212e98f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  2) 安装gulp-typescript，来将.ts编译成.js。命令行执行：`cnpm install gulp-typescript typescript --save `。

  3）在tasks/config目录下新增typescript.js，来进行编译操作。
![](http://upload-images.jianshu.io/upload_images/3502567-308cd975c10c2105.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 4）在compliteAssets中把typescript任务加进去。
![](http://upload-images.jianshu.io/upload_images/3502567-eb22b2b0106c9368.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-  新建util文件夹，添加处理错误的工具,然后分别在less.js、watch.js 、typescript.js中把该代码添加上。这样做的目的是防止编译错误而导致gulp中断。比如我在刚才typescript.js中，把这个处理信息加上，其余的同理。
![](http://upload-images.jianshu.io/upload_images/3502567-7a6dce66e8f5fbcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这个处理错误信息是用到gulp-notify 这个模块：

![](http://upload-images.jianshu.io/upload_images/3502567-89f63e4eae279660.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


好啦，这时候我们的gulp修改完成了，这时候可以命令行执行`gulp`一下，看看app/下的ts文件（可以找个ts简单的例子试试,输出为es5会更好理解）有没有编译输出到js/angular2下，less有没有编译成css. 答案是肯定的。

**使用swig模板引擎**

用swig模板引擎来代替sails自带的ejs，因为可以将swig替换成html，更符合习惯，所以本次把默认的给替换了。

-  安装swig模板，命令行执行 `cnpm install swig --save`。

-  把config/views.js 替换成swig，并更换为html。禁用layout。

![](http://upload-images.jianshu.io/upload_images/3502567-fe7ec68911af63af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 在views/目录下，把所有的.ejs删除，添加homepage.html文件

![](http://upload-images.jianshu.io/upload_images/3502567-6e10b33668c6b7fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Angular2基本demo搭建**

这时候框架的样子慢慢形成了，可是还缺少Angular2，现在我们就那官方文档入门的那个例子放进去运行起来试试。如果不熟悉这个例子，建议看看官方文档《angularJS入门教程》里面的讲解，这里我就直接拿来用。

-  package.json的dependencies添加官网例子中所需的文件@angular、zone.js等等。

![](http://upload-images.jianshu.io/upload_images/3502567-91617b4d544d705f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-  在app/中添加 main.ts、app.module.ts、app.component.ts三个文件，就像官网的例子那样。

- 添加systemjs.config.js，配置加载模块。这个为了统一，我在js/import这个文件夹中添加此文件。该文件的作用是注册所有必备的依赖包。


![](http://upload-images.jianshu.io/upload_images/3502567-93ec7f9e6b4a137a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 在config/目录下添加express文件来加载本地静态文件。按照上一步的写法，如果不添加的话会找不到node安装模块文件路径。

![](http://upload-images.jianshu.io/upload_images/3502567-c88197d1d129293e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 完善html，加入正确的js路径。

![](http://upload-images.jianshu.io/upload_images/3502567-4e91f4993221fc58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我的app.component.ts文件里的视图是这样写的：

![](http://upload-images.jianshu.io/upload_images/3502567-960a397ca9a5cd1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时我们来执行下 gulp 和 node app.js。本地1337端口运行下看看效果:

![](http://upload-images.jianshu.io/upload_images/3502567-eabe886157b0596a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

结果正确运行。可以尝试修改视图文字，可以看到相应的改变。

**Angular2登陆界面测试**

目前为止angular2已经可以运行起来了，接下来就是开始完成登陆界面的书写了，这一部分还是结构建设测试，先不急着着手做，一步一步来。

- 封装桶的建立。不明白什么是封装桶的同学可以看官方文档介绍，其目的就是将每个组件放到专门的目录，方便管理。目录如下：

![](http://upload-images.jianshu.io/upload_images/3502567-0909b2a8918a39e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 先将每个index.ts所有组件暴露出来，然后在需要用到的地方引入即可。常规方法，比如在app.module.ts中引入user/目录下的LoginComponent这个组件：`import { LoginComponent}  from './user/index'; `为了统一我们可以把user后面的index去掉，变成：`import { LoginComponent}  from './user'；` 需要在systemjs.config.js中将login的路径添加进去。

![](http://upload-images.jianshu.io/upload_images/3502567-e00e8c82d49c736e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 现在，在login.comportant.ts 中视图中写点东西，来测试这个封装桶是否正确运行。

![](http://upload-images.jianshu.io/upload_images/3502567-f397d8b5c571077a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/3502567-91736d89661a9749.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后在app.module.ts 将index.ts添加进去，

![](http://upload-images.jianshu.io/upload_images/3502567-bc81ba87f22cb97a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

好啦，再运行下，看下效果：

![](http://upload-images.jianshu.io/upload_images/3502567-88abe00158511c65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

测试没问题，接下来就开始正式的登录页面搭建。

**Angular2登陆界面设计**

登陆界面都很普通，但是里面涉及到Angular2的表单、路由、指令等都是比较陌生的，现在开始一步步来建立起整个登陆表单。

1.首先来做一些个性化的设置。

- 更改端口、首页名称、路由名称。做这个目的是为了熟悉sails基本的设置。在config/env/development目录下添加 **port：8888** 可以将原来的1337端口改成8888端口;将views/目录下的homepage.html改成**index.html** 然后在config/routes.js 下相应的将路由替换成**index**。

- 页面结构再重新调整。这里要将angular2里面的css替换成less,因为在app目录下每个less都是分散的，所以这里利用copy.js把less拷贝到专门的文件夹。

![](http://upload-images.jianshu.io/upload_images/3502567-ca3ccf1e44de99d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接着将入口文件app.less转到编译文件下的**app.css**。把这个文件放到index.html中即可。注意一般情况下，我们在.ts文件中加载css样式是这样写的：`styleUrls: ['my-component.css']`。这是官方推荐的做法。但是这里因为用到了less,在父页面定义的一些函数，子页面也可能用到，而且考虑到减少引入文件个数，所以把他们合并到入口文件app.less。这里我保留了组件less文件的位置，但是不用写styleUrls **统一在index.html中加载了**。如下：

![](http://upload-images.jianshu.io/upload_images/3502567-9f02b384bb2df26d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- tasks下的任务过程：清除.tmp目录——>将app/的所有less拷贝到app下的angular2目录(这里代码同理写)——>将app/的所有ts文件编译到app下的angular2目录——>将app.less编译成app.css——>将assets（不包含bower、less）都拷贝到编译目录下。

![](http://upload-images.jianshu.io/upload_images/3502567-de91a44111b63a03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 安装字体图标font-awesome，并建立fonts目录存放字体。

2.界面设计。

至此，设置完成，接下来是写less和html。Less的语法这里不多说了，直接写。

- login.component.html页面中，利用bootstrap快速布局

![](http://upload-images.jianshu.io/upload_images/3502567-8cca3b1ca529fad1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- style.less 定义公共样式，一些基本的颜色以及参数等等。（这里直接贴代码）

![](http://upload-images.jianshu.io/upload_images/3502567-ee0ac55d5749d175.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- login.component.less 直接使用styles.less中的部分参数。以及登陆表单的样式，加一张背景图片。

![](http://upload-images.jianshu.io/upload_images/3502567-334f587fa7cc3147.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

好了，大功告成！界面样式设计完成，现在我们在8888端口运行下看看效果。


![](http://upload-images.jianshu.io/upload_images/3502567-7383dd6beb276522.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Mongodb数据库api接口设计**

界面设计完成了，接下来设计数据格式，也就是存储用户名和密码的地方。我们先来看看如何通过sails自带的ORM来实现mongobd数据库设计。

- 安装mongdb。从官网下载安装mongodb完成后，在安装目录下新建data/db文件夹作为数据存放的目录。在bin/目录下执行命令行 `mongod --dbpath D:\MongoDB\data\db `即可启动mongodb服务了。

- 新建数据库，集合，以及一条用户数据。运行bin/下的mongo.exe ,首先建立一个数据库和集合。Mongobd没有直接建立数据库的代码，但是可以使用 use xxx 来间接创建数据库。输入 use PersonBlog 切换到数据库名称为PersonBlog（一旦集合创建，这个数据库也就创建成功）。输入 db.createCollection(‘user’) 创建一个users表。输入`db.users.insert({account:’hello,password:’123456’}) `创建一条包含用户名和密码的记录。这时候输入`db.users.find() `查看是否创建成功。

![](http://upload-images.jianshu.io/upload_images/3502567-bff3c7d621ed0037.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 指定sail的数据库连接方式为mongodb。
 1) 安装sails-mongo模块，命令行执行 `cnpm install sails-mongo –save 在config/connections.js `中添加mongo连接数据库等配置。
![](http://upload-images.jianshu.io/upload_images/3502567-4e4b94830e4fde69.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 2) 在config/models.js中设置默认连接数据库类型。

![](http://upload-images.jianshu.io/upload_images/3502567-244cb3d6ac5bcbad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 创建一个user的model和controller。命令行执行：`sails generate api user`  接着会在api/models和api/controllers 中生成相应文件。
1) api/models/User.js 此文件定义本次用户的数据结构。
![](http://upload-images.jianshu.io/upload_images/3502567-35a8f575b1e309ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2) api/models/UserController.js 此文件写登陆也就是查询代码，这里遵循waterline编码原则。

![](http://upload-images.jianshu.io/upload_images/3502567-0da179a280964522.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- config/routes.js设置路由，这里先测试用get请求，来获取mongo里面的数据能不能通过url获取到，  'get /api/user/login' : 'user.login'

![](http://upload-images.jianshu.io/upload_images/3502567-4e19be691da54497.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

好了，至此，数据库完成，现在在地址栏输入localhost:8888/api/user/login 看下效果，如果查询成功则返回json里面的code:1

![](http://upload-images.jianshu.io/upload_images/3502567-3aefcb264a177996.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Angular2登陆逻辑实现**

到目前为止，登陆界面的设计以及数据库接口已经完成，接下来要做的就是angular2的typescript代码编写了。

- angular2路由
1）在index.html中<head>顶部添加<base href="/">  设定其为基本的href
2) 添加app.routing,ts文件来定义路由。
![](http://upload-images.jianshu.io/upload_images/3502567-4f662564096b3ed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3) app.module.ts中导入路由模块
![](http://upload-images.jianshu.io/upload_images/3502567-9614f72559c9d96c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这时候路由可以生效，但是有个问题，就是通过<a routerLink="/login">Heroes</a> 可以跳转到login界面，但是再刷新却找不到了。原因是angular2是默认使用html5的路由方式，当刷新界面时浏览器中实际的地址已经更新，解决方案：
1）解决默认html5路由刷新404错误。我们需要在sails框架指定每次刷新都跳转的路径。进入config/http.js文件中,修改中间件，保证每次运行检查url，来让程序是否每次都加载默认路径。
![](http://upload-images.jianshu.io/upload_images/3502567-629baf62d07bfacf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2）使用HashLocationStrategy hash路由，在访问路由会带上锚点,在app.module.ts引入HashLocationStrategy，并在服务中注入。
![](http://upload-images.jianshu.io/upload_images/3502567-85678939deb4b6ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这里还是推荐默认的url方式，没有#号还是比较美观。

- angular2逻辑部分实现
现在我们一步一步从简单开始来做出一套完整的登陆流程。包括样式，http请求等。
1）ngclass实现焦点动画
设计这一部分一来是为了更美观，二来是为了熟悉angular2的指令。现在想要实现这样的效果：input聚焦 在下方黄线显示，失焦 黄线隐藏。首先在黄线的位置加上`[ngClass]="{'active-line':isActivePwd}" `这个是angular2的ngClass属性指令，当isActivePwd为真则加上`active-line`这个class类，为假则移除。现在只需要在input的（focus）和（blur）为isActivePwd赋值即可。（用户名和密码方法类似）。
![](http://upload-images.jianshu.io/upload_images/3502567-6da354c552ca5861.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
最终实现如下效果：
![](http://upload-images.jianshu.io/upload_images/3502567-cf9c1f741a400e3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2) 表单验证
user.ts类的定义。既然我们登陆一定少不了user里面的account和password，现在我们要先创建user类，具有用户名和密码这两个属性，以后的登陆或注册都可以用到，并在login.component.ts中引入User类。
![](http://upload-images.jianshu.io/upload_images/3502567-8a4c251536a33ff0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
根模块引入FormModule。要使用表单的话就必须把该模块引入到根模块中。
![](http://upload-images.jianshu.io/upload_images/3502567-d3d09e2f8ced0a3b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
测试表单数据双向绑定。login.component.ts中将User对象付给user,并用[(ngModel)]来测试双向绑定,这里这样做的目的是保证用户名和密码能确获取到。
`[(ngModel)]="user.account"   {{ user.account }}`
![](http://upload-images.jianshu.io/upload_images/3502567-027993635a5b0959.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
表单非空验证。现在要做的一件事就是在提交的时候如果发现用户名或者密码为空则给提示，注意在这里因为仅仅登录所以没有做实施验证，仅在提交按钮的时候给予验证。
首先要获取表单的值，这里在<form>标签内添加模板引用变量`#f=”ngForm” `将angular控件内的用户名和密码都给”f”变量 ，然后在将f.value 即input的值传进提交方法里面，`(ngSubmit)="onSubmit(f.value) `以便在组件内能获取到表单的值。
![](http://upload-images.jianshu.io/upload_images/3502567-f3d654e5e44c47d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在末尾添加一个显示错误信息的div,即当错误信息msg有值的时候让*ngIf 显示该值
![](http://upload-images.jianshu.io/upload_images/3502567-6819ca6119938a0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在login.component.ts中的onSubmit()方法里面获取表单的值，当为空值给错误信息msg赋值。
![](http://upload-images.jianshu.io/upload_images/3502567-33c30066e557005b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
好了，此时如果用户名或者密码为空，在提交表单时则会显示相应的错误信息；输入正确时，则会隐藏错误信息。
4) user服务创建（http请求）
现在需要来创建一个服务来处理关于登陆的逻辑。首先在入口把HttpModule添加到imports 作为根组件，其次新建user.service.ts 来写关于http的服务，引入一些服务注册、http模块、可观察对象等等。
![](http://upload-images.jianshu.io/upload_images/3502567-1c8caa7c50d790ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
将httpservice注入到该构造函数中，以便使用http服务，`constructor(private http: Http){}`
login方法中添加，向在sails路由定义好的url发post请求。
![](http://upload-images.jianshu.io/upload_images/3502567-ade282dcafbe8633.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在login.component.ts中将user服务注入进来，把视图中的用户名和密码传到user服务中处理请求。当请求成功并且用户名和密码都匹配上返回1，否则返回0.该接口在前面已经写过。
![](http://upload-images.jianshu.io/upload_images/3502567-339f6ffcba4a2914.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
回到视图界面，根据输入的用户名和密码返回值，即state来控制消息提示信息的颜色，这样会更加醒目。
![](http://upload-images.jianshu.io/upload_images/3502567-1c0a4900d28e0e38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
运行效果。用户名或密码为空
![](http://upload-images.jianshu.io/upload_images/3502567-126797f89649669a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
用户名或密码错误（前面设置的用户名是：hello，密码是：123456）
![](http://upload-images.jianshu.io/upload_images/3502567-472190f86fb1b2d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
用户名或密码正确登陆成功
![](http://upload-images.jianshu.io/upload_images/3502567-19982b5c1ffd56ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
我们来看下登陆成功的请求内容
![](http://upload-images.jianshu.io/upload_images/3502567-196084d03d370a06.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
再看返回内容
![](http://upload-images.jianshu.io/upload_images/3502567-ac7c35d448523279.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**关于前端工具的改进**
- 加快gulp的watch速度。
gulp中的wach时间比较长的原因是每次执行时都要全部编译以便。所以需要做的是单独监听每个文件夹，这样做的好处就是监听哪个文件夹变化就去执行对应的任务，比如app文件夹下面的.ts文件改变了，就需要先执行typescript的编译，然后再输出到.tmp/目录下。
首先syncAssets.js中要注入到watch中的执行任务，这里是监听相应的文件改动时要执行这些任务。
![](http://upload-images.jianshu.io/upload_images/3502567-2a36a347cf085535.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后在watch中添加相应的监听任务。
![](http://upload-images.jianshu.io/upload_images/3502567-c80b76886bd42735.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 添加实时刷新功能,即按下ctrl+s 则浏览自动刷新。
Gulp自带的gulp-livereload 貌似不起作用，这个后可以用到browsersync这个模块来实现保存即刷新。命令行执行 cnpm install –save browser-sync 来安装该模块，我们只需要配置一些地址端口等，比如指定当前sails中设置的端口：8888. 运行后browser端口为8889，我们访问8889端口即可实现及时刷新，配置自定义port。
![](http://upload-images.jianshu.io/upload_images/3502567-1a568dd83c237449.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](http://upload-images.jianshu.io/upload_images/3502567-630d31c83717fa91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####总结

此时我们利用sails框架，结合Mongodb数据库以及angular2实现了最简单的登陆界面。当然我们的目标并不仅仅是个登陆，可以在它的基础上逐渐扩大功能，比如登陆验证、退出登录、注册等等。除此之外，它更适合开发企业级大型应用，有更复杂的逻辑，这需要充分了解Angular2的语法。慢慢学习吧，相信angular2也会慢慢的成为更流行的框架。代码已经托管到github上[https://github.com/Elliottssu/angular2-build.git](https://github.com/Elliottssu/angular2-build.git)，如果有不明白的可以查看代码或者提问，欢迎大家提意见相互交流学习。









