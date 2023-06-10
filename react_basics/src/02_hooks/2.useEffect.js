import React, { useEffect } from 'react'
import axios from 'axios';
export default function App() {
  // 空数组表示不依赖任何选项，只执行一次
  useEffect(() => {
    axios.get('/films.json').then((res) => {
      console.log(res);
    })
  }, [])
  return (
    <div>App</div>
  )
}
