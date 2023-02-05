import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const Post = () => {
  return (
    <View style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
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
    </View>
  );
};
