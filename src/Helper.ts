import { Linking } from "react-native";

export function openUrl(url : string) {
    return (
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          })
    );
}
