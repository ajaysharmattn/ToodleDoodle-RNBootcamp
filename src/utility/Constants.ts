export enum NavigatorScreenNames {
    HOME = 'Home',
    ADD_TODO = 'AddTodo',
    TODOS = 'Todos',
    PROFILE = 'Profile',
    LOGIN = 'Login',
    SIGNUP = 'Signup',
}

export enum AppStrings {
    HOME_SCREEN_TITLE = 'Welcome to ToodleDoodle 😊',
    ADD_TODO_SCREEN_TITLE = 'Add a new Todo 😉',
    ADD_TODO_ALERT_SUCCESS_TITLE = 'Todo Added',
    ADD_TODO_ALERT_SUCCESS_MESSAGE = 'Your todo has been added successfully!',
    ADD_TODO_ALERT_OK_TEXT = 'OK',
    ADD_TODO_BUTTON_TEXT = 'Add Todo',
    ADD_TODO_INPUT_PLACEHOLDER = 'Enter your todo here',
    EMPTY_LIST_MESSAGE = 'No todos available. Please add a todo.',
    // New strings for scalability
    REGISTER_SCREEN_TITLE = 'Register',
    REGISTER_BUTTON_TEXT = 'Register',
    REGISTER_LOGIN_SWITCH_TEXT = 'Already have an account? Login',
    LOGIN_SCREEN_TITLE = 'Login',
    LOGIN_BUTTON_TEXT = 'Login',
    LOGIN_REGISTER_SWITCH_TEXT = "Don't have an account? Register",
    LOGIN_ERROR_TITLE = 'Error',
    LOGIN_ERROR_MESSAGE = 'Please enter both phone and password.',
    LOGIN_FAILED_TITLE = 'Login Failed',
    LOGIN_FAILED_MESSAGE = 'User not found.',
    USER_ALREADY_EXISTS_TITLE = 'User Already Exists',
    USER_ALREADY_EXISTS_MESSAGE = 'A user with this phone number already exists.',
    USER_REGISTERED_TITLE = 'User Registered',
    USER_REGISTERED_MESSAGE = 'You have successfully registered. Please login to continue.',
    INVALID_INPUT_TITLE = 'Invalid Input',
    INVALID_INPUT_MESSAGE = 'Please enter a valid phone number and password.',
    LOGOUT_SUCCESS = 'Logged out successfully',
    PROFILE_SCREEN_TITLE = 'Profile',
    PROFILE_USERNAME_LABEL = 'Username:',
    PROFILE_PHONE_LABEL = 'Phone:',
    PROFILE_EMAIL_LABEL = 'Email:',
    PROFILE_UPDATED = 'Profile updated',
}

export enum Colors {
    PRIMARY = '#e6dcdc',
    TEXT_PRIMARY = '#1b1616',
    BORDER = '#ccc',
    BACKGROUND = '#f9f9f9',
    PROFILE_TITLE = '#333',
    LABEL = '#666',
    VALUE = '#222',
    INPUT_BG = '#fff',
}

export interface USER {
  username: string;
  phone: string;
  email: string;
  password: string;
}

export interface TODO {
    [userPhone: string]: string[] 
}