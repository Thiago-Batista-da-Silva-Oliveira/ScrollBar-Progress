import { Text, View } from "react-native";
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
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.value}>{value.toFixed(0)}%</Text>
      <View style={styles.tracker}>
        <View style={[styles.progress, { width: `${value}%` }]} />
      </View>
    </Animated.View>
  );
};
