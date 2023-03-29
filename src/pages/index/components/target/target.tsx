import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import './target.scss'

const HealthItem = [
  { id: '123456', content: '坚持低糖', status: 'FINISHED', },
  { id: '234567', content: '运动半小时', status: 'FINISHED', },
  { id: '345678', content: '喝水1.5L以上', status: 'UNFINISHED', },
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
