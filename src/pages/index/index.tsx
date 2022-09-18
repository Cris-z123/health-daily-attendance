import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import Calendar from "./components/calendar/Calendar";
import Target from "./components/target/target";
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Calendar></Calendar>
        <Target></Target>
      </View>
    )
  }
}
