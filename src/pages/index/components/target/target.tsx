import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import './target.scss'

const HealthItem = [
  { id: '0000', content: '今天坚持低糖', status: 'FINISHED', },
  { id: '1111', content: '今天运动半小时', status: 'FINISHED', },
  { id: '2222', content: '今天喝了超过1.5L水', status: 'UNFINISHED', },
]


export default () => {
  return (
    <View className='target'>
      {
        HealthItem.map(item => {
          return (
            <View className='target-item' key={item.id}>
              <View className='target-item-text'>{item.content}</View>
              <View className='target-item-button'> {item.status === 'UNFINISHED' ? '✅' : '❌'}</View>
            </View>
          )
        })
      }
    </View >
  )
}