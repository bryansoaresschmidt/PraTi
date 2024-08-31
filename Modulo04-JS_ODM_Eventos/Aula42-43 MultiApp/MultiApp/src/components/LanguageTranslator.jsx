import { useState } from "react"; // Importa o hook useState do React
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  gap: 10px;
  background-color: #c4e3fd;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Label = styled.label`
  color: #555;
  margin-right: 10px;
`;

const TranslatedText = styled.p`
  color: #333;
  text-align: center;
  border-radius: 5px;
  background-color: #d8ffdd;
  width: 100%;
  padding: 10px;
`;

const Select = styled.select`
  width: 120px;
  height: 30px;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

const Input = styled.input`
  width: 240px;
  height: 30px;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #666;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Divi = styled.div`
  display: flex;
  flex-direction: row;
`;

const LanguageTranslator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("pt");

  const translateText = async () => {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text,
            langpair: `${sourceLanguage}|${targetLanguage}`,
          },
        }
      );

      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Erro ao traduzir o texto", error);
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>

        <Divi>
      <Div>
          <Label>Source Language</Label>
          <Select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </Select>
        </Div>

        <Div>
          <Label>Target Language</Label>
          <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </Select>
      </Div>
        </Divi>

      <Div>
        <Input type="text" placeholder="Digite aqui para traduzir..." value={text} onChange={(e) => setText(e.target.value)} />

        <Button onClick={translateText}>Translate</Button>

        {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
      </Div>
    </Container>
  );
};

export default LanguageTranslator;
