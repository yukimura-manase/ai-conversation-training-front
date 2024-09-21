# AI Conversation Training Web App Front

- AI Conversation Training の FrontEnd

## 環境構築方法(初期 setup)

### 0. 前提条件

- API Key は .env に Set する

### 1. パッケージを install する

app ディレクトリに移動して、パッケージを install する

```bash
cd app/ && yarn install
```

### 2. Docker Image の Build & Docker Container の起動

1. Docker Image のビルド と コンテナの実行を実施します。

```bash
docker-compose up --build
```

2. Docker コンテナの停止 & 削除

`docker-compose down` コマンドを使用して、すべてのコンテナを停止し、削除することができます。

```bash
docker-compose down
```

### 3. Web ブラウザからアクセスする

http://localhost:3008/ にアクセスして App の起動を確認する

## その他

### パッケージの追加

app ディレクトリに移動して、パッケージを add する

```bash
cd app/ && yarn add パッケージ名
```
