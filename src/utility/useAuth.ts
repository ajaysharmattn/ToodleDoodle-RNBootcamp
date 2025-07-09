import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./Store/Store";
import { Alert } from "react-native";
import { setUserData } from "./Store/UserSlice";
import { verifyValidPassword, verifyValidPhoneNumber } from "./UtilityFunctions";
import { USER } from "./Constants";
import { addNewUser, loginUser } from "./Store/AppSlice";

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
        dispatch(loginUser({ currenUserPhone: User.phone }));
      } else {
        Alert.alert('Login Failed', 'User not found.');
      }
    }

    const registerUserFunction = ({phone, password}: {phone: string; password: string}) => {
        if (users.some((user) => user.phone === phone)) {
          Alert.alert('User Already Exists', 'A user with this phone number already exists.');
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
          'User Registered',
          'You have successfully registered. Please login to continue.',
        );
      } else {
        Alert.alert(
          'Invalid Input',
          'Please enter a valid phone number and password.',
        );
      }
    }

    const logoutUserFunction = () => {
        dispatch(setUserData({
            phone: '',
            email: '',
            username: '',
        }));
        dispatch(loginUser({ currenUserPhone: '' }));
        Alert.alert('Logged out successfully');
    }


    return {
        checkIsAuthenticated,
        loginUserFunction,
        registerUserFunction,
        logoutUserFunction,
    };
}