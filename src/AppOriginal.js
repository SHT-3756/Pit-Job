// import logo from './logo.svg'
import './App.css'
import React from 'react'
import HelloWorld from './components/helloWorld'
import HelloWorld1 from './components/helloWorld1'

//로컬에서 정보를 일시적으로 저장할수 있는법이 있는데 로컬스토리지, 세션, 쿠키, 크롬(인덱션 디비)
window.localStorage.setItem('productName', 'cat tower')
window.sessionStorage.setItem('productName', 'cat tower')

const product = {
  name: 'cat tower',
  price: 12000,
  brand: 'coupang',
}
window.localStorage.setItem('product', JSON.stringify(product))
// 자바스크립트 객체를 스트링으로 참조하겠다 라는 의미

function App() {
  const productNameFromLocalStorage = window.localStorage.getItem('productName')
  const productNameFromSessionStorage = window.sessionStorage.getItem('productName')
  const product = JSON.parse(window.localStorage.getItem('product'))
  console.log('product:', product)
  return (
    <div className="App">
      <header className="App-header">
        <p>productNameFromLocalStorage : {productNameFromLocalStorage}</p>
        <p>productNameFromSessionStorage : {productNameFromSessionStorage}</p>

        <HelloWorld product={product} name={'SHT'} />
        <HelloWorld1 />
      </header>
    </div>
  )
}

export default App
