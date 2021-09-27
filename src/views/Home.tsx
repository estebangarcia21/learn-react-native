import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { HorizontalDivider } from '../components/HorizontalDivider';
import { ScreenProps } from '../utils/componentProps';
import theme from '../utils/theme';

export type HomeProps = undefined;

export default function Home({ navigation }: ScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={styles.overview}>
        <Text style={styles.addonText}>@Stevemmmmm</Text>
        <Text style={[styles.title, { marginVertical: 4 }]}>
          500 Social Credit
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentCard}>
          <View>
            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 24 }}>
              Earn Social Credit
            </Text>

            <HorizontalDivider />

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>

          <View>
            <RoundedButton
              title="Start Earning Credit Today"
              borderRadius={999}
              navigation={navigation}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  overview: {
    flex: 2,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    color: 'white',
    fontSize: 34
  },
  contentContainer: {
    flex: 4,
    position: 'relative'
  },
  contentCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderRadius: 20,
    elevation: 5,
    height: Dimensions.get('window').height,
    transform: [{ translateY: -50 }],
    padding: 20
  },
  addonText: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: theme.fonts.primary.normal
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.primary.normal
  }
});
