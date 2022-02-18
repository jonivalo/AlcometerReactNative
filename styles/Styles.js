import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0aa8cc',
        margin: 20,
    }, header: {
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: '#0aa8cc',
        textAlign: 'center',
        fontSize: 50,
    }, field: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 20,

    }, picker:{
        marginLeft: 10,
    }, 
        buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }, label: {
        marginTop: 15,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 20,
    }, Low: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      },
      Middle: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      },High: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        textAlign:'center',
      }

});