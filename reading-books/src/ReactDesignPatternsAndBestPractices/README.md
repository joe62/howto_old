React Design Patterns and Best Practices
================

![](https://github.com/MicheleBertoli/react-design-patterns-and-best-practices/raw/master/cover.jpg)

# Chapter 1: Evenythin You Should Know About React

## 1.1 Declarative programming

```js
const toLowerCase = input => input.map(value => value.toLowerCase())
```

```
<GMaps zoom={4} center={myLatLng}>
  <Mark position={myLatLng} Hello world!/>
</GMaps>
```

## 1.2 React elements

> Elements have a type, which is the most importanct attribute, and some properties. There is also a special property, called children, which is optional and represents the direct descendant of the element.

```js
{
type: Title,
  props: {
    color: 'red',
      children: {
      type: 'h1',
      props: {
        children: 'Hello, H1!'
      }
    }
  }
}
```

## 1.3 Delopement with create-react-app

```
npm install -g create-react-app
create-react-app hello-world
npm start
```




# 2 Clean Up Your Code

>`Topics`: JSX, Babel, ESLint, and functional programming

## 2.1 JSX 

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
)
```

## 2.2 Babel 

In order to use JSX and ES2015 in our code, we have to install Babel.

Babel can compile ES6 code into ES5 JavaScript， as well as compile JSX into JavaScript function.

```
yarn global add babel-cli babel-preset-es2015 babel-preset-react
babel source.js -o output.js
```

`.babelrc`
```js
{
  "presets": ["es2105", "react"]
}
```

## 2.3 DOM elements and React components

With JSX, we can create both HTML elements and React components; the only difference is whether or not they start with a capital letter.

`<button />` - html element
`<Button />` - React component

## 2.4 Props, Children

```
// props
<img src="https://facebook.github.io/react/img/logo.svg"
alt="React.js" />  

// children
<div>
<a href="https://facebook.github.io/react/">Click me!</a>
</div>
```

## 2.5 Differences with HTML

- `class -> className`
- `for -> htmlFor`
- style
```
<div style={{ backgroundColor: 'red' }} />
```

## 2.6 Boolean attributes

default value is true

`<button disabled={false} >OK</button>`

## 2.7 Spread attributes
```js
// Shallo clone (excluding prototype)
let aClone = {...a} ==> let aClone = Object.assign({}, a)

// Merging Two Objects
let ab = {...a, ...b} ==> let ab = Object({},a,b)

// Overriding Properties
let aWithOverrides = {...a, x: 1, y: 2} ==> let aWithOverrides = {...a, {x:1,y:2}} ==> let x =1, y=2, aWithOverrides = {...a, x, y}
==> let aWithOverrides = Object.assign({}, a, {x: 1, y: 2})

// Default Properties

```

## 2.8 Common patterns p27

### 2.8.1 Multi-line

```
<div>
  <Header />
  <div>
    <Main content={...} />
  </div>
</div>

return (
  <div />
)
```

### 2.8.2 Multi-properties
```
<button
  foo="bar"
  veryLongPropertyName="baz"
  onSomething={this.handleSomething}
/>
```

### 2.8.3 Conditionals

```
<div>
  {isLoggedIn && <LoginButton />}
</div>

// alternative condition
<div>
  {isLoggedIn ? <LogoutButton /> : <LoginButton />}
</div>

//  ternary condition
<button [...]>
{isFetching ? 'Loading...' : 'Load More'}
</button>

// 
getPrice() {
return `${this.props.currency}${this.props.value}`
}
<div>{this.getPrice()}</div>

// 
get price() {
return `${this.props.currency}${this.props.value}`
}
<div>{this.price}</div>

// 
```

### Loops
```
<ul>
  {users.map(user =><li>{user.name}</li>)}
</ul>
```


##  参考

- [react-design-patterns-and-best-practices-coding](https://github.com/MicheleBertoli/react-design-patterns-and-best-practices)
- [proposal-object-rest-spread](https://github.com/tc39/proposal-object-rest-spread)

