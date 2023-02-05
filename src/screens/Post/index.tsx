import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ProgressBar } from "../../components";
import { styles } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export const Post = () => {
  const [percentage, setPercentage]   = useState(0);
  const scrollPercentage = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: ScrollProps) => {
    const value = ((layoutMeasurement.height + contentOffset.y)/contentSize.height)*100;
    setPercentage(value);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem ipsum</Text>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum
            alias explicabo sint. Sequi soluta veniam magnam ab odit! Assumenda
            animi officiis eum dicta dignissimos eveniet consequuntur numquam
            fugit veritatis.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum
            alias explicabo sint. Sequi soluta veniam magnam ab odit! Assumenda
            animi officiis eum dicta dignissimos eveniet consequuntur numquam
            fugit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Amet illum alias explicabo sint. Sequi soluta veniam magnam ab
            odit! Assumenda animi officiis eum dicta dignissimos eveniet
            consequuntur numquam fugit veritatis. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet illum alias explicabo sint. Sequi
            soluta veniam magnam ab odit! Assumenda animi officiis eum dicta
            dignissimos eveniet consequuntur numquam fugit veritatis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Amet illum alias
            explicabo sint. Sequi soluta veniam magnam ab odit! Assumenda animi
            officiis eum dicta dignissimos eveniet consequuntur numquam fugit
            veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Amet illum alias explicabo sint. Sequi soluta veniam magnam ab odit!
            Assumenda animi officiis eum dicta dignissimos eveniet consequuntur
            numquam fugit veritatis.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum
            alias explicabo sint. Sequi soluta veniam magnam ab odit! Assumenda
            animi officiis eum dicta dignissimos eveniet consequuntur numquam
            fugit veritatis.
          </Text>
        </View>
      </ScrollView>
      <ProgressBar value={percentage} />
    </View>
  );
};
