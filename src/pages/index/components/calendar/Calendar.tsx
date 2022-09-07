import { View, Text } from '@tarojs/components'
import './calendar.scss'


export default () => {
    const WEEK_NAMES: string[] = ['日', '一', '二', '三', '四', '五', '六']
    
    const MONTH_DAYS: number[] = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]

    const currentYear: number = new Date().getFullYear()

    const currentMonth: number = new Date().getMonth() + 1

    const weekOfEarlyMonth: number = new Date(currentYear, currentMonth -1, 1).getDay()

    const weekOfEndMonth: number = new Date(currentYear, currentMonth -1, MONTH_DAYS[currentMonth - 1]).getDay()
    
    const days: any[] = [];
    for (let i: number = 1; i <= 35; i++){
      if(i > weekOfEarlyMonth){
        days.push(i - weekOfEarlyMonth);
      } else {
        days.push(null);
      }
    }

    return (
        <View>
          <Text>{`${currentYear}年 ${currentMonth}月`}</Text>
          <View  className='table'>
            <View className='table-head'>
              {
                WEEK_NAMES.map((week, key) => {
                  return <View className='table-head-content' key={key}>{week}</View>
                })
              }
            </View>
            <View className='table-body'>
              {
                days.map((item, key) => {
                  return <View className='table-body-content' key={key}>{item}</View>
                })
              }
            </View>
        </View>
        </View>
      )
}