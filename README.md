# Klaytn BApp Example

## 0. Environment Setup
- [Node.js 설치](https://nodejs.org/)
    - ```npm install```
- Install Truffle
    - ```sudo npm install -g truffle@4.1.15```

## 1. Deploy Contract
<code>AdditionGame Contract</code>를 Klaytn에 배포하기 전에 반드시 <code>truffle.js</code> 파일에 자신의 <b>PRIVATE_KEY</b> 값을 설정한다.

```npm run deploy```

## 2. Run
```npm run dev```

## 3. Account
[Klaytn TestNet](https://baobab.wallet.klaytn.com)에서 계정을 생성한다. 계정을 생성하고 난 뒤, <code>Private Key</code>, <code>Keystore.json</code> 정보는 로컬 파일에 저장 또는 보관 해야한다.