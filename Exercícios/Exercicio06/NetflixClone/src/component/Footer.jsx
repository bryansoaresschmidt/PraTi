import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  background-color: black;
  margin: 0 auto;
  @media (max-width: 950px) {
    padding: 30px 20px;
    height: 300px;
  }
  @media (min-width: 1000px) {
    padding: 30px 150px;
    height: 350px;
    }
`;

const DivParent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10vw;
  height: 90%;
`;
const DivChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const A = styled.a`
  color: #858585;
  @media (max-width: 950px) {
    font-size: 13px;
  }
  @media (min-width: 1000px) {
      font-size: 18px;
    }
`;

const Footer = () => {
  return (
    <DivContainer>
      <p style={{ color: "#858585", display: "inline" }}>
        Dúvidas? Ligue para{" "}
      </p>
      <a href="">0800 591 2876</a>
      <DivParent>
        <DivChildren>
          <A href="">Perguntas frequentes</A>
          <A href="">Relações com investidores</A>
          <A href="">Formas de assistir</A>
          <A href="">Informações cooperativas</A>
          <A href="">Só na Netflix</A>
        </DivChildren>
        <DivChildren>
          <A href="">Central de ajuda</A>
          <A href="">Carreiras</A>
          <A href="">Termos de uso</A>
          <A href="">Entre em contato</A>
        </DivChildren>
        <DivChildren>
          <A href="">Conta</A>
          <A href="">Resgatar cartão pré-pago</A>
          <A href="">Privacidade</A>
          <A href="">Teste de velocidade</A>
        </DivChildren>
        <DivChildren>
          <A href="">Media Center</A>
          <A href="">Comprar cartão pré-pago</A>
          <A href="">Preferências de cookies</A>
          <A href="">Avisos legais</A>
        </DivChildren>
      </DivParent>
      <p style={{ color: "#858585" }}>Netflix Brasil</p>
    </DivContainer>
  );
};

export default Footer;
