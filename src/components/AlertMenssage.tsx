import ToastAndroid from "react-native-tiny-toast";

export const showToastWithGravity = (message: String) => {
  ToastAndroid.show(`${message}`, {
    position: ToastAndroid.position.CENTER,
    duration: ToastAndroid.duration.SHORT,
  });
};
