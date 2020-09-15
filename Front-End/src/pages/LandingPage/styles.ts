import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9C4C25',
    },

    title: {
        fontSize: 40,
        fontFamily: 'Poppins_400Regular',
        color: '#FFF07F',
        marginTop: 30,    
        alignSelf:'center',
        fontWeight: 'bold',
    },

    PostView:{
        flex:1,
        backgroundColor: '#9C4C25', //esse style todo foi feito pra ser o local onde vai entrar os post-it
    },

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

});

export default styles;