import { COLORS } from "@/constant/theme";
import { styles } from "@/styles/auth.style";
import React from "react";
import { Image, Text, View } from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Text
            style={{
              color: COLORS.pwhite,
              fontSize: 30,
              fontWeight: "semibold",
            }}
          >
            D
          </Text>
        </View>
        <Text style={styles.appName}>Dcell</Text>
        <Text style={styles.tagline}>Welcome</Text>
      </View>
      {/* ILLUSTRATION */}
      <View>
        <Image
          source={require("../../assets/images/login_banner.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
