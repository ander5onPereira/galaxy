import React, { useMemo, useRef, useState } from "react";
import { Image, StyleSheet, View, Keyboard, AsyncStorage } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Card from "../../img/Card/Card.png";
import * as Yup from "yup";

import Button from "../../components/Button";
import { Message } from "../../components/Message";
import { showToastWithGravity } from "../../components/AlertMenssage";
import uuid from "react-native-uuid";

export default function Cadastro({ route, navigation }) {
  const [id, setId] = useState(route.params?.id);
  const [nome, setNome] = useState(route.params?.nome);
  const [sobrenome, setSobrenome] = useState(route.params?.sobrenome);
  const [email, setEmail] = useState(route.params?.email);
  const [pis, setPis] = useState(
    !route.params.pis ? "" : String(route.params?.pis)
  );
  const [message, setMessage] = useState("");
  const [messageCard, setMessageCard] = useState("");

  const refInputNome = useRef(null);
  const refInputSobrenome = useRef(null);
  const refInputEmail = useRef(null);
  const refInputPis = useRef(null);

  async function apagar() {
    Keyboard.dismiss();
    const jsonValue = JSON.parse(await AsyncStorage.getItem("@galaxy"));
    const data = jsonValue.filter((value) => {
      if (value.id != id) {
        return value;
      }
    });
    const jsonSave = JSON.stringify(data);
    await AsyncStorage.setItem("@galaxy", jsonSave);

    setMessageCard("SUCCESS");
    setMessage("Excluido");
  }
  async function save() {
    Keyboard.dismiss();
    try {
      const schema = Yup.object().shape({
        nome: Yup.string()
          .min(2, "Nome invalido")
          .max(30, "Nome invalido")
          .required("Adicione o nome"),

        sobrenome: Yup.string()
          .min(2, "Sobrenome invalido")
          .max(50, "Sobrenome invalido")
          .required("Adicione o sobrenome"),

        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail é obrigatório"),

        pis: Yup.string().required("Adicione o número do NIS (PIS)"),
      });
      await schema.validate(
        { nome, sobrenome, email, pis },
        {
          abortEarly: false,
        }
      );
      if (id) {
        var jsonValue = JSON.parse(await AsyncStorage.getItem("@galaxy"));
        jsonValue.filter((value) => {
          if (value.id == id) {
            value.nome = nome;
            value.sobrenome = sobrenome;
            value.email = email;
            value.pis = pis;
          }
        });

        const jsonSave = JSON.stringify(jsonValue);
        await AsyncStorage.setItem("@galaxy", jsonSave);

        setMessage("Atualizado");
        setMessageCard("SUCCESS");
      } else {
        const value = await AsyncStorage.getItem("@galaxy");

        const jsonValue = value ? JSON.parse(value) : [];
        const date = { id: uuid.v4(), nome, sobrenome, email, pis };
        jsonValue.push(date);
        const jsonSave = JSON.stringify(jsonValue);
        await AsyncStorage.setItem("@galaxy", jsonSave);

        setMessage("Salvo");
        setMessageCard("SUCCESS");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        var text = "";
        err.inner.forEach((error) => {
          text += error.message + "\n";
        });
        showToastWithGravity(text);
      } else {
        setMessageCard("FAILL");
        console.log(err);
        setMessage(`Operação não ${"\n"}pode ser realizada`);
      }
    }
  }
  function valid() {
    navigation.goBack();
  }
  const AlertMessage = useMemo(() => {
    if (messageCard !== "") {
      return (
        <Message
          text={message}
          type={messageCard}
          setAction={setMessageCard}
          functionCallback={valid}
        />
      );
    }
  }, [messageCard]);
  return (
    <View style={styles.container}>
      <Image source={Card} style={styles.logo} />
      <View style={styles.inputView}>
        <TextInput
          placeholder={"Nome"}
          style={styles.input}
          ref={refInputNome}
          returnKeyType="next"
          onSubmitEditing={() => {
            refInputNome.current.blur();
            refInputSobrenome.current.focus();
          }}
          value={nome}
          onChangeText={setNome}
        ></TextInput>
        <TextInput
          placeholder={"Sobrenome"}
          style={styles.input}
          ref={refInputSobrenome}
          returnKeyType="next"
          value={sobrenome}
          onChangeText={setSobrenome}
          onSubmitEditing={() => {
            refInputSobrenome.current.blur();
            refInputEmail.current.focus();
          }}
        ></TextInput>
        <TextInput
          placeholder={"Email"}
          style={styles.input}
          ref={refInputEmail}
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => {
            refInputEmail.current.blur();
            refInputPis.current.focus();
          }}
        ></TextInput>
        <TextInput
          onChangeText={(value) =>
            setPis(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ""))
          }
          placeholder={"Número do NIS (PIS)"}
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="go"
          ref={refInputPis}
          value={pis}
        ></TextInput>
        <Button onPress={save} text={"Salvar"} />
        {id ? <Button onPress={apagar} text={"Excluir"} /> : null}
      </View>
      {AlertMessage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackgroud: {
    zIndex: 0,
    flex: 1,
    width: "95%",
  },
  logo: {
    position: "absolute",
    width: "90%",
    resizeMode: "contain",
    overflow: "hidden",
    zIndex: 0,
  },
  text: {
    zIndex: 1,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    zIndex: 1,
    width: "60%",
    marginTop: 80,
  },
  input: {
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    width: "100%",
    fontSize: 14,
    borderColor: "rgba(0,0,0,0.3)",
    marginVertical: 5,
  },
});
