
// screens/AboutScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Matheus from "../assets/Matheus.jpg";
import Elisa from "../assets/Elisa.jpg";
import Rodrigo from "../assets/Rodrigo.jpg";
import Kauan from "../assets/Kauan.jpg";
import Romulo from "../assets/Romulo.jpg";
export const MembersGroup = () => {
  const [scrollTitle, setScrollTitle] = useState(new Animated.Value(0));
  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <Animated.Text
          style={[
            styles.title,
            {
              height: scrollTitle.interpolate({
                inputRange: [45, 55, 90],
                outputRange: [90, 65, 0],
                extrapolate: "clamp",
              }),
              opacity: scrollTitle.interpolate({
                inputRange: [1, 80, 170],
                outputRange: [1, 0.5, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        >
          Conheça um pouco dos Integrantes do Projeto
        </Animated.Text>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollTitle },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.memberContainer}>
            <Image style={styles.picture} source={Matheus}></Image>
            <Text style={styles.member}>Matheus Gonçalves Zuvanov</Text>
            <Text style={styles.aboutMember}>
              I'm a passionate backend developer with a solid understanding of
              front-end technologies. My focus is on building robust and
              scalable server-side applications, but I'm also skilled in
              integrating these with user-friendly front-end interfaces. Backend
              Skills Languages: Python, java Databases: Mysql API Development:
              RESTful Other Skills: Docker Frontend Skills Languages: HTML, CSS,
              typescript *Frameworks/Libraries:*React Responsive Design:
              Building responsive and accessible web applications
            </Text>
            <Text style={styles.link}>https://github.com/VirLustitiae</Text>
          </View>
          <View style={styles.memberContainer1}>
            <Image style={styles.picture} source={Elisa}></Image>
            <Text style={styles.member}>Elisa Cardoso De Mello Pessamílio</Text>
            <Text style={styles.aboutMember}>
              UX/UI Designer with background in graphic design, marketing and
              front-end programming. Creative, organized and determined, I am
              always looking for opportunities to learn and evolve. My
              experience in graphic design is the basis of my approach as a
              UX/UI Designer. Through the use of colors, typography and visual
              elements, I seek to create cohesive and engaging experiences that
              convey the brand's identity and meet users' needs. However, my
              quest for excellence is not just limited to aesthetics. Because I
              have solid knowledge of prototyping, I have the ability to bring
              my projects to life.
            </Text>
            <Text style={styles.link}>https://github.com/elisa-cardoso</Text>
            <Text style={styles.link}>
              https://www.linkedin.com/in/elisa-cardoso-de-mello-67a101220/
            </Text>
          </View>
          <View style={styles.memberContainer2}>
            <Image style={styles.picture} source={Rodrigo}></Image>
            <Text style={styles.member}>Rodrigo Da Silva Costa</Text>
            <Text style={styles.aboutMember}>
              I am a Computer Engineering student and a Full-Stack Development
              enthusiast. Currently, I am immersed in the Full-Stack Development
              Residency at Serratec SENAC in Petrópolis, RJ, where I am
              solidifying my skills in TypeScript, JavaScript, and Java. With a
              special focus on Web Development and React Native, I seek to
              integrate knowledge to create innovative solutions. Strong
              inclination towards teamwork and communication, coupled with
              proficiency in English. I am eager to collaborate on challenging
              projects and contribute to the dynamic world of software
              development.
            </Text>
            <Text style={styles.link}>https://github.com/rodrigodevcosta</Text>
            <Text style={styles.link}>
              https://www.linkedin.com/in/rodrigo-da-silva-costa-920a79112/
            </Text>
          </View>
          <View style={styles.memberContainer3}>
            <Image style={styles.picture} source={Kauan}></Image>
            <Text style={styles.member}>Kauan Eduardo Pessôa Pinton</Text>
            <Text style={styles.aboutMember}>
              Production engineer, fluent in English and I am currently taking
              the FullStack developer and programmer course at Serratec/Senac.
              Having as main interests the areas of Backend and project
              management. I am a focused and disciplined person, seeking growth
              in the areas I work in and being able to make a difference to the
              company's growth.
            </Text>
            <Text style={styles.link}>https://github.com/PessoaKauan</Text>
          </View>
          <View style={styles.memberContainer4}>
            <Image style={styles.picture} source={Romulo}></Image>
            <Text style={styles.member}>
              Rômulo Henrique Ferreira Gonçalves
            </Text>
            <Text style={styles.aboutMember}>
              Hello! I'm Rômulo Henrique, currently focused on the ICT Residency
              at SerraTec, where I study to become a Full Stack developer,
              exploring languages such as Java, JavaScript and TypeScript. My
              academic journey is guided by a great curiosity for technological
              challenges. I am committed to adopting agile approaches to
              software development. I'm open to connecting with colleagues in
              the field, exchanging ideas and exploring the possibilities that
              technology offers. The ICT Residency is a crucial stage in my
              journey, and I am determined to apply the knowledge acquired to
              create innovative solutions.
            </Text>
            <Text style={styles.link}>https://github.com/Romulo-HFG</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 70,
    backgroundColor: "#fff",
  },
  memberContainer: {
    height: 450,
    backgroundColor: "#ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  memberContainer1: {
    height: 450,
    backgroundColor: "#ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  memberContainer2: {
    height: 450,
    backgroundColor: "#ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  memberContainer3: {
    height: 450,
    backgroundColor: "#ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  memberContainer4: {
    height: 450,
    backgroundColor: "#ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
  picture: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
  },
  member: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  aboutMember: {
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "blue",
  },
});