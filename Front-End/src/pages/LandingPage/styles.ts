import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9C4C25',
    },

    title: {
        marginTop: 30,    
        alignSelf:'center',
    },

    //BOTÕES

    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor:'#FFF398',
        width: '100%',
        alignItems: 'center', //centraliza e coloca lá para direita o que estava escrito no header
    },

    button: {
        alignItems: 'center', //centraliza e coloca lá para direita o que estava escrito no header
    },

    buttonPrimary:{
        marginTop: 3, //3
        //paddingHorizontal: 30, //30
        width: '33%'
    },
    
    buttonSecondary:{
        marginTop: 3,
        width: '33%'
    },

    buttonTertiary:{
        marginTop: 3, //3
        width: '33%'
        //paddingHorizontal: 30, //30
    },
    
    buttontext1:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 6,
    },

    buttontext2:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 8,
    },

    buttontext3:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 2, 
    },

    // A PARTIR DAQUI SÃO OS POST-ITS QUE IRÃO APARECER NA LANDINGPAGE

    PostView:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#9C4C25',
         //esse style todo foi feito pra ser o local onde vai entrar os post-it
    },

    PostButtonContainer:{
        backgroundColor: '#9C4C25',
        width: '80%',
        marginTop: 10,
        marginRight:4,
        alignSelf:'center',
    },

    CheckButtonContainer:{
        backgroundColor: '#9C4C25',
        width: '80%',
        marginTop: 10,
        alignSelf:'center',
    },

    checksHead: {
        padding: 5,
        backgroundColor: "#C1D66D",
    },

    checksText: {
        backgroundColor: "#CEF274",
    },

    postsHead: {
        padding: 5,
        backgroundColor: "#FFF07F",
    },

    postsText: {
        backgroundColor: "#FFF8AA",
    },

    textPost: {
        color: "black",
        fontFamily: 'Poppins_400Regular'
    },

    titlePost: {
        color: "black",
        fontFamily: 'Kalam_700Bold',
        fontSize: 19,
    },


});

export default styles;