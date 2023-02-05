import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./styles";

type Props = {
  value: number;
};

export const ProgressBar = ({ value }: Props) => {
  const widthContainer = useSharedValue(200);
  const endReached = value >= 95;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = endReached ? 56 : 200
  }, [value])
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
   {
    endReached ? (
       <TouchableOpacity>
          <Feather name="arrow-up" size={24} color="#C4C4CC" />
       </TouchableOpacity>
    ) : (
     <>
      <Text style={styles.value}>{value.toFixed(0)}%</Text>
       <View style={styles.tracker}>
         <View style={[styles.progress, { width: `${value}%` }]} />
       </View>
       </>
    )
   }
    </Animated.View>
  );
};
