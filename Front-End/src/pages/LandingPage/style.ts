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
        marginTop: 20,    
        alignSelf:'center',
        fontWeight: 'bold',

    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:599,
        //padding:+300, 
        backgroundColor:'#FFF398',
        width: '100%',
        resizeMode: 'contain'
    },
    
    

    buttonSecondary:{
        marginTop: 5,
        paddingHorizontal: 40,

    


    },

    buttonTerciary:{
        marginTop: 5,
        paddingHorizontal: 40,
        marginBottom: 16,
        

    },


    
});

export default styles;