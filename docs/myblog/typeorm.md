# TypeORM

## 安装

1. 安装 typeorm
   `npm install typeorm --save`

2. 安装 reflect-metadata
   `npm install reflect-metadata --save`
   在全局位置 (如: app.ts) 中导入
   `import "reflect-metadata";`

3. 安装 node typings（使用 Node 的智能提示）
   `npm install @types/node --save`

4. 安装数据库驱动

   - MySQL 或者 MariaDB
     `npm install mysql --save`
     or
     `npm install mysql2 --save`

   - PostgreSQL
     `npm install pg --save`

   - SQLite
     `npm install sqlite3 --save`

     - Microsoft SQL Server

   `npm install mssql --save`

   - sql.js

     `npm install sql.js --save`

   - Oracle

   `npm install oracledb --save`

   根据你使用的数据库，仅安装其中一个即可。 要使 Oracle 驱动程序正常工作，需要按照其站点中的安装说明进行操作。

   - MongoDB (试验性)

     `npm install mongodb --save`

   - NativeScript, react-native 和 Cordova

5. TypeScript 配置 (tsconfig.json)

   ```json
   "emitDecoratorMetadata": true,
   "experimentalDecorators": true,
   ```

   可能还需要在编译器选项的 lib 中启用 es6，或者从@types 安装 es6-shim。

## 快速开始

1. 全局安装 TypeORM
   `npm install typeorm -g`

   转到要创建新目录的目录并运行命令

   `typeorm init --name MyProject --database mysql`

   其中`name`是项目的名称，`database`是数据库，
   数据库可以是下列值之一：`mysql`, `mariadb`, `postgres`, `sqlite`, `mssql`, `oracle`, `mongodb`, `cordova`, `react-native`, `expo`, `nativescript`

   此命令将在 MyProject 目录中生成一个包含以下文件的新项目:

```
MyProject
├── src              // TypeScript 代码
│   ├── entity       // 存储实体（数据库模型）的位置
│   │   └── User.ts  // 示例 entity
│   ├── migration    // 存储迁移的目录
│   └── index.ts     // 程序执行主文件
├── .gitignore       // gitignore文件
├── ormconfig.json   // ORM和数据库连接配置
├── package.json     // node module 依赖
├── README.md        // 简单的 readme 文件
└── tsconfig.json    // TypeScript 编译选项
```

2. 安装项目依赖

   ```bash
   cd MyProject
   npm install
   ```

   在安装过程中，编辑 ormconfig.json 文件并在其中放置您自己的数据库连接配置选项：

   ```json
   {
     "type": "mysql",
     "host": "localhost",
     "port": 3306,
     "username": "test",
     "password": "test",
     "database": "test",
     "synchronize": true,
     "logging": false,
     "entities": ["src/entity/**/*.ts"],
     "migrations": ["src/migration/**/*.ts"],
     "subscribers": ["src/subscriber/**/*.ts"]
   }
   ```

   绝大多数情况下，你只需要配置 `host`, `username`, `password`, `database` 或者 `port`。

3. 运行程序

   完成配置并安装所有 node modules 后，即可运行应用程序：

   ```shell
   npm start
   ```

至此你的应用程序应该成功运行并将新用户插入数据库。你可以继续使用此项目并集成所需的其他模块并创建更多实体。

> 你可以通过运行 typeorm init --name MyProject --database mysql --express 来生成一个更高级的 Express 项目

## 实践

### 创建一个模型

应用程序中的模型即是数据库中的表

```ts
export class Photo {
  id: number;
  name: string;
  description: string;
  filename: string;
  views: number;
}
```

例如我们有一个 Photo 模型，且希望将 photos 存储在数据库中。要在数据库中存储内容，首先需要一个数据库表，并从模型中创建数据库表。但是并非所有模型都可以，只有定义为 entities 的模型。

### 创建一个实体

Entity 是由@Entity 装饰器装饰的模型。将为此类模型创建数据库表。你可以使用 TypeORM 处理各处的实体，可以使用它们 load/insert/update/remove 并执行其他操作。

```ts
import { Entity } from "typeorm";

@Entity()
export class Photo {
  id: number;
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
}
```

为 Photo 实体创建一个数据库表，我们将能够在应用程序中的任何位置使用它

### 添加表列

要添加数据库列，你只需要将要生成的实体属性加上@Column 装饰器。

```ts
import { Entity, Column } from "typeorm";

@Entity()
export class Photo {
  @Column()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
```

现在 id, name, description, filename, views 和 isPublished 列将会被添加到 photo 表中。 数据库中的列类型是根据你使用的属性类型推断的，例如： number 将被转换为 integer，string 将转换为 varchar，boolean 转换为 bool 等。但你也可以通过在@Column 装饰器中隐式指定列类型来使用数据库支持的任何列类型。

### 创建主列

每个实体必须至少有一个主键列。这是必须的，你无法避免。要使列成为主键，您需要使用@PrimaryColumn 装饰器。

```ts
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
```

### 创建自动生成的列

假设你希望 id 列自动生成（这称为 auto-increment/sequence/serial/generated identity column）。为此你需要将@PrimaryColumn 装饰器更改为@PrimaryGeneratedColumn 装饰器：

```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
```

### 列数据类型

默认情况下，字符串被映射到一个 varchar(255)类型（取决于数据库类型）。 数字被映射到一个类似整数类型（取决于数据库类型）。但是我们不希望所有的列都是有限的 varchars 或整数，让我们修改下代码以设置想要的数据类型：

```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;
}
```

### 创建数据库的连接

当实体被创建后，让我们创建一个 index.ts（或 app.ts，无论你怎么命名）文件，并配置数据库连接：:

```ts
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "test",
  entities: [Photo],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    // 这里可以写实体操作相关的代码
  })
  .catch((error) => console.log(error));
```
