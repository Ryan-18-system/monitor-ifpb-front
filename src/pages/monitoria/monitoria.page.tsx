import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './monitoria.style';
import { useRoute } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

export interface Monitoria {
  nome: string;
  disciplina: string;
  horario: string;
  sala: string;
  diasDaSemana: string;
  matricula: string;
}

export const MonitoriaPage = () => {
    const route = useRoute();
    const [monitoria, setMonitoria] = useState<Monitoria[]>();

    useEffect(() => {
      fetch('https://backend-monitor-production.up.railway.app/alunos')
      .then(response => response.json())
      .then((data) => {
        setMonitoria(data)
      })
    }, []);

    const renderItem = ({ dia }: any) => (
        <TouchableOpacity style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.text}>teste</Text>
            <Text style={styles.text}>{dia}</Text>
            {/* <Text style={styles.text}>{item.abrevCurso}</Text> */}

          </View>
          <Divider />
        </TouchableOpacity>
      );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        
        {monitoria?.map(monitor => (
          monitor.nome === route.params?.nome ? (
            // <FlatList 
            //         data={[JSON.stringify(monitor.diasDaSemana.split(','))]}
            //         renderItem={renderItem}
            //         keyExtractor={(item) => monitor.nome}
            //         ItemSeparatorComponent={() => <Divider />}
            //     />
          <React.Fragment key={monitor.matricula}>
            <Text style={styles.text}>{monitor?.nome}</Text>
            <Text style={styles.text}>Disciplina: {monitor?.disciplina}</Text>
            <Text style={styles.text}>Sala: {monitor?.sala}</Text>
            <Text style={styles.text}>{monitor?.diasDaSemana[0]}</Text>
            <Text style={styles.text}>{monitor?.horario[0]}</Text>

            <Text style={styles.text}>{monitor?.diasDaSemana[1]}</Text>
            <Text style={styles.text}>{monitor?.horario[1]}</Text>
            
            <Text style={styles.text}>{monitor?.diasDaSemana[2]}</Text>
            <Text style={styles.text}>{monitor?.horario[2]}</Text>

          </React.Fragment>
          ) : <></>
        ))}
        </View>

      </SafeAreaView>

    )
}