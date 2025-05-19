import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/home";
export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/06/13/13/06/monster-4271569_1280.png",
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
      />
      <Text style={styles.text}>Hello World!</Text>
      <TouchableOpacity onPress={() => alert("Hello World!")}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Link href={"/notification"} style={styles.text}>
        Notification
      </Link>
    </View>
  );
}
