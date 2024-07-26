import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Style } from './Style';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Style.container}>
      <Word />
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <StatusBar style="auto" />
      <ModalView modal={modalVisible} setModal={setModalVisible} />
    </View>
  );
}

const Word = () => {
  return (
    <View style={Style.container}>
      <MaterialIcons name="language" size={50} color="#090C9B" />
      <Text style={Style.wordText}>Kelime Sayacı</Text>
      <Text style={Style.count}>100</Text>
      <View style={Style.ana}>
        <TouchableOpacity>
          <AntDesign name="left" size={60} color="#3D52D5" style={{ alignItems: "flex-start", marginRight: 0 }} />
        </TouchableOpacity>
       
        <View style={Style.wordSegment}>
          <Text style={Style.en}>Arbitrary</Text>
          <Text style={Style.tr}>Rastgele</Text>
        </View>

        <TouchableOpacity>
          <AntDesign name="right" size={60} color="#3D52D5" style={{ alignItems: "flex-end", marginLeft: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ModalView = (props) => {
  const { modal, setModal } = props;
  return (
    <Modal
      transparent
      animationType='slide'
      visible={modal}
      onRequestClose={() => setModal(false)}
    >
      <View style={Style.modal}>
        <TouchableOpacity style={Style.close} onPress={() => setModal(false)}>
          <Text style={Style.x}>X</Text>
        </TouchableOpacity>
        {/* Add additional content for the modal here */}
      </View>
    </Modal>
  );
};

