import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';
import { setItem } from 'react-native/Libraries/Storage/AsyncStorage';
import { userAgent } from '../../../constants/constants';

export const SocialWebview = (props) => {
  const INJECTED_JAVASCRIPT =
    '(function() {if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

  const _handleMessage = async (event) => {
    const result = JSON.parse(event.nativeEvent.data);
    const token = result.accessToken;
    if (token) {
      try {
        await setItem('accessToken', token);
      } catch (e) {
        console.log(e);
      }
    }
    props.closeSocialModal();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={props.source}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        userAgent={userAgent}
        useWebKit={true}
        startInLoadingState={true}
        javaScriptEnabled={true}
        onMessage={_handleMessage}
      />
    </SafeAreaView>
  );
};
