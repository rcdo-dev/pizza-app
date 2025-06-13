import { StyleSheet } from 'react-native';

import AppColors from './appColors';

export default StyleSheet.create({
  containerDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    width: 215,
    height: 60,
    backgroundColor: AppColors.logoBackgroundColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  contentContainerColumn: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  contentContainerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: AppColors.primaryColor,
  },
  pizzaCut: {
    width: 412,
    height: 310,
    justifyContent: 'flex-start',
  },
  pizzaItemMenu: {
    width: 120,
    height: 120,
    marginTop: 15,
  },
  pizzaItemDetails: {
    width: 325,
    height: 325,
    marginTop: 15,
  },
  happyFace: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  appButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 52,
    borderRadius: 30,
    flexDirection: 'row',
    gap: 10,
  },
  appTextInputContainer: {
    alignItems: 'start',
    flexDirection: 'column',
    gap: 12,
  },
  appTextInput: {
    color: AppColors.black,
    width: 380,
    height: 50,
    fontSize: 18,
    borderRadius: 20,
    paddingHorizontal: 21,
    paddingVertical: 12,
  },
  appMenuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    borderRadius: 30,
    flexDirection: 'row',
  },
  appItemContainerContent: {
    width: 180,
    height: 255,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 18,
    backgroundColor: AppColors.grayBackgroundColorTextInput,
  },
  appItemDetailsContainerContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 50,
    backgroundColor: AppColors.grayBackgroundColorTextInput,
  },
  appCalculationButton: {
    backgroundColor: AppColors.primaryColor,
    alignItems: 'center',
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  appBottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  appBottomBarIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
