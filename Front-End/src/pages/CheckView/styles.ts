import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { //Tela de Fundo
      flex: 1,
      backgroundColor: '#9C4C25',
    },

    item: {
      borderWidth: 1,
      borderColor: '#8db529',
      padding: 10,
      marginTop: 15,
      borderRadius: 3,
      fontFamily: 'Poppins_400Regular',
      width: '90%',
    },

    form: {
      flexDirection: 'row',
    },

    checkText: {
      borderWidth: 1,
      borderColor: '#8db529',
      fontFamily: 'Poppins_400Regular',
      padding: 10,
      fontSize: 15,
      borderRadius: 5,
      flex: 1,
      marginRight: 10,
    },

    headpostShadow: { // Sombra do Post-it
      backgroundColor: '#B0C265',
      marginTop: 40,
      alignSelf: 'center',
      width: '85%',
      maxHeight: 100,
    },

    headpostContainer: { // Cabeçalho do Post-it
      backgroundColor: '#C1D66D',
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
      backgroundColor: '#A2BD5E',
      alignSelf:'center',
      maxHeight: 400,//AJUSTAR
    },

    postContainer: { //Container para escrever o Post-it
      width:'94%',
      backgroundColor: '#BEDE6C',
      alignSelf:'flex-end',
      padding: 10,
      maxHeight: 400, //AJUSTAR
    },

    buttonContainer:{ //Container do Botão
      height: 30,
      backgroundColor: '#BEDE6C',
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

    buttonAdd:{ //Botão de Adicionar
      height: 35, 
      borderRadius: 0, 
      width:35,
      padding:1,
      alignSelf: 'center',
    },

    buttonBar:{ //Botão de Adicionar
      height: 30, 
      borderRadius: 0, 
      width:25,
      padding:1,
      alignSelf: 'flex-end',
    },

  });
  export default styles;