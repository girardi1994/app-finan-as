import Header from '../../components/Header'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Supermercado',
    value: '1100,00',
    date: '10/08/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix',
    value: '800,00',
    date: '24/08/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Restaurante',
    value: '200,00',
    date: '30/08/2022',
    type: 2
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Ricardo Girardi' />

      <Balance saldo="112.874.80" gastos="-545,00" />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,

  },
  list: {
    marginStart: 14,
    marginEnd: 14,

  }
});
