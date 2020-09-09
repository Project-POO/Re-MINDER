import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { //Tela de Fundo
      flex: 1,
      backgroundColor: '#9C4C25',
    },

    headpostShadow: { // Sombra do Post-it
      backgroundColor: '#F1E374',
     //backgroundColor: '#FEE000',
      marginTop: 40,
      alignSelf: 'center',
      width: '85%',
      maxHeight: 100,
    },

    headpostContainer: { // Cabeçalho do Post-it
      backgroundColor: '#FFF07F',
      alignSelf: 'flex-end',
      width: '94%',
      maxHeight: 100,
      padding: 15,
    },

    headpostTitle: { //Fonte Para o Título
      height: 40,
      fontSize: 22,
      fontFamily: 'Kalam_400Regular',
    },

    headpostDate: { //Fonte para Data
      height: 40,
      fontFamily: 'Poppins_400Regular',
    },

    postContainerShadow: { //Container Sombra do Post-it
      width:'85%',
      backgroundColor: '#ECE6A8',
      alignSelf:'center',
      maxHeight: 400,//AJUSTAR
    },

    postContainer: { //Container para escrever o Post-it
      width:'94%',
      backgroundColor: '#FFF8AA',
      alignSelf:'flex-end',
      padding: 10,
      maxHeight: 400, //AJUSTAR
    },

    postText: { //Fonte do Post-it
      fontFamily: 'Poppins_400Regular',
      height: 320,//AJUSTAR
    },

    buttonContainer:{ //Container do Botão
      height:30,
      backgroundColor: '#FFF8AA',
      marginTop: 4,
      width: '100%',
      justifyContent: 'space-between',
      flexDirection:'row',
    },

    buttonVec:{ //Botão de Voltar
      height: 30, 
      borderRadius: 0, 
      width:'14%',
      padding:1
    },

    buttonSave:{ //Botão de Salvar
      height: 35, 
      borderRadius: 0, 
      width:'13%',
      padding:1
    },

  });
  export default styles;