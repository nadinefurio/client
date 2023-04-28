import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import * as SQLITE from "expo-sqlite"
import Accueil from './composant/Accueil';
import Login from './composant/Login';
import { ArtContexteProvider } from "./contexte/contexte";
import { useEffect} from 'react';


//import { store } from './redux/store';

function openDB(){
  if(Platform.OS === "web"){
    return {
      transaction : () => {
        return {
          executeSql : () => {} 
        }
      }
    }
  }
  return SQLITE.openDatabase("demo.sqlite");
}

const db = openDB() ; 

const useForceUpdate = () => {
  const [state, setState] = useState(0)
  return [state , () => { setState(prevState => prevState + 1) }]
}

export default function App() {
  useEffect( function(){
    db.transaction(function(tx){
      tx.executeSql(`CREATE TABLE IF NOT EXISTS art (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    titre VARCHAR(200),
                    contenu TEXT ,
                    dt_creation DATETIME DEFAULT CURRENT_TIMESTAMP
                  )`,
                    [],
                    function(transact, resultat){ console.log("table article créé") },
                    function(transact , err){ console.log("erreur lors de la création") })
    })
  } , [])

  return (
    //<Provider store={store}>
    <ArtContexteProvider>
    <View style={styles.container}>
      <ScrollView>
      <Accueil />
      <Login />
      
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    </ArtContexteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  
  },
});
