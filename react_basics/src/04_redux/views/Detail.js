import React, { useEffect } from 'react'
import store from '../redux/store';

export default function Detail() {
  useEffect(() => {
    console.log('create');
    // 分发dispatch
    store.dispatch({
      type: 'hide'
    })
    return () => {
      console.log('destroy');
      store.dispatch({
        type: 'show'
      })
    }
  },[])
  return (
    <div>Detail</div>
  )
}
