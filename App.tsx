import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

function App(): React.JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const emojis = ['😊', '😂', '😍', '😎', '🥳'];

  const handleTabPress = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emojiText}>Emoji Lover</Text>
      <View style={styles.displayArea}>
        <Text style={styles.selectedEmoji}>{emojis[selectedIndex]}</Text>
      </View>
      <SegmentedControlTab
        values={emojis}
        selectedIndex={selectedIndex}
        onTabPress={handleTabPress}
        activeTabStyle={{ backgroundColor: '#dadada' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  displayArea: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 300,
    height: 200,
    justifyContent: 'center',
  },
  selectedEmoji: {
    fontSize: 100,
    textAlign: 'center',
  },
  emojiText: {
    marginVertical: 20,
    fontSize: 18,
  },
});

export default App;
