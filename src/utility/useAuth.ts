import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./Store/Store";
import { Alert } from "react-native";
import { setUserData } from "./Store/UserSlice";
import { verifyValidPassword, verifyValidPhoneNumber } from "./UtilityFunctions";
import { USER } from "./Constants";
import { addNewUser, removeAuthState, setAuthState } from "./Store/AppSlice";
import { AppStrings } from './Constants';

export default function useAuth() {
    const isLoggedIn = useSelector((state: RootState) => state.appReducer.isLoggedIn);
    const currentUserPhone = useSelector((state: RootState) => state.appReducer.currentUserPhone);
    const users = useSelector((state: RootState) => state.appReducer.users);
    const dispatch = useAppDispatch();

    const checkIsAuthenticated = () => {
        return isLoggedIn && currentUserPhone !== '';
    }

    const loginUserFunction = ({phone, password}: {phone: string; password: string}) => {
        const User = users.find(
        user =>
          user.phone === phone &&
          user.password === password,
      );
      if (User) {
        dispatch(setUserData({
          phone: User.phone,
          email: User.email,
          username: User.username,
        }));
        dispatch(setAuthState({ currenUserPhone: User.phone }));
      } else {
        Alert.alert(AppStrings.LOGIN_FAILED_TITLE, AppStrings.LOGIN_FAILED_MESSAGE);
      }
    }

    const registerUserFunction = ({phone, password}: {phone: string; password: string}) => {
        if (users.some((user) => user.phone === phone)) {
          Alert.alert(AppStrings.USER_ALREADY_EXISTS_TITLE, AppStrings.USER_ALREADY_EXISTS_MESSAGE);
          return;
        }
      if (verifyValidPhoneNumber(phone) && verifyValidPassword(password)) {
        const newUser: USER = {
          username: '',
          phone: phone,
          email: '',
          password: password,
        };
        dispatch(addNewUser(newUser));
        Alert.alert(
          AppStrings.USER_REGISTERED_TITLE,
          AppStrings.USER_REGISTERED_MESSAGE,
        );
      } else {
        Alert.alert(
          AppStrings.INVALID_INPUT_TITLE,
          AppStrings.INVALID_INPUT_MESSAGE,
        );
      }
    }

    const logoutUserFunction = () => {
        dispatch(setUserData({
            phone: '',
            email: '',
            username: '',
        }));
        dispatch(removeAuthState());
        Alert.alert(AppStrings.LOGOUT_SUCCESS);
    }


    return {
        checkIsAuthenticated,
        loginUserFunction,
        registerUserFunction,
        logoutUserFunction,
    };
}