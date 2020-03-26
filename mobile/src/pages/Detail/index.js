import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Hi ${
    incident.name
  }, i am contacting you because i want to help you with the case: "${
    incident.title
  }" with the value of: "${Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(incident.value)}"`;

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Hero of the case: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  };
  const sendWhatsapp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} from {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASE:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALUE:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the Hero of this case.</Text>
        <Text style={styles.heroDescription}>Get in touch</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
