import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
   TouchableNativeFeedback,
    //TouchableWithoutFeedback, 
} from 'react-native'
import React, { useState,  useEffect , useContext } from 'react'
import { ArtContexte } from '../contexte/contexte'


const Accueil = ({db}) => {
    const [art , setArts] = useState([])
    const { modifier } = useContext(ArtContexte) ;   

   /* useEffect( function(){
        db.transaction(function(tx){
               tx.executeSql(`SELECT id , titre , contenu , strftime('%d/%m/%Y' , dt_creation ) AS date FROM articles ;` ,
                    [] ,
                function( transact , resultat){ 
                    setArts(resultat.rows._array)
                },
                function( transact , err){ 
                    console.log("ERREUR lors du SELECT" , err)
                }
            )
        })
    } , [art]); */

    function supprimer(id){
        db.transaction(function(tx){
            tx.executeSql(`DELETE FROM arts WHERE id = ? `, 
                    [id] , 
                    function(transact , resultat){
                        console.log("DELETE success"); 
                    },
                    function(transact , err){
                        console.log("DELETE échec", err)
                    })
        })
    }

  return (
    <View style={styles.box}>
      <Text>Oeuvre</Text>
      <Button title="Oeuvre" onPress={() => {}} />
    <TouchableNativeFeedback style={{padding : 20 }} background={TouchableNativeFeedback.Ripple(
            "#000" ,
            "#fff",
         )} onPress={() => {}}>
      <Image source={require("../assets/api.png")} />
    </TouchableNativeFeedback>

    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({})