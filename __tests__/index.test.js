import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import VerticalGrid from '../components/VerticalGrid';
import renderer from 'react-test-renderer';
import Index from '../app/( tabs )/index';
import { classMemories, contentData, data, exploreData } from '../data/StaticData';
import { TEST_IDS } from '../utilities/utility'
import { Alert } from 'react-native';

// MOC Data
const MOC_MAIN_CAROUSEL_DATA = data;
const MOC_CLASS_MEMORIES_DATA = classMemories;
const MOC_EXPLORE_DATA = exploreData;
const MOC_CONTENT_DATA = contentData


test('renders the first carousel correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Index />);

    // Check if FlatList is rendered
    expect(getByTestId(`flatlist-${TEST_IDS.MAIN_CAROUSEL}`)).toBeTruthy();

    // Check if all items are rendered
    const items = getAllByTestId(`list-item-${TEST_IDS.MAIN_CAROUSEL}`);
    expect(items.length).toBe(MOC_MAIN_CAROUSEL_DATA.length);

    // Check all flastlist buttons working or not
    const allFlatListButtons = getAllByTestId(`button-${TEST_IDS.MAIN_CAROUSEL}`);
    allFlatListButtons.forEach((button) => {
        fireEvent.press(button);
    })

    //expect(Alert.alert).toHaveBeenCalledTimes(1);

});

test('renders the class memories carousel correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Index />);

    // Check if FlatList is rendered
    expect(getByTestId(`flatlist-${TEST_IDS.CLASS_MEMORIES_CAROUSEL}`)).toBeTruthy();

    // Check if all items are rendered
    const items = getAllByTestId(`list-item-${TEST_IDS.CLASS_MEMORIES_CAROUSEL}`);
    expect(items.length).toBe(MOC_CLASS_MEMORIES_DATA.length);

     // Check all flastlist buttons working or not
     const allFlatListButtons = getAllByTestId(`button-${TEST_IDS.CLASS_MEMORIES_CAROUSEL}`);
     allFlatListButtons.forEach((button) => {
         fireEvent.press(button);
     })
});

test('renders the explore carousel correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Index />);

    // Check if FlatList is rendered
    expect(getByTestId(`flatlist-${TEST_IDS.EXPLORE_CAROUSEL}`)).toBeTruthy();

    // Check if all items are rendered
    const items = getAllByTestId(`list-item-${TEST_IDS.EXPLORE_CAROUSEL}`);
    expect(items.length).toBe(MOC_EXPLORE_DATA.length);
});

test('renders the content carousel correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Index />);

    // Check if FlatList is rendered
    expect(getByTestId(`flatlist-${TEST_IDS.CONTENT_CAROUSEL}`)).toBeTruthy();

    // Check if all items are rendered
    const items = getAllByTestId(`list-item-${TEST_IDS.CONTENT_CAROUSEL}`);
    expect(items.length).toBe(MOC_CONTENT_DATA.length);

    // Check all flastlist buttons working or not
    const allFlatListButtons = getAllByTestId(`button-${TEST_IDS.CONTENT_CAROUSEL}`);
    allFlatListButtons.forEach((button) => {
        fireEvent.press(button);
    })
});
