import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin:-20
    },

    foto:{
        width: 100,
        height:100,
        borderRadius:50,
        borderColor: '#FFFFFF',
        marginRight:10
    },
    moniNome:{
        fontSize:30,
        fontWeight: 'bold',
        marginBottom:10
    },
    textDisci:{
        backgroundColor:'#FFCE84',
        borderRadius:10,
        width:120,
        paddingHorizontal:10,
        marginRight:5
        
    },
    textMoni:{
        backgroundColor:'#FFCE84',
        borderRadius:10,
        width:135,
        paddingHorizontal:10
    },
    descBottom:{
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    bgHeader:{
        backgroundColor: '#FAB246',
        // justifyContent: 'center',
        padding: 20,
        borderRadius:30,
        flexDirection:'row',
        paddingTop:30,
        paddingBottom:70
    },
    list: {
        paddingVertical: 24,
        paddingHorizontal: 20
    },
    text: {
        padding: 7,
        fontSize: 20,
    },

    week:{
        backgroundColor:'#DBE8D6',
        borderRadius:10,
        margin:20,
        marginTop:-50
    },

    day:{
        padding:10,
        marginBottom:7,
    },
    dayGrey:{
        padding:10,
        backgroundColor:'#dedede'
    },

    image: {
        alignSelf: 'center',
        width: 100,
        borderRadius: 50,
        height: 100,
        backgroundColor: '#E4E4E4'
    }
});

