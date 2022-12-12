import { Text, View, SafeAreaView, Image } from 'react-native';
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
              <View style={styles.bgHeader}>

                <View style={styles.foto}>
                  <Image style={styles.foto} source={{ uri: route.params?.img }} />
                </View>
                <View>
                  <Text style={styles.moniNome}>{monitor?.nome}</Text>
                  <View style={styles.descBottom}>
                    <Text style={styles.textDisci}>Disc: {monitor?.disciplina}</Text>
                    <Text style={styles.textMoni}>Sala: {monitor?.sala}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.week}>

                <View style={styles.day}>
                  <Text style={styles.text}>{monitor?.diasDaSemana[0]}</Text>
                  <Text style={styles.text}>{monitor?.horario[0]}</Text>
                </View>
                <Divider />
                <View style={styles.day}>
                  <Text style={styles.text}>{monitor?.diasDaSemana[1]}</Text>
                  <Text style={styles.text}>{monitor?.horario[1]}</Text>
                </View>
                <Divider />
                <View style={styles.day}>
                  <Text style={styles.text}>{monitor?.diasDaSemana[2]}</Text>
                  <Text style={styles.text}>{monitor?.horario[2]}</Text>
                </View>
                <Divider />
                <View style={styles.day}>
                  <Text style={styles.text}>{monitor?.diasDaSemana[2]}</Text>
                  <Text style={styles.text}>{monitor?.horario[2]}</Text>
                </View>
                <Divider />
                <View style={styles.day}>
                  <Text style={styles.text}>{monitor?.diasDaSemana[2]}</Text>
                  <Text style={styles.text}>{monitor?.horario[2]}</Text>
                </View>
              </View>

            </React.Fragment>
          ) : <></>
        ))}
      </View>

    </SafeAreaView>

  )
}