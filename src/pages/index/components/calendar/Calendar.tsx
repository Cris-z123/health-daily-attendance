import { View, Text, Button } from "@tarojs/components";
import { useState } from "react";
import "./calendar.scss";

const WEEK_NAMES: string[] = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

const MONTH_DAYS: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

  const toggleMonth: (direction: 'left' | 'right') => void = (direction) => {
    if (direction === 'right') {
      if (currentMonth >= 12) {
        setCurrentMonth(1)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    } else if (direction === 'left') {
      if (new Date().getFullYear() - currentYear > 10) return
      if (currentMonth <= 1) {
        setCurrentMonth(12)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    }
  }

  const weekOfEarlyMonth: number = new Date(
    currentYear,
    currentMonth - 1,
    1
  ).getDay();
  const days: Array<number> = [];
  for (let i: number = 1; i <= 42; i++) {
    i > weekOfEarlyMonth ? days.push(i - weekOfEarlyMonth) : days.push(0);
  }
  days.map((item, index) => {
    if (item && item > MONTH_DAYS[currentMonth - 1]) days[index] = 0;
  });


  const isToday: () => Boolean | Number = () => {
    return new Date().getFullYear() === currentYear && new Date().getMonth() + 1 === currentMonth
      ? new Date().getDate()
      : false
  }

  return (
    <View className='calendar'>
      <View className='cur-year-month'>
        <View className='triangle-left' onClick={() => { toggleMonth('left') }}></View>
        <View>
          <Text>{`${currentYear}年 ${currentMonth}月`}</Text>
        </View>
        <View
          className={new Date().getFullYear() !== currentYear || new Date().getMonth() + 1 !== currentMonth ? 'triangle-right' : ''} onClick={() => { toggleMonth('right') }}
        >
        </View>
      </View>
      <View className='table'>
        <View className='table-head'>
          {WEEK_NAMES.map((week, key) => {
            return (
              <View className='table-head-content' key={key}>
                {week}
              </View>
            );
          })}
        </View>
        <View className='table-body'>
          {days.map((item, key) => {
            return (
              <View className={['table-body-content', `${isToday() === item ? 'today' : 'future'}`].join(' ')} key={key}>
                {item === 0 ? null : item}
              </View>
            );
          })}
        </View>
      </View>
      <Button className='daily-attendance-button'>
        <Text>已坚持300天 ✌</Text>
      </Button>
    </View>
  );
};
